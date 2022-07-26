import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, Image, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { format } from '../../css/Styles';

export default function Content() {
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
    <View style={{flex: 8}}>
        <View style={format.cnt}>
            
            <TouchableOpacity onPress={() => camera()} style={format.btn}>
                    <Image source={require("../../assets/camera.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access camera</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => gallery()} style={format.btn}>
                    <Image source={require("../../assets/gallery.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access gallery</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => barcode()} style={format.btn}>
                    <Image source={require("../../assets/barcode.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access barcode</Text>
            </TouchableOpacity>

        </View>

            {/* Início do comando da câmera */}
            <View style={{flex: 3}}>
                <Camera style={format.camera} type={type}>
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


    </View>

    )

}

function camera() {
    Alert.alert("Camera", "Allowed access!");
}

function gallery() {
    Alert.alert("Gallery", "Allowed access!");
}

function barcode() {
    Alert.alert("Barcode", "Allowed access!");
}