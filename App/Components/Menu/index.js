import { View, Platform, NavigationExperimental,
	TouchableHighlight, Image, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Network from '../Network';
import MenuPanel from '../MenuPanel';
import { actions } from 'react-native-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  popRoute,
  pushRoute
} = actions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Menu extends Component {
  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired,
  };
  render() {
    return (
      <NavigationCardStack
        onNavigate={ () => {} }
        direction={'horizontal'}
        navigationState={this.props.navigation}
        renderScene={this._renderScene.bind(this)}
        renderOverlay={this._renderHeader.bind(this)}
        style={styles.main}
      />
    );
  }
  _renderHeader(props) {
    const showHeader = props.scene.route.title
    if (showHeader){
      return (
        <NavigationHeader
        {...props}
        style={styles.navHeader}
        renderTitleComponent={this._renderTitleComponent.bind(this)}
        renderLeftComponent={this._renderLeftComponent.bind(this)}
        renderRightComponent={this._renderRightComponent.bind(this)}
        />
      );
    }
    return null;
  }
  _renderTitleComponent(props) {
    if(props.scene.route.key === 'menupanel'){
      return(
        <View>
          <Image
            source={require('../../Assets/logo.png')}
            style={styles.logoimage}/>
        </View>
      )
    }
    return (
      <NavigationHeader.Title >
        <Text style={{color: 'white'}}>{props.scene.route.title}</Text>
      </NavigationHeader.Title>
    );
  }
  _renderLeftComponent(props) {
    const { dispatch, navigation } = this.props;

    if (props.scene.route.showBackButton) {
      return (
        <NavigationHeaderBackButton onPress={() => dispatch(popRoute(navigation.key))} />
      );
    }
    return null;
  }
  _renderRightComponent(props) {
    let {closeDrawer} = this.props
    if (props.scene.route.key === 'menupanel'){
      return (
        <TouchableHighlight onPress={closeDrawer}>
          <Icon name='ios-close' size={30} color="white" />
        </TouchableHighlight>
      )
    }
    return null;
  }
  _renderScene(props, key){
    const marginTop = Platform.OS === 'ios' ? NavigationHeader.HEIGHT : 0;
    switch (props.scene.route.key) {
      case 'menupanel':
        return(
        <View style={{ marginTop }}>
          <MenuPanel onClickNetwork={this._onClickNetwork.bind(this)}/>
        </View>
      )
      case 'network':
        return(
        <View style={{ marginTop: NavigationHeader.HEIGHT }}>
          <Network />
        </View>
      )
    }
  }
  _onClickNetwork() {
    const { dispatch, navigation } = this.props;

    dispatch(pushRoute({
      key: 'network',
      title: 'Network',
      showBackButton: true,
    }, navigation.key));
  }
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('menu')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
