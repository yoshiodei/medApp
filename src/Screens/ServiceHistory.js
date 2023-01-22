import { SafeAreaView, StyleSheet, SectionList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ServiceHistory({navigation}) {


    const HistoryData = [
        { 
            title: 'September, 2022',
            data: [
                {
                    date: '18 Sept',
                    time: '1:45 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Eunice Safoa',
                },
                {
                    date: '21 Sept',
                    time: '10:30 am',
                    activityTitle: 'Complete Visit',
                    activityDetail: 'Completed visit to patient, Abena Kwarkye',
                },
                {
                    date: '21 Sept',
                    time: '1:15 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Abena Kwarkye',
                }
            ]
        },
        { 
            title: 'October, 2022',
            data: [
                {
                    date: '3 Oct',
                    time: '1:45 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Jonas Ansah',
                },
                {
                    date: '4 Oct',
                    time: '11:40 am',
                    activityTitle: 'Complete Visit',
                    activityDetail: 'Completed visit to patient, Albert Antwi',
                }
            ]
        },
        { 
            title: 'November, 2022',
            data: [
                {
                    date: '14 Nov',
                    time: '2:50 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Isaac Larbi',
                },
                {
                    date: '15 Nov',
                    time: '9:40 am',
                    activityTitle: 'Complete Visit',
                    activityDetail: 'Completed visit to patient, Clement Hayford',
                },
                {
                    date: '15 Nov',
                    time: '4:00 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Clement Hayford',
                },
                {
                    date: '23 Nov',
                    time: '10:20 am',
                    activityTitle: 'Complete Visit',
                    activityDetail: 'Completed visit to patient, James Ofori',
                }
            ]
        },
        { 
            title: 'December, 2022',
            data: [
                {
                    date: '17 Dec',
                    time: '1:00 pm',
                    activityTitle: 'Complete Care',
                    activityDetail: 'Finished rendering care to patient, Kwame Boadi',
                }
            ]
        },
    ];

  
  return (
    <SafeAreaView style={styles.container}>
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
        <SectionList
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item, index) => index.toString()}
            sections={HistoryData}
            renderSectionHeader={({section})=>(
                <View style={styles.sectionHeaderView}>
                    <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
            )}
            renderItem={({item})=>(
                <View style={styles.sectionItemView}>
                    <View style={styles.sectionItemDateView}>
                        <Text>{item.date}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.sectionItemIconView}>
                        <View style={styles.sectionItemIconInnerView}>
                            <FontAwesome name="check" size={18} color="#FFF" />
                        </View>
                    </View>
                    <View style={styles.sectionItemDetailView}>
                        <Text style={styles.activityTitle}>{item.activityTitle}</Text>
                        <Text style={styles.activityDetail}>{item.activityDetail}</Text>
                    </View>
                </View>
            )}
        />
    </SafeAreaView>
  );
}

const primaryColor = '#586F6B';
const dangerColor = '#FABCBC';
const primaryColorLight = '#ABB6B4';
const dangerTextColor = '#D02121'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  sectionHeaderView: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 4,
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  sectionItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  sectionItemDetailView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'auto',
    flex: 6,
    paddingLeft: 15,
  },
  sectionItemIconlView: {
    height: 'auto',
    flex: 1
  },
  sectionItemDateView: {
    height: 'auto',
    flex: 2.5
  },
  sectionItemIconInnerView: {
    backgroundColor: primaryColor,
    height: 28,
    width: 28,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityTitle: {
    lineHeight: 20,
    color: primaryColor,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 3,
  },
  activityDetail: {
    fontSize: 14,
    fontWeight: '500',
    color: primaryColor
  },
});
