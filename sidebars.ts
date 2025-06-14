import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars : SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    java: [{type: 'autogenerated', dirName: 'java-dev'}],
    bukkit: [{type: 'autogenerated', dirName: 'mc-plugin-dev'}],
    web: [{type: 'autogenerated', dirName: 'web-dev'}],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */
};

export default sidebars;
