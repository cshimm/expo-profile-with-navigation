import {View, Text, Image, StyleSheet} from 'react-native'
import BackButton from "../../components/BackButton";
import {useLocalSearchParams} from "expo-router";

export default function Project() {
    const {name, image, desc} = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Image style={styles.img} source={{uri:image && image}}/>
            <Text>{desc}</Text>
            <BackButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width:50,
        height: 50
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})