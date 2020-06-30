import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import SwipeUpDown from 'react-native-swipe-up-down';
import Header from '../../components/Header';
import {ListCard} from '../../components/Card';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {
  icFilter,
  icLocation,
  icTo,
  icFrom,
  close,
  minus,
  right,
  yes,
} from '../../assets';

import Item from '../../components/Item';
import TopView from '../../components/TopView';

class AdminScreen extends React.Component {
  state = {
    modal: false,
    animation: 'linear',
    type: [
      {index: 1, title: 'My water'},
      {index: 0, title: 'All water'},
    ],
    current_type: {index: 0, title: 'All water'},
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <Header title={this.state.current_type.title} />
        <TopView
          current_type={this.state.current_type}
          onPressOne={() =>
            this.setState({current_type: {index: 0, title: 'All water'}})
          }
          onPressTwo={() =>
            this.setState({current_type: {index: 1, title: 'My water'}})
          }
        />
        {this.state.current_type.index === 1 ? (
          <ScrollView style={{padding: 10, paddingTop: 0, zIndex: 0}}>
            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: true}}
            />
            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: true}}
            />
          </ScrollView>
        ) : (
          <ScrollView style={{padding: 10, paddingTop: 0, zIndex: 0}}>
            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: true}}
            />
            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: false}}
            />
            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: true}}
            />

            <ListCard
              onPress={() => navigation.navigate('InnerScreen')}
              item={{active: true}}
            />
          </ScrollView>
        )}
        <TouchableOpacity
          onPress={() => {
            this.setState({animation: 'easeInEaseOut'}, () => {
              this.swipeUpDownRef.showFull();
            });
          }}
          style={styles.divFilter}>
          <Image source={icFilter} style={styles.filter} />
        </TouchableOpacity>

        <SwipeUpDown
          hasRef={(ref) => (this.swipeUpDownRef = ref)}
          itemFull={
            <View
              style={{flex: 1, backgroundColor: 'transparent', height: '100%'}}>
              <TouchableWithoutFeedback
                onPress={() => this.swipeUpDownRef.showMini()}>
                <View
                  style={{
                    backgroundColor: 'black',
                    height: '45%',
                    width: '100%',
                  }}
                  opacity={0.3}
                />
              </TouchableWithoutFeedback>
              <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={14}
                shadowRadius={50}
                reducedTransparencyFallbackColor="white"
              />
              <View
                style={{
                  width: '100%',
                  height: '55%',
                }}>
                <Image source={minus} style={styles.minus} />
                <View style={styles.clear}>
                  <Text style={styles.textClear}>Clear all</Text>
                  <Image source={close} style={styles.close} />
                </View>
                <View style={{padding: 20}}>
                  <Item
                    sourceLeft={icLocation}
                    titleLeft={'Location'}
                    sourceRight={right}
                    titleRight={'My location'}
                  />
                  <View style={styles.line} />
                  <Item
                    sourceLeft={icTo}
                    titleLeft={'From'}
                    sourceRight={right}
                    titleRight={'04.05.2020'}
                  />
                  <View style={styles.line} />
                  <Item
                    sourceLeft={icFrom}
                    titleLeft={'To'}
                    sourceRight={right}
                    titleRight={'10.05.2020'}
                  />
                  <View style={styles.line} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 55,
                      maxHeight: 55,
                      borderRadius: 14,
                      width: '60%',
                    }}>
                    <Text
                      style={{
                        color: '#FF3B30',
                        fontFamily: 'SFProDisplay-Bold',
                        fontSize: 18,
                      }}>
                      Shouldn’t drink
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.swipeUpDownRef.showMini()}
                    style={{marginRight: 10}}>
                    <Image source={yes} style={{width: 60, height: 60}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          disablePressToShow={false}
          swipeHeight={0}
          style={{backgroundColor: 'transparent', flex: 1}}
          animation={this.state.animation}
        />
      </View>
    );
  }
}

export default AdminScreen;

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
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#C3C3C3',
  },
});
