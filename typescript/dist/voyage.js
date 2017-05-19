"use strict";
// Partie 2 - Challenge
var Sejour = (function () {
    function Sejour(id, name, imageUrl, price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    Sejour.prototype.toString = function () {
        return "Sejour [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    };
    return Sejour;
}());
var SejourService = (function () {
    function SejourService() {
        this._listeSejours = [
            new Sejour('s01', 'Paris', 'img/paris.png', 1200),
            new Sejour('s02', 'New York', 'img/nyc.png', 1500),
            new Sejour('s03', 'Londres', 'img/london.png', 1600)
        ];
    }
    SejourService.prototype.rechercherParNom = function (tripName) {
        return this._listeSejours.filter(function (t) { return t.name == tripName; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejoursParis = sejourService.rechercherParNom('Paris');
console.log(sejoursParis);
var sejoursNy = sejourService.rechercherParNom('New York');
console.log(sejoursNy);
