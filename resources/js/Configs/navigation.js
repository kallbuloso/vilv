export default {
  items: [
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
      title: 'Editor',
      icon: 'mdi-exit-to-app',
      href: 'editor'
    },
    {
      title: 'Test child',
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
    },
    {
      title: 'Acount',
      icon: 'mdi-exit-to-app',
      href: 'account'
    },
    {
      title: 'Test child 2',
      icon: 'mdi-exit-to-app',
      group: 'child2',
      children: [
        {
          title: 'Child 1',
          icon: 'mdi-exit-to-app',
          href: 'child2.child1'
        },
        {
          title: 'Child 2',
          icon: 'mdi-exit-to-app',
          href: 'child2.child2'
        },
        {
          title: 'Child 3',
          icon: 'mdi-exit-to-app',
          href: 'child2.child3'
        }
      ]
    },
    {
      title: 'Test child 2',
      icon: 'mdi-exit-to-app',
      group: 'child3',
      children: [
        {
          title: 'Child 1',
          icon: 'mdi-exit-to-app',
          href: 'child2.child1'
        },
        {
          title: 'Child 2',
          icon: 'mdi-exit-to-app',
          href: 'child2.child2'
        },
        {
          title: 'Child 3',
          icon: 'mdi-exit-to-app',
          href: 'child2.child3'
        }
      ]
    },
    {
      title: 'Test child 2',
      icon: 'mdi-exit-to-app',
      group: 'child3',
      children: [
        {
          title: 'Child 1',
          icon: 'mdi-exit-to-app',
          href: 'child2.child1'
        },
        {
          title: 'Child 2',
          icon: 'mdi-exit-to-app',
          href: 'child2.child2'
        },
        {
          title: 'Child 3',
          icon: 'mdi-exit-to-app',
          href: 'child2.child3'
        }
      ]
    }
  ]
}
