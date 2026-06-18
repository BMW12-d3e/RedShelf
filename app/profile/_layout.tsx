import React from 'react'
import { Tabs } from 'expo-router'
import { Store, ShoppingCart, BadgeCent } from 'lucide-react-native'

export default function bookLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'profile',
                    tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="Login"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="Signup"
                options={{
                    title: 'Sign up',
                    tabBarIcon: ({ color, size }) => <ShoppingCart color={color} size={size} />,
                }}
            />
        </Tabs>
    )
}
