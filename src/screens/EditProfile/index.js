import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import {BlueButton, WhiteButton} from '../../components/Button';
import {editIcon, successIcon, errorIcon} from '../../assets/index';

class EditProfile extends React.Component {
  state = {
    name: '',
    email: '',
    success: false,
    error: false,
    textSuccess: 'Changed successfully!',
    textError: 'Has not been changed',
  };
  InputView = () => {
    const {name, email, success, error} = this.state;
    return (
      <View>
        <View>
          <TextInput
            label={'Anna Maddison'}
            editColor
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
          <Image source={editIcon} style={styles.img} />
        </View>
        <View>
          <TextInput
            label={'Melt@gmail.com'}
            editColor
            value={email}
            onChangeText={(text) => this.setState({email: text})}
          />
          <Image source={editIcon} style={styles.img} />
        </View>
      </View>
    );
  };
  button = () => {
    const {navigation} = this.props;

    return (
      <View>
        <WhiteButton
          title="Change password"
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
        <BlueButton
          title="Save"
          onPress={() => {
            this.setState({success: true});
          }}
        />
      </View>
    );
  };
  render() {
    const {navigation} = this.props;
    const {name, email, success, error, textError, textSuccess} = this.state;
    return (
      <View style={styles.container}>
        <Header title="My account" onBack onPress={() => navigation.goBack()} />
        <View style={styles.view}>
          <View style={{margin: 10}}>
            <Text style={styles.name}>Anna Maddison</Text>
            <Text style={styles.email}>Melt@gmail.com</Text>
          </View>
          {success ? (
            <View style={styles.viewSuccess}>
              <Image
                source={error ? errorIcon : successIcon}
                style={styles.imgSuccess}
              />
              <Text style={styles.textSuccess}>
                {error ? textError : textSuccess}
              </Text>
            </View>
          ) : (
            <this.InputView />
          )}
          {success ? (
            <WhiteButton
              title={error ? 'Try again' : 'Done'}
              onPress={() => {
                error
                  ? this.setState({
                      error: false,
                      success: false,
                    })
                  : navigation.goBack();
              }}
            />
          ) : (
            <this.button />
          )}
        </View>
      </View>
    );
  }
}
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#585858',
    //fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Bold',
  },
  email: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    color: '#B6B6B6',
    fontStyle: 'normal',
    marginTop: 4,
  },
  view: {
    margin: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  img: {
    position: 'absolute',
    right: 0,
    bottom: 7,
    width: 32,
    height: 16,
    resizeMode: 'contain',
  },
  imgSuccess: {
    width: 92,
    height: 92,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  textSuccess: {
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '500',
    textAlign: 'center',
  },
  viewSuccess: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
