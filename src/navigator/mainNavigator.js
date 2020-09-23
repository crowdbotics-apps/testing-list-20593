import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile106560Navigator from '../features/UserProfile106560/navigator';
import Tutorial106559Navigator from '../features/Tutorial106559/navigator';
import NotificationList106531Navigator from '../features/NotificationList106531/navigator';
import Settings106530Navigator from '../features/Settings106530/navigator';
import Settings106522Navigator from '../features/Settings106522/navigator';
import UserProfile106520Navigator from '../features/UserProfile106520/navigator';
import Camera1106498Navigator from '../features/Camera1106498/navigator';
import BlankScreen0106497Navigator from '../features/BlankScreen0106497/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile106560: { screen: UserProfile106560Navigator },
Tutorial106559: { screen: Tutorial106559Navigator },
NotificationList106531: { screen: NotificationList106531Navigator },
Settings106530: { screen: Settings106530Navigator },
Settings106522: { screen: Settings106522Navigator },
UserProfile106520: { screen: UserProfile106520Navigator },
Camera1106498: { screen: Camera1106498Navigator },
BlankScreen0106497: { screen: BlankScreen0106497Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
