import { SecurityModal } from '../types/SecurityModal.js';
import { typeText } from '../utils/typeText.js';
import securityAlarm from '../utils/alarm.js';

const securityModal: SecurityModal = {
    open(): void {
        const modalElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#security-modal');
        if (!modalElement) throw new Error('HTMLDivElement(security-modal) not found!');

        const redFlash: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#red-flash');
        if (!redFlash) throw new Error('HTMLDivElement(redFlash) not found');

        securityAlarm.play();

        typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
    
        redFlash.classList.add('flash-active');
        modalElement.style.display = 'flex';
        return;
    }
};

export default securityModal;