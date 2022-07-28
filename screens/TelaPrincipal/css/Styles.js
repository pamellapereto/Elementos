import { StyleSheet } from 'react-native';

export const format = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },

    hdr: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1a237e',
        flexDirection: 'row',
        padding: 10,
    },

    imgHdrLeft: {
        marginTop: 40,
        marginLeft: 5,
        width: 33,
        height: 33,
   
    },

    imgHdrRight: {
        marginTop: 40,
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
        flex: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        marginLeft: 8,
        marginRight: 8,
        height: '15%',
        borderRadius: 10,
    },

    imgBtn: {
        width: 45,
        height: 45,
    },
    
    txtBtn: {
        fontSize: 14,
        paddingTop: 6,
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

});