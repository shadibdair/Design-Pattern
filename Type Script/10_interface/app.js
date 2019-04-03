var Baloon = /** @class */ (function () {
    function Baloon() {
    }
    Baloon.prototype.startFly = function () {
        console.log("I am FLying");
    };
    return Baloon;
}());
var x = new Baloon();
x.startFly();
