document.body.style.zoom = "65%";
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
        return anime.random(7, 12)
    }),
    translateX: createKeyframes(function (el) {
        return anime.random(0, 100);
    }),
    translateY: createKeyframes(function (el) {
        return anime.random(0, 200);
    }),
    easing: 'linear',
    rotate: createKeyframes(function () { return anime.random(-180, 180); }),
    duration: function () {
        return anime.random(100, 2200);
    },
    loop: false,
    direction: 'alternate',
    opacity: 0.1,
    autoplay: false
});
background.play();
let workMenu = document.querySelector(".menu .work");
let pausedValue = {}

workMenu.addEventListener('mouseenter', function () {
    background.pause();
    pausedValue.scale = background.animations[0].currentValue;
    pausedValue.translateX = background.animations[1].currentValue;
    pausedValue.translateY = background.animations[2].currentValue;

    // debugger;
    let axis = this.getBoundingClientRect();
    anime({
        targets: '.back-poly svg',
        scale: 1,
        translateX: axis.left - 48,
        translateY: axis.top - 49,
        easing: 'linear',
        rotate: 0,
        duration: 500,
        opacity: 1
    });
});

workMenu.addEventListener('mouseleave', function () {
    anime({
        targets: '.back-poly svg',
        scale: pausedValue.scale,
        translateX: pausedValue.translateX,
        translateY: pausedValue.translateY,
        easing: 'easeOutExpo',
        rotate: 0,
        duration: 700,
        opacity: 0.1,
        complete: function () {
            background.play();
        }
    });



});
