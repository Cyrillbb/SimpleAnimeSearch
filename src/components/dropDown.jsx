import React from 'react';
import './dropDown.css'


function Dropdown() {
    const handleLogout = () => {
        document.cookie = 'token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.reload();
    }

    return (
        <div className='dropDown'>       
            <button className='dropDown__btn' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dropdown