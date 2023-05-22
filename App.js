import { StatusBar } from 'expo-status-bar';
import QrScanner from './components/qr scanner/QrScanner';
import { StyleSheet, Text, View,Button } from 'react-native';
import { ScrollView } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import { useEffect, useState } from 'react';
export default function App() {
  // const [hasPermission, setHasPermission] = useState(null)
  // const [scanned,setScanned] = useState(false)
  // const [text,setText] = useState('')

  // useEffect(() => {
  //   const getBarCodeScannerPermissions = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   };

  //   getBarCodeScannerPermissions();
  // },[])
  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   setText(data)
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return (
  //   <View style={styles.container}>
  //     <Text style={{ margin: 10 }}>No access to camera</Text>
  //     <Button title={'Allow Camera'} onPress={async() => {
  //       const {status} = await BarCodeScanner.requestPermissionsAsync();
  //       setHasPermission(status === 'granted')
  //     } } />
  //   </View>
  // )
  // }

  return (
    // <ScrollView>
      <View style={styles.container}>
      <QrScanner/>
      {/* <Text style={styles.title}>
        Scan Aplikasi Ini
      </Text>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
        <Text style={styles.maintext}>{text}</Text>

        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='green' />} */}
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // maintext: {
  //   fontSize: 16,
  //   margin: 20,
  // },
  // barcodebox: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 300,
  //   width: 300,
  //   overflow: 'hidden',
  //   borderRadius: 30,
  //   backgroundColor: 'tomato'
  // },
  // title :{
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   textAlign: 'center',
  //   marginBottom: 20
  // }
});
