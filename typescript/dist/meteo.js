"use strict";
// Partie 1 - Météo - Guidé
var Meteo = (function () {
    function Meteo(_date, _ville, _temperature) {
        this._date = _date;
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Object.defineProperty(Meteo.prototype, "ville", {
        get: function () {
            return this._ville;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meteo.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Meteo.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Meteo.prototype.getFormatDate = function () {
        return this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
    };
    Meteo.prototype.toString = function () {
        return this.getFormatDate() + " - " + this.ville + " - " + this.temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantes1erMai = new Meteo(new Date('2017-05-01'), 'Nantes', 20);
var nantes2Mai = new Meteo(new Date('2017-05-02'), 'Nantes', 15);
console.log(nantes1erMai.toString());
console.log(nantes2Mai.toString());
