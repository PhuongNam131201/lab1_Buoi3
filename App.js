import { StyleSheet, Text, TouchableOpacity, View, StatusBar,Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import PhanHai from './src/screens/PhanHai';
import PhanBa from './src/screens/PhanBa';
import PhanBon from './src/screens/PhanBon';
import color from './contains/color';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [statusBarStyle, setStatusBarStyle] = useState('light-content');
  const [backgroundColor, setBackgroundColor] = useState('#000'); // Màu nền mặc định
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
    <NavigationContainer>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Normal Button" component={DetailScreen} />
        <Drawer.Screen name="Hình" component={PhanHai} />
        <Drawer.Screen name="Button Plus" component={PhanBa} />
        <Drawer.Screen name="Ghi chú" component={PhanBon} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
