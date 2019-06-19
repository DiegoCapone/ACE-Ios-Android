import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import Background from '../components/Background'
import Input from '../components/Input'
import BtnAdd from '../components/BtnAdd'
import db from 'react-native-firebase'



export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cnpj: '',
        token: null
    }
}

Authentication = async () => {
    let cnpj = this.state.cnpj.split('.').join('').split('/').join('')
    cnpj = cnpj.split('-').join('')

    db.firestore().collection('Clientes').doc(cnpj)
        .get().then((doc) => {
            if (doc.data()) {
              console.log(doc.data())
                this.props.navigation.navigate('Login')
            } else {
                Alert.alert('Erro de Autenticação')
            }
        })
        .catch(function (e) {
            Alert.alert('Erro de conexão' + e.message)
            console.log(e)
        });
}


  render() {
    return (
        <Background content={
          <View style={styles.container}>
              <Input
                  icon='address-card'
                  placeholder='CNPJ'
                  type={'cnpj'}
                  value={this.state.cnpj}
                  onChangeText={cnpj => this.setState({ cnpj: cnpj })}
              />
              <BtnAdd nome='Confirmar' action={this.Authentication} />
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
