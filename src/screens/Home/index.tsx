import { AddTodo } from '../../components/AddTodo'
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ListItem } from '../../components/ListItem';

export function Home(){

    return(
        <View style={styles.container}>
            <View style= {styles.header}>
                <Image 
                   style={styles.img} 
                   source={require('../../assets/rocket.png')} />

                <Text style= {styles.toHeader}>to</Text>
                <Text style= {styles.doHeader}>do</Text>
            </View>
            
            <AddTodo/>           
        </View>

    )

}