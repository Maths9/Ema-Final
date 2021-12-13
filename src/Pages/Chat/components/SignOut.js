import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div class="header" style={{
            display: 'flex', justifyContent: 'flex-end', position: 'fixed', width: '100%', top: 0, zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>SAIR</Button>
        </div>
    )
}

export default SignOut
