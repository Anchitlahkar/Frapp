import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    Image
} from "react-native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export default class HomeScreen extends React.Component {
    render() {
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

                <View style={styles.contentContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.contentText}>Experience the virtual experience of trying out different frames from our wide collection on your mobile phone before making any purchase, just how you would in an offline store!</Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.25 }} >
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filters/Frapp-03.png')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filters/Frapp-09.png')} style={{ height: 64, width: 160 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", flex: 0.25 }} >
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filters/Frapp-02.png')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('../assets/filters/Frapp-08.png')} style={{ height: 64, width: 160 }} />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Main") }}>
                        <View style={styles.button} >
                            <Text style={styles.buttonText}>Try Now</Text>
                        </View>
                    </TouchableOpacity>
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

    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: "100%",
        padding: RFValue(20),
    },
    contentText: {
        fontSize: RFValue(17),
        fontStyle: "italic",
        fontWeight: "bold",
    },

    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#efb141",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20),
    },
    buttonText: {
        fontSize: RFValue(25),
        fontStyle: "italic",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1
    }
})