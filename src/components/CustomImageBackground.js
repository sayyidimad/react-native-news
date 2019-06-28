import React, { Component } from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

export default class CustomImageBackground extends Component {
    render(){
        return(
            <View style={styles.view_parent}>
                {/* <ImageBackground source={require('../../assets/img/jacek-dylag-PMxT0XtQ--A-unsplash.png')} style={{width: '100%', height: '100%'}}> */}
                <ImageBackground source={this.props.image} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
                <View style={styles.view_bg}></View>
                <View style={styles.view_text}>
                    <Text style={styles.text_title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.text_body}>
                        {this.props.date}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_parent: {
        width: 336,
        // width: '100%',
        height: 252,
        borderRadius: 16,
        overflow: 'hidden',
        // marginBottom: 48,
    },
    view_text: {
        position: "absolute",
        bottom: 16, 
        left: 16
    },
    view_bg: {
        backgroundColor: "rgb(0, 0, 0)",
        opacity: 0.4,
        position: "absolute",
        height: '100%',
        width: '100%',
        // borderRadius: 48,
    },
    text_title: {
        color: "white",
        fontSize: 28,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // position: "absolute",
    },
    text_body: {
        color: "grey",
        fontSize: 16,
        fontFamily: 'sans-serif',
        // position: "absolute",
        // fontWeight: 'bold',
    }, 
});