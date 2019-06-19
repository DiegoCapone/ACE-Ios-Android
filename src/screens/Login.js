import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Platform } from 'react-native';
import BtnAdd from '../components/BtnAdd'
import Input from '../components/Input'
import Styles from '../styles/StylesPattern'
// import axios from 'axios'
import { connect } from 'react-redux'
import { onPlacaCpf } from '../store/actions/placaCpf'
// import GeraToken from '../GeraToken'
import Background from '../components/Background'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: null,
            placa: null
        }
    }

 GeraToken = async () => {
    this.props.navigation.navigate('Home')
    this.props.onPlacaCpf({ ...this.state })
    // navigator.geolocation.getCurrentPosition((position) => { })

    // if (!this.state.placa) {
    //     return Alert.alert('Informe a placa')
    // }

    // if (!this.state.cpf) {
    //     return Alert.alert('Informe a o cpf')
    // }

    // const data = await GeraToken()
    // if (data) {
    //     this.props.onPlacaCpf({ ...this.state })
    //     this.props.navigation.navigate('Home')
    //     console.log(true)
    // } else {
    //     console.log(false)
    // }
}


    render() {
        return (
            <Background content={
                <View style={{flex: 1}}>
                    <View style={styles.containerBar}>
                        <Text style={styles.title}>ACE</Text>
                        <Text style={styles.subTitle}>Aplicativo de Canhoto Eletronico</Text>
                    </View>
                    <View style={styles.container}>
                        <Input
                            icon='truck'
                            placeholder='Placa'
                            type={'custom'}
                            options={{
                            mask: 'AAA-9999'
                            }}
                            value={this.state.placa}
                            autoCapitalize="characters"
                            editable={true} style={{ marginBottom: 5 }}
                            onChangeText={placa => {
                                this.setState({ placa: placa.toUpperCase() })
                            }} />

                        <Input
                            icon='address-card'
                            type={'cpf'}
                            placeholder='CPF'
                            value={this.state.cpf}
                            editable={true}
                            onChangeText={cpf => this.setState({ cpf })} />
                        <BtnAdd nome='Login' action={this.GeraToken} />
                    </View>
                </View>
            }>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS == 'ios' ? 120 : 20,
    },
    containerBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios' ? 100 : 20,
        
    },
    title: {
        color: Styles.cor.branco,
        fontSize: Styles.size.grande,
    },
    subTitle: {
        color: Styles.cor.branco,
        fontSize: Styles.size.medio,


    }
});

const mapDispatchToProps = dispatch => {
    return {
        onPlacaCpf: placaCpf => dispatch(onPlacaCpf(placaCpf))
    }
}

export default connect(null, mapDispatchToProps)(Login)