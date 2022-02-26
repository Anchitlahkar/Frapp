import React from "react"
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native"
import { Camera } from "expo-camera"
import * as Permissions from "expo-permissions"
import * as FaceDetector from "expo-face-detector"
import Filter1 from "./filter1"

export default class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            hasCameraPermission: null,
            faces: [],

        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFacesDetectionError = this.onFacesDetectionError.bind(this)
    }

    onCameraPermission = (status) => {
        this.setState({
            hasCameraPermission: status.status === "granted"
        })
    }

    onFacesDetected = (faces) => {
        this.setState({
            faces: faces
        })
       
    }

    onFacesDetectionError = (error) => {
        console.log(error)
    }


    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA).then(
            this.onCameraPermission
        )
    }

    render() {
        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return <View></View>
        }

        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No Access To Camera</Text>
                </View>
            )
        }

        console.log(this.state.faces)

        return (
            <View style={styles.container}>
                <SafeAreaView styles={styles.android_SafeArea} />

                <View style={styles.headingContainer} >
                    <Text style={styles.titleText}>FRAPP</Text>
                </View>

                <View style={styles.cameraStyle}>

                    <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={
                            this.onFacesDetected
                        }
                        onFacesDetectionError={
                            this.onFacesDetectionError
                        }
                    />
                    {
                        this.state.faces.map(face=>{
                            return <Filter1 key={face.faceID} face={face}/>
                        })
                    }

                </View>

                <View style={styles.filterContainer}></View>
                <View style={styles.actionContainer}></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    android_SafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    headingContainer: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 30
    },
    cameraStyle: {
        flex: 0.65
    },
    filterContainer:
    {

    },
    actionContainer: {

    }

})