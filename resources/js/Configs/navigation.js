export default [
  {
    header: 'Menu',
    divider: true
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    href: 'dashboard'
  },
  {
    title: 'Example child',
    icon: 'mdi-exit-to-app',
    group: 'child',
    children: [
      {
        title: 'Child 1',
        icon: 'mdi-exit-to-app',
        href: 'child.child1'
      },
      {
        title: 'Child 2',
        icon: 'mdi-exit-to-app',
        href: 'child.child2'
      },
      {
        title: 'Child 3',
        icon: 'mdi-exit-to-app',
        href: 'child.child3'
      }
    ]
  }
]
