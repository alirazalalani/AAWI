import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {verticalScale, width, height} from '../utilities/Dimensions';
import Images from '../constants/Images';
import {patientDetails} from '../../data';
import {useNavigation} from '@react-navigation/native';

const CustomizeScreen = () => {
  const navigation: any = useNavigation();

  const [patientDetail, setPatientDetail] = useState(patientDetails);
  return (
    <ImageBackground source={Images.BACKGROUND} style={{width, height}}>
      <ImageBackground source={Images.LOGIN}>
        <StatusBar backgroundColor={'#FBC757'} />
        <View style={styles.logoContainer}></View>
        <View style={styles.data}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: verticalScale(20),
              fontWeight: 'bold',
            }}>
            CUSTOMIZE YOUR HEALTH{'\n'}EQUALITY EXPERIENCE
          </Text>
          {patientDetail.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.btnStyle}
                activeOpacity={0.5}
                key={index}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('AreaOfInterest');
            }}>
            <Text style={{color: 'white', marginTop: verticalScale(15)}}>
              Continue
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default CustomizeScreen;

const styles = StyleSheet.create({
  logoContainer: {
    height: verticalScale(200),
  },
  data: {
    marginTop: verticalScale(15),
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
