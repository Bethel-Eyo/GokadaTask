import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import NavigationService from './NavigationService'
import Drawer from './Drawer'
import Cat from './Cat'

const Navigation = () => {
  const SwitchNavigator = createSwitchNavigator({
    Drawer,
    Cat
  })

  const AppContainer = createAppContainer(SwitchNavigator)

  return (
    <AppContainer
      ref={(navigationRef) => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
    />
  )
}

export default Navigation;
