import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShoppingCart, Plus } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useCartStore } from '../../store/cartStore';

const MENU_ITEMS = [
  {
    category: 'Main Course',
    items: [
      { id: '1', name: 'Nyama Choma', price: 850, description: 'Grilled meat served with kachumbari', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' },
      { id: '2', name: 'Pilau', price: 450, description: 'Spiced rice with meat', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19' },
      { id: '3', name: 'Ugali & Fish', price: 650, description: 'Traditional cornmeal with tilapia', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288' },
    ]
  },
  {
    category: 'Appetizers',
    items: [
      { id: '4', name: 'Samosas', price: 200, description: 'Crispy pastries with spiced filling', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950' },
      { id: '5', name: 'Chicken Wings', price: 450, description: 'Grilled wings with special sauce', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2' },
    ]
  },
];

export default function MenuScreen() {
  const router = useRouter();
  const { items, addItem } = useCartStore();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Menu</Text>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => router.push('/cart')}
        >
          <ShoppingCart size={24} color="#333333" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {MENU_ITEMS.map((category, index) => (
          <View key={index} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {category.items.map((item) => (
              <View key={item.id} style={styles.menuItem}>
                <Image 
                  source={{ uri: `${item.image}?auto=format&fit=crop&w=400&q=80` }}
                  style={styles.menuItemImage}
                />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <Text style={styles.menuItemDescription}>{item.description}</Text>
                  <View style={styles.menuItemFooter}>
                    <Text style={styles.menuItemPrice}>KSh {item.price}</Text>
                    <TouchableOpacity 
                      style={styles.addButton}
                      onPress={() => addItem(item)}
                    >
                      <Plus size={20} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
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
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  cartButton: {
    padding: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#E83F3F',
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  menuItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  menuItemContent: {
    flex: 1,
    marginLeft: 16,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  menuItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E83F3F',
  },
  addButton: {
    backgroundColor: '#E83F3F',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});