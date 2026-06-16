import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Book, House, User } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs screenOptions={{
        headerShown: true,
        // headerLeft: ,
      }}>
        <Tabs.Screen
          name="book"
          options={{
            title: 'Books',
            tabBarIcon: ({ color, size }) => <Book color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile/login"
          options={{
            title: 'Profile',
            href: null
          }}
        />
        <Tabs.Screen
          name="profile/signUp"
          options={{
            title: 'Profile',
            href: null
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
      </Tabs>

      <PortalHost />
    </ThemeProvider>
  );
}
