import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Player = () => {
  return (
    <>
    <Image style={styles.imgBottom} source={require("./images/flowbottomplayer.png")}/>
      <View style={styles.player}>
        <View style={styles.topbar}>
          <View>
            <AntDesign name="left" color="white" size={23} />
          </View>
          <Text style={{color: 'white', fontSize: 18}}>Back To Her Men</Text>
          <View>
            <AntDesign name="bars" color="white" size={23} />
          </View>
        </View>
        <Image source={require('./images/img1.png')} />
        <View style={styles.infoMusic}>
          <View style={styles.nameMusic}>
            <Text
              style={[
                styles.recentlyMusicText1,
                {color: 'white', fontSize: 23},
              ]}>
              Back To Her Men
            </Text>
            <Text
              style={[
                styles.recentlyMusicText2,
                {color: 'rgba(255, 255, 255, 0.4)', fontSize: 18},
              ]}>
              Demien Rice
            </Text>
          </View>
          <Text style={{color: 'white', fontSize: 20}}>icon</Text>
        </View>

        <View style={styles.Spectrum}>
          <Image
            source={require('./images/Spectrum.png')}
            style={{width: 320, height: 60}}
          />
          <View style={styles.timer}>
            <Text style={{color: 'rgba(123, 87, 228, 1)'}}>1:04</Text>
            <Text style={{color: 'white'}}>3:29</Text>
          </View>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <AntDesign name="reload1" color="#BAA8ED" size={23} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="stepbackward" color="#BAA8ED" size={23} />
          </TouchableOpacity>

          <LinearGradient colors={["#7150D0", "#AE92FF"]} style={styles.playpause}>
            <TouchableOpacity>
            <AntDesign name="pause" color="#fff" size={40} />
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity>
            <AntDesign name="stepforward" color="#BAA8ED" size={23} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="reload1" color="#BAA8ED" size={23} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  topbar: {
    width: '100%',
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoMusic: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '-15%',
  },
  Spectrum: {
    marginTop: '5%',
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  options: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  playpause: {
    borderRadius:100,
    padding:10
    // width:100,
    // height:100
  },
  imgBottom:{
    position:"absolute",
    left:0,
    bottom:"-20%",
    width:"100%"
  }
});
