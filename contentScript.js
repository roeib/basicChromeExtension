console.log('im a content script')


chrome.runtime.onMessage.addListener(function (message, sender) { // Listen to messages from the popup.js
    const images = document.getElementsByTagName('img');
    for (const img of images) {
        img.src = message
        img.srcset = message
    }
});

