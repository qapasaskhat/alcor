import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {
  icRazmetka,
  icSun,
  icLine,
  icUpdate,
  icUser,
  icBigCamera,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  icTrue,
  replay,
  rateke,
  close2,
} from '.././../assets';
const {height, width} = Dimensions.get('screen');

import Modal from 'react-native-modal';
class CameraScreen extends React.Component {
  state = {
    data: null,
    loading: false,
    modal: false,
  };
  takePicture = async () => {
    if (this.camera) {
      this.setState({});
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({data: data});
    }
  };
  render() {
    const {data, loading} = this.state;
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.modal} style={{borderRadius: 12}}>
          <View style={{flex: 1, backgroundColor: 'white', borderRadius: 12}}>
            <LinearGradient
              colors={['#58FF63', 'rgba(255, 255, 255, 0)']}
              start={{x: 2.5, y: -1}}
              end={{x: 0.0, y: 1.0}}
              locations={[0.0, 1]}
              style={{flex: 1}}>
              <Text>bussss</Text>
            </LinearGradient>
            <BlurView
              style={{
                position: 'absolute',
                zIndex: 10,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rbga(255,255,255,0.05)',
              }}
              blurType="light"
              blurAmount={100}
              shadowRadius={50}
              reducedTransparencyFallbackColor="white"
            />
          </View>
        </Modal>
        <View opacity={0.98} style={styles.top}>
          {data ? (
            loading ? (
              <ActivityIndicator color={'white'} size={'large'} />
            ) : (
              <View style={{alignSelf: 'center'}}>
                <Image source={rateke} style={styles.sun} />
              </View>
            )
          ) : (
            <View style={styles.view}>
              <Image source={icRazmetka} style={styles.razmetka} />
              <Image source={icLine} style={styles.line} />
              <Image source={icSun} style={styles.sun} />
            </View>
          )}

          <Text style={styles.text}>
            {data
              ? loading
                ? 'Processing'
                : 'Send or retake photo'
              : 'Keep sensor within frames and well lit'}
          </Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.focus}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image source={topLeft} style={styles.ramka} />
              <Image source={topRight} style={styles.ramka} />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={bottomLeft} style={styles.ramka} />
              <Image source={bottomRight} style={styles.ramka} />
            </View>
          </View>
        </View>
        {this.state.data ? (
          <Image
            style={{flex: 1}}
            source={{
              uri: `data:image/jpg;base64,${this.state.data.base64}`,
            }}
          />
        ) : (
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            focusDepth={1}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              // console.log(barcodes);
            }}
          />
        )}
        <View style={styles.bottom}>
          <View style={styles.horizontal}>
            {!loading && (
              <TouchableOpacity style={styles.borderRadius}>
                <Image source={icUser} style={styles.iconUser} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                if (data) {
                  this.setState({modal: true});
                } else {
                  this.takePicture();
                }
              }}
              style={styles.view1}>
              <Image
                source={data ? (loading ? close2 : icTrue) : icBigCamera}
                style={[
                  data
                    ? {width: 25, height: 25, resizeMode: 'contain'}
                    : styles.camera,
                ]}
              />
            </TouchableOpacity>
            {!loading && (
              <TouchableOpacity
                onPress={() => {
                  if (data) {
                    this.setState({data: null});
                  } else {
                    // this.takePicture();
                  }
                }}
                style={styles.update}>
                <Image
                  source={data ? replay : icUpdate}
                  style={styles.iconUpdate}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default CameraScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'rgba(48, 120, 255, 0.9)',
  },
  top: {
    backgroundColor: 'rgba(48, 120, 255, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
  },
  bottom: {
    backgroundColor: 'rgba(48, 120, 255, 0.6)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    height: '25%',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  razmetka: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  sun: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  line: {width: 2, height: 35, resizeMode: 'contain'},
  text: {
    color: 'white',
    fontFamily: 'SFProDisplay-Regular',
    textAlign: 'center',
    position: 'absolute',
    bottom: 25,
    fontSize: 16,
    alignSelf: 'center',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  borderRadius: {
    backgroundColor: '#7196e5',
    alignSelf: 'center',
    padding: 4.5,
    borderRadius: 50,
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
    padding: 4.5,
    borderRadius: 50,
    width: width * 0.15 + 4.5,
    height: width * 0.15 + 4.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconUpdate: {
    resizeMode: 'contain',
    width: width * 0.09,
    height: width * 0.09,
  },
  iconUser: {width: width * 0.15, height: width * 0.15},
  middle: {
    position: 'absolute',
    top: '20%',
    left: 0,
    bottom: '25%',
    right: 0,
    flex: 1,
    zIndex: 10,
  },
  ramka: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  focus: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingTop: width * 0.15,
    paddingBottom: width * 0.15,
  },
});
