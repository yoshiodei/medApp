import { createStackNavigator } from '@react-navigation/stack';
import PatientDetails from '../Screens/PatientDetails';
import StartVisit from '../Screens/StartVisit';
import Patients from '../Screens/Patients';
import Home from '../Screens/Home';
import ServiceHistory from '../Screens/ServiceHistory';

export default function HomeRoutes() {
  const Stack = createStackNavigator();

  return (
        <Stack.Navigator
         screenOptions={{
          headerShown: false
         }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Patients" component={Patients} />
          <Stack.Screen name="PatientDetails" component={PatientDetails} />
          <Stack.Screen name="StartVisit" component={StartVisit} />
          <Stack.Screen name="ServiceHistory" component={ServiceHistory} />
        </Stack.Navigator>

  );
}




