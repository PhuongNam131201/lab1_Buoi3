import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import color from '../../contains/color';


const PhanHai = () => {
    

    const windowWidth = Dimensions.get('window').width;
    const imageWidth = windowWidth * 0.8;
    

    return (
        <View style={styles.container}>
            
            <ScrollView>
                <View style={styles.containera}>
                    <Image
                        source={{ uri: 'https://th.bing.com/th/id/R.86ff9c547b0eddb370db3d062f251a3f?rik=P8lPRBbFMLr7yQ&pid=ImgRaw&r=0' }}
                        style={[styles.image, { width: imageWidth, height: imageWidth * 0.75 }]} // Chiều cao theo tỷ lệ 4:3
                        resizeMode="contain"
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cristiano Ronaldo</Text>
                    <Text style={{ textAlign: 'justify' }}>
                        Cristiano Ronaldo dos Santos Aveiro (born February 5, 1985) is a professional Portuguese footballer, 
                        currently playing as a forward and captain for Al Nassr in the Saudi Pro League and the Portugal national team.
                        Widely regarded as one of the greatest footballers of all time, he has won five Ballon d'Or awards and four European Golden Shoes, 
                        accumulating 33 career titles, including seven league championships and five UEFA Champions League titles.
                        
                        Ronaldo began his professional career at Sporting CP before joining Manchester United in 2003, where he won an FA Cup and three Premier League titles. 
                        In 2009, he transferred to Real Madrid for a then-world record €94 million, winning four Champions League titles and becoming the club's all-time top scorer. 
                        He later moved to Juventus in 2018, winning two Serie A titles, before returning to Manchester United in 2021. In 2023, he joined Al Nassr.

                        Internationally, Ronaldo debuted for Portugal in 2003 and has since made over 200 appearances, becoming the nation's all-time leading scorer with over 100 goals. 
                        He captained Portugal to their first major tournament victory at Euro 2016 and led them to win the UEFA Nations League in 2019.

                        As one of the most marketable athletes globally, Ronaldo topped Forbes' list of highest-paid athletes in 2016 and 2017 and was named one of Time's 100 most influential people in 2014. 
                        He is the first footballer and third athlete overall to earn $1 billion during his career.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default PhanHai;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        marginBottom: 20,
    },
});
