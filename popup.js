document.addEventListener('DOMContentLoaded', function() {


    function createOnClick (btn, value) {
        btn.addEventListener('click', function() {
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.executeScript(tab.id, {code: `
                var video = document.getElementsByTagName('video')[0]; 
                if(video){  
                    var curr = video.playbackRate; 
                    video.playbackRate = ${value}; 
                }; 
            `});
            });
        }, false);
    }

    var wrapper = document.getElementById('wrapper');

    var speeds = [
        1.0, 1.1, 1.2, 1.3, 1.3, 1.4,
        1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
        2.1, 2.2, 2.3, 2.3, 2.4, 2.5,
        2.6, 2.7, 2.8, 2.9, 3.0, 3.1,
        3.2, 3.3, 3.3, 3.4, 3.5, 3.6,
        3.7, 3.8, 3.9, 4.0, 
    ]

    speeds.forEach(function(s){
        var btn = document.createElement('button')
        btn.innerHTML = s
        createOnClick(btn, s)
        wrapper.appendChild(btn)
    })

}, false);
