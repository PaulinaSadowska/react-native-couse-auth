import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
   </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    //shadow
    //ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    //android
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 24
  }
};

//only the 'root' component use AppRegistry!
//make component available to other parts of the app
export { Header };
