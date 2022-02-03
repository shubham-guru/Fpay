import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import plus from '../images/plus.png';
import upArrow from '../images/up-arrow.png';
import abstractBg from '../images/abstractBg.jpg';
var width = Dimensions.get('window').width;

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={abstractBg} resizeMode="cover">
        <View style={styles.header}>
          <Text style={styles.nameText}>
            <Text style={{fontStyle: 'italic'}}>Namashkar,</Text> Shubham !
          </Text>
          <View style={styles.box}>
            <Text style={styles.cardText}>
              my credit card{'\n'}
              {'\n'}40 * * * * * * * * * * * * 81
            </Text>
            <View>
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Text style={{color: 'darkblue'}}>See Details</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.midBox}>
              <Image source={plus} style={styles.icon} />
            </TouchableOpacity>
            <Image
              source={upArrow}
              style={[styles.icon, {alignSelf: 'center', marginVertical: -15}]}
            />
            <Text style={styles.midText}>
              Click here to add a new Credit card
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    width: width,
    margin: 20,
    paddingHorizontal: 20,
  },
  nameText: {
    fontSize: 25,
    fontFamily: 'PlayfairDisplay-Black',
    color: '#000',
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  box: {
    padding: 30,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    elevation: 10,
  },
  cardText: {
    color: '#000',
    letterSpacing: 1,
    fontFamily: 'PTSans-Regular',
  },
  icon: {
    width: 100,
    height: 100,
    margin: 5,
  },
  midBox: {
    alignSelf: 'center',
    marginVertical: 40,
    shiftDistanceY: 3,
  },
  midText: {
    alignSelf: 'center',
    fontFamily: 'PlayfairDisplay-MediumItalic',
    fontSize: 15,
    marginVertical: 20,
  },
});
