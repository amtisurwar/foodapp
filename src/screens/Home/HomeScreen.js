import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import {
  Button,
  Row, Col,
  Footer, FooterTab,
  Badge,
  Container,Content
} from "native-base";
import styles from './styles';
//import styles from './style';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';


const logo = require('../../../assets/icons/home-bg.png');
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerTransparent: 'true',
    //Image: <Image source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} styles={{width:50, height:50, borderRadius:30}} />,
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
    headerRight: (
      <Text style={{marginRight:15, fontSize:15, fontWeight:'bold'}}>Near me</Text>
    )
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <View style={{marginTop:70}}>
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
      </View>
      </View>
    </TouchableHighlight>
    </View>
  );

  render() {
    return (
      <Container>
        <Content>
      <View>
        <ImageBackground source={require('../../../assets/icons/home-bg.png')} style={{width: '100%', height: '100%'}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
        </ImageBackground>
      </View>
      </Content>
      <Footer>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col size={1.1} style={{ justifyContent: 'center' }}>
              <Button >
                <ImageBackground source={require('../../../assets/icons/homes.png')} style={styles.btnIcon} >
                </ImageBackground>
              </Button>
            </Col>
            <Col size={1.1} style={{ justifyContent: 'center' }}>
              <Button >
              <Image source={require('../../../assets/icons/explore.png')} style={styles.btnIcon} />
              </Button>
            </Col>
            <Col size={1.1} style={{ justifyContent: 'center' }}>
              <Button>
                <Image source={require('../../../assets/icons/chat.png')} style={styles.btnIcon} />
              </Button>
            </Col>
          </Row>
        </FooterTab>
      </Footer>
      </Container>
      
    );
  }
}


// const styles = StyleSheet.create({
//   HomeBtnIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 40 / 2,

//   },
//   btnIcon: {
//     //flex: 1,
//     height: 28,
//     width: 28,
//     // resizeMode: 'cover'
//   },
//   btnText: {
//     flex: 1,
//     fontWeight: 'bold',
//     color: '#A9A9A9',
//     fontSize: 9,
//     // marginLeft:-10
//   },
//   badgeIcon: { 
//     height: 17,
//     // borderRadius:8,
//     // width: 16,
//     flex: 1,
//     position: 'absolute',
//     alignSelf: 'flex-end',
//     right: -4,
//     top: -2 ,
//     justifyContent:'center'
//   },
//   badgeText: {
//     // flex: 1,
//     alignSelf: 'center', 
//     lineHeight: 14,
//     paddingTop: 0,
//     paddingLeft: 0,
//     paddingRight: 0,
//     //  width: 30,
//     fontSize: 12
//   },
//   badgeView: {
//     right: 8, 
//     width: 40
//   }
// });