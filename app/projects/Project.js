import {Text} from 'react-native'
import BackButton from "../../components/BackButton";
import {useLocalSearchParams} from "expo-router";

export default function Project() {
    const {project} = useLocalSearchParams()
    return (
        <>
            <Text>{project}</Text>
            <BackButton/>
        </>
    )
}