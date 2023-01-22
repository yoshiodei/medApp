import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CancelVisitModal from '../Components/CancelVisitModal';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location'; 
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';


export default function TestMap({navigation}) {

  const GOOGLE_MAPS_API_KEY = '';

  let initialRegion = {
    latitude:  5.614818,
    longitude: -0.205874,
    latitudeDelta: 0.0922,  
    longitudeDelta: 0.0421,
  };

  let destination = { 
    latitude:  37.392036,
    longitude: -122.103922,
    latitudeDelta: 0.0922,  
    longitudeDelta: 0.0421,
  }

  const [mapRegion, setMapRegion] = useState(initialRegion); 
  
  const [openModal, setOpenModal] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();;
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      } 

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true}); 
      setMapRegion ({
        longitude: location.coords.longitude, 
        latitude: location.coords.latitude,
        latitudeDelta: 0.0922,  
        longitudeDelta: 0.0421,
      });

      const locations = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (newLocation) => {
        setMapRegion({
            longitude: newLocation.coords.longitude, 
            latitude: newLocation.coords.latitude,
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,
          });

          console.log('new location value, Latitude:', newLocation.coords.latitude, ' Longitude:', newLocation.coords.longitude);
      });

      console.log('const location value', locations);
    
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }




  return (
    <SafeAreaView style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                zoomControlEnabled={true}  
                region={mapRegion}
                initialRegion={initialRegion}
            >
              <Marker  
                  coordinate={mapRegion}  
                  title={"Peggy Baffoe"}   
                  description={"My current location"}  
              />
            </MapView>
            <View style={styles.cancelVisitDiv}>
                <View style={styles.cancelVisitTextDiv}>
                    <Text style={styles.distanceText}>13. 3 km ( 1 hr 43 min)</Text>
                    <Text style={styles.routeText}>Fastest route to destination</Text>
                    {/* <Text>{text}</Text> */}
                </View>
                
                <TouchableOpacity 
                    style={styles.cancelVisitButton}
                    onPress={()=> setOpenModal(true)}
                    activeOpacity={0.6}
                >
                    <Text style={styles.cancelVisitText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <CancelVisitModal 
              openModal={openModal} 
              setOpenModal={setOpenModal}
              navigation={navigation} 
            />
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
    map: {
      width: '100%',
      flex: 8,
    },
    marker: {
      width: 24,
      height: 24,
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: primaryColor,
      borderWidth: 2,
    },
    cancelVisitDiv: {
      width: '100%',
      flex: 2,
      padding: 20,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    distanceText: {
      fontWeight: '600',
      fontSize: 23,
      color: primaryColor
    },
    routeText: {
      color: primaryColor,
      fontSize: 16
    },
    cancelVisitTextDiv:{
        alignItems: 'flex-start',
        width: '100%',
    },
    cancelVisitButton: {
      height: 40,
      width: '70%',
      borderRadius: 50,
      backgroundColor: dangerColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelVisitText: {
      color: dangerTextColor,
      fontSize: 18,
      fontWeight: '600'
    },
});



    //  Coords for Awoshie

    // latitude: 5.614818,
    // longitude: -0.205874,
    // latitudeDelta: 0.0080,  
    // longitudeDelta: 0.0001,