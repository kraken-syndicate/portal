// ROT-8 encode a string
function inkcipher(str) {
    return String(str).replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + 8) % 26) + base);
    });
}

// ROT-8 decode a string (ROT-18)
function inkdecipher(str) {
    return String(str).replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + 18) % 26) + base);
    });
}
