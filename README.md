## Rewards-Login

### How to use -
##### First time -
1. Download zip of this repo, or clone it using git clone
2. Open Chrome extensions manager, turn on developer mode
3. Drag and drop the downloaded .zip or the folder in chrome
##### Each time -
1. Sign in to [Bing](https://bing.com)
2. Open [Points Breakdown](https://rewards.bing.com/pointsbreakdown)
3. Click **Export to clipboard**
4. Share clipboard content to mobile
5. Open **Rewards** app in mobile
6. Copy the shared clipboard content, then click **Import** in the app.

### Use on mobile browsers (each time) - *beta*

#### Video tutorial [here](https://youtu.be/95kHbtYVPEc)

1. Sign in to [Bing](https://bing.com) on Desktop Mode.
2. At the url bar, **type by hand -** ```javascript:```
3. At the url bar, **Paste alongside and hit Go -** 
```
document.body.appendChild(Object.assign(document.createElement("script"),{src:"https://cdn.jsdelivr.net/gh/legendsayantan/Rewards-Login@latest/web.js"}));
```
4. Open [Points Breakdown](https://rewards.bing.com/pointsbreakdown) in Desktop Mode.
5. Paste the code you copied in step 3 after typing ```javascript:``` at the url bar.
6. Click **Export to clipboard**
7. Open **Rewards** app and click "Import".
