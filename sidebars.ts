import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/configuration',
        'configuration/categories',
        'configuration/reaction-panels',
        'configuration/ignored-channels',
      ],
    },
    {
      type: 'category',
      label: 'Using Callisto',
      items: [
        'using-callisto/ticket-commands',
        'using-callisto/staff-commands',
        'using-callisto/admin-commands',
        'using-callisto/canned-responses',
        'using-callisto/transcripts',
      ],
    },
  ],
};

export default sidebars;