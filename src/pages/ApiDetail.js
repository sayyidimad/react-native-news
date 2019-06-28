import React, { Component } from "react";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

export default class ApiDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://doc.greatworks.id/api/latihan/news/detail/" +
          this.props.navigation.state.params.NewsID
      );
      console.warn(response);
      this.setState({ detail: response.data.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.detail.title && (
          <View>
            <View style={{ height: 288 }}>
              <Image
                // style={{ width: 200, height: 200 }}
                style={{ width: "100%", height: "100%" }}
                source={{ uri: this.state.detail.image }}
              />
              <View style={{backgroundColor: "rgb(0, 0, 0)", opacity: 0.4, position: "absolute", height: '100%', width: '100%',}}></View>
              <View style={{ position: "absolute", bottom: 16, left: 16 }}>
                <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
                  {this.state.detail.title}
                </Text>
                <Text style={{ fontSize: 16, color: "grey" }}>
                  Posted by {this.state.detail.post_date}
                </Text>
              </View>
            </View>
            <WebView
              style={{ width: "100%", height: 280 }}
              scalesPageToFit={false}
              source={{
                html: this.state.detail.content
              }}
            />
          </View>
        )}
        {!this.state.detail.title && (
          <ActivityIndicator color="black" size="large" />
        )}
      </ScrollView>
    );
  }
}