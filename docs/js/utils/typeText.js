export function typeText(text, elementId, speed) {
    let i = 0;
    const textElement = document.getElementById(elementId);
    if (!textElement)
        throw new Error('HTMLElement(textElement) not found!');
    textElement.innerHTML = "";
    function typing() {
        if (!textElement)
            throw new Error('HTMLElement(paragraphElement) not found!');
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
        ;
        return;
    }
    ;
    typing();
    return;
}
;
