var Cinema = /** @class */ (function () {
    function Cinema(movieName, movieLength) {
        this.movieLength = movieLength;
        this.movieName = movieName;
    }
    Cinema.prototype.getDesc = function () {
        return this.movieName + " is " + this.movieLength + " minutes";
    };
    return Cinema;
}());
var c1 = new Cinema();
var c2 = new Cinema("Capten Marvel", 120);
console.log(c1.getDesc()); // undefined is undefined minutes
console.log(c2.getDesc()); // Capten Marvel is 120 minutes
