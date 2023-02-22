import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <View style={styles.img}>
        <Image
          style={{width: 483, height: 483}}
          source={require('./images/logo.png')}
        />
      </View>
      <Image
        style={[styles.flow, {width: '100%', height: 483}]}
        source={require('./flow.png')}
      />
      <View style={styles.getstarted}>
        <Text style={[styles.text, {fontSize: 35, fontWeight: 'bold'}]}>
          Getting started
        </Text>
        <Text style={[styles.text, {fontSize: 18, fontWeight: '100'}]}>
          Getting started Getting
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Musics')}>
          <Text style={styles.textButton}>lets Go</Text>
          <AntDesign style={{marginLeft:6}} name="right" color="white" size={18}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
  },

  getstarted: {
    alignItems: 'center',
    marginTop: '-10%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: '10%',
    backgroundColor: 'rgba(136, 106, 226,100)',
    width: 160,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent:"center",
    flexDirection:"row"
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 300,
  },
  flow: {
    position: 'absolute',
    bottom: 0,
  },
});
