import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Background from '../components/Background'
import Input from '../components/Input'
import BtnAdd from '../components/BtnAdd'



export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cnpj: '',
        token: null
    }
}

ValidaCNPJ = async () => {
  // if (!this.state.cnpj) {
  //     return Alert.alert('CNPJ invalido')
  // }

  // if (this.state.cnpj.length != 14) {
  //     return Alert.alert('CNPJ invalido')
  // }

  // try {
  //     const res = await axios.post('http://10.0.0.79:3000/GeraToken', {
  //         cnpj: this.state.cnpj
  //     })

  //     this.setState({ token: res.data.token })

  //     if (this.state.token) {
  //         this.props.onValidaCnpj({ ...this.state })
  //         this.props.navigation.navigate('Auth')
  //     }
  // } catch (error) {
  //     return Alert.alert('CNPJ invalido')
  // }
  console.log('teste')
}

  render() {
    return (
        <Background content={
          <View style={styles.container}>
              <Input
                  icon='address-card'
                  placeholder='CNPJ'
                  value={this.props.value}
                  maxLength={14}
                  keyboardType='number-pad'
                  onChangeText={cnpj => this.setState({ cnpj: cnpj })}
              />
              <BtnAdd nome='Confirmar' action={this.ValidaCNPJ} />
          </View>
        }>
        </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
