import React from "react";
import { View, Image } from "react-native"

const Filter1 = ({
    face: {
        bounds: {
            size: {
                width: faceWidth,
                height: faceHeight
            }
        },
        LEFT_EYE: leftEyePosition,
        RIGHT_EYE: rightEyePosition
    }
}) => {
    const glassWidth = faceWidth
    const glassHeight = faceHeight / 3

    const transformAngle = (
        angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
    ) => angleRad * 180 / Math.PI

    return (
        <View style={{
            position: "absolute",
            left: leftEyePosition.x - glassWidth * 0.675,
            top: leftEyePosition.y - glassHeight * 0.5,
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
                source={require("../assets/filters/glasses.png")} />
        </View>
    )
}
export default Filter1