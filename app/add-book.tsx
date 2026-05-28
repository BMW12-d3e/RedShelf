import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function App() {
  const [title, setTitle] = useState('');
  const [isbn, setISBN] = useState('');
  const [booktype, setBookType] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <View style={styles.container}>
      <Label htmlFor="title">Title</Label>
      <Input style={styles.input} id="title" placeholder="Dr.Stone 1" onChangeText={setTitle} />
      <Label htmlFor="isbn">ISBN</Label>
      <Input style={styles.input} id="isbn" placeholder="ISBN 978-3-551-73246-0" onChangeText={setISBN} />
      <Label htmlFor="booktype">Art des Buch</Label>
      <Input style={styles.input} id="booktype" placeholder="Manga" onChangeText={setBookType} />
      <Label htmlFor="author">Autor</Label>
      <Input style={styles.input} id="author" placeholder="Riichiro Inagaki" onChangeText={setAuthor} />
      {/* <Button variant='' size='' onPress={()=> console.log('Buch wurde gespeichert')}><Text>Add</Text></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    height: 120,
  },
});