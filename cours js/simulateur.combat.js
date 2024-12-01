
class Guerrier{
    constructor(Name, ATK, PV, Precision) {
        this.Name = Name;
        this.ATK = ATK;
        this.PV = PV;
        this.Presicion = Precision;
    }
        fight(victim) {
            victim.PV -= this.ATK
        }
}

let garfield = new Guerrier ("Garfield", 3, 18);

let junior = new Guerrier ("Junior", 5, 15);

console.log ("1,2,3...FIGHT !")
while(garfield.PV > 0 && junior.PV > 0) {
    console.log("Garfield Attaque ! Junior perd des PV !")
    garfield.fight(junior)
    console.log(garfield.PV, junior.PV)
    console.log("Junior attaque ! Garfield perd des PV !")
    junior.fight(garfield)
    console.log(garfield.PV, junior.PV)
}

console.log("Garfield K.O !")




