import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';
import ScreenHeading from '../Components/ScreenHeading';
import SchedulePanel from '../Components/SchedulePanel';

export default function Schedules({navigation}) {

  const Schedules = [
    {
        date: { month: 'January' , day: '03', dayOfWeek: 'Tueday', year: '2023', time: '11:00 am'},
        title: 'General Care',
        detail: 'Make a visit and care for patient, Lydia Owusu.',
    },
    {
        date: { month: 'January' , day: '05', dayOfWeek: 'Thursday', year: '2023', time: '9:00 am'},
        title: 'General Care',
        detail: 'Make a visit and care for patient, Kwame Boadi.',
    },
    {
        date: { month: 'January' , day: '06', dayOfWeek: 'Friday', year: '2023', time: '10:30 am'},
        title: 'General Care',
        detail: 'Make a visit and care for patient, Derick Ofosu.',
    },
    {
        date: { month: 'January' , day: '09', dayOfWeek: 'Monday', year: '2023', time: '9:30 am'},
        title: 'General Care',
        detail: 'Make a visit and care for patient, Isaac Boateng.',
    },
    {
        date: { month: 'January' , day: '11', dayOfWeek: 'Wednesday', year: '2023', time: '11:00 am'},
        title: 'General Care',
        detail: 'Make a visit and care for patient, Esther Ofori.',
    },
  ];  
  
  return (
    <SafeAreaView style={styles.container}>
        <ScreenHeading Title='Schedules' navigation={navigation} />
        <View style={styles.scheduleListView}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Schedules}
                renderItem={({item}) => 
                    ( 
                        <SchedulePanel 
                            date={item.date} 
                            title={item.title} 
                            detail={item.detail}
                            navigation={navigation} 
                        /> 
                    )
                }
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scheduleListView: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
});
