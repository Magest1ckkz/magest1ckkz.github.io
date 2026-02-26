function copyText(){
    navigator.clipboard.writeText(`<a href="https://magest1ckkz.github.io/">\n<img src="https://raw.githubusercontent.com/Magest1ckkz/magest1ckkz.github.io/refs/heads/main/mage-webring.png" width="104px" height="32px" alt="mage_webring">\n</a>`)

    }

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    alert("This page is better viewed with a computer screen. If you believe you got here by mistake, click back.")
}

