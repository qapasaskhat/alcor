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
          style={{maxHeight: height * 0.25, backgroundColor: 'transparent'}}>
          <BlurView
            style={styles.absolute}
            blurType="ultraThinMaterial"
            blurAmount={14}
            shadowRadius={50}
            reducedTransparencyFallbackColor="white"
            downsampleFactor={25}
          />
          <Text style={{backgroundColor: 'transprent'}}>vhiggiuygiuygyyoi</Text>
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
            console.log(barcodes);
          }}
        />
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
    height: '85%',
    width: '100%',
    zIndex: 0,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(48, 120, 255, 0.8)',
    zIndex: 10,
    height: height * 0.5,
    width: '100%',
    maxHeight: height * 0.5,
  },
});
