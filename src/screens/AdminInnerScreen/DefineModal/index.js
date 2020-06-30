import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {touch, icEllipse, replay, icTrue, close2} from '../../../assets';
const {width, height} = Dimensions.get('window');

class DefineModal extends React.Component {
  state = {
    marker: [],
  };
  handlePress(evt) {
    console.log(evt.nativeEvent);
    console.log(Dimensions.get('window').width);
    this.setState({
      marker: [
        ...this.state.marker,
        {
          top: evt.nativeEvent.locationY,
          left: evt.nativeEvent.locationX,
          zIndex: this.state.marker.length + 1,
          position: 'absolute',
        },
      ],
    });
  }
  render() {
    const {onClose} = this.props;
    return (
      <View>
        <View
          style={{
            height: '25%',
          }}>
          <LinearGradient
            colors={['rgba(14, 98, 255, 0.85)', 'rgba(48, 120, 255, 0.65)']}
            locations={[0.0, 1]}
            style={{flex: 1, justifyContent: 'center'}}>
            <View style={{alignSelf: 'center', marginBottom: 20}}>
              <Image
                source={touch}
                style={{
                  height: 120,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.bottomVIew}>
              <Text style={styles.textBottom}>
                Help us find the sensor{'\n'}by taping on each corner
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            height: '45%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            onTouchStart={(evt) => this.handlePress(evt)}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex: 1,
                zIndex: 10,
              }}>
              {this.state.marker.length > 0 &&
                this.state.marker.map((item) => (
                  <View pointerEvents={'none'} style={[item]}>
                    <Image
                      source={icEllipse}
                      style={[
                        {
                          width: 30,
                          height: 30,
                          marginTop: -15,
                          marginLeft: -15,
                          resizeMode: 'contain',
                        },
                        ,
                      ]}
                    />
                  </View>
                ))}
            </View>
            <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
              }}
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: height * 0.45,
                zIndex: 0,
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: '30%',
          }}>
          <LinearGradient
            colors={['rgba(14, 98, 255, 0.85)', 'rgba(48, 120, 255, 0.65)']}
            locations={[0.0, 1]}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => onClose()}
              style={styles.borderRadius}>
              <Image source={close2} style={styles.iconUser} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.view1} onPress={() => onClose()}>
              <Image source={icTrue} style={[styles.camera]} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.update}
              onPress={() =>
                this.setState({
                  marker: this.state.marker.slice(
                    0,
                    this.state.marker.length - 1,
                  ),
                })
              }>
              <Image source={replay} style={styles.iconUpdate} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default DefineModal;

var styles = StyleSheet.create({
  filter: {
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  divFilter: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  absolute: {
    position: 'absolute',

    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '55%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    // opacity: 0.3,
  },
  minus: {
    width: 36,
    height: 3,
    alignSelf: 'center',
    marginTop: 6,
  },
  clear: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    margin: 15,
    marginRight: 25,
  },
  flatlist: {
    justifyContent: 'space-evenly',
    paddingLeft: 5,
    paddingRight: 5,
  },
  textClear: {
    color: '#878787',
    fontSize: 16,
    fontFamily: 'SFProDisplay-Regular',
  },
  close: {
    width: 9,
    height: 9,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  line: {
    backgroundColor: '#ECECEC',
    height: 1,
    width: '100%',
    marginBottom: 10,
  },
  result: {
    textAlign: 'center',
    color: '#585858',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
  },
  card: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: '#64D6A5',
    borderRadius: 8,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  miniCard: {
    backgroundColor: 'white',
    marginBottom: 10,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  textCard: {
    color: '#585858',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    color: '#767676',
    fontFamily: 'SFProDisplay-Regular',
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#FFFFFF',
    padding: 7,
    width: '40%',
    borderRadius: 50,
  },
  view: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  txt: {
    color: '#3F3F3F',
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '600',
  },
  absoluteTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 10,
  },
  bottomVIew: {
    bottom: 20,
    left: 0,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textBottom: {
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '500',
  },
  borderRadius: {
    backgroundColor: '#7196e5',
    alignSelf: 'center',
    padding: 4.5,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#7196e5',
    alignSelf: 'center',
    padding: 4.5,
    borderRadius: 100,
    width: width * 0.3,
    height: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.54)',
  },
  camera: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  update: {
    backgroundColor: '#7196e5',
    alignSelf: 'center',

    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconUpdate: {
    resizeMode: 'contain',
    width: 21,
    height: 21,
  },
  iconUser: {width: 18, height: 18},
});

const description = `According to US EPA minimum contaminant levels (MCL), this water sample is safely below the MCL threshold for these water quality parameters ONLY. If this water sample is turbid or has an unpleasant smell, this water is most likely unsafe to drink or bathe in. We do not test for bacteria, viruses, and nutrients. If you believe that your water is unsafe in anyway please contact your water utility company.`;
const myUri =
  'https://www.howitworksdaily.com/wp-content/uploads/2015/05/Droplets-Water.jpg';
