import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello hasan wellcome back to react native project</Text>
      {/* <Button>Hello</Button> */}
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Text style={styles.whiteText}>this is view inside of view</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    flex: 1,
    backgroundColor: '#E16A3D',
    textColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 30,
    maxHeight: 50,
    maxWidth: 300
  },
  whiteText: {
    color: '#FAFAFA'
  }
});
