import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';
import LightTheme from '../theme/LightTheme';
import DarkTheme from '../theme/DarkTheme';
import HighContrast from '../theme/HighContrast';

type ViewTestingProps = {
  navigation: any;
};

const testingData = [
  {
    id: '1',
    name_of_party: 'ABC Corp',
    receipt_no: 'REC001',
    report_status: 'Pending',
    payment_status: 'Unpaid',
    details_of_work: 'Concrete testing',
    amount: '5000',
    total_incl_gst: '5900',
    cumulative_amount: '10000',
    cumulative_amount_incl_gst: '11800',
    material_receipt: 'Received',
    testing_status: 'In Progress',
    payment_date: '2025-04-13',
    jv_no: 'JV001',
    date: '2025-04-13',
    testers: 'John Doe',
    remarks: 'Sample collected',
    entered_by: 'Admin',
  },
  {
    id: '2',
    name_of_party: 'XYZ Builders',
    receipt_no: 'REC002',
    report_status: 'Completed',
    payment_status: 'Paid',
    details_of_work: 'Soil testing',
    amount: '3000',
    total_incl_gst: '3540',
    cumulative_amount: '13000',
    cumulative_amount_incl_gst: '15340',
    material_receipt: 'Received',
    testing_status: 'Done',
    payment_date: '2025-04-10',
    jv_no: 'JV002',
    date: '2025-04-10',
    testers: 'Jane Smith',
    remarks: 'Report submitted',
    entered_by: 'Admin',
  },
];

const ViewTesting: React.FC<ViewTestingProps> = ({ navigation }) => {
  const colorScheme = useColorScheme();

  let theme;
  switch (colorScheme) {
    case 'light':
      theme = LightTheme;
      break;
    case 'dark':
      theme = DarkTheme;
      break;
    default:
      theme = HighContrast;
  }

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
      onPress={() => navigation.navigate('TestingDetails', { item })}
    >
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Party: {item.name_of_party}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Receipt No: {item.receipt_no}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Report Status: {item.report_status}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Payment Status: {item.payment_status}</Text>
    </Pressable>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Testing Services</Text>
      <FlatList
        data={testingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    gap: 10,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default ViewTesting;