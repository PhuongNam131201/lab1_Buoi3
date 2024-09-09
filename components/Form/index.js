import { View, TextInput,Text, TouchableOpacity, Keyboard } from 'react-native'
import React  from 'react'
import styles from './style'
import { useState } from 'react'
const From = (props) => {
  const [task, setTask] = useState('') ;//định nghĩa tên của state/ giá trị ban đầu của state( setNumber), giá trị khởi tạo
  const handleAddTask = () =>{
    if (task.length === 0) {
      alert("Bạn vui lòng nhập thông tin")
    }
    else {
      props.onAddTask(task);
      setTask('')
      Keyboard.dismiss()
    }
  }
  return (
    <View style={styles.addTask}>
      <TextInput 
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder='Nội dung cần nhập'
        style={styles.input}>       
      </TextInput>
      <TouchableOpacity
        onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>        
      </TouchableOpacity>

    </View>
  )
}

export default From