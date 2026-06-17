import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputGroup: {
        width: '100%',
        marginBottom: 20,
    },
    inputTitulo: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        flex: 1,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    senhaContainer: {
        position: 'absolute',
        right: 15,
    },
    olhoOpen: {
        width: 22,
        height: 16,
        borderWidth: 2,
        borderColor: '#FF4D6D',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    olhoClose: {
        width: 8,
        height: 8,
        backgroundColor: '#FF4D6D',
        borderRadius: 4,
    },
});