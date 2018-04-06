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
    this.persistData = this.persistData.bind(this)
  }

  persistData(){
      let name = this.state.name
      let phone = this.state.phone
      AsyncStorage.setItem('name', name)
      AsyncStorage.setItem('phone', phone)
      this.setState({name:name,persistedName:name, phone: phone, persistedPhone:phone})  
  }

  showData(){
    // Exibir os dados em uma scrolllist
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
      this.setState({persistedPhone:'', persistedName:''})
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text>
          Persistindo Dados
        </Text>

        <Text>Nome...</Text>

        <TextInput
          value={this.state.name}          
          onChangeText={(text) => this.setState({name:text})}
          style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}          
        />  

        <Text>Phone</Text>

        <TextInput          
          value={this.state.phone}
          onChangeText={(text) => this.setState({phone:text})}
          style={{height: 40, width: '80%', borderColor: 'gray', borderWidth: 1}}         
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

         <TouchableHighlight
          style={styles.button}
          onPress={this.showData}
          underlayColor="red">
          <Text> EXIBE DADOS </Text>
        </TouchableHighlight> 

        <Text></Text>     

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
