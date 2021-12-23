import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Iprops {
  textButom: string;
}

export default function Buttom({ textButom }: Iprops) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{textButom}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 14,
    paddingTop: 10,
    paddingRight: 11,
    paddingBottom: 11,
    paddingLeft: 13,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    color: '#5533EA',
  },
});
