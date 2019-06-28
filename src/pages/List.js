import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomImageBackground from '../components/CustomImageBackground';
import Card from '../components/Card';

export default class List extends Component {
    render(){
        return(
            <ScrollView style={styles.scroll_view}>
                <Text style={styles.text_title}>Your Everyday Inspiration</Text>
                <View style={styles.view_parent}>
                    <CustomImageBackground />
                </View>
                <View style={styles.view_card}>
                    <Card />
                    <Card />
                </View>
                <View style={styles.view_card}>
                    <Card />
                    <Card />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll_view: {
        width: "100%",
        height: "100%",
        padding: 32,
        // alignItems: "center",
    },
    view_parent: {
        justifyContent: "center",
        marginBottom: 32,
    },
    view_card: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 24,
    },
    text_title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 32,
        fontFamily: 'sans-serif',
        marginBottom: 16,
        marginRight: 120,
    }
});

List.navigationOptions = () => ({
    header: null
  });
  