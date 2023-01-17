import { NavigationContainer } from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import { Ionicons } from '@expo/vector-icons';
import LogOut from '../Screens/LogOut';
import 'react-native-gesture-handler';
import Help from '../Screens/Help';
// import Main from '../Screens/Main';
import HomeRoutes from './HomeRoutes';


export default function MainRoutes() {
  
  const Drawer = createDrawerNavigator();
  const primaryColor = '#586F6B';
  const primaryColorLight = '#ABB6B4';
  const showDrawerNav = (props) => console.log(props);

  return (
 
    <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({navigation}) => ({
            drawerStyle: {
              backgroundColor: '#FFF',
              width: 300,
            }, 
            headerShadowVisible: false,
            headerTitle: 'SYNERDOC',
            headerTitleStyle: { 
              color: primaryColor,
              fontWeight: '800'
            },
            headerTitleAlign: 'center',
            headerLeftContainerStyle: {
              paddingLeft: 10
            },
            headerRightContainerStyle: {
              paddingRight: 20
            },
            headerRight: () => <View style={styles.profileImgDiv}></View>,
            headerLeft: () => 
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              activeOpacity={0.6} 
            >
              <Ionicons 
                name="menu" 
                size={35} 
                color={primaryColor} 
                
              />
            </TouchableOpacity>,
            swipeEnabled: false,
            drawerActiveBackgroundColor: primaryColorLight,
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: primaryColor,
          })}
        >
          <Drawer.Screen name="HomeRoutes" component={HomeRoutes} />
          <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
          <Drawer.Screen name="Help" component={Help} />
          <Drawer.Screen name="Logout" component={LogOut} />
         </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  profileImgDiv : {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
});



