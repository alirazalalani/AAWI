import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.LOGIN}
        style={{
          position: 'absolute',
          width: horizontalScale(500),
          height: verticalScale(700),
          top: verticalScale(50),
        }}
      />
      <View style={styles.logoContainer}></View>
      <View style={styles.image}>
        <Image
          source={Images.LOGIN_IMAGE}
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <View style={[styles.btnContainer, {marginTop: verticalScale(30)}]}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.text12}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.btnContainer, {marginTop: verticalScale(15)}]}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.text12}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: verticalScale(10)}}>
        <Text style={{color: 'black'}}>USE AS GUEST</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDBD4',
    alignItems: 'center',
  },
  logoContainer: {height: verticalScale(250)},

  image: {
    marginTop: verticalScale(20),
    height: verticalScale(300),
    width: horizontalScale(300),
    backgroundColor: 'red',
  },
  btnContainer: {
    width: '60%',
    backgroundColor: '#F06623',
  },
  btnStyle: {
    padding: verticalScale(10),
    alignItems: 'center',
  },
  text12: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: 'white',
  },
});
