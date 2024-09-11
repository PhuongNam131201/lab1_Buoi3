import { StyleSheet, Text, View, TouchableOpacity,Platform } from 'react-native'
import React from 'react';
import color from '../../contains/color';

const HomeScreen = () => {
    
    return (
        <View style={styles.container}>  
            <View style={styles.containera}>
                <Text style={styles.textdautien}> Trang chủ</Text>
            </View>
            <View style={styles.containerb}>
                <Text style={{paddingRight:30,fontSize: 20}}> Bài tập buổi 3</Text>
                <Text style={{fontSize: 20}}> Nguyễn Phương Nam</Text>
            </View>
        </View>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Platform.select({
            ios: '#fff', 
            android: '#A38BDF', 
        }),
        
    },
    containera:{
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor:color.third,
    },
    containerb:{
        flex: 0.75,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:20,
    },
    textdautien:{
        fontSize: 20,
        fontWeight:'bold',
        
    },

})
