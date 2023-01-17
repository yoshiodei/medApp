import { createStackNavigator } from '@react-navigation/stack';
import PatientDetails from './PatientDetails';
import Patients from './Patients';
import Home from './Home';

export default function Main() {
  const Stack = createStackNavigator();

  return (
        <Stack.Navigator
         screenOptions={{
          headerShown: false
         }}
        >
          <Stack.Screen name="Main" component={Home} />
          <Stack.Screen name="Patients" component={Patients} />
          <Stack.Screen name="PatientDetails" component={PatientDetails} />
        </Stack.Navigator>

  );
}




