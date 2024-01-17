//browser extension main file
function collectCookies(url, then) {
    chrome.cookies.getAll({ url: url }, function (cookie) {
        let data = '';
        cookie.forEach((item, index) => {
            // Iterate through object properties and concatenate to result
            data += `${item.name}=${item.value}`;
            // Add a separator after each object (except the last one)
            if (index < cookie.length - 1) {
                data += '; ';
            }
        });
        then(data)
    });
}

chrome.runtime.onMessageExternal.addListener(async function (request, sender, sendResponse) {
    console.log("msg " + request.greeting)
    if (request.greeting == "bing_cookies") {
        collectCookies("https://bing.com", function (d) {
            sendResponse(d)
        })
    } else if (request.greeting == "rewards_cookies") {
        collectCookies("https://rewards.bing.com", function (d) {
            sendResponse(d)
        })
    } else {
        sendResponse("none");
    }
}
);