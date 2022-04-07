import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    marginBottom: 6,
  },
});
