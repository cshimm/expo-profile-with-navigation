import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import BackButton from "../../components/BackButton";
import {useLocalSearchParams} from "expo-router";
import {useState} from "react";
import {requestMediaLibraryPermissionsAsync, launchImageLibraryAsync} from "expo-image-picker";

export default function Project() {
    const {name, image, desc} = useLocalSearchParams()
    const [img, setImg] = useState(image);
    let openImagePickerAsync = async () => {
        let permissionResult = await requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await launchImageLibraryAsync();
        setImg(pickerResult.assets[0].uri)
    }
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Image style={styles.img} source={{uri:img && img}}/>
            <Pressable onPress={openImagePickerAsync} style={[styles.uploadBtn, styles.border]}>
                <Text>Upload photo</Text>
            </Pressable>
            <Text>{desc}</Text>
            <BackButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width:150,
        height: 150
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        borderWidth: 1,
        borderRadius: 5
    },
    uploadBtn: {
        padding:10,
        margin:10
    }
})