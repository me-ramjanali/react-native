import React, { Component } from 'react';
import { 
    AppRegistry, 
    Text, 
    View, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity,
    TextInput,
    Switch } from 'react-native';

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ramjan',
            showName: false,
            message: this.props.message,
            textValue: '',
            switchValue: false
        }
    }

    static defaultProps = {
        message: 'Hi there!'
    }

    onPress(){
        alert('This is a test!');
    }

    onPress2(){
        alert('This is a test 2!');
    }

    onChangeText(value){
        this.setState({
            textValue: value
        });
    }

    onSwitchValueChange(value){
        this.setState({
            switchValue: value
        });
    }

    render() {
        let name = this.state.showName ? this.state.name : 'No Name';
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}> { this.state.message } </Text> 
                    <Text style={styles.myText}> { name } </Text> 
                </View>
                <View style={styles.container}>
                    <TouchableHighlight 
                        style={styles.v1} 
                        onPress={this.onPress}
                        underlayColor="gray"
                    >
                        <View>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.v2}
                        onPress={this.onPress2}
                    >
                        <View>
                            <Text>View 2</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text style={styles.v3Text}>View 3</Text>
                    </View>
                </View>
                <View>
                    <TextInput 
                        placeholder="Enter Your Name"
                        value={this.state.textValue}
                        onChangeText={(value) => this.onChangeText(value)} 
                    />
                    <Text>{this.state.textValue}</Text>
                    <Switch 
                        value={this.state.switchValue}
                        onValueChange={(value) => this.onSwitchValueChange(value)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    v3Text: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component1', () => Component1);