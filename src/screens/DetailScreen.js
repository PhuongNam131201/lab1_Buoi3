import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const DetailScreen = () => {
    const route = useRoute();
    const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: windowWidth / 2 }]}>
        <Button
          title="Nút 1"
          onPress={() => alert('Nút 1 được nhấn')}
        />
      </View>
      <View style={[styles.buttonContainer, { width: windowWidth / 2 }]}>
        <Button
          title="Nút 2"
          onPress={() => alert('Nút 2 được nhấn')}
        />
      </View>
    </View>
  );
};

export default DetailScreen

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      padding: 20,
    },
    buttonContainer: {
      flex: 1, // Để nút chiếm toàn bộ chiều cao của View
      marginHorizontal: 5, // Khoảng cách giữa các nút
    },
  });