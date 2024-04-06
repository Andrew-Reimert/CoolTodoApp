import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
        <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const Footer = () => {
    return (
        <View style={styles.footer}>
        <Text>This is the Footer of the Page
        </Text>
        </View>
    );
    }


export default MainLayout;