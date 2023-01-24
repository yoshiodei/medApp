import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import ActivityPanel from '../Components/ActivityPanel';
import { connect } from 'react-redux';
import ActivityModal from '../Components/ActivityModal';
import DetailPanel from '../Components/DetailPanel';
import { useState } from 'react';

const Home = ({navigation, patients}) => {

  const [showVisitList, setShowVisitList] = useState(false);
  
  const primaryColor = '#586F6B';
  const userName = 'Peggy Baffoe';

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
            <TouchableOpacity 
              style={styles.serviceButton}
              activeOpacity={0.6}
              onPress={()=> { navigation.navigate('ServiceHistory') } }
            >
                <Text style={styles.serviceText}>Service History</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.serviceButton}
              activeOpacity={0.6}
              onPress={()=> { navigation.navigate('Schedules') } }
            >
                <Text style={styles.serviceText}>Schedules</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.userNameText}>{patients[1].name}</Text>
            <TouchableOpacity style={styles.avaibilityButton}>
                <Text style={styles.avaibilityText}>Availability</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.activitiesDiv}>
          <View style={styles.activities}>
            <Text style={styles.sectionHeading}>Select Today's Activity</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activitiesScrollDiv}>
        
                <ActivityPanel topText='Make' bottomText='New Visit' onPress={() =>setShowVisitList(true)} />
                <ActivityPanel topText='Start' bottomText='New Care' />
                <ActivityPanel topText='View' bottomText='Patient Details' />
                <ActivityPanel topText='View' bottomText='Patient History' />
              
              <View style={styles.activityPanelPlaceholder}></View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.recentActivity}>
          <Text style={styles.recentActivitySectionHeading}>Recent Activity</Text>
          <DetailPanel 
             title='Made Visit'
             titleDetail='Abraham Inkoom'
             footerText='September 3rd, 2022 - 9:55 am'
          />
        </View>
        <ActivityModal  onClose={() => {setShowVisitList(false)}} Items={patients} showVisitList={showVisitList} /> 
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
  
});

const mapStateToProps = (state) => {
  return {
    patients: state.reducer.patients
  }
}

export default connect(mapStateToProps)(Home);