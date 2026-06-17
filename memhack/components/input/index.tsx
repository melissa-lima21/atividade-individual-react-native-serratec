import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface InputProps extends TextInputProps {
    titulo: string;
    isSenha?: boolean;
}

export const Input = ({ titulo, isSenha = false, ...rest }: InputProps) => {
    const [ocultarSenha, setOcultarSenha] = useState<boolean>(isSenha);

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.inputTitulo}>{titulo}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={ocultarSenha}
                    {...rest}
                />
                {isSenha && (
                    <TouchableOpacity 
                        style={styles.senhaContainer}
                        onPress={() => setOcultarSenha(!ocultarSenha)}
                    >
                        <View style={styles.olhoOpen}>
                            <View style={styles.olhoClose} />
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};