import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {BlueButton, WhiteButton} from '../../components/Button';
import TextInput from '../../components/TextInput';
import {editIcon, successIcon, errorIcon} from '../../assets';

const Input = () => {
  return (
    <View>
      <TextInput
        editColor
        label="Password"
        value={password}
        onChangeText={(text) => this.setState({password: text})}
      />
      <Image source={editIcon} style={styles.img} />
    </View>
  );
};

class ChangePassword extends React.Component {
  state = {
    password: '',
    newPassword: '',
    name: 'Anna Maddison',
    email: 'Melt@gmail.com',
    repeatNewPassword: '',
    changePassword: false,
    error: false,
    textSuccess: 'Password \nchanged successfully!',
    textError: 'Password \nhas not been changed',
  };
  InputView = () => {
    const {password, newPassword, name, email, repeatNewPassword} = this.state;

    return (
      <View>
        <View>
          <TextInput
            editColor
            label="Password"
            value={password}
            onChangeText={(text) => this.setState({password: text})}
          />
          <Image source={editIcon} style={styles.img} />
        </View>
        <View>
          <TextInput
            label="New password"
            editColor
            value={newPassword}
            onChangeText={(text) => this.setState({newPassword: text})}
          />
          <Image source={editIcon} style={styles.img} />
        </View>
        <View>
          <TextInput
            label="Repeat new password"
            editColor
            value={repeatNewPassword}
            onChangeText={(text) => this.setState({repeatNewPassword: text})}
          />
          <Image source={editIcon} style={styles.img} />
        </View>
      </View>
    );
  };
  button = () => {
    return (
      <View>
        <BlueButton
          title="Change password"
          onPress={() => {
            this.setState({changePassword: true});
          }}
        />
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    const {
      password,
      newPassword,
      name,
      email,
      error,
      changePassword,
      textError,
      textSuccess,
    } = this.state;
    return (
      <View style={styles.container}>
        <Header title="My account" onBack onPress={() => navigation.goBack()} />
        <View style={styles.view}>
          <View style={{margin: 10}}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          {changePassword ? (
            <View style={styles.successView}>
              <Image
                source={error ? errorIcon : successIcon}
                style={styles.successImg}
              />
              <Text style={styles.textSuccess}>
                {error ? textError : textSuccess}
              </Text>
            </View>
          ) : (
            <this.InputView />
          )}
          {changePassword ? (
            <WhiteButton
              title={error ? 'Try again' : 'Done'}
              onPress={() => {
                error
                  ? this.setState({
                      error: false,
                      changePassword: false,
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
export default ChangePassword;

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
  successView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  successImg: {
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
});
