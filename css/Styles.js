import { StyleSheet } from 'react-native';

export const format = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },

    hdr: {
        flex: 1,
        backgroundColor: '#1a237e',
        flexDirection: 'row',
        padding: 10,
    },

    imgHdrLeft: {
        marginTop: 41,
        marginLeft: 5,
        width: 33,
        height: 33,
   
    },

    imgHdrRight: {
        marginTop: 41,
        marginRight: 5,
        width: 33,
        height: 33,
    },

    txtHdr: {
        flex: 3,
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 43,
    },

    cnt: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    btn: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 45,
        height: '55%',
        borderRadius: 10,
    },

    imgBtn: {
        width: 45,
        height: 45,
    },
    
    txtBtn: {
        fontSize: 14,
    },

    ft: {
        flex: 1,
        backgroundColor: '#1a237e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtFt: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    camera: {
        flex: 1,
        height: '100%'
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },

    button: {
        width: 100,
        height: 30,
        backgroundColor: '#1a237e',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 17,
    },

});