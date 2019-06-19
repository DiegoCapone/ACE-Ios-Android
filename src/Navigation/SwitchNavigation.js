import React from 'react'
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import Auth from '../screens/Auth'
import Login from '../screens/Login'
import Home from '../screens/Home'


const MainRoutes = {
    Auth: Auth,
    Login: Login,
    Home: Home
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(MainNavigator);


export default AppContainer;