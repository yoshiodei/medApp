import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function scheduleDatePanel({dayOfWeek, day, month}) {

  return (
    <View style={styles.scheduleDateView}>
        <Text style={styles.scheduleDayOfWeekText}>{dayOfWeek.substring(0,3)}</Text>
        <Text style={styles.scheduleDayText}>{day}</Text>
        <Text style={styles.scheduleMonthText}>{month}</Text>
    </View>
  );
}

const primaryColor = '#586F6B';

const styles = StyleSheet.create({
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
    scheduleDayText: {
        fontSize: 42,
        fontWeight: '800',
        color: '#FFF',
    },
    scheduleDayOfWeekText: {
        fontWeight: '500',
        color: '#FFF'
    },
    scheduleMonthText: {
        fontWeight: '500',
        color: '#FFF',
        fontSize: 16
    },
});
