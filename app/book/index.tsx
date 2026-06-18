import React from 'react'
import { Text } from '@/components/ui/text'
import { ScrollView, View } from 'react-native';
import { Book, BookCard } from '@/components/book-card';

const SAMPLE_BOOKS: Book[] = [
    {
        title: 'Der Prozess',
        author: 'Franz Kafka',
        isbn: '978-3-15-009476-7',
        coverUri: 'https://covers.openlibrary.org/b/isbn/9783150096767-M.jpg',
        description:
            'Josef K. wird eines Morgens verhaftet, ohne dass er weiß, was ihm vorgeworfen wird.',
    },
    {
        title: 'Faust I',
        author: 'Johann Wolfgang von Goethe',
        isbn: '978-3-15-000501-3',
        description: 'Das Meisterwerk der deutschen Literatur.',
    },
    {
        title: "Aaron's erster Buch",
        author: 'Aaron Eli Roth',
        isbn: '978-3-15-000301-3',
        description: 'Nein tuhe ich nicht :)',
    },{
        title: 'Der Prozess',
        author: 'Franz Kafka',
        isbn: '978-3-15-009276-7',
        coverUri: 'https://covers.openlibrary.org/b/isbn/9783150096767-M.jpg',
        description:
            'Josef K. wird eines Morgens verhaftet, ohne dass er weiß, was ihm vorgeworfen wird.',
    },
    {
        title: 'Faust I',
        author: 'Johann Wolfgang von Goethe',
        isbn: '978-3-15-000701-3',
        description: 'Das Meisterwerk der deutschen Literatur.',
    },
    {
        title: "Aaron's erster Buch",
        author: 'Aaron Eli Roth',
        isbn: '978-3-15-000801-3',
        description: 'Nein tuhe ich nicht :)',
    },{
        title: 'Der Prozess',
        author: 'Franz Kafka',
        isbn: '978-3-15-009976-7',
        coverUri: 'https://covers.openlibrary.org/b/isbn/9783150096767-M.jpg',
        description:
            'Josef K. wird eines Morgens verhaftet, ohne dass er weiß, was ihm vorgeworfen wird.',
    },
    {
        title: 'Faust I',
        author: 'Johann Wolfgang von Goethe',
        isbn: '978-3-15-007001-3',
        description: 'Das Meisterwerk der deutschen Literatur.',
    },
    {
        title: "Aaron's erster Buch",
        author: 'Aaron Eli Roth',
        isbn: '978-3-15-005001-3',
        description: 'Nein tuhe ich nicht :)',
    },{
        title: 'Der Prozess',
        author: 'Franz Kafka',
        isbn: '978-3-15-049676-7',
        coverUri: 'https://covers.openlibrary.org/b/isbn/9783150096767-M.jpg',
        description:
            'Josef K. wird eines Morgens verhaftet, ohne dass er weiß, was ihm vorgeworfen wird.',
    },
    {
        title: 'Faust I',
        author: 'Johann Wolfgang von Goethe',
        isbn: '978-3-15-0200001-3',
        description: 'Das Meisterwerk der deutschen Literatur.',
    },
    {
        title: "Aaron's erster Buch",
        author: 'Aaron Eli Roth',
        isbn: '978-3-15-100001-3',
        description: 'Nein tuhe ich nicht :)',
    },
];

export default function index() {
    return (
        <View>
            <View>
                <Text>Welcome to the Books Page </Text>
            </View>
            <ScrollView className="flex-1">
                <View className="p-4 gap-4">
                    <Text variant="h3">Your Library</Text>
                    {SAMPLE_BOOKS.map((book) => (
                        <BookCard key={book.isbn} book={book} />
                    ))}
                </View>
            </ScrollView>
  

        </View>
    )
}
