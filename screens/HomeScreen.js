import React from 'react';
import Style from './Style'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  AppRegistry,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#193441'}}>
                <Text style={styles.header}>Simple Header</Text>
            </View>

            <View style={{flex: 8, backgroundColor: '#3E606F'}}>
                <Text style={styles.content}>Blah Blah Blah</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#193441'}}></View>
            
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
    fontSize: 40,
    fontFamily: 'Cochin',
  },
  content: {
    textAlign: 'center',
  },
})
