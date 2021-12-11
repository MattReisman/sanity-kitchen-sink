export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b468832d6bcc9938095c28',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9jft754a',
                  apiId: '81b48cd9-b57b-4050-a364-12190a3ec81b'
                },
                {
                  buildHookId: '61b468841fcd5e8d2c276b33',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-umvjdbck',
                  apiId: 'acb89df3-b5ca-4d5c-9fb4-80ef949f651c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MattReisman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-umvjdbck.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
