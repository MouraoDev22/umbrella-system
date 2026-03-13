import securityModal from './securityModalComponent.js';
import { typeText } from '../utils/typeText.js';

const loginForm: HTMLFormElement | null = document.querySelector<HTMLFormElement>('#login__form');
if (!loginForm) throw new Error('HTMLFormElement(loginForm) not found!');

const spanLoginText: HTMLSpanElement | null = document.querySelector<HTMLSpanElement>('#login__text');
if (!spanLoginText) throw new Error('HTMLSpanElement(spanLoginText) not found!');

const inputPassword: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#password');
if (!inputPassword) throw new Error('HTMLInputElement(inputPassword) not found!');

loginForm.addEventListener('submit', async (event): Promise<void> => {
    event.preventDefault();
    
    await verifyLogin(login);
    return;
});

async function verifyLogin(login: Function): Promise<void> {
    if (!loginForm) throw new Error('HTMLFormElement(loginForm) not found!');
    if (!inputPassword) throw new Error('HTMLInputElement(inputPassword) not found!');
    if (!spanLoginText) throw new Error('HTMLSpanElement(spanLoginText) not found!');

    const password: string = 'umbrella';
    const passwordGiven: string = inputPassword.value;

    loginForm.reset();
    
    loginForm.style.animation = 'closeElement 0.5s ease-in-out forwards';
    
    setTimeout((): void => {
        loginForm.style.display = 'none';
        spanLoginText.style.display = 'block';
        typeText('AUTHENTICATING', 'login__text', 50);
        return;
    }, 1000);

    setTimeout((): void => {
        if (password === passwordGiven) {
            login();
            return;
        } else {
            securityModal.open();
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
    }, 2500);
    return;
};