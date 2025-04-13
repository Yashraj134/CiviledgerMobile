// components/ViewConsultancy.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewConsultancy() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Consultancy Services</Text>
      <Text style={styles.description}>
        Our expert consultants provide tailored solutions to help your business grow.
        Services include:
      </Text>
      <Text style={styles.listItem}>- Business Strategy</Text>
      <Text style={styles.listItem}>- Technology Consulting</Text>
      <Text style={styles.listItem}>- Process Optimization</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  listItem: {
    fontSize: 14,
    marginVertical: 5,
    color: '#444',
  },
});