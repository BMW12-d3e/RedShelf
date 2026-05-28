import React from 'react'
import { Tabs } from 'expo-router'
import { BookPlus, Library, BookUser, User, Store, ShoppingCart, BadgeCent } from 'lucide-react-native'

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
                    tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="shopping-cart"
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color, size }) => <ShoppingCart color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="check-out"
                options={{
                    title: 'Checkout',
                    tabBarIcon: ({ color, size }) => <BadgeCent color={color} size={size} />,
                }}
            />
        </Tabs>
    )
}
