import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component } from 'react';

import Botao from './botao'
import Input from './input'
import Logo from './logo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 70,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        paddingHorizontal: 70,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
    },
    textoBotao: {
        color: 'black'
    },
    botaoCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoCadastro: {
        color: '#FFEB3B',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default function TelaPrincipal({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo 
                size={270} 
                margem={50}    
            />
            <Input
                width={250}
                texto='Nome de Usuário'
            />
            <Input
                width={250}
                texto='Senha'
                senha={true}
            />
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: 80 }}>
                <Botao
                    style={styles.botao}
                    text='Entrar'
                    textStyle={styles.textoBotao}
                    func={() => navigation.navigate('Tela')}
                />
                <Text style={{ color: 'white' }}>
                    Não possui uma conta?
                </Text>
                <Botao
                    style={styles.botaoCadastro}
                    text='Cadastre-se'
                    textStyle={styles.textoBotaoCadastro}
                    func={() => navigation.navigate('Tela')}
                />
            </View>
        </View>
    );
}
