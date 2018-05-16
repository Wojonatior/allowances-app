import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#aaddcc'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 64,
        marginBottom: 64
    },
    input: {
        marginBottom: 16
    },
    label: {
        fontSize: 16,
        marginBottom: 4
    },
    inputField: {
        width: 200,
        height: 25,
        borderWidth: 1,
        borderColor: '#669988',
        backgroundColor: '#88bbaa',
        fontSize: 16
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#44aa55'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
        color: '#ffffff'
    }
});
