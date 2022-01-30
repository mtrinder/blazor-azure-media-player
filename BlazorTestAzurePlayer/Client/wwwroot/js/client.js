
window.playVideo = function (urlStreamingLink) {
    var myPlayer = amp('vid1', { /* Options */
            techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS", "silverlightSS", "html5"],
            "nativeControlsForTouch": false,
            autoplay: false,
            controls: true,
            width: "640",
            height: "400",
            poster: ""
        }, function () {
            console.log('Good to go!');
            // add an event listener
            this.addEventListener('ended', function () {
                console.log('Finished!');
            });
        }
    );

    myPlayer.src([{
        src: "" + urlStreamingLink,
        type: "application/vnd.ms-sstr+xml"
    }]);
}