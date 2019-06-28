import { createStackNavigator, createAppContainer } from "react-navigation";

import List from "./pages/List";
import ApiList from "./pages/ApiList";
import ApiDetail from "./pages/ApiDetail";
// import Form from "./pages/Form.js";

const AppNavigator = createStackNavigator({
  ApiList: {
    screen: ApiList
  },
  List: {
    screen: List
  },
  ApiDetail: {
    screen: ApiDetail
  }
});

export default createAppContainer(AppNavigator);
