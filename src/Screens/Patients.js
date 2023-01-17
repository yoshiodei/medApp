import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import { Entypo} from '@expo/vector-icons';
import PatientsInfoPanel from '../Components/PatientInfoPanel';
import SearchBar from '../Components/SearchBar';

export default function Patients({navigation}) {

  const primaryColor = '#586F6B';

  const Items = [
    {
      key: '1',
      name: 'Yoshi Odei',
      location: 'Awoshie'
    },
    {
      key: '2',
      name: 'Emmanuel Sintim',
      location: 'Pokuase'
    },
    {
      key: '3',
      name: 'Eric Lartey',
      location: 'Dome'
    },
    {
      key: '4',
      name: 'Kofi Boakye',
      location: 'Kwashieman'
    },
    {
      key: '5',
      name: 'Nana Danso',
      location: 'Osu'
    },
    {
      key: '6',
      name: 'Cynthia Mills',
      location: 'Labadi'
    },
    {
      key: '7',
      name: 'Yaw Antwi',
      location: 'Sakumono'
    },
    {
      key: '8',
      name: 'Ivana Yeboah',
      location: 'Lapaz'
    },
    {
      key: '9',
      name: 'Kelvin Mills',
      location: 'Sakaman'
    },
    {
      key: '10',
      name: 'Priscilla Ansah',
      location: 'Dansoman'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
        
            <View style={styles.headingDiv}>
              <Text style={styles.headingText}>Patients List</Text>
              <View style={styles.headingButtonDiv}>
                <TouchableOpacity 
                  style={[styles.headingButton, styles.elevation]}
                  activeOpacity={0.6}
                  onPress={()=>navigation.goBack()}
                >
                    <Entypo name="chevron-left" size={22} color={primaryColor} />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.headingButton, styles.elevation]}
                  activeOpacity={0.6}
                  onPress={()=> console.log(navigation)} 
                >
                    <Entypo name="chevron-right" size={22} color={primaryColor} />
                </TouchableOpacity>
              </View>
            </View>
            <SearchBar />
            <View style={styles.listDiv}>
              <FlatList
                showsVerticalScrollIndicator={false}  
                data={Items}
                renderItem={({item})=> (
                    <PatientsInfoPanel navigation={navigation} item={item} />  
                )} 
              />
            </View>
    </SafeAreaView>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  headingDiv: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 18,
    color: primaryColor,
    fontWeight: '800',
  },
  headingButton: {
    borderRadius: 50,
    backgroundColor: '#FFF',
    height: 28,
    width: 28,
    borderWidth: 1,
    borderColor: '#00000010',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  headingButtonDiv: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 6,
  },
  listDiv: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingBottom: 0
  },
});
