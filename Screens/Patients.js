import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';
import { Entypo, SimpleLineIcons, Feather} from '@expo/vector-icons';

export default function Patients({navigation}) {

  const [showVisitList, setShowVisitList] = useState(false);

  const primaryColor = '#586F6B';
  const primaryColorLight = '#ABB6B4';
  const userName = 'Peggy Baffoe';
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


  // const generateBoxShadowStyle = (
  //   xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation,
  //   shadowColorAndroid 
  // ) => {
  //   if (Platform.OS === 'ios') {
  //       styles.boxShadow = {
  //           shadowColor: shadowColorIos,
  //           shadowOpacity,
  //           shadowRadius,
  //           shadowOffset: {width: xOffset, height: yOffset},
  //       };
  //   } else if (Platform.OS === 'android') {
  //       styles.boxShadow = {
  //           elevation, shadowColor: shadowColorAndroid,
  //       };
  //   }
  // }

//   generateBoxShadowStyle(-2,4,'black',0.2,3,4,'black')

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
                  onPress={()=>{}}
                >
                    <Entypo name="chevron-right" size={22} color={primaryColor} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputDiv}>
              <Feather name="search" 
                size={24} 
                color={primaryColorLight}
                style={styles.inputIcon}
              />
              <TextInput placeholder='Search patient by name or location' style={[styles.patientsInput, styles.elevation]}/>
            </View>
            <View style={styles.listDiv}>
              <FlatList
                showsVerticalScrollIndicator={false} 
                data={Items}
                renderItem={({item})=> (
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
  listDiv: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingBottom: 0
  },
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
