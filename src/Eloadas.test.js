const { Eloadas } = require('./Eloadas');

test('foglalások', () => {
    const eloadas = new Eloadas();
    expect(eloadas.foglalasok.length).toBe(0);    
});

test('Előadás létrehozása szélsőértékekkel', () => {
    // Próbáljunk létrehozni előadást 0 sorral és 0 hellyel
    expect(() => new Eloadas(0, 0)).toThrow();

    // Próbáljunk létrehozni előadást negatív számmal
    expect(() => new Eloadas(-1, -1)).toThrow();
});

test('Lefoglal metódus működése', () => {
    // Előadás létrehozása 2 sorral és 2 hellyel
    const eloadas = new Eloadas(2, 2);

    // Az első két hely lefoglalása
    eloadas.lefoglal(); // 1. hely
    eloadas.lefoglal(); // 2. hely

    // Harmadik hely lefoglalása
    const sikeresLefoglalas = eloadas.lefoglal();

    // Ellenőrzés: A lefoglalás sikeres volt-e
    expect(sikeresLefoglalas).toBe(true);
});
test('foglalás negatív eset', () => {
    // Tesztelendő előadás létrehozása, ahol minden hely foglalt
    const eloadas = new Eloadas(2, 2);
    eloadas.lefoglal(); // Első hely foglalása
    eloadas.lefoglal(); // Második hely foglalása
    eloadas.lefoglal(); // Harmadik hely foglalása
    eloadas.lefoglal(); // Negyedik hely foglalása

    // Az összes hely foglalt, próbáljunk meg újabb helyet foglalni
    const result = eloadas.lefoglal();

    // Az elvárt eredmény az, hogy a foglalás sikertelen
    expect(result).toBe(false);

    // Ellenőrizzük, hogy a helyek száma nem változott
    expect(eloadas.szabadHelyek()).toBe(0);
});
test('Előadás szabad helyek száma', () => {
    // Előadás létrehozása 2 sorral és 2 hellyel
    const eloadas = new Eloadas(2, 2);

    // 3 hely lefoglalása
    eloadas.lefoglal(); // 1. sor, 1. hely
    eloadas.lefoglal(); // 1. sor, 2. hely
    eloadas.lefoglal(); // 2. sor, 1. hely

    // Elvárt érték: 1 szabad hely
    expect(eloadas.szabadHelyek()).toBe(1);
});

test('Előadás szabad helyek száma', () => {
    // Előadás létrehozása 2 sorral és 2 hellyel
    const eloadas = new Eloadas(2, 2);

    // Minden hely lefoglalása
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            eloadas.lefoglal(); // Minden helyet lefoglalunk
        }
    }

    // Szabad helyek számának ellenőrzése
    expect(eloadas.szabadHelyek()).toBe(0); // Az elvárt érték 0, ha minden hely foglalt
});
test('teli metódus negatív eset', () => {
    // Tesztelendő előadás létrehozása, ahol minden hely foglalt
    const eloadas = new Eloadas(2, 2);
    eloadas.lefoglal(); // Első hely foglalása
    eloadas.lefoglal(); // Második hely foglalása
    eloadas.lefoglal(); // Harmadik hely foglalása
    eloadas.lefoglal(); // Negyedik hely foglalása

    // Ellenőrizzük, hogy az előadás teljesen foglalt
    expect(eloadas.teli()).toBe(true);
});
test('Teli metódus működése 2 sor és 2 hely esetén', () => {
    // Előadás létrehozása 2 sorral és 2 hellyel
    const eloadas = new Eloadas(2, 2);

    // Ellenőrzés: A szabad helyek száma 0 kell legyen
    expect(eloadas.teli()).toBe(false);
});

