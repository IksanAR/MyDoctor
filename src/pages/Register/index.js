import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Header, Input} from '../../components';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Input label="Pekerjaan" />
        <Input label="Email Address" />
        <Input label="Password" />
        <Button title="Continue" />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
