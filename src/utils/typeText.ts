export function typeText(text: string, elementId: string, speed: number): void {
    let i: number = 0;
    const textElement: HTMLElement | null = document.getElementById(elementId)
    if (!textElement) throw new Error('HTMLElement(textElement) not found!');

    textElement.innerHTML = ""

    function typing() {
        if (!textElement) throw new Error('HTMLElement(paragraphElement) not found!');
        
        if(i < text.length){
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
        };
        return;
    };
    typing();
    return;
};