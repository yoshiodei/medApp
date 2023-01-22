import { SafeAreaView, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';


export default function StartCare({navigation}) {
  
  const [careStarted, setCareStarted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <Image 
            source={require('../assets/doctor.png')} 
            style={styles.startCareImage} 
        />
        <View style={styles.startCareView}>
            <Text style={styles.startCareCaptionText} >Patient is currently being cared for</Text>
            <TouchableOpacity 
                onPress={()=>{ setCareStarted(!careStarted) }}
                style={ careStarted ? styles.endCareButton : styles.startCareButton }
            >
                <Text 
                    style={ careStarted ? styles.endCareText : styles.startCareText }
                >
                    { careStarted ? 'End Care'  : 'Start Care' }
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const primaryColor = '#586F6B';
const dangerColor = '#FABCBC';
const dangerTextColor = '#D02121'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  startCareImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  startCareView: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  startCareCaptionText: {
    fontSize: 20,
    fontWeight: '600',
    color: primaryColor,
  },
  endCareButton: {
    height: 40,
    width: '70%',
    borderRadius: 50,
    backgroundColor: dangerColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startCareButton: {
    height: 40,
    width: '70%',
    borderRadius: 50,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCareText: {
    color: dangerTextColor,
    fontSize: 18,
    fontWeight: '600'
  },
  startCareText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600'
  },
});
