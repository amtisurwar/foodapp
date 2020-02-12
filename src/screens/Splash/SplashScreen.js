import React, { Component } from "react";
import {
    View,
    // Text,
    Image,
   
} from "react-native";
import { Text, Container, Header, Left, Right } from "native-base";

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
      }

    static navigationOptions = {
        header:null
    }

    componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{ this.props.navigation.push('Login')
             // Add your logic for the transition
        }, 2000);
   }

    render(){
        return(
            <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#00A0CC', height:'100%', width:'100%'}}>
               <View style={{justifyContent:'center', alignItems:'center', flex:1, height:'100%', width:'100%'}}>
                    <Image style={{ height: 60, width: 240}} />
               </View>
            </View>
        )
    }
}