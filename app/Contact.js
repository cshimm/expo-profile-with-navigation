import {Text, View, StyleSheet, TextInput} from 'react-native'
import BackButton from "../components/BackButton";
import {useState} from "react";
import {Button} from "react-native";

export default function Contact() {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Me</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            <Button title={"submit"}/>
            <BackButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    input: {
        width: '75%',
        height: 150,
        borderWidth: 2
    }
})