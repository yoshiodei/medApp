import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function DetailPanel({title, titleDetail, icon, footerText }) {

  return (
  
        <View style={[styles.detailsPanel, styles.elevation]}>
            <View style={styles.panelTopDiv}>
                <View style={styles.panelTopIcon}>
                    <Entypo name="location-pin" size={28} color='#FFF' />
                    {/* <MaterialIcons name="date-range" size={26} color='#FFF' /> */}
                </View>
                <View style={styles.panelTopTextDiv}>
                    <Text style={styles.panelTopTextLarge}>{title}</Text>
                    <Text style={styles.panelTopTextSmall}>{titleDetail}</Text>
                </View>
            </View>
            <View style={styles.panelBottomDiv}>
                <Text style={styles.panelBottomText}>{footerText}</Text>
            </View>
        </View>
 
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
    detailsPanel: {
        width: '100%',
        // height: '95%',
        flex: 1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00000010',
        backgroundColor: '#FFF',
    },
    panelTopDiv: {
        flex: 1.5,
        width: '100%',
        padding: 10,
        borderBottomColor: primaryColorLight,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    panelTopIcon: {
        borderRadius: 50,
        backgroundColor: primaryColorLight,
        width: 50,
        height: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    panelTopTextLarge: {
        fontSize: 18,
        fontWeight: '700',
        color: primaryColor,
    },
    panelTopTextSmall: {
        color: primaryColor,
    },
    panelBottomText: {
        color: primaryColor,
    },
    panelBottomDiv: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    elevation: {
        shadowColor: 'black',
        elevation: 5,
    },
});
