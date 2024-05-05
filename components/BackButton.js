import {useNavigation, router} from "expo-router";
import {Pressable, Text} from "react-native";

const BackButton = () => {
    const nav = useNavigation()
    const handlePress = () => {
        if (nav.canGoBack())
            nav.goBack()
        else
            router.replace('/')
    }
    return (
        <Pressable style={{width: 50, borderWidth: 2, marginTop: 5}} onPress={handlePress}>
            <Text>Back</Text>
        </Pressable>
    )
}

export default BackButton;