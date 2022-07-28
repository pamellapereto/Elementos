import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { format } from '../../css/Styles';

export default function Content(props) {

    return(
    
        <View style={format.cnt}>
            
            <TouchableOpacity onPress={() => { props.acao.navigate("TelaCamera"); }} style={format.btn}>
                    <Image source={require("../../../../assets/camera.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access camera</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => { props.acao.navigate("TelaGaleria"); }} style={format.btn}>
                    <Image source={require("../../../../assets/gallery.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access gallery</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => { props.acao.navigate("TelaCodebar"); }} style={format.btn}>
                    <Image source={require("../../../../assets/barcode.png")} style={format.imgBtn}/>
                    <Text style = {format.txtBtn}>Access barcode</Text>
            </TouchableOpacity>

        </View>


    

    )

}