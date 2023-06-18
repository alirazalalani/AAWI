import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import {verticalScale, width, height} from '../utilities/Dimensions';
import {Avatar} from '@react-native-material/core';
import {profile} from '../../data';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation: any = useNavigation();
  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: verticalScale(20),
          marginTop: verticalScale(10),
        }}>
        PROFILE
      </Text>
      <View style={{alignItems: 'center', marginTop: verticalScale(10)}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: verticalScale(25),
          }}>
          JOHN DOE
        </Text>
        <Avatar
          image={{uri: 'https://mui.com/static/images/avatar/1.jpg'}}
          size={100}
          style={{marginTop: verticalScale(10)}}
        />
      </View>
      <View style={styles.data}>
        <View>
          <Text style={{color: 'white',fontWeight:'bold'}}>YOUR PROFILE IS 60% COMPLETE</Text>
        </View>
        {profile.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.btnStyle}
              activeOpacity={0.5}
              key={index}>
              <Text style={{color: 'black', textAlign: 'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate('ProfileScreen');
          }}>
          <Text style={{color: 'white', marginTop: verticalScale(15)}}>
            Continue
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  data: {
    marginTop: verticalScale(20),
    height: verticalScale(500),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: 'white',
    marginVertical: 8,
    width: '70%',
    padding: 10,
  },
});
