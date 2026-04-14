import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View } from 'react-native';


export default function Screen() {


  return (
    <>
<Link href = 'login'>
<Button>
<Text>
login
</Text>
</Button>
 </Link>

 <Link href = 'signUp'>
 <Button>
 <Text>
 signUp
 </Text>
 </Button>
  </Link>
    </>
  );
}
