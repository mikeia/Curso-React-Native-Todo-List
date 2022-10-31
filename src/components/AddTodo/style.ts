import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '100%',
        padding: 10
    },
    addTodo: {
        flexDirection: 'row'
    },
    textAddTodo: {
        backgroundColor: '#262626',
        fontSize: 16,
        padding: 12,
        flex: 1,
        marginRight:4,
        color: '#FFF'
    },
    button: {
        backgroundColor: '#1E6F9F',
        height: 52,
        width: 52,
        borderRadius: 6,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF'
    },
    todoCount: {
        flexDirection: 'row',
        marginTop:32,
        width: 327,
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
        paddingBottom:20
    },
    viewCreateTodo: {
        flexDirection: 'row',
        flex:1,
    },
    createTodoText: {
        color: '#4EA8DE',
        marginRight: 8
    },
    createTodoNumber: {
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 999,
        paddingVertical: 2,
        paddingHorizontal: 8
    },
    viewSucessTodo: {
        width: 111,
        flexDirection: 'row',
        flex:1        
    },
    sucessTodoText: {
        color: '#8284FA',
        marginRight: 8
    },
    sucessTodoNumber: {
        color: '#FFF',
        backgroundColor: '#333333',
        borderRadius: 999,
        paddingVertical: 2,
        paddingHorizontal: 8
    },
    
    viewEmpty: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,    
    },
    emptyTodo:{
        color: '#FFF',
        fontSize: 14,
        padding: 10,
        flex: 1,
        textAlign:'center'        
    },
    emptyTodoTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF'
    },
    imgEmpty: {
        height: 56,
        width: 56,
        fontWeight: 'bold',
        marginBottom: 20    
    },
})