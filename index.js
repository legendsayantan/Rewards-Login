window.onload = function(){
    document.getElementById('rewards-link').onclick = function(){
        chrome.tabs.create({ url: 'https://github.com/legendsayantan/MsRewards' })
    }
    document.getElementById('bing-link').onclick = function(){
        chrome.tabs.create({ url: 'https://bing.com/' })
    }
    document.getElementById('points-link').onclick = function(){
        chrome.tabs.create({ url: 'https://rewards.bing.com/pointsbreakdown' })
    }
}