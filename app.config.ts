export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Unproprietary Corporation - Legal Docs'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-ph-arrow-clockwise',
        to: 'https://github.com/un/legal',
        label: 'Doc History',
        target: '_blank',
        'aria-label': 'Document History'
      }
    ]
  },
  footer: {
    credits: 'Copyright © 2024 - Unproprietary Corporation',
    colorMode: false,
    links: [
      {
        icon: 'i-mdi-email',
        to: 'https://uninbox.com',
        target: '_blank',
        'aria-label': 'UnInbox Website'
      },
      {
        icon: 'i-simple-icons-discord',
        to: 'https://discord.gg/dGBff6zBwQ',
        target: '_blank',
        'aria-label': 'Our community on Discord'
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/uninbox',
        target: '_blank',
        'aria-label': 'UnInbox on X'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/un',
        target: '_blank',
        'aria-label': 'Unproprietary Corporation on GitHub'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Links',
      links: [
        {
          icon: 'i-mdi-refresh',
          label: 'See history on GitHub',
          to: 'https://github.com/un/legal',
          target: '_blank'
        },
        {
          icon: 'i-mdi-email',
          label: 'Visit UnInbox',
          to: 'https://uninbox.com',
          target: '_blank'
        }
      ]
    }
  }
});
