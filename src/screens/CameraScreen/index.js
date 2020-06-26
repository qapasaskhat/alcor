import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
const {height} = Dimensions.get('screen');
class CameraScreen extends React.Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          opacity={0.98}
          style={{
            backgroundColor: 'transprent',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 99,
            width: '100%',
            height: '20%',
          }}>
          <LinearGradient
            locations={[0.2, 0.4, 0.6, 0.8, 1]}
            colors={[
              'rgba(48, 120, 255, 0.98)',
              'rgba(48, 120, 255, 0.95)',
              'rgba(48, 120, 255, 0.9)',
              'rgba(48, 120, 255, 0.95)',
              'rgba(48, 120, 255, 0.5)',
            ]}
            style={{flex: 1}}></LinearGradient>

          <LinearGradient
            locations={[0.2, 0.4, 0.6, 0.8, 1]}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={[
              'rgba(48, 120, 255, 0.98)',
              'rgba(48, 120, 255, 0.95)',
              'rgba(48, 120, 255, 0.9)',
              'rgba(48, 120, 255, 0.95)',
              'rgba(48, 120, 255, 0.98)',
            ]}
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
            }}></LinearGradient>
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
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
        <View
          style={{
            backgroundColor: 'rgba(48, 120, 255, 0.98)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 99,
            width: '100%',
            height: '25%',
          }}></View>
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
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(48, 120, 255, 0.8)',
    zIndex: 10,
  },
  bottom: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(48, 120, 255, 0.9)',
    zIndex: 10,
    height: '25%',
    width: '100%',
    maxHeight: height * 0.25,
  },
});
