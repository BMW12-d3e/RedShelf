import React from 'react'
import { Tabs } from 'expo-router'
import { BookPlus, Library, BookUser, Store } from 'lucide-react-native'

export default function bookLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: colors.active,
                // tabBarInactiveTintColor: colors.inactive,
                // tabBarStyle: {
                //     backgroundColor: colors.background,
                //     borderTopColor: colors.border,
                // },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Bookshelf',
                    tabBarIcon: ({ color, size }) => <Library color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="addBook"
                options={{
                    title: 'Add Books',
                    tabBarIcon: ({ color, size }) => <BookPlus color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="recommendations"
                options={{
                    title: 'Recommendations',
                    tabBarIcon: ({ color, size }) => <BookUser color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="shop" 
                options={{
                    title: 'Book Shop',
                    tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
                    // href: null,
                }}
            />
        </Tabs>
    )
}
