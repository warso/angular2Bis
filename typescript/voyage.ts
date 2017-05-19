// Partie 2 - Challenge
class Sejour {

    constructor(private _nom:string, private _prix:number) {
    }

    get nom() {
        return this._nom
    }

    get prix() {
        return this._prix
    }
}

class SejourService {

    private _listeSejours:Sejour[]

    constructor() {
        this._listeSejours = [
            new Sejour('Paris', 1200),
            new Sejour('New York', 1500), 
            new Sejour('Londres', 1600)
        ]
    }
 
    rechercherParNom(nomVoyage:string):Sejour[] {
       return this._listeSejours.filter(t => t.nom == nomVoyage);
    }
}

const sejourService = new SejourService()

const sejoursParis = sejourService.rechercherParNom('Paris')
console.log(sejoursParis[0].prix)

const sejoursNy = sejourService.rechercherParNom('New York')
console.log(sejoursNy[0].prix)


