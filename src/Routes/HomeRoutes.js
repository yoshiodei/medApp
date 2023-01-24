import ScheduleInformation from '../Screens/ScheduleInformation';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceHistory from '../Screens/ServiceHistory';
import PatientDetails from '../Screens/PatientDetails';
import StartVisit from '../Screens/StartVisit';
import Schedules from '../Screens/Schedules';
import Patients from '../Screens/Patients';
import Home from '../Screens/Home';

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
          <Stack.Screen name="Schedules" component={Schedules} />
          <Stack.Screen name="ScheduleInformation" component={ScheduleInformation} />
        </Stack.Navigator>

  );
}




