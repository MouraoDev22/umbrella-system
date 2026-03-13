import { typeText } from '../utils/typeText.js';
import securityAlarm from '../utils/securityAlarm.js';
const securityModal = {
    open() {
        const securityModal = document.querySelector('#security-modal');
        if (!securityModal)
            throw new Error('HTMLDivElement(securityModal) not found!');
        const redFlash = document.querySelector('#red-flash');
        if (!redFlash)
            throw new Error('HTMLDivElement(redFlash) not found');
        securityAlarm.play();
        typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
        redFlash.classList.add('flash-active');
        securityModal.style.display = 'flex';
        return;
    }
};
export default securityModal;
