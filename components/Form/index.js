import { View, TextInput, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import styles from './style';

const From = (props) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.length === 0) {
            alert("Bạn vui lòng nhập thông tin");
        } else {
            props.onAddTask(task);
            setTask('');
            Keyboard.dismiss();
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.addTask} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={80} // Adjust this value as needed
        >
            <TextInput 
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder='Nội dung cần nhập'
                style={styles.input} 
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>        
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default From;
