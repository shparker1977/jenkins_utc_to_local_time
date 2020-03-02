chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({currentView: 'UTC'}, function() {
        console.log('Viewing UTC Time');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostPrefix: 'jenkins.'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
