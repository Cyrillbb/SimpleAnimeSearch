import React from 'react';
import { useState } from 'react';
import { getToken, getError } from '../../actions/myApiActions';
import { connect } from 'react-redux';
import { myApiEND } from './../../constants';
import './RegWindow.css'
import { Link } from 'react-router-dom';



function RegWindow(props) {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nickname.length > 0 && password.length > 0 && password === password2) {
            try {
                const resp = await fetch(myApiEND + 'createUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user: nickname, pw: password2 })
                })
                const token = await resp.json();
                if (!token.token) {
                    props.getError(token.message)
                }
                else {
                    props.getToken(token.token)
                    document.cookie = `token=${token.token}`
                }
            }
            catch (err) {
                console.log(new Error(err));
            }
        }
        else if(password !== password2) {
            props.getError('password entries should match')
        }
    }

    return (
        <div className='RegWindow'>
            <form onSubmit={handleSubmit} className='RegForm'>
                <label htmlFor="nickname">Enter your nickname</label>
                <input className='RegWindow__input' type="text" placeholder='nickname...' id='nickname' onChange={e => setNickname(e.target.value)} required />
                <label htmlFor="password">Enter your password</label>
                <input className='RegWindow__input' type="password" placeholder='password...' id='password' onChange={e => setPassword(e.target.value)} required />
                <label htmlFor="password2">Repeat your password</label>
                <input className='RegWindow__input' type="password" placeholder='repeat password...' id='password2' onChange={e => setPassword2(e.target.value)} required />             
                <button className='RegWindow__button' type='submit'>Submit</button>
                <Link to='/SimpleAnimeSearch/login' className='RegWindow__button'>Back</Link>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: (token) => dispatch(getToken(token)),
        getError: (msg) => dispatch(getError(msg)),
    }
}

export default connect(null, mapDispatchToProps)(RegWindow)