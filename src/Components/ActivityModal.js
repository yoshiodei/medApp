import { StyleSheet, Text, TouchableOpacity, Modal, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  
import SearchBar from './SearchBar';
import ModalListItem from './ModalListItem';


export default function ActivityModal({Items, showVisitList, onClose}) {

  return (
    <Modal
          visible={showVisitList}
          onRequestClose={onClose}
          transparent
          animationType='slide'
    >
          <View style={styles.modalView}>
            <View style={styles.modalViewWrapper}>
              <View style={styles.modalInnerView}>
                <Text style={styles.modalHeading}>Select Patient To Visit</Text>
                <TouchableOpacity onPress={onClose} >
                  <MaterialIcons name="cancel" size={25} color={primaryColor} />
                </TouchableOpacity>
              </View>
              <SearchBar />
            </View>
            <FlatList 
            data={Items}
            renderItem = {({item}) => (
                <ModalListItem item={item} />
            )}
          />
          </View>
          
    </Modal>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
    modalView: {
        marginTop: '15%',
        height: '100%',
        backgroundColor: primaryColorLight,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 20,
      },
      modalHeading: {
        fontSize: 20,
        color: primaryColor,
        fontWeight: '700'
      },
      modalInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 20,
      },
      modalInput: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 20,
      },
      modalViewWrapper: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF50',
        marginBottom: 20,
      },
});
