import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import LightTheme from '../theme/LightTheme';
import DarkTheme from '../theme/DarkTheme';
import HighContrast from '../theme/HighContrast';

type TestingDetailsProps = {
  route: any;
};

const TestingDetails: React.FC<TestingDetailsProps> = ({ route }) => {
  const { item } = route.params;
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

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>Testing Details</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Party: {item.name_of_party}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Details of Work: {item.details_of_work}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Amount: {item.amount}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Total Incl. GST: {item.total_incl_gst}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Cumulative Amount: {item.cumulative_amount}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Cumulative Incl. GST: {item.cumulative_amount_incl_gst}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Material Receipt: {item.material_receipt}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Testing Status: {item.testing_status}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Report Status: {item.report_status}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Payment Status: {item.payment_status}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Payment Date: {item.payment_date}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>JV No: {item.jv_no}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Receipt No: {item.receipt_no}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Date: {item.date}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Testers: {item.testers}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Remarks: {item.remarks}</Text>
      <Text style={[styles.detail, { color: theme.colors.text }]}>Entered By: {item.entered_by}</Text>
    </ScrollView>
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
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default TestingDetails;