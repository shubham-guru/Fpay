import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import bg from '../images/loginBg.jpg';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Login = () => {
  
  const Navigation = useNavigation();

  const [data, setData] = useState({
    username: '',
    password: '',
    secureTextEntry: true,
    checkError: '',
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = () => {
    //Alert.alert('hi');
    Navigation.replace("Index")
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text>Fpay logo goes here...</Text>
      </View>

      {/* LOWER BOX */}
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.lowerContainer}
        easing="ease-out">
        <ImageBackground
          source={bg}
          resizeMode="cover"
          style={styles.lowerContainer}>
          {/* INPUT FIELDS */}
          <View style={styles.action}>
            <Animatable.View animation="zoomIn" delay={500} easing="ease-in">
              <Icon name="user" size={25} />
            </Animatable.View>
            <TextInput placeholder="Username" style={styles.textField} />
          </View>

          <View style={styles.action}>
            <Animatable.View animation="zoomIn" delay={500} easing="ease-in">
              <Icon name="key" size={25} />
            </Animatable.View>
            <TextInput
              placeholder="Password"
              style={styles.textField}
              secureTextEntry={data.secureTextEntry ? true : false}
            />

            <Animatable.View animation="slideInRight">
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Icon2 name="eye" size={25} />
                ) : (
                  <Icon2 name="eye-with-line" size={25} />
                )}
              </TouchableOpacity>
            </Animatable.View>
          </View>

          {/* BUTTON */}
          <Animatable.View animation="flipInX" easing="ease-in">
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <LinearGradient
                // style={styles.button}
                style={{borderRadius: 30}}
                colors={['#683264', '#de393b']}>
                <Text style={styles.buttonText}>Log in</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animatable.View>
          
          {/* LINKS */}
          <View style={{alignItems: "center"}}>
          <TouchableOpacity onPress={()=>Navigation.navigate("Signup")} style={{margin: 5}}>
            <Text style={styles.textLink}>
              Don't have an account ? Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}}>
            <Text style={styles.textLink}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>

        </ImageBackground>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperContainer: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerContainer: {
    flex: 2,
    alignItems: 'center',
    width: width,
    borderTopColor: "#683264",
    borderTopWidth: 3
  },
  textField: {
    width: width / 2,
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 3,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    elevation: 10
  },
  button: {
    margin: 15,
    alignItems: 'flex-end',
  },
  buttonText: {
    padding: 10,
    paddingHorizontal: 35,
    fontSize: 14,
    color: '#fff',
  },
  textLink: {
    color: "#000",
    textDecorationLine: "underline",
    margin: 3,
    fontWeight: "bold",
    letterSpacing: 1
  },
});

export default Login;
