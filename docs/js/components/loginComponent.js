import securityModal from './securityModalComponent.js';
import { typeText } from '../utils/typeText.js';
const loginForm = document.querySelector('#login__form');
if (!loginForm)
    throw new Error('HTMLFormElement(loginForm) not found!');
const spanLoginText = document.querySelector('#login__text');
if (!spanLoginText)
    throw new Error('HTMLSpanElement(spanLoginText) not found!');
const inputPassword = document.querySelector('#password');
if (!inputPassword)
    throw new Error('HTMLInputElement(inputPassword) not found!');
document.addEventListener('DOMContentLoaded', () => {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await verifyLogin(login);
        return;
    });
});
async function verifyLogin(login) {
    const loginForm = document.querySelector('#login__form');
    if (!loginForm)
        throw new Error('HTMLFormElement(loginForm) not found!');
    const spanLoginText = document.querySelector('#login__text');
    if (!spanLoginText)
        throw new Error('HTMLSpanElement(spanLoginText) not found!');
    const inputPassword = document.querySelector('#password');
    if (!inputPassword)
        throw new Error('HTMLInputElement(inputPassword) not found!');
    const password = 'umbrella';
    const passwordGiven = inputPassword.value;
    loginForm.reset();
    loginForm.style.animation = 'closeElement 0.5s ease-in-out forwards';
    setTimeout(() => {
        loginForm.style.display = 'none';
        spanLoginText.style.display = 'block';
        typeText('AUTHENTICATING', 'login__text', 50);
        return;
    }, 1000);
    setTimeout(() => {
        if (password === passwordGiven) {
            login();
            return;
        }
        else {
            securityModal.open();
            return;
        }
        ;
    }, 5000);
    return;
}
;
function login() {
    const loginForm = document.querySelector('#login__form');
    if (!loginForm)
        throw new Error('HTMLFormElement(loginForm) not found!');
    const spanLoginText = document.querySelector('#login__text');
    if (!spanLoginText)
        throw new Error('HTMLSpanElement(spanLoginText) not found!');
    typeText('WELCOME, RESEARCHER 4412', 'login__text', 50);
    setTimeout(() => {
        window.location.href = 'dashboard.html';
        return;
    }, 2500);
    return;
}
;
