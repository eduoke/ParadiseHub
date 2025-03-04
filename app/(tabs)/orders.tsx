import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Package, Check } from 'lucide-react-native';

const ORDERS = [
  {
    id: '1',
    items: ['2x Nyama Choma', '1x Pilau'],
    status: 'preparing',
    time: '15:30',
    total: 'KSh 2,150',
  },
  {
    id: '2',
    items: ['1x Chicken Wings', '2x Samosas'],
    status: 'delivering',
    time: '15:00',
    total: 'KSh 850',
  },
  {
    id: '3',
    items: ['1x Ugali & Fish', '1x Pilau'],
    status: 'completed',
    time: '14:15',
    total: 'KSh 1,100',
  },
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'preparing':
      return <Clock size={24} color="#F4A261" />;
    case 'delivering':
      return <Package size={24} color="#2A9D8F" />;
    case 'completed':
      return <Check size={24} color="#40916C" />;
    default:
      return null;
  }
};

const StatusText = ({ status }) => {
  const texts = {
    preparing: 'Preparing your order',
    delivering: 'Out for delivery',
    completed: 'Delivered',
  };
  
  return <Text style={styles.statusText}>{texts[status]}</Text>;
};

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Orders</Text>
      </View>

      <ScrollView>
        {ORDERS.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderTime}>{order.time}</Text>
              <Text style={styles.orderTotal}>{order.total}</Text>
            </View>

            <View style={styles.orderItems}>
              {order.items.map((item, index) => (
                <Text key={index} style={styles.orderItem}>{item}</Text>
              ))}
            </View>

            <View style={styles.orderStatus}>
              <StatusIcon status={order.status} />
              <StatusText status={order.status} />
            </View>
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  orderCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderTime: {
    fontSize: 14,
    color: '#666666',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E83F3F',
  },
  orderItems: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  orderItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  orderStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});