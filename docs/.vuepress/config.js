
module.exports = {
  base: '/vuemerang/',
  head: [
    ['link', { rel: 'icon', href: `/favicon-Vuemerang.png` }],
    ['script',{},`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQKGCLJ');`]
  ],
  ga:'UA-128631128-1',
  docsDir: 'docs',
  host:'localhost',
  port: 7070,
  title: 'Vue.js Framework Components - Vuemerang',
  description: 'We love what we do. Let us help you do what <b>You love.</b>',
  vueThemes:{
    linksHome:[],
    links:{
      github:'https://github.com/controlla/Vuemerang',
    },
    footer:[
      {
        title:'Social',
        items:[
          {
            text:'GitHub',
            link:'https://github.com/controlla/Vuemerang'
          },
          {
            text:'Twitter',
            link:'https://twitter.com/Vuemerang'
          },
          {
            text:'Facebook',
            link:'https://www.facebook.com/Vuemerang/'
          },
          {
            text:'Behance',
            link:'https://www.behance.net/IvanSotelo'
          },
          {
            text:'Dribbble',
            link:'https://dribbble.com/IvanSotelo'
          },
        ]
      },
      {
        title:'Help',
        items:[
          {
            text:'Issues',
            link:'https://github.com/controlla/Vuemerang/issues'
          },
          {
            text:'Edit Page',
            link:'https://github.com/controlla/Vuemerang/tree/master/docs'
          },
          {
            text:'Latest Releases',
            link:'https://github.com/controlla/Vuemerang/releases'
          },
          {
            text:'Stackoverflow',
            link:'https://stackoverflow.com/questions/tagged/Vuemerang'
          },
          {
            text:'FAQ',
            link:'https://github.com/controlla/Vuemerang/wiki'
          },
        ]
      },
      {
        title:'Más',
        items:[
          {
            text:'Controlla',
            link:'http://www.controlla.com.mx/'
          },
          {
            text:'Email',
            link:'mailto:vuemerang@controlla.com.mx'
          },
          {
            text:'Pull request',
            link:'https://github.com/controlla/Vuemerang/pulls'
          },
        ]
      }
    ]
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'controlla/vuemerang',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'controlla/vuemerang',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    logo:'/vuemerang-logo-vertical.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/development/' },
      { text: 'Contributors', link: '/contributors/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/controlla/Vuemerang' },
              // { text: 'Discord', link: 'https://discord.gg/9dsKtvB' },
              { text: 'Twitter', link: 'https://twitter.com/Vuemerang' },
              { text: 'Facebook', link: 'https://www.facebook.com/Vuemerang/' },
              { text: 'Behance', link: 'https://www.behance.net/IvanSotelo' },
              { text: 'Dribbble', link: 'https://dribbble.com/IvanSotelo' },
              // { text: 'Codepen', link: 'https://codepen.io/controlla/' },
              { text: 'Medium', link: 'https://medium.com/@ivansotelo' }
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Issues', link: 'https://github.com/controlla/Vuemerang/issues' },
              { text: 'Edit Page', link: 'https://github.com/controlla/Vuemerang' },
              { text: 'Latest Releases', link: 'https://github.com/controlla/Vuemerang/releases' },
              { text: 'FAQ', link: 'https://github.com/controlla/Vuemerang/wiki' }
            ]
          },
          {
            text: 'Contact',
            items: [
              { text: 'Controlla', link: 'http://www.controlla.com.mx' },
              { text: 'Email', link: 'mailto:vuemerang@controlla.com.mx' },
              // { text: 'Chat', link: 'https://gitter.im/Vuemerang/Lobby' },
              { text: 'Pull Request', link: 'https://github.com/controlla/vuemerang/pulls' },
              // { text: 'Codepen Template', link: 'https://codepen.io/controlla/pen/mxMKYr' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Development',
        collapsable: false,
        children: [
          '/development/',
          '/development/contributing',
          '/development/whyVuemerang',
         ]
      },
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/layout/',
         ]
      },
      {
        title: 'Theme',
        collapsable: false,
        children: [
          '/theme/',
          '/theme/icon'
         ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/',
          '/components/selects',
          '/components/notifications',
          '/components/switch',
          '/components/checkbox',
          '/components/radio',
          '/components/input',
          '/components/dialog',
          '/components/tabs',
          '/components/slider',
          '/components/number',
          '/components/tooltip',
          '/components/upload',
          '/components/loading',
          '/components/popup',
          '/components/avatar',
          '/components/breadcrumb',
          '/components/alert',
          '/components/chip',
          '/components/divider',
          '/components/progress',
          '/components/card',
          '/components/list',
          '/components/pagination',
          '/components/navbar',
          '/components/sideBar',
          '/components/dropDown',
          '/components/table',
          '/components/textarea',
          '/components/collapse',
          '/components/images',
          '/components/timePicker',
          '/components/datePicker',
          '/components/textEditor',
          '/components/typeahead',
          '/components/Stepper',
          '/components/StatusIndicator',
          /*New Component*/
        ]
      },
    ]
  }
}
