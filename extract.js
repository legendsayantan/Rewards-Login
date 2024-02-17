var bing = ""
var rewards = ""
String.prototype.extractIntegers = function () {
    var regex = /\d+/g;
    var matches = this.match(regex);
    return matches.map(function (match) {
        return parseInt(match);
    });
}
function extract() {
    console.log("started extract")
    var highlights = []
    for (let i = 0; i != dashboard.punchCards.length; i++) {
        if (!dashboard.punchCards[i].parentPromotion.complete) highlights.push(dashboard.punchCards[i].parentPromotion.destinationUrl)
    }
    if (dashboard.promotionalItem != null)
        if (!dashboard.promotionalItem.linkText.includes("edeem"))
            highlights.push(location.protocol + "//" + location.hostname);
        
    var cred = new Credential(
        currentUser.email,
        currentUser.displayName,
        dashboard.userStatus.availablePoints,
        dashboard.userStatus.counters.dailyPoint[0].pointProgress,
        dashboard.userStatus.counters.pcSearch.length > 1 ? dashboard.userStatus.counters.pcSearch[1].pointProgress : 0,
        dashboard.userStatus.counters.mobileSearch[0].pointProgress,
        dashboard.userStatus.counters.pcSearch[0].pointProgress,
        dashboard.userStatus.counters.pcSearch.length > 1 ? dashboard.userStatus.counters.pcSearch[1].pointProgressMax : 0,
        dashboard.userStatus.counters.mobileSearch[0].pointProgressMax,
        dashboard.userStatus.counters.pcSearch[0].pointProgressMax,
        dashboard.userStatus.counters.mobileSearch[0].description.extractIntegers()[1],
        dashboard.userStatus.counters.mobileSearch[0].description.extractIntegers()[1],
        dashboard.userStatus.counters.pcSearch[0].description.extractIntegers()[1],
        dashboard.userStatus.levelInfo.activeLevel.extractIntegers()[0],
        dashboard.userStatus.levelInfo.progress,
        dashboard.userStatus.levelInfo.progressMax,
        bing, rewards,
        document.getElementById('more-activities').getElementsByClassName('mee-icon-AddMedium').length,
        highlights,
        Date.now()
    )
    navigator.clipboard.writeText(cred.json())
    document.getElementById('exportText').innerText = "Copied!"
}

function injectHtml() {
    var copyDiv = document.createElement('div');
    copyDiv.id = "copyDiv"
    copyDiv.style = "cursor:pointer;"
    var img = document.createElement('img');
    img.src = "https://www.svgrepo.com/download/3110/copy.svg";
    img.style = "width:20px;height:20px";
    var span = document.createElement('span');
    span.innerText = "Export to clipboard";
    span.id="exportText"
    span.style = "margin:5px"
    copyDiv.appendChild(img);
    copyDiv.appendChild(span);
    document.getElementById("userPointsBreakdown").getElementsByClassName("cardContainer")[0].appendChild(copyDiv)
    document.getElementById("copyDiv").onclick = extract
}

injectHtml()
console.log("value - " + chrome.runtime)
// Send a message
chrome.runtime.sendMessage("dfeigdpdpkdjpgpfbpkmhppjiaapcpac",{ greeting: "bing_cookies" },
    function (response) {
        console.log("Rewards-login preparing, step 1")
        bing = response
    }
);
chrome.runtime.sendMessage("dfeigdpdpkdjpgpfbpkmhppjiaapcpac",{ greeting: "rewards_cookies" },
    function (response) {
        console.log("Rewards-login preparing, step 2")
        rewards = response
    }
);