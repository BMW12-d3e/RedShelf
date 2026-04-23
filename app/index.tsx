import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';


export default function Screen() {


  return (
    <>
      <View>

        <Link className="m-2" href='/login'>
          <Button>
            <Text>
              login
            </Text>
          </Button>
        </Link>
      </View>

      <View>
        <Link className="m-2" href='/signUp'>
          <Button>
            <Text>
              signUp
            </Text>
          </Button>
        </Link>
      </View>
      <View>
        <Link className="m-2" href='/book'>
          <Button>
            <Text>
              zu den Büchern
            </Text>
          </Button>
        </Link>
      </View>
    </>
  );
}
