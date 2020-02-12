import React from 'react';
import { Image, ImageBackground, ScrollView, ListView, TouchableHighlight, TouchableOpacity } from "react-native";
import {
  Container, Title, Content, Button, Text, Left, Body, Right, Card, CardItem, Header, Picker, Icon,
  List, Item, Input, ListItem, Spinner, View, Label, H3, Form, CheckBox, Row, Col, Grid, Badge, CardList
} from "native-base";
import styles from './styles';

export default class login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Container style={styles.container}>
        <ImageBackground style={styles.imagebackground} >
          <Header style={styles.header}>
            <Left style={{ flex: 1 }}>
              <Button transparent >
                <Icon name='md-arrow-round-back' style={{ color: 'white' }} size={25} />
              </Button>
            </Left>
            <Body>
              <Title style={{ color: 'white', alignSelf: 'center' }} >Login</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent >
                <Title style={{color:'#FFFFFF'}}>Signup</Title>
                {/* <Icon name='md-arrow-round-back' style={{ color: 'white' }} size={25} /> */}
              </Button>
            </Right>
          </Header>
          <Content>
            <Row style={styles.logoBack}>
              <Image style={styles.iconImage}  >
              </Image>
            </Row>
            <View>
              <View style={styles.inputView}>
                <Item style={{ borderBottomColor: 'white' }}>
                  <Icon name="email-outline" type="MaterialCommunityIcons" size={100} style={{ color: 'white' }} />
                  <Input  style={styles.inputfield}
                    placeholder='Email /Mobile No'
                    //onChangeText={(val) => login.setState({ userName: val })}
                    autoCapitalize='none'
                    maxLength={100}
                    borderColor='white'
                    selectionColor={'white'}
                    placeholderTextColor='white'
                  />
                </Item>
                <Item style={{ borderBottomColor: 'white', marginTop: 10 }}>
                  <Icon name="lock-outline" type="MaterialCommunityIcons" style={{ color: 'white', paddingBottom: 2 }} />
                  <Input  style={styles.inputfield}
                    //onChangeText={(val) => login.setState({ password: val })}
                    selectionColor={'white'}
                    placeholder='Password'
                    maxLength={14}
                    secureTextEntry
                    autoCapitalize='none'
                    placeholderTextColor='white'
                  />
                </Item>
                <View style={{ marginTop: 30, }}>
                  <Button block style={{ backgroundColor: '#3D5AFE', borderRadius: 50 }}
                      >
                    <Text style={{ fontSize: 14 }}>LOGIN</Text>
                  </Button>
                  <Row style={styles.orLabel}>
                    <Label style={{ color: 'white' }}>OR</Label>
                  </Row>
                </View>
                <Row >
                  <Left>
                    <Button block style={styles.fb}  >
                      <Icon name='logo-facebook' size={14} />
                      <Text style={{ fontSize: 14, marginLeft: 5 }}>facebook</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button block style={styles.google}>
                      <Icon name='logo-googleplus' size={14} />
                      <Text style={{ fontSize: 14, marginLeft: 5 }}>Google</Text>
                    </Button>
                  </Right>
                </Row>
                <Row style={{ justifyContent: 'center', marginBottom: 15 }}>
                  <Text style={{ textAlign: 'center', color: 'red' }}></Text>
                </Row>
                <Row style={{ justifyContent: 'center' }} >
                  <Text style={styles.forgot}>
                    Forgot Password</Text>
                </Row>
              </View>
            </View>
          </Content>
        </ImageBackground >
      </Container >
    );
  }
}
