import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../constants/Images';
import {verticalScale, width, height} from '../utilities/Dimensions';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation: any = useNavigation();

  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <ImageBackground source={Images.LOGIN}>
        <StatusBar backgroundColor={'#FBC757'} />
        <View style={styles.logoContainer}>{/* logo */}</View>
        <View style={styles.fields}>
          <View style={{width: '80%'}}>
            <Text style={styles.leadingText}>EMAIL</Text>
            <TextInput style={{backgroundColor: 'white', width: '100%'}} />
          </View>
          <View style={{width: '80%'}}>
            <Text style={styles.leadingText}>PASSWORD</Text>
            <TextInput style={{backgroundColor: 'white', width: '100%'}} />
          </View>
          <View
            style={{
              marginTop: verticalScale(25),
              backgroundColor: '#F9B133',
              width: '60%',
              borderRadius: 15,
            }}>
            <TouchableOpacity
              style={{padding: 10}}
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.endingContainer}>
          <Text style={styles.endText}>SIGNUP | FORGOT PASSWORD</Text>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoContainer: {
    height: verticalScale(150),
  },
  fields: {
    height: verticalScale(500),

    alignItems: 'center',
    justifyContent: 'center',
  },
  leadingText: {
    fontSize: verticalScale(20),
    color: 'black',
    marginVertical: verticalScale(10),
  },
  endingContainer: {
    height: verticalScale(130),
    justifyContent: 'center',
    alignItems: 'center',
  },
  endText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
