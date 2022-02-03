import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import bg from '../images/splashScreen.jpg';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const Navigation = useNavigation();
    const navigate = () =>{
        Navigation.replace("Login")
    }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Animatable.View animation="zoomIn" easing="ease-out">
          <Text style={styles.heading}>Fpay</Text>
        </Animatable.View>
        <Animatable.View animation="flipInX" easing="ease-out">
          <Text style={styles.subHeading}>Your new payment partner</Text>
        </Animatable.View>
        <Animatable.View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.description}>
            now pay anywhere, anytime, anyone {'\n'} by your{' '}
            <Text style={{color: 'gold'}}>credit card</Text>
          </Text>
        </Animatable.View>
        <TouchableOpacity onPress={navigate}>
        <Animatable.View style={{alignSelf: "flex-end", margin: 8}} animation="slideInRight">
            <Icon
              name="arrow-right"
              color="gold"
              size={30}
            />
        </Animatable.View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 35,
    fontFamily: 'PTSans-Bold',
    letterSpacing: 15,
  },
  subHeading: {
    textAlign: 'center',
    color: '#f2f2f2',
    marginTop: 20,
    letterSpacing: 3,
    fontSize: 15,
    fontFamily: "PlayfairDisplay-Regular"
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 22,
    lineHeight: 25,
    letterSpacing: 1,
    fontFamily: "DancingScript-Medium"
  },
});
export default SplashScreen;
