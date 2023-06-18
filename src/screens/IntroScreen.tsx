import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Modal,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  height,
  horizontalScale,
  verticalScale,
  width,
} from '../utilities/Dimensions';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import Images from '../constants/Images';

const IntroScreen = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const navigation: any = useNavigation();
  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <StatusBar backgroundColor={'#FBC757'} />
      {/* <ImageBackground source={Images.LOGIN}> */}
      {/* <Image source={Images.LOGIN} resizeMode="contain" /> */}
      <View style={styles.logoContainer}>{/* logo */}</View>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: verticalScale(25),
          marginTop: verticalScale(50),
        }}>
        YOU WOULD BE A VICTIM OF
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: verticalScale(50),
          fontWeight: 'bold',
          marginTop: verticalScale(15),
        }}>
        HEALTH{'\n'}INEQUITY
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: verticalScale(50),
          fontWeight: 'bold',
          fontSize: verticalScale(20),
        }}>
        RACE{'\n'}GENDER{'\n'}ETHNICITY{'\n'}SEXUAL PREFERENCES{'\n'}+ MORE
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: verticalScale(50),
          // fontWeight: 'bold',
          fontSize: verticalScale(20),
        }}>
        AFFECT THE QUALITY{'\n'}OF HEALTHCARE YOU RECIEVE
      </Text>
      <View
        style={{
          marginTop: verticalScale(20),
          width: '60%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setOpenVideo(true);
          }}
          style={{backgroundColor: 'white', padding: 5, alignItems: 'center'}}>
          <Text>INTRO VIDEO OF 8 SECOND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 5,
            marginTop: verticalScale(10),
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('WelcomeScreen');
          }}>
          <Text>LETS GET STARTED</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={openVideo} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}>
          <Video
            source={require('../intro.mp4')} // the video file
            paused={false} // make it start
            style={styles.backgroundVideo} // any style you want
            repeat={true} // make it a loop
            fullscreen={true}
            resizeMode={'cover'}
            fullscreenOrientation={'portrait'}
          />
          <TouchableOpacity
            onPress={() => {
              setOpenVideo(false);
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                width: 40,
                height: 40,
                borderRadius: 150,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                margin: horizontalScale(15),
              }}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                X
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* </ImageBackground> */}
    </ImageBackground>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  topContainer: {
    // height: verticalScale(200),
    // backgroundColor: '#C7C4BE',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: '#F06623',
    padding: verticalScale(10),
    alignItems: 'center',
    width: '80%',
    marginBottom: verticalScale(15),
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: verticalScale(20),
    color: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // Stretch the video to cover the specified dimensions
  },
  logoContainer: {
    // height: verticalScale(350),
    backgroundColor: 'red',
  },
});
