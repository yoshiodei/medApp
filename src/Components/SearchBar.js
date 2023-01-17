import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {

  return (
    <View style={styles.inputDiv}>
        <Feather name="search" 
            size={24} 
            color={primaryColorLight}
            style={styles.inputIcon}
        />
        <TextInput placeholder='Search patient by name or location' style={[styles.patientsInput, styles.elevation]}/>
    </View>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
    inputDiv: {
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        position: 'relative',
      },
      patientsInput: {
        borderWidth: 1,
        borderColor: '#00000010',
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        paddingLeft: 50 
      },
      inputIcon: {
        position: 'absolute',
        top: 13,
        left: 35,
        zIndex: 1
      },
      elevation: {
        shadowColor: 'black',
        elevation: 6,
      },
});
