import {
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/contexts/AppContext';

const Drawer = (props: any) => {
  const [useDarkTheme, setUseDarkTheme] = useContext(ThemeContext);

  useEffect(() => {
    // props.navigation.openDrawer();
  }, []);

  const onNavigate = (slug: string) => {
    props.navigation.navigate(slug);
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%' }}></ScrollView>
    </SafeAreaView>
  );
};

function Menu({
  title,
  slug,
  onPress,
}: {
  title: string;
  slug: string;
  onPress: (slug: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.drawerMenu} onPress={() => onPress(slug)}>
      <Text style={{ fontSize: 20, color: 'black' }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Drawer;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5,
    marginVertical: 10,
  },
  actionButtonIcons: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,0.3)',
  },
  drawerMenu: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 5,
  },
  drawerIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250,250,250,0.3)',
  },
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});
