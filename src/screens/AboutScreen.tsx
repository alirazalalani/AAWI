import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import {width, height, verticalScale} from '../utilities/Dimensions';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation: any = useNavigation();
  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <ImageBackground source={Images.LOGIN}>
        <StatusBar backgroundColor={'#FBC757'} />
        {/* <View style={styles.logoContainer}>logo</View> */}
        <View style={styles.data}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: verticalScale(20),
              fontWeight: 'bold',
            }}>
            PARAGRAPH ABOUT{'\n'}HOW YOUR HEALTH AND{'\n'}AILMENTS DETERMINE
            YOUR{'\n'}HEALTH INEQUITY CHALLENGES
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: verticalScale(15),
              textAlign: 'center',
              color: 'white',
              fontSize: verticalScale(20),
              fontWeight: 'bold',
            }}>
            LET'S CUSTOMIZE{'\n'}YOUR EXPERIENCE
          </Text>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              marginVertical: verticalScale(15),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CustomizeScreen');
              }}
              style={{backgroundColor: 'white', padding: verticalScale(10)}}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                CUSTOMIZE MY EXPERIENCE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: verticalScale(10),
                marginTop: verticalScale(15),
              }}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                JUST SHOW ME THE BASICS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  logoContainer: {
    height: verticalScale(150),
  },
  data: {
    height: verticalScale(500),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
