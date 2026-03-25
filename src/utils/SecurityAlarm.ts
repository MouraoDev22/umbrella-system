import { ObjectAlarm } from '../types/ObjetctAlarm.js';
import { SecurityAlarm } from '../types/SecurityAlarm.js';

const securityAlarm: ObjectAlarm = {
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

    play(): void {
        const sAlarm: SecurityAlarm = this.getAudio() as SecurityAlarm;
        if (!sAlarm) throw new Error('sAlarm not found!');
        
        sAlarm.alarm.play();
        sAlarm.youWillBePurged.play();

        return;
    }
};

export default securityAlarm;