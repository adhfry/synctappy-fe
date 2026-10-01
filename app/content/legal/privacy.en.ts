import type { LegalDocument } from '~/types/legal'

/**
 * Privacy Policy — English version, translated from the Indonesian draft
 * (privacy.id.ts is the source). STATUS: DRAFT pending legal review.
 * Section ids MUST match privacy.id.ts so anchors work in both languages.
 */
export const privacyEn: LegalDocument = {
  title: 'Privacy Policy',
  subtitle: 'Synctappy by Synvora Teknologi Indonesia',
  effectiveLabel: 'Effective Date',
  effective: 'To be announced at launch',
  updatedLabel: 'Last Updated',
  updated: 'October 1, 2026',
  draftNotice: 'This document is a draft pending legal review. Contact details, address, third parties and retention periods will be finalized before launch. In case of any difference, the Indonesian version prevails.',
  intro: [
    { type: 'p', text: 'Welcome to Synctappy, a physical-to-digital engagement platform developed and operated by Synvora Teknologi Indonesia.' },
    { type: 'p', text: 'This Privacy Policy explains how we collect, use, store, protect, disclose and manage Personal Data when you use the Synctappy website, applications, dashboard, NFC/QR devices, services and features.' },
    { type: 'p', text: 'We are committed to keeping Personal Data secure and confidential and to processing it responsibly, transparently and in accordance with applicable law, including Law of the Republic of Indonesia No. 27 of 2022 on Personal Data Protection (the “PDP Law”).' },
    { type: 'p', text: 'By using Synctappy, you confirm that you have read and understood this Privacy Policy.' },
  ],
  sections: [
    {
      id: 'tentang',
      title: '1. About Synctappy',
      blocks: [
        { type: 'p', text: 'Synctappy is a platform that lets businesses and organizations create and manage physical-to-digital touchpoints using QR codes and NFC technology. Synctappy services may include:' },
        { type: 'ul', items: ['QR codes and NFC;', 'Google Review destinations;', 'multi-link profiles;', 'website and social media links;', 'digital menus, WhatsApp and booking;', 'campaigns and promotions;', 'analytics and a business dashboard;', 'device management and design templates;', 'subscriptions, billing, proposals and quotations;', 'and other services made available from time to time.'] },
        { type: 'p', text: 'Synctappy may connect users to third-party services. Activity that happens after a user leaves Synctappy may be subject to those third parties’ privacy policies.' },
      ],
    },
    {
      id: 'pihak-bertanggung-jawab',
      title: '2. Responsible Party',
      blocks: [
        { type: 'p', text: 'For Personal Data processed by Synctappy to provide and operate the platform, Synvora Teknologi Indonesia acts as the party that determines the purposes and means of processing, in the role applicable under the law.' },
        { type: 'contact', rows: [
          { label: 'Name', value: 'Synvora Teknologi Indonesia' },
          { label: 'Product', value: 'Synctappy' },
          { label: 'Privacy email', value: 'privacy@synctappy.id' },
          { label: 'Support email', value: 'support@synctappy.id' },
          { label: 'Address', value: 'To be published before launch' },
        ] },
        { type: 'p', text: 'Where Synctappy processes Personal Data on behalf of a business customer and on its instructions, the parties’ relationship and responsibilities may be set out further in an agreement or the applicable terms of service. The PDP Law distinguishes between a Personal Data Controller and a Personal Data Processor based on who determines the purposes and control of processing.' },
      ],
    },
    {
      id: 'data-dikumpulkan',
      title: '3. Data We Collect',
      blocks: [
        { type: 'p', text: 'We collect Personal Data in a limited, specific, lawful and transparent way that fits the purpose of processing, in line with the PDP Law.' },
        { type: 'h3', text: '3.1 Account Data' },
        { type: 'p', text: 'When you create a Synctappy account, we may collect:' },
        { type: 'ul', items: ['name;', 'email address;', 'phone number;', 'password, stored securely (hashed);', 'company or organization name;', 'job title or role;', 'other account information you provide.'] },
      ],
    },
    {
      id: 'profil-bisnis',
      title: '4. Business Profile Data',
      blocks: [
        { type: 'p', text: 'If you use Synctappy as a business user, you may provide:' },
        { type: 'ul', items: ['business name, address, phone number and email;', 'website, logo, photos and business description;', 'opening hours;', 'social media, Google Maps, WhatsApp, booking and marketplace links;', 'a digital menu and information about products or services;', 'location or branch information;', 'campaign content;', 'and other information you choose to display through your Synctappy profile.'] },
        { type: 'p', text: 'This data may be public if you choose to publish it through a Synctappy page.' },
      ],
    },
    {
      id: 'perangkat',
      title: '5. NFC and QR Device Data',
      blocks: [
        { type: 'p', text: 'Each Synctappy device may have unique identifiers such as a Device ID, QR Code ID, NFC Tag ID, workspace ID, device location, destination URL, linked campaign, device status, activation date and configuration change dates.' },
        { type: 'p', text: 'We use this data to:' },
        { type: 'ul', items: ['activate devices and link them to an account;', 'manage destinations;', 'provide analytics;', 'detect misuse;', 'provide technical support;', 'and keep the platform secure.'] },
      ],
    },
    {
      id: 'interaksi',
      title: '6. User Interaction Data',
      blocks: [
        { type: 'p', text: 'When someone scans a QR code or taps an NFC tag that leads to Synctappy, the system may record certain technical and interaction information, for example:' },
        { type: 'ul', items: ['access time and date;', 'the device/touchpoint used;', 'interaction type (QR or NFC);', 'the page or destination opened;', 'the related campaign;', 'browser, operating system and device type;', 'network information needed for security;', 'approximate location, where that feature is used and permitted;', 'and other technical data needed to provide and secure the service.'] },
        { type: 'p', text: 'We aim not to collect Personal Data that is not needed for the service.' },
      ],
    },
    {
      id: 'analytics',
      title: '7. Analytics',
      blocks: [
        { type: 'p', text: 'Synctappy provides analytics to business customers, which may show the number of taps, scans, visits and clicks; the most visited destinations; the devices with the most interactions; interaction times; campaign and location performance; and other usage statistics. Analytics help customers understand how their physical-to-digital touchpoints perform.' },
        { type: 'note', title: 'Important', text: 'Synctappy does not claim to know or guarantee that a person completed an activity on a third-party platform such as Google. For example, a “Google destination click” does not necessarily mean a “Google review was successfully posted”. Activity after a user is redirected to Google or another third party is subject to that third party’s systems and policies.' },
      ],
    },
    {
      id: 'transaksi',
      title: '8. Transaction and Payment Data',
      blocks: [
        { type: 'p', text: 'When you purchase a subscription, hardware, add-ons or other Synctappy services, we may process the customer name, company name, billing address, email, phone number, selected plan, subscription period, invoices, transaction ID, payment status and, where required, tax information.' },
        { type: 'p', text: 'For payment card details or other sensitive payment data, Synctappy may use a third-party payment gateway. We do not intend to store full payment card details where they can be processed directly by the payment gateway.' },
      ],
    },
    {
      id: 'komunikasi',
      title: '9. Communication Data',
      blocks: [
        { type: 'p', text: 'If you contact us by email, support ticket, live chat, WhatsApp, contact form or another channel, we may keep that communication to provide support, resolve issues, process requests, improve the service, maintain security and keep a service history.' },
      ],
    },
    {
      id: 'cookies',
      title: '10. Cookies and Similar Technologies',
      blocks: [
        { type: 'p', text: 'Synctappy may use cookies and similar technologies to keep you signed in, remember preferences, maintain security, measure website usage, understand page performance, provide analytics and improve the user experience. Cookie types may include:' },
        { type: 'h3', text: 'Essential cookies' },
        { type: 'p', text: 'Required for the service to work.' },
        { type: 'h3', text: 'Preference cookies' },
        { type: 'p', text: 'Used to store your preferences, and only set with your consent.' },
        { type: 'h3', text: 'Analytics cookies' },
        { type: 'p', text: 'Used to understand how the service is used. This website does not currently use analytics cookies.' },
        { type: 'h3', text: 'Marketing cookies' },
        { type: 'p', text: 'This website does not currently use marketing cookies. If they are introduced, they will be described separately and subject to the applicable consent mechanism.' },
        { type: 'p', text: 'Cookies currently used on this website:' },
        { type: 'table', head: ['Cookie', 'Category', 'Purpose', 'Duration'], rows: [
          ['synctappy_consent', 'Essential', 'Stores your cookie choice as a record of consent', '6 months'],
          ['synctappy_lang', 'Preferences', 'Remembers the language you chose (only with consent)', '12 months'],
        ] },
        { type: 'p', text: 'You can change your choice at any time via the “Cookie settings” link at the bottom of the website, or manage and delete cookies in your browser settings.' },
      ],
    },
    {
      id: 'tujuan',
      title: '11. Purposes of Processing',
      blocks: [
        { type: 'p', text: 'We may process Personal Data to:' },
        { type: 'ol', items: ['create and manage accounts;', 'provide the Synctappy service;', 'activate QR and NFC;', 'manage devices;', 'provide dynamic links;', 'provide multi-link profiles;', 'provide analytics;', 'provide campaigns;', 'process subscriptions;', 'process payments;', 'send service notifications;', 'provide customer support;', 'prevent misuse;', 'keep our systems secure;', 'troubleshoot;', 'improve the product;', 'analyze usage in aggregate;', 'meet legal obligations;', 'resolve disputes;', 'and other purposes we have told you about.'] },
        { type: 'p', text: 'Processing of Personal Data must have an appropriate legal basis. The PDP Law lists, among others, consent, performance of a contract, legal obligation, vital interests, public interest and legitimate interests as bases for processing.' },
      ],
    },
    {
      id: 'dasar-pemrosesan',
      title: '12. Legal Bases',
      blocks: [
        { type: 'p', text: 'Depending on the context, Synctappy may process Personal Data on the basis of:' },
        { type: 'h3', text: 'Consent' },
        { type: 'p', text: 'Where processing requires the user’s consent.' },
        { type: 'h3', text: 'Performance of a contract' },
        { type: 'p', text: 'For example, to provide a subscription or service you have purchased.' },
        { type: 'h3', text: 'Legal obligation' },
        { type: 'p', text: 'Where required by laws and regulations.' },
        { type: 'h3', text: 'Legitimate interests' },
        { type: 'p', text: 'For specific purposes such as security, fraud prevention and service improvement, as long as this complies with applicable rules and does not override users’ rights.' },
      ],
    },
    {
      id: 'pemasaran',
      title: '13. Use of Data for Marketing',
      blocks: [
        { type: 'p', text: 'We may send product information, service updates, new features, subscription information, promotions, campaigns and other marketing communications. Where marketing requires consent, you can choose not to receive it.' },
        { type: 'p', text: 'Communications that are essential to operating the service, such as password changes, account security, payments, invoices, service changes or security notices, may still be sent because they relate to the service you use.' },
      ],
    },
    {
      id: 'pihak-ketiga',
      title: '14. Sharing Data with Third Parties',
      blocks: [
        { type: 'p', text: 'Synctappy may use third-party service providers to support its operations, such as cloud hosting, databases, object storage, payment gateways, email delivery, analytics, monitoring, customer support, security and other infrastructure services.' },
        { type: 'p', text: 'These third parties may only receive data to the extent needed to provide the relevant service and in line with the applicable relationship and terms.' },
        { type: 'note', text: 'We do not sell users’ Personal Data as a commodity to third parties.' },
      ],
    },
    {
      id: 'layanan-pihak-ketiga',
      title: '15. Third-Party Services',
      blocks: [
        { type: 'p', text: 'Synctappy may direct users to third-party services such as Google, Google Maps, Instagram, WhatsApp, TikTok, Facebook, marketplaces, booking platforms and others. When you leave Synctappy and use those services, your data may be processed by those third parties. We recommend reading each service’s privacy policy.' },
        { type: 'p', text: 'Synctappy is not responsible for the privacy practices of third parties outside our control.' },
      ],
    },
    {
      id: 'google-review',
      title: '16. Google Review',
      blocks: [
        { type: 'p', text: 'Synctappy may provide a feature that makes it easier to open a business’s Google review page. Synctappy:' },
        { type: 'ul', items: ['does not guarantee that a review will be published;', 'does not determine users’ ratings;', 'does not change the content of users’ reviews;', 'does not ask users to give a particular rating;', 'and does not treat a click as a successfully published review.'] },
        { type: 'p', text: 'Users are free to write reviews that reflect their own experience, subject to Google’s policies.' },
      ],
    },
    {
      id: 'keamanan',
      title: '17. Data Security',
      blocks: [
        { type: 'p', text: 'We apply reasonable technical and organizational measures to protect Personal Data, which may include encryption in transit (HTTPS/TLS), password hashing, authentication, role-based access control, access limitation, audit logging, rate limiting, backups, monitoring, vulnerability management and incident response procedures.' },
        { type: 'p', text: 'The PDP Law requires Personal Data Controllers to protect Personal Data against unauthorized access, disclosure, alteration, misuse, destruction or loss. However, no electronic system can guarantee absolute security.' },
      ],
    },
    {
      id: 'retensi',
      title: '18. Data Retention',
      blocks: [
        { type: 'p', text: 'We keep Personal Data for as long as needed to provide the service, fulfil the purposes of processing, meet contractual and legal obligations, resolve disputes, maintain security or for other legitimate purposes.' },
        { type: 'p', text: 'When data is no longer needed, we may delete, destroy or anonymize it, or take other action in line with the law and our internal retention policy. The PDP Law requires Personal Data to be deleted or destroyed when the retention period ends or at the data subject’s request, unless other rules apply.' },
      ],
    },
    {
      id: 'hak-pengguna',
      title: '19. Your Rights',
      blocks: [
        { type: 'p', text: 'Subject to applicable law (including Articles 5–15 of the PDP Law), you may have the right to:' },
        { type: 'ul', items: ['obtain information about the processing of your Personal Data;', 'access and obtain a copy of your Personal Data;', 'correct and update your Personal Data;', 'request deletion or destruction of your Personal Data;', 'withdraw consent;', 'request restriction of processing;', 'object to certain processing;', 'and exercise other rights granted by laws and regulations.'] },
      ],
    },
    {
      id: 'permintaan',
      title: '20. How to Submit a Request',
      blocks: [
        { type: 'p', text: 'To submit a request about your Personal Data, contact privacy@synctappy.id with the email subject:' },
        { type: 'quote', text: 'Personal Data Request – Synctappy' },
        { type: 'p', text: 'Requests may cover data access, correction, deletion, withdrawal of consent, restriction of processing, or questions about how your Personal Data is processed. We may ask for additional information to verify the requester’s identity before fulfilling a request, so that Personal Data is not disclosed to unauthorized parties.' },
      ],
    },
    {
      id: 'penghapusan-akun',
      title: '21. Account Deletion',
      blocks: [
        { type: 'p', text: 'You may request deletion of your account through the official channels available. Once the request is verified, we will process it in line with the law, operational needs and applicable retention obligations.' },
        { type: 'p', text: 'Some information may be retained where required by law or needed for security, fraud prevention, dispute resolution, transaction records or compliance with legal obligations.' },
      ],
    },
    {
      id: 'data-pelanggan-bisnis',
      title: '22. Business Customers’ Data',
      blocks: [
        { type: 'p', text: 'If you use Synctappy to collect or process Personal Data of your own customers (for example names, phone numbers, emails, bookings or feedback), you are responsible for ensuring that this use has an appropriate legal basis. In that case your business may be responsible as the party determining the purpose of that processing.' },
        { type: 'p', text: 'In certain situations, Synctappy may act as a Personal Data Processor on the business customer’s instructions.' },
      ],
    },
    {
      id: 'data-anak',
      title: '23. Children’s Data',
      blocks: [
        { type: 'p', text: 'Synctappy is not intended to knowingly collect children’s Personal Data without a lawful basis and appropriate mechanism. If we learn that children’s Personal Data has been collected inappropriately, we may take steps to delete it or restrict its processing in line with applicable rules.' },
      ],
    },
    {
      id: 'transfer-data',
      title: '24. Data Transfers',
      blocks: [
        { type: 'p', text: 'To provide the service, Personal Data may be processed by infrastructure or service providers located outside Indonesia. Where cross-border transfer or processing occurs, Synctappy will take the necessary steps to ensure it is carried out in accordance with applicable law.' },
      ],
    },
    {
      id: 'insiden',
      title: '25. Incidents and Data Breaches',
      blocks: [
        { type: 'p', text: 'We have procedures for handling security incidents. If a Personal Data protection failure occurs that meets the notification criteria under applicable law, we will notify the parties required by regulation, including information about the data disclosed, when and how the incident happened, and the handling and recovery steps taken.' },
      ],
    },
    {
      id: 'perubahan',
      title: '26. Changes to This Privacy Policy',
      blocks: [
        { type: 'p', text: 'We may update this Privacy Policy from time to time due to changes in features, technology, services, third parties, data processing practices or laws and regulations.' },
        { type: 'p', text: 'If a change is material, we may notify you through the website, dashboard, email or another appropriate method. The “Last Updated” date shows the latest version.' },
      ],
    },
    {
      id: 'ketentuan-layanan',
      title: '27. Relationship with the Terms of Service',
      blocks: [
        { type: 'p', text: 'This Privacy Policy forms part of the terms of use of Synctappy. Use of Synctappy is also subject to the Terms of Service, Acceptable Use Policy, Subscription Terms, Refund Policy, Cookie Policy, Hardware Warranty and other applicable terms.' },
      ],
    },
    {
      id: 'hukum',
      title: '28. Governing Law',
      blocks: [
        { type: 'p', text: 'This Privacy Policy is governed by the laws of the Republic of Indonesia. Any dispute will be resolved according to the mechanism set out in the Terms of Service and applicable law.' },
      ],
    },
    {
      id: 'kontak',
      title: '29. Contact Us',
      blocks: [
        { type: 'p', text: 'If you have questions about this Privacy Policy or the processing of your Personal Data, please contact:' },
        { type: 'contact', rows: [
          { label: 'Company', value: 'Synvora Teknologi Indonesia' },
          { label: 'Product', value: 'Synctappy' },
          { label: 'Privacy', value: 'privacy@synctappy.id' },
          { label: 'Support', value: 'support@synctappy.id' },
          { label: 'Address', value: 'To be published before launch' },
        ] },
      ],
    },
  ],
}
