import {Link} from "expo-router";
import {Pressable, StyleSheet, Text} from "react-native";

const LinkToPage = ({pageName, path}) => {
    return <Link style={[styles.link, styles.border]} href={path}>
        <Pressable>
            <Text>{pageName}</Text>
        </Pressable>
    </Link>
};

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        width: "75%",
        height: 50,
        padding: 10,
        textAlign: 'center',
        marginBottom: 5
    },
    border: {
        borderWidth: 2,
        borderRadius:20
    },
})


export default LinkToPage