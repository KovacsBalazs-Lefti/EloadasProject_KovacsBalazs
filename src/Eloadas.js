class Eloadas {
    foglalasok= [];
    constructor(sorokSzama, helyekSzama){
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw new Error('A megadott értéknek 0-nál nagyobbnak kell lennie');
        }

       for (let i = 0; i < sorokSzama; i++) {
        this.foglalasok[i] = [];
        for( let j = 0; j<helyekSzama; j++) {
            this.foglalasok[i][j]=false;
        }

       }
    }
    lefoglal() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) { // Ha a hely szabad
                    this.foglalasok[i][j] = true; // Lefoglaljuk
                    return true; // Visszatérünk igazzal, mert sikerült lefoglalni egy helyet
                }
            }
        }
        // Ha nem találtunk szabad helyet
        return false;
    }
    szabadHelyek() {
        let szabadHelyek = 0;
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) { // Ha a hely szabad
                    szabadHelyek++; // Növeljük a szabad helyek számát
                }
            }
        }
        return szabadHelyek;
    }
    teli() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) { // Ha találunk egy szabad helyet
                    return false; // Az előadás nem teljesen foglalt
                }
            }
        }
        return true; // Ha ide jutottunk, azaz nem találtunk szabad helyet, az előadás teljesen foglalt
    }
    foglalt(sorSzam, helySzam) {
        if (sorSzam < 1 || helySzam < 1 || sorSzam > this.foglalasok.length || helySzam > this.foglalasok[0].length) {
            throw new Error('Érvénytelen sor- vagy helyindex.');
        }
        return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
}
module.exports = { Eloadas };
