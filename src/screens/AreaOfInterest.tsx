import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {verticalScale, width, height} from '../utilities/Dimensions';
import Images from '../constants/Images';
import {areas} from '../../data';
import { useNavigation } from '@react-navigation/native';


const AreaOfInterest = () => {
  const navigation:any=useNavigation()
  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <StatusBar backgroundColor={'#FBC757'} />
      <View style={{alignItems: 'center', marginTop: verticalScale(25)}}>
        <Text style={{color: 'white', fontSize: verticalScale(20)}}>
          WE CAN HELP YOU
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: verticalScale(25),
            fontWeight: 'bold',
          }}>
          TAKE CONTROL OF
        </Text>
        <Text style={{color: 'white', fontSize: verticalScale(20)}}>
          YOUR HEALTH
        </Text>
      </View>

      <View style={styles.data}>
        <View>
          <Text style={{color: 'white'}}>SELECT ALL AREAS OF INTEREST</Text>
        </View>
        {areas.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.btnStyle}
              activeOpacity={0.5}
              key={index}>
              <Text style={{color: 'black', textAlign: 'center'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate('ProfileScreen')
          
        }}>
          <Text style={{color: 'white', marginTop: verticalScale(15)}}>
            Continue
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

export default AreaOfInterest;

const styles = StyleSheet.create({
  logoContainer: {
    height: verticalScale(200),
  },
  data: {
    marginTop: verticalScale(80),
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
