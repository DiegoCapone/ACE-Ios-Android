/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Auth from './src/screens/Auth'
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Navigation from './src/Navigation/SwitchNavigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
