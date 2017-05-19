// Partie 1 - Météo - Guidé
class Meteo {
    constructor(private _ville:string, private _temperature:number){
    }

    get ville() {
        return this._ville
    }

    get temperature() {
        return this._temperature
    }

    toString():string {
        return  `${this.ville} - ${this.temperature}°C`
    }
}

const nantes1erMai = new Meteo('Nantes', 20);
const nantes2Mai = new Meteo('Nantes', 15);

console.log(nantes1erMai.toString())
console.log(nantes2Mai.toString())





