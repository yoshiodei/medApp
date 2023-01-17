import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';  

export default function ModalListItem({item}) {

  return (
              <View style={styles.listItemWrapper}>
                <View style={styles.listItem}>
                  <View style={styles.listItemInnerDiv}>
                    <View style={styles.listItemImage}>
                      <SimpleLineIcons name="user" size={20} color='#FFFFFF' />
                    </View>
                    <View>
                      <Text style={styles.listItemName}>{item.name}</Text>
                      <Text style={styles.listItemLocation}>{item.location}</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.listItemButton}>
                      <Text style={styles.listItemButtonText} >Start Visit</Text>
                    </TouchableOpacity>
                  </View>
                </View>  
              </View>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
   
      listItemWrapper: {
        height: 65,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 12,
      },
      listItem: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    
      },
      listItemInnerDiv:{
        flexDirection: 'row',
        
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
      listItemButton: {
        paddingHorizontal: 13,
        paddingVertical: 2,
        borderRadius: 50,
        backgroundColor: primaryColor,
      },
      listItemButtonText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFF',
      },
});
