document.body.style.zoom = "60%";
var tl = anime.timeline({ loop: false, duration: 1000, autoplay: false });
tl.add({
    targets: '.line-one svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function (el, i) { return i * 100 },

}).add({
    targets: '.line-two svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 100,
    delay: function (el, i) {
        return i * 100
    },
}).add({
    targets: '.line-three svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function (el, i) {
        return i * 100
    },
}).add({
    targets: '.line-four svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function (el, i) {
        return i * 100
    },
}).add({
    targets: '.saurav svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    begin: function (anim) {
        let saurav = document.querySelector('.saurav svg');
        saurav.setAttribute("fill", "#fff");
    }
});




var x;

document.addEventListener('mousemove', function () {
    if (x) {
        tl.play();
        clearTimeout(x);
    };
    x = setTimeout(function () {
        tl.pause();
    }, 90);

}, false);

