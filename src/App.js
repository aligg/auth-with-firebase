import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTPU-41zRMzoC9aHc4tT-fjAoRWI1c1pQ',
      authDomain: 'auth-198b9.firebaseapp.com',
      databaseURL: 'https://auth-198b9.firebaseio.com',
      projectId: 'auth-198b9',
      storageBucket: '',
      messagingSenderId: '945455102805'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
          )
      case false:
          return <LoginForm />
      default: 
        return <Spinner size="large" /> 
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
