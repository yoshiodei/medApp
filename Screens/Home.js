import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  
// import DropShadow from "react-native-drop-shadow";

export default function Home({navigation}) {

  const [showVisitList, setShowVisitList] = useState(false);

  const primaryColor = '#586F6B';
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
    }
  ];

  const showDrawer = () => {
    console.log(navigation)
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.services}>
          <TouchableOpacity 
            style={styles.serviceButton}
            activeOpacity={0.6}
            onPress={()=> { navigation.navigate('Patients') } }
            >
            <Text style={styles.serviceText}>Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceText}>Service History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceText}>Schedules</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userNameText}>{userName}</Text>
          <TouchableOpacity style={styles.avaibilityButton}>
              <Text style={styles.avaibilityText}>Availability</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activitiesDiv}>
          <View style={styles.activities}>
            <Text style={styles.sectionHeading}>Select Today's Activity</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activitiesScrollDiv}>
              <TouchableOpacity 
                style={styles.activityPanel}
                activeOpacity={0.6}
                onPress={()=>{setShowVisitList(true)}}
              >
                <Text style={styles.activityPanelText}>Make</Text>
                <Text style={styles.activityPanelText}>New Visit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>Start</Text>
                <Text style={styles.activityPanelText}>New Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>View</Text>
                <Text style={styles.activityPanelText}>Patient Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>View</Text>
                <Text style={styles.activityPanelText}>Patient History</Text>
              </TouchableOpacity>
              <View style={styles.activityPanelPlaceholder}></View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.recentActivity}>
          <Text style={styles.recentActivitySectionHeading}>Recent Activity</Text>
          <View style={[styles.recentActivityPanel, styles.elevation]}></View>
        </View>
        <Modal
          visible={showVisitList}
          onRequestClose={() => {setShowVisitList(false)}}
          transparent
          animationType='slide'
        >
          <View style={styles.modalView}>
            <View style={styles.modalViewWrapper}>
              <View style={styles.modalInnerView}>
                <Text style={styles.modalHeading}>Select Patient To Visit</Text>
                <TouchableOpacity onPress={() => setShowVisitList(false)} >
                  <MaterialIcons name="cancel" size={25} color={primaryColor} />
                </TouchableOpacity>
              </View>
              <TextInput 
                style={styles.modalInput} 
                placeholder='Search user by name or by location' 
              />
            </View>
            <FlatList 
            data={Items}
            renderItem = {({item}) => (
              <View style={styles.listItemWrapper}>
                <View style={styles.listItem}>
                  <View style={styles.listItemInnerDiv}>
                    <View style={styles.listItemImage}></View>
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
            )}
          />
          </View>
          
        </Modal> 
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
  header: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImgDiv : {
    height: 37,
    width: 37,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  boxShadow: {
    shadowOffset: {
      width:10, 
      height:10
    },  
    shadowColor:'black',  
    shadowOpacity:0.8,  
    shadowRadius:2,
  },
  // logoText: {
  //   fontSize: 20,
  //   fontWeight: '700',
  //   color: primaryColor,
  // },
  services: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: midPrimaryColor,
  },
  serviceText: {
    fontSize: 14,
    color: primaryColor,
  },
  serviceButton: {
    marginHorizontal: 15,
  },
  userInfo:{
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  userNameText:{
    fontSize: 16,
    fontWeight: '500',
    color: primaryColor,
  },
  avaibilityButton: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItem: 'center',
    borderRadius: 50,
    backgroundColor: primaryColor,
  },
  avaibilityText: {
    color: 'white',
    fontSize: 14,
  }, 
  activitiesDiv: {
    width: '100%',
    flex: 4,
  },
  activities:{
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 30,
  },
  sectionHeading: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '800',
    marginBottom: 10,
    color: primaryColor,
  },
  activitiesScrollDiv: {
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 10,
  },
  activityPanel: {
    width: 150,
    flex: 1,
    borderRadius: 8,
    backgroundColor: primaryColorLight,
    marginHorizontal: 6,
    padding: 10
  },
  activityPanelText: {
    fontSize: 19,
    color: '#FFF',
    fontWeight: '700',
  },
  activityPanelPlaceholder: {
    width: 25,
    flex: 1,
  },
  recentActivity: {
    flex: 3,
    width: '100%',
    alignContent: 'flex-start', 
    paddingHorizontal: 20,  
    paddingBottom: 20, 
  },
  recentActivitySectionHeading: {
    color: primaryColor,
    fontWeight: '800',
    marginBottom: 15,
    fontSize: 20,
  },
  recentActivityPanel : {
    width: '100%',
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000010',
    backgroundColor: '#FFF',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 5,
  },
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF50',
    marginBottom: 20,
  },
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
