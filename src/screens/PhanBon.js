import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert,Pressable, Button,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Task from './../../components/Task'
import styles from './../../App.components.style'
import Form from './../../components/Form'

const PhanBon = () => {
    const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    Alert.alert('Bạn đã thêm',task)
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo', 'Bạn có chắn chắn muốn xoá!', [          
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {       
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);  
        }
      },
    ]);

  }
  return (
    <View style={styles.container}>  
      <View style = { styles.body}>
        <Text style={styles.header}>Ghi chú</Text>
        <ScrollView style = {styles.items}> 
          {
            taskList.map((item , index) =>{
              return <Task key={index} title={item} number={index +1} onDeleteTask={()=> handleDeleteTask(index)}/>
            })
          }
        </ScrollView>             
      </View>
      <Form onAddTask={handleAddTask}>
    </Form>
    </View>
  )
}

export default PhanBon
