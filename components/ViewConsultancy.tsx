import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';
import LightTheme from '../theme/LightTheme';
import DarkTheme from '../theme/DarkTheme';
import HighContrast from '../theme/HighContrast';

type ViewConsultancyProps = {
  navigation: any;
};

const consultancyData = [
  {
    id: '1',
    name_of_party: 'XYZ Ltd',
    receipt_no: 'REC002',
    report_status: 'Completed',
    payment_status: 'Paid',
    details_of_work: 'Business Strategy',
    amount: '10000',
    total_incl_gst: '11800',
    cumulative_amount: '20000',
    cumulative_amount_incl_gst: '23600',
    material_receipt: 'N/A',
    payment_date: '2025-04-13',
    date: '2025-04-13',
    jv_no: 'JV002',
    material_properties: 'N/A',
    cube_preparation: 'N/A',
    casting: 'N/A',
    demoulding: 'N/A',
    testing: 'N/A',
    remarks: 'Strategy finalized',
    entered_by: 'Admin',
  },
  {
    id: '2',
    name_of_party: 'Global Inc',
    receipt_no: 'REC003',
    report_status: 'In Progress',
    payment_status: 'Pending',
    details_of_work: 'Technology Consulting',
    amount: '15000',
    total_incl_gst: '17700',
    cumulative_amount: '35000',
    cumulative_amount_incl_gst: '41300',
    material_receipt: 'N/A',
    payment_date: '2025-04-12',
    date: '2025-04-12',
    jv_no: 'JV003',
    material_properties: 'N/A',
    cube_preparation: 'N/A',
    casting: 'N/A',
    demoulding: 'N/A',
    testing: 'N/A',
    remarks: 'Draft submitted',
    entered_by: 'Admin',
  },
];

const ViewConsultancy: React.FC<ViewConsultancyProps> = ({ navigation }) => {
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
      onPress={() => navigation.navigate('ConsultancyDetails', { item })}
    >
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Party: {item.name_of_party}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Receipt No: {item.receipt_no}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Report Status: {item.report_status}</Text>
      <Text style={[styles.cardText, { color: theme.colors.text }]}>Payment Status: {item.payment_status}</Text>
    </Pressable>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Consultancy Services</Text>
      <FlatList
        data={consultancyData}
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

export default ViewConsultancy;