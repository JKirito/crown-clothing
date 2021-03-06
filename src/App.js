import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"

import Homepage from "./page/homepage/homepage.component"
import ShopPage from "./page/shop/shop.component"
import Header from "./components/header/header.component"
import SignInSignUpPage from "./page/sign-in-sign-up/sign-in-sign-up.component"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(this.state)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
