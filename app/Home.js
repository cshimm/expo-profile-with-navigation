import {StyleSheet, Text} from 'react-native'
import LinkToPage from "../components/LinkToPage";

export default function Home() {
    return (
        <>
            <Text style={styles.title}>Home</Text>
            <Text>Links:</Text>
            <LinkToPage pageName={'Skills'} path={'/Skills'} />
            <LinkToPage path={{
                pathname: '/projects/Project',
                params: {project: 'Project 1'}
            }} pageName={'Project 1'} />
            <LinkToPage path={{
                pathname: '/projects/Project',
                params: {project: 'Project 2'}
            }} pageName={'Project 2'} />
            <LinkToPage path={{
                pathname: '/projects/Project',
                params: {project: 'Project 3'}
            }} pageName={'Project 3'} />
            <LinkToPage pageName={'Contact'} path={'/Contact'} />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 44,
        fontWeight: "bold",
    },
    centered: {
        alignItems:"center",
        justifyContent:"center"
    }
})