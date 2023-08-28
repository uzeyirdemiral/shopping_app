/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import Wrapper from './src/wrapper';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Wrapper);
