import React from 'react'
import './login.css'
import { connect } from 'react-redux'
import Sidebar from '../../components/sidebar/Sidebar'

function Login(props) {

    // Redux functions
    const { user } = props


    const fetchLogin = async () => {

        const request = await fetch(`http://localhost:8000/accounts/login/john@example.com/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // 'HTTP_LOGINTOKEN': '87088092-1b78-4813-8961-6c314c5bcee0'
                // 'Authorization': `Token ${user.token}`
            },
            // body: JSON.stringify(requestInfo)
        })

        const response = await request.json()

        if (request.status < 300) {
            console.log('response', response)
            user(response)
        } if (request.status > 400) {
            console.log("error")
        }
    }


    const fetchGetUser = async () => {

        // getting the credentials form redux
        const login_token = props.state.user.loginToken;
        console.log("login_token", props.state)

        const request = await fetch(`http://localhost:8000/accounts/john@example.com/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'LOGINTOKEN': login_token,
            },
            // body: JSON.stringify(requestInfo)
        })

        const response = await request.json()

        if (request.status < 300) {

            console.log('response', response)

        } if (request.status > 400) {

            console.log("error")
        }
    }






    return (
        <div className="loginContainer">
            <div className="left">
                <Sidebar />
            </div>
            <div className="center">
                <div>Login</div>
                <button onClick={() => { fetchLogin() }} >Login</button>
                <button onClick={() => { fetchGetUser() }} >Get user</button>
            </div>
            <div className="right"></div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        user: (value, key) => {
            dispatch({ type: 'USER_LOGIN', payload: value })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)