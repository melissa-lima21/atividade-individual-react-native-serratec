import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a2e75', 
    },
    imagemLua: {
        position: 'absolute',
        top: 56,
        right: 15,
        width: 50,
        height: 60,
        opacity: 10,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    containerPrincipal: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: -25,
    },
    acesseSuaContaText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 150,
    },
    textoEsqueciSenha: {
        color: '#FF4D6D', 
        fontSize: 16,
        textAlign: 'left',
        marginTop: 15,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    footerTextNormal: {
        color: '#FFF',
        fontSize: 16,
    },
    footerTextLink: {
        color: '#FF4D6D',
        fontSize: 16,
        fontWeight: 'bold',
    },
});