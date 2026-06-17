import React, { useState } from 'react';
import { View, Text, Image, Alert, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Input } from '../components/input';
import { Button } from '../components/button';

export const Login = () => {
    const [email, setEmail] = useState<string>('melissa@gmail.com');
    const [senha, setSenha] = useState<string>('1234');

    const handleLogin = () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const emailValido = 'melissa@gmail.com';
        const senhaValida = '1234';

        if (email === emailValido && senha === senhaValida) {
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
        } else {
            Alert.alert('Erro', 'Os dados preenchidos estão incorretos.');
        }
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                
                <Image 
                    source={require('../assets/lua.png')} 
                    style={styles.imagemLua} 
                />

                <View style={styles.content}>
                    <View style={styles.containerPrincipal}>
                        <Text style={styles.acesseSuaContaText}>Acesse sua conta</Text>
                        <View style={styles.logoContainer}>
                            <Image 
                                source={require('../assets/logotipo.png')} 
                                style={styles.logo} 
                                resizeMode="contain" 
                            />
                        </View>
                    </View>

                    <Input 
                        titulo="E-mail" 
                        value={email} 
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input 
                        titulo="Senha" 
                        value={senha}
                        onChangeText={setSenha}
                        isSenha={true}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <Button title="Entrar" onPress={handleLogin} />

                    <View style={styles.footer}>
                        <Text style={styles.footerTextNormal}>Não tem conta?</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.footerTextLink}> Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};