import { StackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import StartUpPage from '../Component/Login/StartUpPage';
import Product from '../Component/showProducts/Product';

// const stackNavigatorConfiguration = {
//     mode: 'card',
//     navigationOptions: {
//       headerStyle: { backgroundColor: Colors.AppColor, borderBottomWidth: 0 },
//       headerTintColor: 'white',
//       headerTitleStyle: { fontSize: 14, fontFamily: Constants.FontFamily},
//     //   headerBackground: (<Image style={{ flex: 1, width: Constants.ScreenSize.width }} source={Icons.MenuBg} />)
//     }
// }

const signUpAndLoginStackNavigatorConfiguration = {
    mode: 'card',
    // navigationOptions: {
    //   headerStyle: { backgroundColor: Colors.AppColor, borderBottomWidth: 0 },
    //   headerTintColor: 'white',
    //   headerTitleStyle: { fontSize: 16, fontFamily: Constants.FontFamily, fontWeight: 'bold' },
    //   headerBackground: (<Image style={{ flex: 1, width: Constants.ScreenSize.width }} source={Icons.MenuBg} />)
    // }
    headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
}

// const startUpScreens = {}
// startUpScreens['startUpPage'] = { screen: StartUpPage }
// const startUpStack = createStackNavigator(startUpScreens, signUpAndLoginStackNavigatorConfiguration)

// const homeTabScreens = {}
// homeTabScreens['product'] = { screen: Product }
// const homeStack = createStackNavigator(homeTabScreens, signUpAndLoginStackNavigatorConfiguration)

// const tabScreens = {}
// tabScreens['startUpPage'] = { screen: startUpStack }
// tabScreens['product'] = { screen: homeStack }
// const tabStack = createStackNavigator(tabScreens, signUpAndLoginStackNavigatorConfiguration)

// const screens = {}
// screens['LaunchScreens'] = { screen: startUpStack }



// const MainNavigator = createStackNavigator({
//     ...screens,
//     default: {
//       screen: tabStack
//     }
//   }, {
//       headerMode: 'none',
//       navigationOptions: {
//         gesturesEnabled: true
//       }
//     })
  

const MainNavigator = StackNavigator({
    startUpPage: {screen: StartUpPage},
    product: {screen: Product},
  });
  

const App = createAppContainer(MainNavigator);

export default App;