import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';
import LightTheme from '../theme/LightTheme';
import DarkTheme from '../theme/DarkTheme';
import HighContrast from '../theme/HighContrast';

type ViewTPAProps = {
  navigation: any;
};

const tpaData = [
  {
    id: '1',
    name_of_party: 'Municipal Corp',
    name_of_corporation: 'City Council',
    receipt_no: 'REC003',
    report_status: 'Draft',
    payment_status: 'Pending',
    details_of_work: 'Bridge Audit',
    amount: '15000',
    total_incl_gst: '17700',
    cumulative_amount: '30000',
    cumulative_amount_incl_gst: '35400',
    visit_status: 'Scheduled',
    document_receipt: 'Received',
    payment_date: '2025-04-13',
    jv_no: 'JV003',
    consultant_code: 'CON001',
    date: '2025-04-13',
    remarks: 'Initial visit planned',
    entered_by: 'Admin',
  },
  {
    id: '2',
    name_of_party: 'State Dept',
    name_of_corporation: 'Highway Board',
    receipt_no: 'REC004',
    report_status: 'Completed',
    payment_status: 'Paid',
    details_of_work: 'Road Audit',
    amount: '20000',
    total_incl_gst: '23600',
    cumulative_amount: '50000',
    cumulative_amount_incl_gst: '59000',
    visit_status: 'Done',
    document_receipt: 'Received',
    payment_date: '2025-04-11',
    jv_no: 'JV004',
    consultant_code: 'CON002',
    date: '2025-04-11',
    remarks: 'Final report issued',
    entered_by: 'Admin',
  },
];

const ViewTPA: React.FC<ViewTPAProps> = ({ navigation }) => {
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
      onPress={() => navigation.navigate('TPADetails', { item })}
    >
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Party: {item.name_of_party}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Receipt No: {item.receipt_no}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Report Status: {item.report_status}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Payment Status: {item.payment_status}</Text>
    </Pressable>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Third Party Audit</Text>
      <FlatList
        data={tpaData}
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

export default ViewTPA;