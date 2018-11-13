import React from 'react';
import Style from './Style'
import SwitchExample from './SwitchExample'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       switch1Value: false,
    }
 }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: 'darkblue'}}>
                <Text style={styles.header}>Stars App</Text>
            </View>

            <View style={{flex: 8, backgroundColor: 'lightgray'}}>
                <Image source={require('./Utah_Stars_ABA_logo.png')} style={{width: 100 + '%'}} />
                <View>
                  <SwitchExample
                    toggleSwitch1 = {this.toggleSwitch1}
                    switch1Value = {this.state.switch1Value}/>
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}></View>
            
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}></View>
                <View style={Style.inputContainer}></View>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    fontSize: 80,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Cochin',
    color: 'red',
  },
  content: {
    paddingVertical: 30,
    textAlign: 'center',
    fontSize: 30,
    color: 'lightgray',
  },
})
