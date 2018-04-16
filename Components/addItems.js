import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { ItemActionCreators } from '../Redux/Actions/items'
import {connect} from 'react-redux'

class ListItems extends Component {
  state = {
    t: ''
  }

  addItem = () => {
    this.props.dispatch(ItemActionCreators.addItem(this.state.t))
  }

  render() {
    return (
        <View>
          <TextInput placeholder='Packing Item'
            autoFocus
            blurOnSubmit
            clearTextOnFocus
            onSubmitEditing={this.addItem}
            onChangeText={t => this.setState({t})}
            returnKeyLabel='Add Item'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={[{backgroundColor: 'green'}, styles.button]}
            onPress={this.addItem}>
            <Text>ADD ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{backgroundColor: 'red'}, styles.button]}
            onPress={() => this.props.dispatch(ItemActionCreators.clear())}>
            <Text>CLEAR ITEMS</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 4,
    margin: 5,
    padding: 10
  }
})

export default connect()(ListItems)
