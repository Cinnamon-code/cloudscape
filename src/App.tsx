import '@/App.scss'
import { Alert, AppLayout, Autosuggest, Button, TopNavigation } from '@cloudscape-design/components'
import { useState } from 'react'
import { identity, utilities } from '@/config/topNavigation'
import { RouterProvider, useNavigate } from 'react-router-dom'
import router from '@/router'

function App() {
  const [alertVisible, setAlertVisible] = useState(true)
  return (
    <>
      <TopNavigation
        identity={identity}
        utilities={utilities}
        i18nStrings={{
          searchIconAriaLabel: 'Search',
          searchDismissIconAriaLabel: 'Close search',
          overflowMenuTriggerText: 'More',
          overflowMenuTitleText: 'All',
          overflowMenuBackIconAriaLabel: 'Back',
          overflowMenuDismissIconAriaLabel: 'Close menu'
        }}
        search={<Autosuggest options={[
          { value: 'Suggestion 1' },
          { value: 'Suggestion 2' },
          { value: 'Suggestion 3' },
          { value: 'Suggestion 4' }
        ]}
          enteredTextLabel={value => `Use: '${value}'`}
          value="aaa" />}
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
