import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ButtonHomeMenu from '../components/ButtonHomeMenu'
import Styles from '../styles/StylesPattern'
import BtnSair from '../components/BtnSair'
import Background from '../components/Background'
import moment from 'moment'
import 'moment/locale/pt-br'
// import { connect } from 'react-redux'
// import GeraToken from '../GeraToken'



// import { Container } from './styles';

export default class ComponentHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    Logout = () => {
        this.props.navigation.navigate('Auth')
    }

    Novo = async () => {
        // const data = await GeraToken()
        // if (data) {
        //     this.props.navigation.navigate('Novo')
        //     console.log(true)
        // } else {
        //     console.log(false)
        //     alert.alert('erro iris/Token')
        // }
    }

    Pendentes = async () => {
        // const data = await GeraToken()
        // if (data) {
        //     this.props.navigation.navigate('Pendentes')
        //     console.log(true)
        // } else {
        //     console.log(false)
        //     alert.alert('erro iris/Token')
        // }
    }

    Canhoto = async () => {
        // const data = await GeraToken()
        // if (data) {
        //     this.props.navigation.navigate('Canhoto')
        //     console.log(true)
        // } else {
        //     console.log(false)
        //     alert.alert('erro iris/Token')
        // }
    }

    SemCanhoto = async () => {
        // const data = await GeraToken()
        // if (data) {
        //     this.props.navigation.navigate('SemCanhoto')
        //     console.log(true)
        // } else {
        //     console.log(false)
        //     alert.alert('erro iris/Token')
        // }
    }



    render() {
        return (
            <Background content={
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.data}>{moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</Text>
                        <Text style={styles.dados}>Placa - </Text>
                        <Text style={styles.dados}>CPF - </Text>
                        <BtnSair nome='Logout' action={this.Logout} />
                    </View>
                    <View style={styles.containerBody} >
                        <ButtonHomeMenu title='Carregar' icon='truck' onPage={this.Novo} />
                        <ButtonHomeMenu title='Pendentes' icon='map-marked-alt' onPage={this.Pendentes} />
                        <ButtonHomeMenu title='Com Canhoto' icon='paste' onPage={this.Canhoto} />
                        <ButtonHomeMenu title='Sem Canhoto' icon='folder-open' onPage={this.SemCanhoto} />
                    </View>
                </View>
            }> 
            </Background>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        
    },
    containerHeader: {
        paddingHorizontal: 10,
        justifyContent: 'flex-start'
    },
    containerBody: {
        // marginBottom: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    containerBar: {

    },
    dados: {
        fontSize: Styles.size.pequeno,
        fontFamily: Styles.font.helvetica,
        color: Styles.cor.branco
    },
    data: {
        fontSize: Styles.size.medio,
        fontFamily: Styles.font.helvetica,
        color: Styles.cor.branco,
        fontWeight: 'bold',
    },
});
