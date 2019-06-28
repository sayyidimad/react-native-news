import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Card extends Component {
    render(){
        return(
            <View style={styles.view_parent}>
                <Image style={styles.img} source={require('../../assets/img/brooke-cagle-g1Kr4Ozfoac-unsplash.png')} />
                <View style={styles.view_text}>
                    <Text style={styles.text_title}>Stay be humble</Text>
                    <Text>Posted by 28 June 2019</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_parent: {
        width: 160,
        height: 160,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
    },
    view_text: {
        padding: 8,
    },
    img: {
        width: "100%",
        height: "70%"
    },
    text_title: {
        // fontWeight: "bold",
        color: "black",
        fontSize: 16,
        fontFamily: 'sans-serif',
    },
    text_body: {
        color: "grey",
        fontSize: 16,
        fontFamily: 'sans-serif',
    }
});