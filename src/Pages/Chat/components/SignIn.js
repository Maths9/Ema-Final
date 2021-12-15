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
        <div class="btnGoogle"> <Button  onClick={signInWithGoogle}>Trocar conta do Google</Button>

           
       </div>
        
    )
}

export default SignIn

