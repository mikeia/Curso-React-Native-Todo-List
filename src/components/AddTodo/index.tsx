import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList ,Alert} from "react-native";
import { ListItem } from "../ListItem";
import { styles } from "./style";

export function AddTodo(){
    const [todo, setTodo]         = useState<string[]>([]);
    const [todoSucess, settodoSucess]  = useState<string[]>([]);
    const [todoText, setTodoText] = useState('');
    const [isSelected, setSelected] = useState(false);
   
    

    function handleAddTodo(){
        setTodo(prevStat => [...prevStat, todoText]);       
        setTodoText('');
    }  

    function handleRemoveTodo (task : string){
        Alert.alert('Remover', 'Deseja remover a tarefa?',[
        {    text: 'Sim',
            onPress: () => {
                setTodo(prevStat => prevStat.filter(todo => todo !== task))
            }
        },
        {
            text: 'Não',
            style: 'cancel'
        }])
    }

    function handleSelected(task : string){
       !isSelected ? setSelected(true) : setSelected(false)

        if(!todoSucess.includes(task)){
            settodoSucess(prevStat => [...prevStat, task]);
        }else{
            settodoSucess(prevStat => prevStat.filter(todoSucess => todoSucess !== task))
        }
    }

    return(
        <View style= {styles.container}>
            <View style= {styles.addTodo}>
                <TextInput 
                   style= {styles.textAddTodo} 
                   placeholder="Adicione uma nova tarefa"
                   placeholderTextColor='#808080'  
                   onChangeText={setTodoText}  
                   value= {todoText}  
                />
                <TouchableOpacity 
                    style= {styles.button}
                    onPress= {handleAddTodo}>
                    <Text style= {styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>   
            <View style= {styles.todoCount}>
                <View style= {styles.viewCreateTodo}>
                   <Text style= {styles.createTodoText}>
                       Criadas
                   </Text>
                   <Text style= {styles.createTodoNumber}>                        
                      {todo.length}                    
                   </Text>
                </View>
                <View style= {styles.viewSucessTodo}>
                   <Text style= {styles.sucessTodoText}>
                       Concluidas
                   </Text>
                   <Text style= {styles.sucessTodoNumber}>
                        {todoSucess.length}
                   </Text>
                </View>
            </View>                  
            <FlatList
                data = {todo}
                keyExtractor= {item => item}
                renderItem={({item}) => (
                    <ListItem 
                        key={item}
                        todo={item}
                        isCheckedTodo = {isSelected}
                        onRemove= {() => {handleRemoveTodo(item)}}
                        onSelected= {() => {handleSelected(item)}}                                                                               
                    />
                )}
                ListEmptyComponent= {() => (
                    <View style={styles.viewEmpty}>
                        <Image
                            style={styles.imgEmpty}
                            source={require('../../assets/clipboard.png')}/>
                            
                        <Text style={styles.emptyTodoTitle}>
                            Você ainda não tem tarefas cadastradas                         
                        </Text>
                        <Text style={styles.emptyTodo}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />                 
        </View>
        
    )
}