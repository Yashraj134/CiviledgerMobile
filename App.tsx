import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useColorScheme } from 'react-native';
import LightTheme from './theme/LightTheme.tsx';
import DarkTheme from './theme/DarkTheme.tsx';
import HighContrast from './theme/HighContrast.tsx';

const LandingPage = () => {
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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good night';
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top Stack */}
      <View style={styles.topStack}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Civiledger App</Text>
        <Text style={[styles.greeting, { color: theme.colors.text }]}>{getGreeting()}</Text>
      </View>

      {/* Bottom Stack with Tabs */}
      <View style={styles.bottomStack}>
        {['Testing', 'Consultancy', 'Third Party Audit'].map((item, index) => (
          <Pressable
            key={index}
            style={[styles.tabButton, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
            onPress={() => console.log(`${item} pressed`)}
          >
            <Text style={[styles.tabText, { color: theme.colors.text }]}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  topStack: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 20,
  },
  bottomStack: {
    alignItems: 'center',
    gap: 20,
  },
  tabButton: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default LandingPage;
