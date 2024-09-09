import { StyleSheet } from "react-native";
import color from "./../../contains/color";
const styles = StyleSheet.create({
    addTask :{
        marginBottom: 30, 
        paddingHorizontal: 20,
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    input : {
        height: 44,
        width: '80%',
        backgroundColor: color.primary,
        borderWidth:2,
        borderColor: color.button,
        borderRadius: 20,
        paddingHorizontal: 20,
        color: '#fff'
    },
    iconWrapper : {
        width: 40,
        height: 40,
        backgroundColor: color.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.button,
        borderWidth: 2,
    },
    icon: {
        fontSize: 25,
        color : color.button,
    }
})
export default styles;