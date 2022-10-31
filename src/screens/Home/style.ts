import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,  
        alignItems: 'center',
        alignContent: 'center',
        padding: 24
    },
    header: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',        
    },
    img: {
        width: 19,
        height: 31,
        marginRight: 8
    },
    toHeader: {
        color: '#4EA8DE',
        fontWeight:'bold',
        fontSize: 36
    },
    doHeader: {
        color: '#5E60CE',
        fontWeight:'bold',
        fontSize: 36,
    }
})