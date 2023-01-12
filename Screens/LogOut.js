import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function LogOut() {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headingText}>LogOut</Text>
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
