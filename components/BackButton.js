import {router} from "expo-router";
import {Pressable, Text} from "react-native";

const BackButton = () => {
    return(
        <Pressable onPress={() => router.back()}>
            <Text>Back</Text>
        </Pressable>
    )
}

export default BackButton;