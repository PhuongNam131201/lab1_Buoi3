import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Pressable, Button, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import Task from './../../components/Task';
import styles from './../../App.components.style';
import Form from './../../components/Form';

const PhanBon = () => {
    const [taskList, setTaskList] = useState([]);
    const [statusBarStyle, setStatusBarStyle] = useState('light-content');
    const [backgroundColor, setBackgroundColor] = useState('#000'); // Màu nền mặc định

    const handleAddTask = (task) => {
        Alert.alert('Bạn đã thêm', task);
        setTaskList([...taskList, task]);
    };

    const handleDeleteTask = (index) => {
        Alert.alert('Thông báo', 'Bạn có chắn chắn muốn xoá!', [
            { text: 'Cancel', onPress: () => {} },
            {
                text: 'OK',
                onPress: () => {
                    let taskListTmp = [...taskList];
                    taskListTmp.splice(index, 1);
                    setTaskList(taskListTmp);
                },
            },
        ]);
    };

    const updateStatusBar = () => {
        const { width, height } = Dimensions.get('window');
        const isPortrait = height >= width;

        // Thay đổi màu nền và kiểu chữ của thanh trạng thái
        if (isPortrait) {
            setBackgroundColor('#000'); // Màu nền cho chế độ dọc
            setStatusBarStyle('light-content'); // Kiểu chữ sáng
        } else {
            setBackgroundColor('#fff'); // Màu nền cho chế độ ngang
            setStatusBarStyle('dark-content'); // Kiểu chữ tối
        }
    };

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', updateStatusBar);
        updateStatusBar(); // Cập nhật ngay khi component được mount
        return () => subscription?.remove(); // Xóa sự kiện khi component bị hủy
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
            <View style={styles.body}>
                <Text style={styles.header}>Ghi chú</Text>
                <ScrollView style={styles.items}>
                    {taskList.map((item, index) => {
                        return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />;
                    })}
                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask} />
        </View>
    );
};

export default PhanBon;
