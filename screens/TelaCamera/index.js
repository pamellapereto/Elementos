import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, TouchableOpacity, Text } from 'react-native';
import { format } from './css/Styles';

export default function TelaCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
         const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    return(
            <View style = {{flex: 1}}>

                <Camera style = {{flex: 1}} type={type}>

                    <View style={format.buttonContainer}>

                        <TouchableOpacity
                            style={format.button}
                            onPress={() => {
                                setType(type === CameraType.back ? CameraType.front : CameraType.back);
                            }}>
                             <Text style={format.text}> Reverse </Text> 
                        </TouchableOpacity>

                    </View>

                </Camera>

            </View>
         
         
    )

}
