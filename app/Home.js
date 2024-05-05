import {Image, Pressable, StyleSheet, Text} from 'react-native'
import LinkToPage from "../components/LinkToPage";
import {projects} from "../data/projects";
import {requestMediaLibraryPermissionsAsync, launchImageLibraryAsync} from "expo-image-picker";
import {useState} from "react";

export default function Home() {
    const [img, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MJ4B-SWqlGeomYy4rO0GMOJO3g9nYJKfCPzgkaAAYw&s')
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
        <>
            <Text style={styles.title}>My Profile</Text>
            <Image style={styles.image} source={{uri: img}}/>
            <Pressable onPress={openImagePickerAsync} style={[styles.border, styles.uploadBtn]}>
                <Text>Upload new photo</Text>
            </Pressable>
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
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
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