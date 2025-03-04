import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Search } from 'lucide-react-native';

const FEATURED_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MapPin size={20} color="#E83F3F" />
            <Text style={styles.locationText}>Nairobi, Kenya</Text>
          </View>
          <TouchableOpacity style={styles.searchBar}>
            <Search size={20} color="#666666" />
            <Text style={styles.searchText}>Search for dishes...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.heroSection}>
          <Image
            source={{ uri: FEATURED_IMAGE }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Welcome to ParadiseHUB</Text>
            <Text style={styles.heroSubtitle}>Authentic Kenyan Cuisine</Text>
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {['Main Course', 'Appetizers', 'Drinks', 'Desserts'].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Dishes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
            {[
              { name: 'Nyama Choma', price: 'KSh 850', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' },
              { name: 'Pilau', price: 'KSh 450', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19' },
              { name: 'Ugali & Fish', price: 'KSh 650', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288' },
            ].map((dish, index) => (
              <TouchableOpacity key={index} style={styles.dishCard}>
                <Image source={{ uri: `${dish.image}?auto=format&fit=crop&w=400&q=80` }} style={styles.dishImage} />
                <Text style={styles.dishName}>{dish.name}</Text>
                <Text style={styles.dishPrice}>{dish.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
    padding: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 8,
    color: '#666666',
  },
  heroSection: {
    position: 'relative',
    height: 200,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoriesScroll: {
    paddingLeft: 16,
  },
  categoryCard: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    color: '#333333',
    fontWeight: '500',
  },
  popularSection: {
    marginBottom: 24,
  },
  popularScroll: {
    paddingLeft: 16,
  },
  dishCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dishImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
    padding: 12,
    paddingBottom: 4,
  },
  dishPrice: {
    fontSize: 14,
    color: '#E83F3F',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});