import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Platform} from 'react-native';

export default function Help({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headingText}>Help Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
});
