import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import Filter1 from './filter1'
import Filter2 from './filter2';
import Filter4 from './filter4';
import Filter3 from './filter3';
import Filter5 from './filter5';
import Filter6 from './filter6';


let data = [
    {
        "id": "1",
        "image": require("../assets/filters/glasses.png")
    },
    {
        "id": "2",
        "image": require("../assets/filters/glasses2.png")
    },
    {
        "id": "3",
        "image": require("../assets/filters/Frapp-02.png")
    },
    {
        "id": "4",
        "image": require("../assets/filters/Frapp-03.png")
    },
    {
        "id": "5",
        "image": require("../assets/filters/Frapp-04.png")
    },
    {
        "id": "6",
        "image": require("../assets/filters/Frapp-06.png")
    },
]


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: [],
            current_filter: "Filter_1"
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }

    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
    }

    onFaceDetectionError(error) {
        console.log(error)
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />

                <View style={styles.headingContainer}>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={styles.titleText1}>FR</Text>
                        <Text style={styles.titleText2}>APP</Text>
                    </View>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={styles.subHeading_1}>Try our</Text>
                        <Text style={styles.subHeading_2}>cool frames</Text>
                    </View>
                </View>

                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            }

                            else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            }

                            else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            }

                            else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            }

                            else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            }

                            else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            }

                        })
                    }
                </View>

                <View style={styles.framesContainer}>
                    <ScrollView style={{ flexDirection: "row", }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data.map(filter_data => {
                                return (
                                    <TouchableOpacity
                                        style={styles.filterImageContainer}
                                        onPress={() => {
                                            this.setState({ current_filter: `filter_${filter_data.id}` })
                                        }}
                                    >
                                        <Image source={filter_data.image} style={{ height: 32, width: 80 }} />

                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText: {
        fontSize: 30
    },
    cameraStyle: {
        flex: 0.65
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 1,
    },

    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 1,
    },
    subHeading_1: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 1,
    },
    subHeading_2: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 1,
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#6278e4"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20,
    }

});