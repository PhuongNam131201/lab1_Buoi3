import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()

    const phanMot = () => {
        navigation.navigate('Phần 1')
    }
    const phanHai = () => {
        navigation.navigate('Phần 2')
    }
    const phanBa = () => {
        navigation.navigate('Phần 3')
    }
    const phanBon = () => {
        navigation.navigate('Phần 4')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={phanMot}
                style={styles.button} // Style cho nút
            >
                <Text style={styles.buttonText}>Tác vụ 1</Text> 
            </TouchableOpacity>
            <TouchableOpacity
                onPress={phanHai}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Tác vụ 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={phanBa}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Tác vụ 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={phanBon}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Tác vụ 4</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Màu nền cho toàn màn hình
    },
    button: {
        backgroundColor: '#4CAF50', // Màu nền nút
        paddingVertical: 10, // Đệm theo chiều dọc
        paddingHorizontal: 20, // Đệm theo chiều ngang
        borderRadius: 8, // Bo góc nút
        marginBottom: 15, // Khoảng cách giữa các nút
        shadowColor: '#000', // Màu bóng
        shadowOffset: { width: 0, height: 2 }, // Độ lệch bóng
        shadowOpacity: 0.3, // Độ mờ của bóng
        shadowRadius: 3, // Độ giãn của bóng
        elevation: 5, // Độ cao bóng (trên Android)
    },
    buttonText: {
        color: '#fff', // Màu chữ
        fontWeight: 'bold', // Đậm chữ
        fontSize: 16, // Kích thước chữ
    },
})
