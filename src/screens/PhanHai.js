import { StyleSheet, Text, View,Image, Button, Dimensions } from 'react-native'
import React from 'react'

const PhanHai = () => {
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = windowWidth * 0.8;
    
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.86ff9c547b0eddb370db3d062f251a3f?rik=P8lPRBbFMLr7yQ&pid=ImgRaw&r=0' }} // Thay thế bằng URL hình ảnh của bạn
        style={[styles.image, { width: imageWidth, height: imageWidth * 0.75 }]} // Chiều cao theo tỷ lệ 4:3
        resizeMode="contain"
      />
    </View>
  );
};

export default PhanHai
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    image: {
      marginBottom: 20,
    },
  });
  