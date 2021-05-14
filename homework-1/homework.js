/* Creați clasa AngajatIT cu următoarele:
    Proprietăți: CNP, nume, prenume, vechime, departament
    Metode: afiseazaVarsta, afișeazăAnulAngajarii, lucrează ( va afișa mesajul "Neimplementat")
     Din clasa creată extindeți clasele QA și Developer, adăugați mesaje specifice pentru metoda lucrează a acestora ( ex. "testează software", "scri cod")
*/
class AngajatIT {
  constructor(CNP, nume, prenume, vechime, departament) {
    this.CNP = CNP;
    this.nume = nume;
    this.prenume = prenume;
    this.vechime = vechime;
    this.departament = departament;
  }

  afiseazaVarsta() {
    console.log(
      `${this.nume} ${this.prenume} are ${this.afiseazaVarstaVarianta2()} ani`
    );
  }
  afiseazaAnulAngajarii() {
    const currentYear = new Date().getFullYear();
    console.log(
      `${this.nume} ${this.prenume} lucreaza din ${currentYear - this.vechime}`
    );
  }
  lucreaza() {
    console.log("Neimplementat");
  }

  afiseazaVarstaVarianta1() {
    let varsta;
    // SYYLLZZ
    // 0123456
    const gender = this.CNP.slice(0, 1);
    const [birthYear, birthMonth, birthDay] = [
      +this.CNP.slice(1, 3), //anul
      +this.CNP.slice(3, 5), // luna
      +this.CNP.slice(5, 7), // ziua
    ];

    const currentDate = new Date();
    const [day, month, year] = [
      +currentDate.getDate(),
      +currentDate.getMonth() + 1,
      +currentDate.getFullYear(),
    ];

    switch (gender) {
      case "1":
      case "2":
        varsta = year - (birthYear + 1900);
        break;
      case "5":
      case "6":
        varsta = year - (birthYear + 2000);
        break;
    }
    // luna nasterii este mai mare ca luna curenta
    if (month - birthMonth < 0) {
      // nu am implinit varsta
      varsta--;
    } else {
      // daca e aceiasi luna
      if (month - birthMonth === 0) {
        // daca ziua nasterii este mai mare ca ziua curenta
        if (day - birthDay < 0) {
          varsta--;
        }
      }
    }
    return varsta;
  }

  afiseazaVarstaVarianta2() {
    const gender = this.CNP.slice(0, 1);
    //SAALLZZJJNNNG
    const [birthYear, birthMonth, birthDay] = [
      this.CNP.slice(1, 3), //anul
      this.CNP.slice(3, 5), // luna
      this.CNP.slice(5, 7), // ziua
    ];
    //moment().diff("yyyy-ll-zz", type, integer?);
    const varsta = moment().diff(
      //conditie ? exprTrue : exprFalse
      (gender === "1" || gender === "2" ? "19" : "20") +
        birthYear +
        "-" +
        birthMonth +
        "-" +
        birthDay,
      "years",
      false
    );
    return varsta;
  }
}

class QA extends AngajatIT {
  constructor(CNP, nume, prenume, vechime, departament) {
    super(CNP, nume, prenume, vechime, departament);
  }
  lucreaza() {
    console.log(`${this.nume} ${this.prenume} testeaza Software`);
  }
}

class Developer extends AngajatIT {
  constructor(CNP, nume, prenume, vechime, departament) {
    super(CNP, nume, prenume, vechime, departament);
  }
  lucreaza() {
    console.log(`${this.nume} ${this.prenume} scrie cod`);
  }
}

console.log("-----------Exercise 1 --------------");
console.log("---Angajat---");
// 23 aprilie 1996 -> 25
const angajat = new AngajatIT("1960423122334", "Ionescu", "Florin", 3, "IT");
angajat.afiseazaVarsta();
angajat.afiseazaAnulAngajarii();
//12 februarie 1994 -> 27
console.log("---QA---");
const angajatQA = new QA("2940212123456", "Pop", "Ioana", 5, "QA");
angajatQA.afiseazaVarsta();
angajatQA.lucreaza();
// 07 mai 2001
console.log("---Developer---");
const developer = new Developer(
  "5010707122334",
  "Patrunjel",
  "Ionel",
  5,
  "Development"
);
developer.afiseazaVarsta();
developer.lucreaza();
/* Folosind API-ul https://randomuser.me/api/, afisati la apasarea unui buton("Genereaza utilizator") următoarele detalii ale unui utilizator random: picture, name, gender, e-mail și age
 */

const url = "https://randomuser.me/api/";
async function genereazaPersoana() {
  const result = await fetch(url);
  const data = await result.json();
  const info = data.results[0];
  console.log(info);
  const { picture, name, gender, email, dob } = info;
  document.getElementById("picture").setAttribute("src", picture.large);
  document.getElementById("name").innerText = `${name.first} ${name.last}`;
  document.getElementById("gender").innerText = gender;
  document.getElementById("email").innerText = email;
  document.getElementById("age").innerText = dob.age;
}

/* Se dă un array cu numere de la 0 la 10
             Parcurgeți array-ul și afișați fiecare număr adunat cu 15 * numărul respectiv ( pentru 2 se va afișa 32), folosind atat VanillaJS cât și arrow functions și iteratori specifici ES6.
             Folosind destructuring copiați array-ul și modificați elementele astfel: 2 va deveni 22, 6 va deveni 66. Afișați ambele array-uri.
*/
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//VanillaJS
let arr1 = new Array();
for (let i = 0; i < arr.length; i++) {
  arr1[i] = arr[i] + arr[i] * 15;
}
console.log("VanillaJS");
console.log(arr1);
// ES6 + arrow functions + iteratori specifici
let arr2 = new Array();
arr.forEach((element, index) => (arr2[index] = element + element * 15));
console.log(arr2);
console.log(arr.map((element) => element + element * 15));

// Destructuring

const arrCopy = [...arr.map((element) => `${element}${element}`)];
// Output => ['00','11','22','33',...,'1010'];
console.log(arrCopy);

const arrCopy2 = [...arr.map((element) => element * 10 + element)];
// Output => [0,11,22,..,110];
console.log(arrCopy2);

const arrCopy3 = [
  ...arr.map((element) => element * (element < 10 ? 10 : 100) + element),
];
//Output => [0,11,22,...,1010];
console.log(arrCopy3);
