import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { Book, LogIn, LogOut } from 'lucide-react-native';
import * as React from 'react';

export default function Screen() {


  return (
    <>
      <Link href='/login'>
        <Button>
          <Text className='flex flex-row'>
            login
            <LogIn />
          </Text>
        </Button>
      </Link>

      <Link href='/signUp'>
        <Button>
          <Text className='flex flex-row'>
            signUp
            <LogOut /> 
          </Text>
        </Button>
      </Link>
      <Link href='/book'>
        <Button>
          <Text className='flex flex-row'>
            Zu den Büchern
            <Book />
          </Text>
        </Button>
      </Link>
    </>
  );
}
