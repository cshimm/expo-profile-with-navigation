import {View, Text, StyleSheet} from 'react-native'
import BackButton from "../components/BackButton";
import {skills} from "../data/skills";

export default function Skills() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Skills</Text>
            {
                skills.map(skill => <Text key={skill.id}>{skill.name}</Text>)
            }
            <BackButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})