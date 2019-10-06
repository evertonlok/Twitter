import { createSwitchNavigator, createAppContainer,createStackNavigator} from 'react-navigation' 
import Login from '../src/pages/login'
import Timeline from './pages/Timeline'
import New from './pages/New'
const Routes=createAppContainer(
    createSwitchNavigator({
        Login,
        App:createStackNavigator({
            Timeline,
            New
        }),
    })
)
export default Routes;