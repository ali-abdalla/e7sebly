import React from 'react';
import { Text, View,TextInput,StyleSheet } from 'react-native';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value
    };
  }
  onChange=(text)=>{
    this.setState({value:text});
    this.props.updateStatus(text);
  }
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <TextInput keyboardType={this.props.type} onChangeText={this.onChange} style={styles.textInput} value={this.state.value}></TextInput>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
    textInput:{
        width:"70%"
    }

  });
  
