import { Image, View, Text, TouchableOpacity } from 'react-native';
import { format } from '../../css/Styles';

export default function Header() {
    return(
        <View style={format.hdr}>
            <TouchableOpacity onPress = {() => alert("Edit your profile!")}>
                <Image source={require("../../assets/user.png")} style = {format.imgHdrLeft}/>
            </TouchableOpacity>


            <Text style={format.txtHdr}>Elementos</Text>

            <TouchableOpacity onPress = {() => alert("Configure your app!")}>
                <Image source={require("../../assets/settings.png")} style = {format.imgHdrRight}/>
            </TouchableOpacity>

        </View>
    )
w
}