import '@/global.css';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Link, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Book, Cog, House, LogOut, MoonStarIcon, SunIcon, User } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

export { ErrorBoundary } from 'expo-router';


function HeaderActions() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center gap-1 mr-2">

      <Link href="/profile/login" asChild>
        <Button size="icon" variant="ghost">
          <Icon as={LogOut} className="size-5" />
        </Button>
      </Link>


      <Link href="/profile/index" asChild>
        <Button size="icon" variant="ghost">
          <Icon as={User} className="size-5" />
        </Button>
      </Link>

      <Button
        onPressIn={toggleColorScheme}
        size="icon"
        variant="ghost"
        className="ios:size-9 rounded-full">
        <Icon as={colorScheme === 'dark' ? MoonStarIcon : SunIcon} className="size-5" />
      </Button>
      <Link href="/settingsPage" asChild>
        <Button size="icon" variant="ghost">
          <Icon as={Cog} className="size-5" />
        </Button>
      </Link>
    </View>
  );
}

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (

    <Tabs screenOptions={{
      headerShown: true,
      headerRight: () => <HeaderActions />,
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
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}