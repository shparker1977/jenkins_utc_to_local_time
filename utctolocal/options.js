
var elements = document.getElementsByClassName('timestamp');
for (var i=0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 1) {
            var utcTime = node.innerHTML.split(":")
            var localDate = new Date(Date.UTC(2020, 01, 01, parseInt(utcTime[0]), parseInt(utcTime[1]), parseInt(utcTime[2])))
            var localTime = GetLocalTime(localDate)
            node.innerHTML = time;
        }
    }
}


var elements = document.getElementsByClassName('tip model-link inside build-link');
for (var i=0; i < elements.length; i++) {
    if (elements[i].nodeName == "A") {
        var matches = elements[i].innerHTML.match(/\d{2}:\d{2}:\d{2}/);
        if (matches != null) {
            var utcTime = matches[0].split(":")
            var localDate = new Date(Date.UTC(2020, 01, 01, parseInt(utcTime[0]), parseInt(utcTime[1]), parseInt(utcTime[2])))
                var localTime = GetLocalTime(localDate)
                elements[i].innerHTML = elements[i].innerHTML.replace(matches[0], localTime).replace("UTC", "");
        }
    }
}


function GetLocalTime(date) {
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    if (hours === "00") {
        hours = 12
    }
    if (date.getHours() < 12) {
        var suffix = "AM"
    } else {
        var suffix = "PM"
    }
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + suffix;

    return time;
}
