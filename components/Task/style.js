import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    item :{
        backgroundColor : color.white,
        flexDirection :'row',
        marginBottom: 14,
        marginTop : 10,
        paddingHorizontal : 20,
        paddingVertical : 10,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'space-between',
        borderWidth: 2,
        borderColor: color.button,
      },
      square : {
        width : 40,
        height : 36,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent: 'center',
      },
      even : {
        backgroundColor: color.second,
      },
      odd : {
        backgroundColor: color.third,
      },
      number : {
        fontSize : 16,
        fontWeight : '700',
        color : color.white,
      },
      content : {
        paddingLeft : 10,
        fontSize : 16,
        width :  '80%',
        color: '#fff',
        fontWeight: 'bold',
      },
})
export default styles;