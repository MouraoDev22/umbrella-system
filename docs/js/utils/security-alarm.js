const SecurityAlarm = {
    getAudio() {
        const alarm = new Audio('./assets/audio/alarm.mp3');
        if (!alarm)
            throw new Error('HTMLAudioElement(alarm) not found!');
        const youWillBePurged = new Audio('./assets/audio/you-will-be-purged.mp3');
        if (!youWillBePurged)
            throw new Error('HTMLAudioElement(youWillBePurged) not found!');
        alarm.loop = true;
        alarm.volume = 0.5;
        youWillBePurged.volume = 0.9;
        youWillBePurged.loop = true;
        return { alarm, youWillBePurged };
    },
    playAlarm() {
        const securityAlarm = this.getAudio();
        securityAlarm.alarm.play();
        securityAlarm.youWillBePurged.play();
        return;
    }
};
export default SecurityAlarm;
