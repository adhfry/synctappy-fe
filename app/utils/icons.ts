import {
  ArrowRight, BadgePercent, Briefcase, Building2, CalendarCheck, CalendarDays, ChartColumn, ChartLine,
  CircleCheck, CircleX, Clock, Contact, Gift, Globe, Hand, Hotel, Info, Layers, Link2, MapPin,
  Megaphone, MessageCircle, MousePointerClick, Music, Nfc, Phone, QrCode, RefreshCw, Route, Scissors,
  ShieldCheck, ShoppingBag, Smartphone, Sparkles, Star, Stethoscope, Store, Ticket, TrendingUp,
  Utensils, Zap,
} from 'lucide-vue-next'
import type { Component } from 'vue'

/**
 * String → icon registry. Data files (and later the Laravel API) reference
 * icons by key so payloads stay serializable.
 */
export const icons = {
  'arrow-right': ArrowRight,
  'badge-percent': BadgePercent,
  'briefcase': Briefcase,
  'building': Building2,
  'calendar-check': CalendarCheck,
  'calendar': CalendarDays,
  'chart': ChartColumn,
  'chart-line': ChartLine,
  'check': CircleCheck,
  'x': CircleX,
  'clock': Clock,
  'contact': Contact,
  'gift': Gift,
  'globe': Globe,
  'hand': Hand,
  'hotel': Hotel,
  'info': Info,
  'layers': Layers,
  'link': Link2,
  'map-pin': MapPin,
  'megaphone': Megaphone,
  'message': MessageCircle,
  'click': MousePointerClick,
  'music': Music,
  'nfc': Nfc,
  'phone': Phone,
  'qr': QrCode,
  'refresh': RefreshCw,
  'route': Route,
  'scissors': Scissors,
  'shield': ShieldCheck,
  'shopping-bag': ShoppingBag,
  'smartphone': Smartphone,
  'sparkles': Sparkles,
  'star': Star,
  'stethoscope': Stethoscope,
  'store': Store,
  'ticket': Ticket,
  'trending-up': TrendingUp,
  'utensils': Utensils,
  'zap': Zap,
} satisfies Record<string, Component>

export type IconKey = keyof typeof icons
