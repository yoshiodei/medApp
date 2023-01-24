import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ScreenHeading({Title, navigation}) {

  const primaryColor = '#586F6B';  

  return (
    <View style={styles.headingView}>
        <Text style={styles.headingText}>{Title}</Text>
        <View style={styles.headingButtonView}>
            <TouchableOpacity 
                style={[styles.headingButton, styles.elevation]}
                activeOpacity={0.6}
                onPress={()=>navigation.goBack()}
            >
                <Entypo name="chevron-left" size={22} color={primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.headingButton, styles.elevation, {opacity: 0.6}]}
                activeOpacity={0.6}
                onPress={()=> console.log(navigation)} 
            >
                <Entypo name="chevron-right" size={22} color={primaryColor} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const primaryColor = '#586F6B';

const styles = StyleSheet.create({
    headingView: {
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
      headingButtonView: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between',
      },
      elevation: {
        shadowColor: 'black',
        elevation: 6,
      },
});
