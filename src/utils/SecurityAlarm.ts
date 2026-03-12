import { ObjectAlarm } from "../types/ObjetctAlarm.js";
import { SecurityAlarm } from "../types/SecurityAlarm.js";

const SecurityAlarm: ObjectAlarm = {
    getAudio(): SecurityAlarm {
        const alarm: HTMLAudioElement | null = new Audio('./assets/audio/alarm.mp3');
        if (!alarm) throw new Error('HTMLAudioElement(alarm) not found!');

        const youWillBePurged: HTMLAudioElement | null = new Audio('./assets/audio/you-will-be-purged.mp3');
        if (!youWillBePurged) throw new Error('HTMLAudioElement(youWillBePurged) not found!');

        alarm.loop = true;
        alarm.volume = 0.5;

        youWillBePurged.volume = 0.9;
        youWillBePurged.loop = true;
        
        return { alarm, youWillBePurged };
    },

    playAlarm(): void {
        const securityAlarm: SecurityAlarm = this.getAudio() as SecurityAlarm;
        if (!securityAlarm) throw new Error('SecurityAlarm not found!');
        
        securityAlarm.alarm.play();
        securityAlarm.youWillBePurged.play();

        return;
    }
};

export default SecurityAlarm;