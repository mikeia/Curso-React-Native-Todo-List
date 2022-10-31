import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";

 type Props = {
    todo: string;
    onRemove : () => void;
    onSelected: () => void;
    isCheckedTodo : boolean;     
 }

export function ListItem({todo, onRemove,isCheckedTodo,onSelected }: Props){

    return (
        
        <View style={styles.container}>
            <View style= {styles.listItem}>          
                <TouchableOpacity>
                    <BouncyCheckbox
                      style={styles.checkbox}
                      value={isCheckedTodo}  
                      isChecked= {isCheckedTodo}
                      onPress= {onSelected}  
                      fillColor= '#4EA8DE'
                    />
                
                </TouchableOpacity>
                    <Text style= {styles.textTodo}>
                        {todo}
                    </Text> 
                <TouchableOpacity onPress={onRemove}>
                    <Icon
                        style={styles.iconTrash}
                        name= 'trash' 
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}