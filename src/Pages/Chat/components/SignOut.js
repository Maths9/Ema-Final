import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
            <Button style={{ padding: '20px', width: '100%',fontSize: '20px', borderRadius: '0', fontWeight: '650px'  }} onClick={signInWithGoogle}>Entrar Com  Google</Button>
       
    )
}

export default SignIn

