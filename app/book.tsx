import { SignInForm } from '@/components/sign-in-form'
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { BookPlus } from 'lucide-react-native';
import { View } from 'react-native';

export default function BookScreen() {
  return (
    <>
      <View>

        <View>
          <Link className="m-2" href='/create-book'>
            <Button>
              <BookPlus color={'white'} />
              <Text>
                Hinzufügen
              </Text>
            </Button>
          </Link>
        </View>
        <View>  </View>
      </View>
    </>
  );
}