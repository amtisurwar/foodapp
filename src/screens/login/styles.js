const React = require('react-native');

const {
  StyleSheet,
  Dimensions,
  Platform
} = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    height: deviceHeight,
    width:deviceWidth,
    flex: 1,
  },
  header:
    {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      elevation:0
    },
  logoBack:
    {
      justifyContent: 'center',
      borderBottomWidth: 0
    },
  iconImage:
    {
      height: 180,
      width: 220
    },
  inputView:
    {
      paddingLeft: 40,
      marginRight: 40
    },
  orLabel:
    {
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
  fb:
    {
      marginRight: 15,
      backgroundColor: '#5C6BC0',
      borderRadius: 50
    },
  google:
    {
      marginLeft: 15,
      backgroundColor: '#F44336',
      borderRadius: 50
    },
  forgot:
    {
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: 'white',
      color: 'white'
    },
  imagebackground: {
    // height: deviceHeight,
    flex: 1,
  },

  headingtext: {
    paddingTop: 10,
    fontSize: 16,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  checkboxText: {
    fontWeight: 'normal',
    color: '#37474F',
    fontSize: 16,
  },
  selectedCheckbox: {
    backgroundColor: '#558B2F',
    borderColor: '#37474F',

  },
  unSelectedCheckbox: {
    backgroundColor: 'transparent',
    borderColor: '#37474F',

  },
  checkboxstyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: global.FONT_SIZE,
    marginBottom: global.FONT_SIZE,

  },
  loadingCenter: {
    flex: 1,
    alignSelf: 'center'
  },
  inputfield: {
    padding: 0,
    color: 'white'
  },
};