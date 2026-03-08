import { playAlarm } from "../utils/playAlarm.js";
import { typeText } from "../utils/typeText.js";

const loginForm: HTMLFormElement | null = document.querySelector<HTMLFormElement>('#login__form');
if (!loginForm) throw new Error('HTMLFormElement(loginForm) not found!');

const spanLoginText: HTMLSpanElement | null = document.querySelector<HTMLSpanElement>('#login__text');
if (!spanLoginText) throw new Error('HTMLSpanElement(spanLoginText) not found!');

const inputPassword: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#password');
if (!inputPassword) throw new Error('HTMLInputElement(inputPassword) not found!');

const securityModal: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#security-modal');
if (!securityModal) throw new Error('HTMLDivElement(securityModal) not found!');

const redFlash: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#red-flash');
if (!redFlash) throw new Error('HTMLDivElement(redFlash) not found');

loginForm.addEventListener('submit', async (event): Promise<void> => {
    event.preventDefault();
    
    await verifyLogin(login, openSecurityModal);
    return;
});

async function verifyLogin(login: Function, openSecurityModal: Function): Promise<void> {
    if (!loginForm) throw new Error('HTMLFormElement(loginForm) not found!');
    if (!inputPassword) throw new Error('HTMLInputElement(inputPassword) not found!');
    if (!spanLoginText) throw new Error('HTMLSpanElement(spanLoginText) not found!');

    const password: string = 'umbrella';
    const passwordGiven: string = inputPassword.value;

    loginForm.reset();
    loginForm.style.display = 'none';
    spanLoginText.style.display = 'block';
    typeText('AUTHENTICATING', 'login__text', 50);

    setTimeout((): void => {
        if (password === passwordGiven) {
            login();
            return;
        } else {
            openSecurityModal();
            return;
        };
    }, 5000);
    return;
};

function login(): void {
    if (!loginForm) throw new Error('HTMLFormElement(loginForm) not found!');
    if (!spanLoginText) throw new Error('HTMLSpanElement(spanLoginText) not found!');

    typeText('WELCOME, RESEARCHER 4412', 'login__text', 50);

    setTimeout((): void => {
        window.location.href = 'dashboard.html';
        return;
    }, 5000);
    return;
};

function openSecurityModal():void {
    if (!securityModal) throw new Error('HTMLDivElement(securityModal) not found!');
    if (!redFlash) throw new Error('HTMLDivElement(redFlash) not found!');
    
    playAlarm();
    typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
    
    redFlash.classList.add('flash-active');
    securityModal.style.display = 'flex';
    return;
};