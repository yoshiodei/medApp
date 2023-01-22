import { StyleSheet, View, TouchableOpacity, Text, Modal} from 'react-native';

export default function CancelVisitModal({openModal, setOpenModal, navigation}) {

  return (
    <Modal
        visible={openModal}
        onRequestClose={()=> setOpenModal(false)}
        transparent
        animationType='fade'
    >
        <View style={styles.cancelVisitModalView}>
            <View style={styles.cancelVisitModalInnerView}>
                <Text style={styles.cancelVisitModalText}>
                    Are you sure you would like to cancel this visit?
                </Text>
                <View style={styles.cancelVisitModalButtonView}>
                    <TouchableOpacity 
                        style={styles.continueVisitModalButton}
                        onPress={()=> setOpenModal(false)}
                        activeOpacity={0.6}
                    >
                        <Text 
                            style={styles.continueVisitModalButtonText}
                        >
                            Continue Visit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Text style={styles.cancelVisitModalButtonText}>Cancel Visit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
    cancelVisitModalView: {
        width: '100%',
        flex: 1,
        marginTop: '20%',
        backgroundColor: '#00000099',
        justifyContent: 'flex-start',
        alignItems: 'center',    
      },
      cancelVisitModalInnerView: {  
        height: 'auto',
        width: '90%',
        marginTop: '30%',
        backgroundColor: '#FFF',
        borderRadius: 6,
        padding: 15
      },
      cancelVisitModalText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '600',
        color: primaryColor,
      },
      cancelVisitModalButtonView: {
          alignItems: 'center',
          marginTop: 20,
      },
      continueVisitModalButton: {
          height: 40,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: primaryColor,
          borderRadius: 50,
          marginBottom: 15,
      },
      continueVisitModalButtonText: {
          fontSize: 17,
          fontWeight: '600',
          color: '#FFF',
      },
      cancelVisitModalButtonText: {
          color: primaryColor,
      },
});
