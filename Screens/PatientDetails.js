import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';
import { Entypo, MaterialIcons, SimpleLineIcons, FontAwesome} from '@expo/vector-icons';

export default function Home({navigation}) {

  
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
          <View style={styles.patientDetailsTopDiv}>
            <View style={styles.patientDetailsTopInnerDiv}>
                <View style={styles.patientDetailsNavigation} >
                    <View style={styles.navigationButtonDiv}>
                        <TouchableOpacity 
                        style={[styles.navigationButton, styles.elevation]}
                        activeOpacity={0.6}
                        onPress={()=>navigation.goBack()}
                        >
                            <Entypo name="chevron-left" size={22} color={primaryColor} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={[styles.navigationButton, styles.elevation]}
                        activeOpacity={0.6}
                        onPress={()=>{}}
                        >
                            <Entypo name="chevron-right" size={22} color={primaryColor} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.patientDetailsInfo]}>
                    <View style={styles.patientInfoLeftDiv}>
                        <View style={styles.patientInfoImageDiv}>
                            <SimpleLineIcons name="user" size={20} color='#FFFFFF' />
                        </View>
                        <View style={styles.patientInfoTextDiv}>
                            <Text style={styles.patientInfoNameText}>Peggy Baffoe</Text>
                            <Text style={styles.patientInfoLocationText}>Pokuase</Text>
                        </View>
                    </View>
                    <View style={styles.patientInfoRightDiv}>
                        <TouchableOpacity 
                            style={styles.patientInfoButtonDiv}
                            activeOpacity={0.6}
                         >
                                <Text style={styles.patientInfoButtonText}>Start Visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.patientDetailsButtonDiv}>
                    <View style={styles.patientDetailsButtonInnerDiv} >
                        <TouchableOpacity 
                            style={styles.detailActionDiv}
                            activeOpacity={0.6}
                        >
                            <View style={styles.detailActionIcon}>
                                <Entypo name="phone" size={24} color={primaryColor} />
                            </View>
                            <Text style={styles.detailActionText}>Call</Text>
                        </TouchableOpacity>
                        <View style={styles.verticalBar} ></View>
                        <TouchableOpacity 
                            style={styles.detailActionDiv}
                            activeOpacity={0.6}
                        >
                            <View style={styles.detailActionIcon}>
                                <FontAwesome name="whatsapp" size={24} color={primaryColor} />
                            </View>
                            <Text style={styles.detailActionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <View style={styles.verticalBar}></View>
                        <TouchableOpacity 
                            style={styles.detailActionDiv}
                            activeOpacity={0.6}
                        >
                            <View style={styles.detailActionIcon}>
                                <MaterialIcons name="email" size={24} color={primaryColor} />
                            </View>
                            <Text style={styles.detailActionText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
          <View style={styles.patientDetailsBottomDiv}>
            <View style={styles.patientDetailsHeadingDiv}>
                <Text style={styles.patientDetailsHeadingText}>Patient Details</Text>
            </View>  
            <View style={styles.patientLocationDiv}>
                <View style={[styles.patientDetailsPanel, styles.elevation]}>
                    <View style={styles.panelTopDiv}>
                        <View style={styles.panelTopIcon}>
                        <Entypo name="location-pin" size={28} color='#FFF' />
                        </View>
                        <View style={styles.panelTopTextDiv}>
                            <Text style={styles.panelTopTextLarge}>Patient Location</Text>
                            <Text style={styles.panelTopTextSmall}>Awoshie</Text>
                        </View>
                    </View>
                    <View style={styles.panelBottomDiv}>
                        <Text style={styles.panelBottomText}>Near Odogornno Senior High School.</Text>
                    </View>
                </View>
            </View>  
            <View style={styles.patientServiceDateDiv}>
                <View style={[styles.patientDetailsPanel, styles.elevation]}>
                <View style={styles.panelTopDiv}>
                        <View style={styles.panelTopIcon}>
                        <MaterialIcons name="date-range" size={26} color='#FFF' />
                        </View>
                        <View style={styles.panelTopTextDiv}>
                            <Text style={styles.panelTopTextLarge}>Service Date</Text>
                            <Text style={styles.panelTopTextSmall}>September 3rd, 2022</Text>
                        </View>
                    </View>
                    <View style={styles.panelBottomDiv}>
                        <Text style={styles.panelBottomText}>HHA - Hourly</Text>
                    </View>
                </View>
            </View>  
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
    patientDetailsTopDiv: {
      flex: 4,
      width: '100%',
    //   backgroundColor: 'dimgrey',
    },
    patientDetailsTopInnerDiv:{
      width: '100%',
      flex: 1,
      borderBottomEndRadius: 35,
      borderBottomStartRadius: 35,
      backgroundColor: 'white', 
      overflow: 'hidden', 
    },
    patientDetailsNavigation: {
      flex: 0.8,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    navigationButtonDiv:{
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between',
    },
    navigationButton:{
        borderRadius: 50,
        backgroundColor: '#FFF',
        height: 28,
        width: 28,
        borderWidth: 1,
        borderColor: '#00000010',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    patientDetailsInfo: {
      flex: 1.1,
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    patientInfoLeftDiv:{
      flexDirection: 'row',
      height: '100%',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    patientInfoImageDiv: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: primaryColorLight,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    patientInfoNameText: {
        fontSize: 16,
        fontWeight: '500',
        color: primaryColor,
    },
    patientInfoLocationText: {
        fontSize: 12,
        color: primaryColor,
    },
    patientInfoButtonDiv: {
        paddingHorizontal: 13,
        paddingVertical: 2,
        borderRadius: 50,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      },
      patientInfoButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF',
      },
    patientDetailsButtonDiv: {
      flex: 2.1,
      //   backgroundColor: primaryColorLight,
      padding: 20
    },
    patientDetailsButtonInnerDiv:{
        backgroundColor: primaryColor,
        flex: 1,
        height: '100%',
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    detailActionDiv:{
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailActionIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FFF',
    },
    detailActionText: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: '600',
    },
    verticalBar:{
        width: 2,
        height: '100%',
        backgroundColor: '#FFFFFF60',
    },
    elevation: {
        shadowColor: 'black',
        elevation: 5,
    },
    patientDetailsBottomDiv: {
        flex: 6,
        width: '100%',
        padding: 20,
    },
    patientDetailsHeadingDiv: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flex: 1,
        width: '100%',
        marginBottom: 10,
    },
    patientDetailsHeadingText: {
        color: primaryColor,
        fontWeight: '800',  
        fontSize: 20,
    },
    patientLocationDiv: {
        width: '100%',
        flex: 3,
        justifyContent: 'flex-start',
    },
    patientServiceDateDiv: {
        width: '100%',
        flex: 3,
        justifyContent: 'flex-end',
    },
    patientDetailsPanel: {
        width: '100%',
        height: '95%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00000010',
        backgroundColor: '#FFF',
    },
    panelTopDiv: {
        flex: 1.5,
        width: '100%',
        padding: 10,
        borderBottomColor: primaryColorLight,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    panelTopIcon: {
        borderRadius: 50,
        backgroundColor: primaryColorLight,
        width: 50,
        height: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    panelTopTextLarge: {
        fontSize: 18,
        fontWeight: '700',
        color: primaryColor,
    },
    panelTopTextSmall: {
        color: primaryColor,
    },
    panelBottomText: {
        color: primaryColor,
    },
    panelBottomDiv: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
  })