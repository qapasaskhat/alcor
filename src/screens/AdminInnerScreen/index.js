import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
} from 'react-native';
import Header from '../../components/Header';
import {InnerCard} from '../../components/Card';
import DefineModal from './DefineModal';

const {width} = Dimensions.get('window');
const width_window = width;
class InnerScreen extends React.Component {
  state = {
    active: true,
    width: 0,
    height: 0,
    ratio: 0,
    edit: false,
    define: false,
  };
  handleTextRef = (ref) => (this.text = ref);

  componentDidMount() {
    Image.getSize(myUri, (width, height) => {
      console.log(width, height);
      let ratio = (width_window - 20) / width;
      this.setState({width, height, ratio});
    });
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View style={styles.miniCard}>
          <Text style={styles.textCard}>pH</Text>
        </View>
      </View>
    );
  };

  onPressEdit = () => {
    this.setState({edit: !this.state.edit});
  };

  _renderContent = () => {
    return (
      <View>
        <View style={{marginTop: 10, marginBottom: 10, paddingTop: 5}}>
          <Text style={styles.result}>Result</Text>
          <FlatList
            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
            numColumns={5}
            columnWrapperStyle={styles.flatlist}
            renderItem={this._renderItem}
          />
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.result}>What does it mean?</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  };

  _renderImage = () => {
    return (
      <View style={{marginTop: -10}}>
        <Image
          style={{
            width: width - 20,
            height: this.state.height * this.state.ratio,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
          source={{
            uri: myUri,
          }}
        />
        {this.state.edit && (
          <View style={styles.absoluteTop}>
            <FlatList
              data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
              numColumns={5}
              columnWrapperStyle={styles.flatlist}
              renderItem={this._renderItem}
            />
          </View>
        )}
        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => this.onPressEdit()}
            style={[
              styles.btn,
              {backgroundColor: this.state.edit ? '#3078FF' : 'white'},
            ]}>
            <Text
              style={[
                styles.txt,
                {color: this.state.edit ? 'white' : '#3F3F3F'},
              ]}>
              {this.state.edit ? 'Save result' : 'Edit result'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({define: true})}
            style={styles.btn}>
            <Text style={styles.txt}>Define shape</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    const {all} = this.props.route.params;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <Header title={all ? 'All water' : 'My water'} />
        <ScrollView style={{padding: 10, paddingTop: 0, zIndex: 0}}>
          <View
            style={{borderRadius: 12, backgroundColor: 'white', marginTop: 15}}>
            <InnerCard
              item={{active: true}}
              status={this.state.active}
              onPress={() => this.setState({active: !this.state.active})}
            />
            {this.state.active ? this._renderContent() : this._renderImage()}
          </View>
        </ScrollView>
        <Modal
          visible={this.state.define}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <DefineModal onClose={() => this.setState({define: false})} />
        </Modal>
      </View>
    );
  }
}

export default InnerScreen;

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
