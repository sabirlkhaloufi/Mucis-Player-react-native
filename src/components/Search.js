import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Search() {
  return (
    <View style={styles.screenSearch}>
      <View style={styles.search}>
        <AntDesign
          style={{marginLeft: 6}}
          name="search1"
          color="white"
          size={18}
        />
        <TextInput
          style={styles.input}
          placeholder={'search song'}
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
        />
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
    color: 'rgba(255, 255, 255, 0.4)',
    // placeholderTextColor: 'gray',
  },
});
export default Search;
