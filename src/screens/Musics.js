import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Platform,
  Alert,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '../components/Search';
import MusicFiles from 'react-native-get-music-files';

import RNFS from 'react-native-fs';

const Musics = ({navigation}) => {
  const requestFileSystemPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'File System Permission',
          message:
            'This app needs access to your file system to search for files',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('File system permission granted');
        const path = RNFS.ExternalStorageDirectoryPath + '/Music/';
        const files = await RNFS.readDir(path);
        setaudioFiles(files);
      } else {
        console.log('File system permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [audioFiles, setaudioFiles] = useState(null);

  const getSongs = () => {
    try {
      requestFileSystemPermission();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  console.log(JSON.stringify(audioFiles));

  return (
    <>
      <Image
        style={styles.flowleft}
        source={require('./images/Ellipseleft.png')}
      />
      <View style={styles.musicsscreen}>
        <Search />
        <View style={styles.recently}>
          <View style={styles.recentlyOption}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              recently played
            </Text>
            <Text style={{color: 'white'}}>See All</Text>
          </View>
          <View style={styles.recentlyMusic}>
            <View>
              <Image
                style={styles.recentlyMusicImage}
                source={require('./images/img1.png')}
              />
              <View style={styles.recentlyMusicText}>
                <Text style={[styles.recentlyMusicText1, {color: 'white'}]}>
                  Antretor
                </Text>
                <Text
                  style={[
                    styles.recentlyMusicText2,
                    {color: 'rgba(255, 255, 255, 0.4)'},
                  ]}>
                  yann tiarsen
                </Text>
              </View>
            </View>
            <View>
              <Image
                style={styles.recentlyMusicImage}
                source={require('./images/img2.png')}
              />
              <View style={styles.recentlyMusicText}>
                <Text style={[styles.recentlyMusicText1, {color: 'white'}]}>
                  Antretor
                </Text>
                <Text
                  style={[
                    styles.recentlyMusicText2,
                    {color: 'rgba(255, 255, 255, 0.4)'},
                  ]}>
                  yann tiarsen
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.allmusic}>
          <View style={styles.recentlyOption}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Musics
            </Text>
            <Text style={{color: 'white'}}>See All</Text>
          </View>

          <ScrollView>
            {audioFiles &&
              audioFiles.map(audio => {
                return (
                  <Pressable
                    style={styles.infoMusic}
                    onPress={() => navigation.navigate('Player')}>
                    <Image
                      style={{width: 80, height: 80}}
                      source={require('./images/img1.png')}
                    />

                    <View style={styles.MusicText}>
                      <Text style={[styles.MusicText1, {color: 'white'}]}>
                        {audio.name}
                      </Text>
                      <Text
                        style={[
                          styles.MusicText2,
                          {color: 'rgba(255, 255, 255, 0.4)', marginTop: '5%'},
                        ]}>
                        yann tiarsen
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
          </ScrollView>
        </View>
      </View>
      <Image
        style={styles.flowbottom}
        source={require('./images/flowbottom.png')}
      />
    </>
  );
};

export default Musics;

const styles = StyleSheet.create({
  musicsscreen: {
    color: 'white',
    paddingHorizontal: 20,
  },
  recentlyOption: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recently: {},
  recentlyMusic: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recentlyMusicImage: {
    width: 180,
    height: 180,
  },
  recentlyMusicText: {
    marginLeft: '15%',
    marginTop: '-15%',
  },
  infoMusic: {
    flexDirection: 'row',
  },
  MusicText: {
    marginTop: '4%',
    marginLeft: '2%',
  },
  flowbottom: {
    position: 'absolute',
    bottom: -100,
    // height:300,
    // width:"100%"
  },
  flowleft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
