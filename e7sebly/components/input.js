import React from 'react';
import { Text, View,TextInput,StyleSheet } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
    textInput:{
        width:"70%"
    }

  });
  
