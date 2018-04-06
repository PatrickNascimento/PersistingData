import React from 'react';
import { StyleSheet,
          Text,
          View,
          TextInput,
          AsyncStorage,
          TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {name:'',phone:''};
    this.clearData = this.clearData.bind(this)
  }

  persistData(){
      let name = this.state.name
      let phone = this.state.phone
      AsyncStorage.setItem('name', name)
      AsyncStorage.setItem('phone', phone)
      this.setState({name:name,persistedName:name, phone: phone, persistedPhone:phone})
  }

  check(){
     AsyncStorage.getItem('name').then((name=>{
      this.setState({name:name, persistedName:name})
     })) 

      AsyncStorage.getItem('phone').then((phone=>{
       this.setState({phone:phone, persistedName:phone})
      })) 
  }


  componentWillMount(){
    this.check()
  }

  clearData(){
      AsyncStorage.clear();
      this.setState({persistedPhone:'',persistedName:''})
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text>
          Persistindo Dados
        </Text>

        <Text>Nome</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name.text})}
          value={this.state.name}
        />  

        <Text>Phone</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name.text})}
          value={this.state.name}
        />   

        <TouchableHighlight
          style={styles.button}
          onPress={this.persistData}
          underlayColor="white">
          <Text> SALVAR </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.clearData}
          underlayColor="white">
          <Text> LIMPAR DADOS </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
