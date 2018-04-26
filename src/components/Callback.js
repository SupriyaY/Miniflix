//stores our authentication credentials and redirecs back to the upload route in our app
import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = "/";


    }

    render() {
        return null;
    }
}

export default Callback;
