import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function Search() {
  return (
    <View style={styles.screenSearch}>
      <View style={styles.search}>
        <TextInput style={[styles.input,{placeholderTextColor: 'gray'}]} placeholder={'search song'} placeholderTextColor='rgba(255, 255, 255, 0.4)' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenSearch: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 10,
    width: 320,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
  },
  input: {
    padding: 10,
    width: '80%',
    fontSize: 18,
    color:"rgba(255, 255, 255, 0.4)"
  },
});
export default Search;
