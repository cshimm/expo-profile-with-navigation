import {StyleSheet, Text} from 'react-native'
import LinkToPage from "../components/LinkToPage";
import {projects} from "../data/projects";

export default function Home() {
    return (
        <>
            <Text style={styles.title}>My Profile</Text>
            <LinkToPage pageName={'Skills'} path={{pathname: '/Skills'}}/>
            <Text style={styles.subtitle}>Projects:</Text>
            {
                projects.map(project => <LinkToPage
                    key={project.id}
                    path={{
                        pathname: '/projects/Project',
                        params: {name: project.name, image: project.image, desc: project.description}
                    }} pageName={project.name}/>)
            }
            <Text style={styles.subtitle}>Contact:</Text>
            <LinkToPage pageName={'Contact'} path={{pathname:'Contact'}}/>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15
    }
})