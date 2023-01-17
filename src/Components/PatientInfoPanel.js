import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function PatientsInfoPanel({navigation, item}) {

  return (
    <TouchableOpacity 
        style={[styles.listItem, styles.elevation2]}
        activeOpacity={0.6}
        onPress={()=>navigation.navigate('PatientDetails')}
    >
        <View style={styles.listItemImage}>
            <SimpleLineIcons name="user" size={20} color='#FFFFFF' />
        </View>
        <View>
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemLocation}>{item.location}</Text>
        </View>
    </TouchableOpacity>  
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
  listItem: {
    height: 65,
    width: '100%',
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#00000005',
  },
  listItemImage: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemName: {
    fontSize: 16,
    color: primaryColor,
    fontWeight: '700',
  },
  listItemLocation: {
    fontSize: 13,
    color: primaryColorLight,
    fontWeight: '600',
  },
  elevation2: {
    shadowColor: 'black',
    elevation: 4,
  },
});
