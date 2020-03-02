let showLocalTime = document.getElementById('showLocalTime');

showLocalTime.onclick = function(element) {
    chrome.storage.sync.get('currentView', function(data) {
        if (data.currentView == 'UTC') {
            chrome.tabs.executeScript({
                file: 'options.js'
            });
            showLocalTime.innerHTML = 'Switch back to UTC'
            chrome.storage.sync.set({currentView: 'Local Time'}, function() {
                console.log('Viewing Local Time');
            });
            chrome.tabs.onUpdated.addListener(update_listener);
        } else {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });

            chrome.storage.sync.set({currentView: 'UTC'}, function() {
                console.log('Viewing UTC');
            });
            showLocalTime.innerHTML = 'Switch to Local Time'
        }
    });
    
};

function update_listener() {
    chrome.tabs.executeScript({
        file: 'options.js'
    });
}
