import securityAlarm from '../utils/securityAlarm.js';
import { typeText } from '../utils/typeText.js';

const securityModal: any = {
    open(): void {
        const securityModal: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#security-modal');
        if (!securityModal) throw new Error('HTMLDivElement(securityModal) not found!');

        const redFlash: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#red-flash');
        if (!redFlash) throw new Error('HTMLDivElement(redFlash) not found');

        securityAlarm.play();

        typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
    
        redFlash.classList.add('flash-active');
        securityModal.style.display = 'flex';
        return;
    }
};

export default securityModal;