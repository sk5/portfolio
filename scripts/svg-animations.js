var s = Snap("#svg");
var crownCenter = s.path("M41.1,69.8H31l5.1-10.2L41.1,69.8z M36.1,67L36.1,67L36.1,67L36.1,67L36.1,67z")
.attr({
    fill: "#E64C3C",
    opacity: "0"
});
// Show small center
setTimeout(function () {
    crownCenter.animate({ opacity: "1" }, 250, mina.easeout);
}, 300);
// Pop center small to large
setTimeout(function () {
    crownCenter.animate({ d: "M69.7 69.8H2.4L36.1 2.4l33.6 67.4zM36.1 25L18.7 59.6h34.7L36.1 25z" },
        250,
        mina.easeout);
}, 800);


// Crown left side - Inner
var crownLeftInner = s.path("M5.2 67z")
.attr({
    fill: "#fff",
    opacity: "0"
});
// Crown left side - Color
var crownLeft = s.path("M2.4,59.6l10.2,10.2H2.4V59.6z M5.2,67L5.2,67L5.2,67L5.2,67z")
.attr({
    fill: "#6CCFF6",
    opacity: "0"
});
// Show small left
setTimeout(function () {
    crownLeftInner.animate({ opacity: "0.75" }, 250, mina.easeout);
    crownLeft.animate({ opacity: "0.75" }, 250, mina.easeout);
}, 100);
// Pop left small to large
setTimeout(function () {
    crownLeftInner.animate({ d: "M12.5 26.3v33.3h33.3z" }, 250, mina.easeout);
    crownLeft.animate({ d: "M2.4 2.4l67.4 67.4H2.4V2.4zm10.1 23.9v33.4h33.4L12.5 26.3z" },
        250,
        mina.easeout);
}, 900);


// Crown right side - Inner
var crownRightInner = s.path("M66.9 67z")
.attr({
    fill: "#fff",
    opacity: "0"
});
// Crown right side - Color
var crownRight = s.path("M69.7 69.8H59.5l10.2-10.2v10.2zM66.9 67z")
.attr({
    fill: "#223267",
    opacity: "0"
});
// Show small right
setTimeout(function () {
    crownRightInner.animate({ opacity: "0.75" }, 250, mina.easeout);
    crownRight.animate({ opacity: "0.75" }, 250, mina.easeout);
}, 500);
// Pop right small to large
setTimeout(function () {
    crownRightInner.animate({ d: "M26.3 59.6h33.3V26.3z" }, 250, mina.easeout);
    crownRight
        .animate({ d: "M69.7 69.8H2.4L69.7 2.4v67.4zM26.3 59.6h33.4V26.3L26.3 59.6z" }, 250, mina.easeout);
}, 1000);