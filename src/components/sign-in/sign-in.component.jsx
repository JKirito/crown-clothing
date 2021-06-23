import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label='E-mail' name="email" required value={this.state.email} onChange={this.handleChange} />
                    <FormInput type="password" label='Password' name="password" required value={this.state.password} onChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn