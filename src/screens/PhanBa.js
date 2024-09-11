import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import color from '../../contains/color';

const PhanBa = () => {
    const [isPortrait, setIsPortrait] = useState(true);
    useEffect(() => {
      const handleOrientationChange = () => {
        const dim = Dimensions.get('window');
        setIsPortrait(dim.height >= dim.width);
      };
  
      // Thêm listener cho sự thay đổi kích thước màn hình
      const subscription = Dimensions.addEventListener('change', handleOrientationChange);
  
      // Xóa listener khi component bị hủy
      return () => {
        subscription?.remove();
      };
    }, []);
  
    return (
      <View style={styles.container}>
        <View style={[styles.buttonContainer, isPortrait ? styles.column : styles.row]}>
          <Button title="Nút 1" onPress={() => alert('Nút 1 được nhấn')} />
          <Button title="Nút 2" onPress={() => alert('Nút 2 được nhấn')} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    buttonContainer: {
      width: '100%',

    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    column: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });

export default PhanBa

