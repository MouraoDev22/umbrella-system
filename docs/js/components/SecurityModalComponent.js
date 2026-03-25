import { typeText } from '../utils/typeText.js';
import securityAlarm from '../utils/securityAlarm.js';
const securityModal = {
    open() {
        const modalElement = document.querySelector('#security-modal');
        if (!modalElement)
            throw new Error('HTMLDivElement(security-modal) not found!');
        const redFlash = document.querySelector('#red-flash');
        if (!redFlash)
            throw new Error('HTMLDivElement(redFlash) not found');
        securityAlarm.play();
        typeText("ACCESS DENIED — UNAUTHORIZED USER DETECTED — YOU WILL BE PURGED", "terminal-text", 100);
        redFlash.classList.add('flash-active');
        modalElement.style.display = 'flex';
        return;
    }
};
export default securityModal;
