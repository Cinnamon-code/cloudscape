import { TopNavigationProps } from '@cloudscape-design/components'
import { NavigateFunction } from 'react-router-dom'

export const identity: TopNavigationProps.Identity = {
  href: '/',
  title: 'GELP'
}

export const utilities: TopNavigationProps['utilities'] = [
  {
    type: 'button',
    text: 'Dashboard',
    href: '#/dashboard',
    // external: false,
    disableUtilityCollapse: true,
    ariaLabel: 'dashboard',
    // externalIconAriaLabel: ' (opens in a new tab)'
  },
  {
    type: 'button',
    // iconName: 'notification',
    // title: 'Notifications',
    text: 'Course',
    href: '#/course',
    ariaLabel: 'course',
    // badge: true,
  },
  {
    type: 'button',
    ariaLabel: 'shcedule',
    href: '#/schedule',
    text: 'Schedule'
  },
  {
    type: 'button',
    ariaLabel: 'record',
    href: '#/record',
    text: 'Record'
  },
  {
    type: 'menu-dropdown',
    text: '沈聪',
    description: 'shencong2001@live.cn',
    iconName: 'user-profile',
    items: [
      { id: 'profile', text: 'Profile' },
      // { id: 'preferences', text: 'Preferences' },
      // { id: 'security', text: 'Security' },
      {
        id: 'support-group',
        text: 'Support',
        items: [
          {
            id: 'documentation',
            text: 'Blog',
            href: 'https://shenc.gitbook.io/',
            external: true,
            externalIconAriaLabel:
              'author blog'
          },
          {
            id: 'feedback',
            text: 'Feedback',
            href: 'mailto:shencong2001@live.cn',
            // external: true,
          }
        ]
      },
      { id: 'signout', text: 'Sign out' }
    ]
  }
]