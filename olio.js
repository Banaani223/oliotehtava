// 1.

const opiskelija = {
    nimi: "Esimerkkiopiskelija",
    ika: 18,
    kurssi: "Palvelinohjelmointi",

}

console.log(`Nimi: ${opiskelija.nimi} Ikä: ${opiskelija.ikä} Kurssi: ${opiskelija.kurssi}`);

// 2.

class Auto{
    constructor(merkki, malli, vuosimalli){
        this.merkki = merkki,
        this.malli = malli,
        this.vuosimalli = vuosimalli
    }
    tulosta(){
        console.log(this.merkki, this.malli, this.vuosimalli)
    }
}

const veetinauto = new Auto("Honda", "Civic", 2008)
veetinauto.tulosta();

const pravininauto = new Auto("Toyota", "Corolla", 1999)
pravininauto.tulosta();

// 3.

const kirjat = [
    { nimi: "Tuntematon sotilas", kirjailija: "Väinö Linna", vuosi: 1954 },
    { nimi: "Sinuhe egyptiläinen", kirjailija: "Mika Waltari", vuosi: 1945 },
    { nimi: "Pohjantähden alla", kirjailija: "Väinö Linna", vuosi: 1959 }
];


kirjat.forEach(kirja => {
    console.log(`Nimi: ${kirja.nimi}, Kirjailija: ${kirja.kirjailija}, Vuosi: ${kirja.vuosi}`);
});
