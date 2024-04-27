import {Link} from "expo-router";
import {Pressable, StyleSheet, Text} from "react-native";

const LinkToPage = ({pageName, path}) => {
    return <Link style={[styles.link, styles.border]} href={path}>
        <Pressable style={styles.centered}>
            <Text>{pageName}</Text>
        </Pressable>
    </Link>
}

const styles = StyleSheet.create({
    link: {
        width: 100,
        padding: 3
    },
    border: {
        borderWidth: 2,
        marginBottom: 5
    },
})


export default LinkToPage