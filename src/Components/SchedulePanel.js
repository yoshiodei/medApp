import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ScheduleDatePanel from '../Components/ScheduleDatePanel';
import { Entypo } from '@expo/vector-icons';

export default function SearchBar({ date, detail, title, navigation }) {

  const {month, day, dayOfWeek} = date;  

  return (
    <TouchableOpacity 
        style={styles.schedulePanelView}
        activeOpacity={0.6}
        onPress={()=> navigation.navigate('ScheduleInformation')}
    >
        <View style={styles.scheduleDateView}>
            <ScheduleDatePanel day={day} month={month} dayOfWeek={dayOfWeek} />
        </View>
        <View style={styles.scheduleInfoView}>
            <Text style={styles.scheduleTitle}>{title}</Text>
            <Text style={styles.scheduleDetail}>{detail}</Text>
            <View style={styles.scheduleLine}></View>
            <View style={styles.schedulTimeView}>
                <Entypo name="clock" size={18} color={primaryColor} />
                <Text style={styles.schedulTime}>{date.time}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
    schedulePanelView: {
        width: '100%',
        height: 'auto',
        borderRadius: 20,
        padding: 15,
        backgroundColor: midPrimaryColor,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
    },
    scheduleInfoView: {
        flex: 1,
    },
    scheduleTitle: {
        fontSize: 22,
        lineHeight: 25,
        fontWeight: '700',
        color: primaryColor,
        marginBottom: 5
    },
    scheduleDetail: {
        color: primaryColor,
        fontWeight: '600'
    },
    schedulTimeView: {
        flexDirection: 'row',
    },
    schedulTime: {
        marginLeft: 8,
        fontWeight: '600',
        color: primaryColor
    },
    scheduleLine: {
        marginVertical: 8,
        width: '100%',
        height: 2,
        backgroundColor: '#00000008'
    },
});
