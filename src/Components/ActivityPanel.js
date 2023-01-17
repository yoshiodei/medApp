import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ActivityPanel({topText, bottomText, onPress}) {

  return (
    <TouchableOpacity 
        style={styles.activityPanel}
        activeOpacity={0.6}
        onPress={onPress}
    >
        <Text style={styles.activityPanelText}>{topText}</Text>
        <Text style={styles.activityPanelText}>{bottomText}</Text>
    </TouchableOpacity>
  );
}

const primaryColor = '#586F6B';
const primaryColorLight = '#ABB6B4';
const midPrimaryColor = '#F2F2F2';

const styles = StyleSheet.create({
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
});
