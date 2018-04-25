import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth-js';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'EeobY3jxsMoFREmqfmsZwAALQb73WeWm';
const CLIENT_DOMAIN = 'unicoder.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'full:access'
const AUDIENCE = 'http://miniflix.com'

var auth = new.auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
auth.authorize({
responseType: 'token id_token',
redirectUri: REDIRECT,
audience: AUDIENCE,
scope: SCOPE
});
}

export function logout() {
clearIdToken();
clearAccessToken();
browswerHistory.push('/');
}

export function requireAuth(nextState, replace) {
if (!isLoggedIn())  {
    replace({pathname: '/'});
}
}


export function getIdToken() {
 return localStorage.getItem(ID_TOKEN_KEY);

}

export function getAccessToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
localStorage.removeItem(ID_TOKEN_KEY);
}

// Helper function that will allow us extract the access_token and id_token
function getParameterByName(name){
 let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
 return match && decodeURIComponent(match[1].replace(/\+/g,' '));
}


// Get and store id_token in local storage
export function setAccessToken() {
 let accessToken = getParameter('access_token');
 localStorage.setItem(ID_TOKEN_KEY, accessToken);
}


//Get and store access_token in local storage
export function setAccessToken() {
let idToken = getParameterByName('id_token');
localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
const idToken = getIdToken();
return !!idToken && !isTokenExpired(idToken);
}


function getTokenExpirationDate(encodedToken){
const token = decode(ecodedToken);
if (!token.exp) {return null; } 

const date = new Date(0)
date.setUTCSeconds(token.exp);

return date;

}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}