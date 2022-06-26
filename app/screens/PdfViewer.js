
import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { BASE_URI } from '../api/api';
import Spinner from 'react-native-loading-spinner-overlay';

export default function PdfViewer(props) {
    let source = null;
    const file = props.route.params.file;
    
    if(file) {
        if(file == "tandc") {
            source = BASE_URI + '/pdf/Terms-and-Conditions-of-Service.pdf';
        } else if( file == "ppolicy") {
            source = BASE_URI + '/pdf/Privacy-Policy.pdf';
        } else {
            props.navigation.replace('ProfileMenu');
        }
     } else {
        props.navigation.replace('ProfileMenu');
    }
 
    return (
        <View style={styles.container}>
            <Text>Downloading.....</Text>
            {/* <Spinner
                visible={true}/> */}
            {source ? <WebView 
                source={{uri: source}}
                // onNavigationStateChange={() => props.navigation.replace('ProfileMenu') }
                useWebKit
                onFileDownload={() => console.log("abc")}
                /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});