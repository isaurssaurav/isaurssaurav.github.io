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


var randomMovement = function () {
    return anime.random(-20, 20) + 'rem'
};

function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
}


let background = anime({
    targets: '.back-poly svg',
    scale: createKeyframes(function (el) {
        return anime.random(0.5, 0.7)
    }),
    translateX: createKeyframes(function (el) {
        return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
    }),
    translateY: createKeyframes(function (el) {
        return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
    }),
    easing: 'linear',
    rotate: createKeyframes(function () { return anime.random(-180, 180); }),
    duration: function () {
        return anime.random(600, 2200);
    },
    loop: true,
    direction: 'alternate',
    autoplay: false
});
background.play();
let workMenu = document.querySelector(".menu .work");

workMenu.addEventListener("click", function () {
    let axis = this.getBoundingClientRect();
    // debugger;
    background.pause();
    anime({
        targets: '.back-poly svg',
        scale: 0.3,
        translateX: axis.left,
        translateY: axis.top,
        easing: 'linear',
        rotate: createKeyframes(function () { return anime.random(-180, 180); }),
        duration: 500
    });
})
