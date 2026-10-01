/** Reactive `prefers-reduced-motion: reduce` flag (false during SSR). */
export function usePrefersReducedMotion() {
  const reduced = ref(false)

  onMounted(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.value = query.matches
    const onChange = (e: MediaQueryListEvent) => (reduced.value = e.matches)
    query.addEventListener('change', onChange)
    onBeforeUnmount(() => query.removeEventListener('change', onChange))
  })

  return reduced
}
