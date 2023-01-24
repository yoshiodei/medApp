import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';
import ScreenHeading from '../Components/ScreenHeading';
import ScheduleDatePanel from '../Components/ScheduleDatePanel';

export default function ScheduleInformation({navigation}) {
   
  const day = '25';
  const dayOfWeek = 'Saturday';
  const month = 'February';


  return (
    <SafeAreaView style={styles.container}>
        <ScreenHeading Title='Schedule Information' navigation={navigation} />
        <View style={styles.scheduleInformationView}>
            <ScheduleDatePanel month={month} day={day} dayOfWeek={dayOfWeek} />
            <View style={styles.scheduleTextView}>
                <Text style={styles.scheduleInformationTitle}>Schedule Title</Text>
                <Text style={styles.scheduleInformationText}>General Care</Text>
            </View>
            <View style={styles.scheduleTextView}>
                <Text style={styles.scheduleInformationTitle}>Schedule Detail</Text>
                <Text style={styles.scheduleInformationText}>Make a visit and care for patient, Lydia Owusu.</Text>
            </View>
            <View style={styles.scheduleTextView}>
                <Text style={styles.scheduleInformationTitle}>Schedule Time</Text>
                <Text style={styles.scheduleInformationText}>Saturday, 25 February 2023</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.rescheduleButton}>
            <View style={styles.rescheduleButtonView}>
                <Text style={styles.scheduleButtonText}>
                    Reschedule Appointment
                </Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const primaryColor = '#586F6B';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scheduleInformationView: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  scheduleDateView: {
    height: 'auto',
    width: 90,
    backgroundColor: primaryColor,
    borderRadius: 12,
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10
  },
  scheduleTextView: {
    marginTop: 20
  },
  scheduleInformationTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: primaryColor,
  },
  scheduleInformationText: {
    fontSize: 15,
    color: primaryColor
  },
  rescheduleButton: {
    width: '100%',
    padding: 20,
  },
  rescheduleButtonView: {
    width: '100%',
    height: 55,
    borderRadius: 5,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  }
});
