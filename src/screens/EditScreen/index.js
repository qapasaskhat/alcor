import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {icEllipse} from '../../assets';
class EditScreen extends React.Component {
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
    // Alert.alert(
    //   `x coord = ${evt.nativeEvent.locationX}, y coord = ${evt.nativeEvent.locationY}`,
    // );
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          onTouchStart={(evt) => this.handlePress(evt)}
          style={{resizeMode: 'cover', width: '100%', height: 200}}>
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
              uri: 'https://tinyjpg.com/images/social/website.jpg',
            }}
            style={{resizeMode: 'cover', width: '100%', height: 200, zIndex: 0}}
          />
        </View>
      </View>
    );
  }
}

export default EditScreen;

var styles = StyleSheet.create({});
