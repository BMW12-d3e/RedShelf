import { SignInForm } from '@/components/sign-in-form'
import { StyleSheet, View, TextInput, ScrollView} from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
export default function BookPage() {
            return (
    <>
   <Text className="text-3xl"> Book</Text>
       <View>
                    <Link className="m-2" href='/add-book'>
                      <Button>
                        <Text>
                          add book
                        </Text>
                      </Button>
                    </Link>
                  </View>
    </>
  );
}
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
//
// export default function App() {
//   const [titel, setTitel] = useState('');
//   const [isbn, setIsbn] = useState('');
//   const [reihe, setReihe] = useState('Fantasy'); // Standardwert
//
//   const speichern = () => {
//     console.log(`Buch: ${titel}, Reihe: ${reihe}, ISBN: ${isbn}`);
//     alert('Buch gespeichert!');
//   };
//
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.label}>Buchname:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="z.B. Harry Potter"
//         value={titel}
//         onChangeText={setTitel}
//       />
//
//       <Text style={styles.label}>Buchreihe (Auswahl):</Text>
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={reihe}
//           onValueChange={(itemValue) => setReihe(itemValue)}
//         >
//           <Picker.Item label="Fantasy" value="Fantasy" />
//           <Picker.Item label="Krimi" value="Krimi" />
//           <Picker.Item label="Sachbuch" value="Sachbuch" />
//           <Picker.Item label="Roman" value="Roman" />
//         </Picker>
//       </View>
//
//       <Text style={styles.label}>ISBN Nummer:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="z.B. 978-3-16-148410-0"
//         value={isbn}
//         keyboardType="numeric"
//         onChangeText={setIsbn}
//       />
//
//       <View style={{ marginTop: 20 }}>
//         <Button title="Buch hinzufügen" onPress={speichern} color="#007AFF" />
//       </View>
//     </ScrollView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 40,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     fontSize: 16,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
// });
