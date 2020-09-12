import React, {useState} from "react";
import axios from '../../axios-authentication';

const Authentication = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = () => {
        axios.post('', {username: username, password: password}).then(res => res);
    };

    return (
        <div>
            <form>
                <input value={username} onChange={(event) => setUsername(event.target.value)}/>
                <input value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button type="button" onClick={signInHandler}>Sign in</button>
            </form>
        </div>
    );
};

export default Authentication;
