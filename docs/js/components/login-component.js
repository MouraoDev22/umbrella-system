import { playAlarm } from "../utils/playAlarm.js";
import { typeText } from "../utils/typeText.js";
const loginForm = document.querySelector('#login__form');
if (!loginForm)
    throw new Error('HTMLFormElement(loginForm) not found!');
const spanLoginText = document.querySelector('#login__text');
if (!spanLoginText)
    throw new Error('HTMLSpanElement(spanLoginText) not found!');
const inputPassword = document.querySelector('#password');
if (!inputPassword)
    throw new Error('HTMLInputElement(inputPassword) not found!');
const securityModal = document.querySelector('#security-modal');
if (!securityModal)
    throw new Error('HTMLDivElement(securityModal) not found!');
const redFlash = document.querySelector('#red-flash');
if (!redFlash)
    throw new Error('HTMLDivElement(redFlash) not found');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await verifyLogin(login, openSecurityModal);
    return;
});
async function verifyLogin(login, openSecurityModal) {
    if (!loginForm)
        throw new Error('HTMLFormElement(loginForm) not found!');
    if (!inputPassword)
        throw new Error('HTMLInputElement(inputPassword) not found!');
    if (!spanLoginText)
        throw new Error('HTMLSpanElement(spanLoginText) not found!');
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
            openSecurityModal();
            return;
        }
        ;
    }, 5000);
    return;
}
;
function login() {
    if (!loginForm)
        throw new Error('HTMLFormElement(loginForm) not found!');
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
function openSecurityModal() {
    if (!securityModal)
        throw new Error('HTMLDivElement(securityModal) not found!');
    if (!redFlash)
        throw new Error('HTMLDivElement(redFlash) not found!');
    playAlarm();
    typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
    redFlash.classList.add('flash-active');
    securityModal.style.display = 'flex';
    return;
}
;
