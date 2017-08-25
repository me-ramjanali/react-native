import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';

export default class myapp extends Component {
    renderScene(route, navigator){
        switch(route.id){
            case 'component2': 
                return (<Component2 navigator={navigator} title="Component2" />);
            case 'component3': 
                return (<Component3 user={route.user} navigator={navigator} title="Component3" />);
        }
    }
    render() {
        return ( 
            <Navigator 
                initialRoute={{id: 'component2'}}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }
}

AppRegistry.registerComponent('myapp', () => myapp);