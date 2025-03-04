import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, CreditCard, MapPin, Bell, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

const PROFILE_IMAGE = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80';

const MenuItem = ({ icon: Icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemIcon}>
      <Icon size={24} color="#666666" />
    </View>
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: PROFILE_IMAGE }}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Edward Okech</Text>
              <Text style={styles.profileEmail}>edu_oke@proton.me</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <MenuItem icon={Settings} title="Edit Profile" />
          <MenuItem icon={CreditCard} title="Payment Methods" />
          <MenuItem icon={MapPin} title="Delivery Addresses" />
          <MenuItem icon={Bell} title="Notifications" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <MenuItem icon={HelpCircle} title="Help Center" />
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={24} color="#E83F3F" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileText: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuItemIcon: {
    width: 32,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 24,
    padding: 16,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#E83F3F',
    fontWeight: '600',
  },
});