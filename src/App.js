import React, { Component } from 'react'
import { View } from 'react-native'
// import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyCTPU-41zRMzoC9aHc4tT-fjAoRWI1c1pQ',
  //     authDomain: 'auth-198b9.firebaseapp.com',
  //     databaseURL: 'https://auth-198b9.firebaseio.com',
  //     projectId: 'auth-198b9',
  //     storageBucket: '',
  //     messagingSenderId: '945455102805'
  //   })
  // }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App
