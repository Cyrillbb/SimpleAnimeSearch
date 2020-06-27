import React from 'react';
import { useState } from 'react';
import { myApiEND } from './../../constants';
import { getToken, getUserByToken, getError } from '../../actions/myApiActions';
import { connect } from 'react-redux';
import './LoginWindow.css'
import { Link } from 'react-router-dom';

function LoginWindow(props) {
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch(myApiEND + 'loginByCred', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user: name,
                    pw: pw
                })
            })
            const token = await resp.json();
            if (!token.token) {
                props.getError(token.message);
            }
            else {
                props.getToken(token.token);
                props.getUserName(token.token);
                document.cookie = `token=${token.token}`;
            }
        }
        catch (err) {
            console.log(new Error(err));
        }
    }

    return (
        <div className='LoginWindow'>
            <form onSubmit={handleSubmit} className='LogForm'>
                <label htmlFor="loginName">Enter your nickname</label>
                <input className='LogForm__input' type="text" id='loginName' placeholder='nickname...' onChange={e => setName(e.target.value)} required />
                <label htmlFor="loginPw">Enter your password</label>
                <input className='LogForm__input' type="password" id='loginPw' placeholder='password...' onChange={e => setPw(e.target.value)} required />
                <button type='submit' className='LogForm__btn'>Login</button>
                <Link to='/SimpleAnimeSearch/registration' className='LogForm__btn'> Create account</Link>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: (token) => dispatch(getToken(token)),
        getUserName: (token) => dispatch(getUserByToken(token)),
        getError: (msg) => dispatch(getError(msg))
    }
}

export default connect(null, mapDispatchToProps)(LoginWindow)