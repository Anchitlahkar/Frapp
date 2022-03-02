import React from "react";
import { View, Image } from "react-native"

const Filter8 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight
            }
        },
        LEFT_EYE: leftEye,
        RIGHT_EYE: rightEye,
    }
}) => {
    const glassWidth = faceWidth
    const glassHeight = faceHeight / 3


    const transformAngle = (
        angleRad = Math.atan((rightEye.y - leftEye.y) / (rightEye.x - leftEye.x))
    ) => angleRad * 180 / Math.PI

    return (
        <View style={{
            position: "absolute",
            left: leftEye.x - glassWidth * 0.675,
            top: leftEye.y - glassHeight * 0.5,
        }} >
            <Image
                style={{
                    width: glassWidth,
                    height: glassHeight,
                    resizeMode: "contain",
                    transform: [
                        {
                            rotate: `${transformAngle()}deg`
                        }
                    ]
                }}
                source={require("../assets/filters/Frapp-07.png")} />
        </View>
    )
}
export default Filter8