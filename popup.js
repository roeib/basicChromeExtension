console.log('popup js file')
const images = {
    'react': "https://create-react-app.dev/img/logo-og.png",
    'angular': "https://miro.medium.com/max/588/1*15CYVZdpsxir8KLdxEZytg.png",
    'vue': "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
}

function sendFrameworkImgSrc(e) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, images[e.target.id])
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('div');
    for (const div of divs) {
        div.addEventListener('click', sendFrameworkImgSrc)
    }
})


