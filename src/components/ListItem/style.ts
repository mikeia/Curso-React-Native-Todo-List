import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        width: '100%'
    },
    listItem: {
        backgroundColor: '#262626',
        flexDirection: 'row',
        padding: 2,
        marginBottom: 8,
        alignItems:'center',
        height: 64,
        borderRadius: 6,
        justifyContent: 'center',

        
    },
    check: {
        height: 24,
        width: 24,
        marginRight: 12,
        marginLeft: 12
    },
    textTodo:{
        color: '#F2F2F2',
        fontSize: 14,
        width: 235,
        marginRight: 8,
        maxWidth: 235
    },
    iconTrash: {
        marginRight: 16,
        color: '#808080',
        fontSize: 32,
    },
    checkbox: {
        color: '#000',
        
    },
    

})