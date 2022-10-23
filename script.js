const airLines = "SkyUp Airline";
const airPlane = "Boeing 737";

console.log(airPlane[0]); //B  Выводит первый символ строки. Изменяется от значения индекса
console.log(airPlane.length); //10  Получаем длину строки
console.log(airPlane.indexOf(" ")); //6 Получаем индексное значение нужного знака в строке
console.log(airPlane.indexOf("7")); //7  Получаем индекс первого найденного элемена с таким знаком
console.log(airPlane.lastIndexOf("7")); //9  Получаем индекс последнего найденного элемента с таким знаком

console.log(airPlane.slice(4)); //ng 737  Начал строку с элемента под четвертым индексом
console.log(airPlane.slice(0, 6)); //Boeing  Начал строку с элемента под нулевым индексом и закончил по индексом 6
console.log(airLines.slice(0, airLines.indexOf(" "))); //SkyUp  Начал строку с элемента под нулевым индексом
//и закончил по индексу первого пробела
console.log(airPlane.slice(airPlane.lastIndexOf(" ") + 1)); //737  Начинает с индекса последнего пробела,
//убирает пробел и выводит второе слово строки
console.log(airLines.slice(-1)); //e  Последняя буква строки
console.log(airLines.slice(-3)); //ine Последние 3 буквы строки
console.log(airLines.slice(3, -3)); //Up Airl Были удалены 3 первые и 3 последние буквы строки

console.log(airLines.toLowerCase()); //skyup airline Переводит все символы в нижний регистр
console.log(airLines.toUpperCase()); //SKYUP AIRLINE Переводит все символы в верхний регистр

const ticketPriceEU = "197,23 EURO";
const ticketPriceUSA = ticketPriceEU.replace(",", ".").replace("EURO", "$");
console.log(ticketPriceUSA); //197.23 $  replace заменяет нужные значения из другой строки

console.log(airPlane.includes("737")); //true Ищет заданный параметр в строке и выводит булевое значение
console.log(airPlane.startsWith("737")); //false  Проверяет содержимое начала строки с введенными параметрами
console.log(airPlane.endsWith("737")); //true  Проверяет содержимое окончания строки с введенными параметрами

console.log("My+name+is+Igor+Pavlov".split("+")); // Выводит массив со значениями и удаляет ненужный разделитель
const [fistname, lastname] = "Igor Pavlov".split(" ");

console.log(["Mr", fistname, lastname.toUpperCase()].join(" ")); // Собирает массив в новую строку

// Практика
// Создать функцию, которая определяет места в самолете, которые находятся всередине ряда (B, E)

// const checkMiddleSeat = function (seat) {
//   const seatLetter = seat.slice(-1);
//   if (seatLetter === "B" || seatLetter === "E") {
//     console.log("Ваше посадочное место всередине ряда");
//   } else if (seatLetter === "A" || seatLetter === "F") {
//     console.log("Ваше посадочное место возле иллюминатора");
//   } else {
//     console.log("Ваше посадочное место в проходе");
//   }
// };

// checkMiddleSeat("18A");
// checkMiddleSeat("18C");
// checkMiddleSeat("23B");
// checkMiddleSeat("4E");
// checkMiddleSeat("4F");

// Создать функцию, которая будет изменять регистр введенных значений на вадидный

// const createValidName = function (errName) {
//   const toLoverName = errName.toLowerCase();
//   const newName = toLoverName[0].toUpperCase() + toLoverName.slice(1);
//   return console.log(newName);
// };

// createValidName("vasya"); //Vasya
// createValidName("aNDON"); //Andon
// createValidName("ViTaLiNa"); //Vitalina
// createValidName("serGEY"); //Sergey

// Валидация правильного заполнения email адреса
// const checkMyEmail = function (myEmail) {
//   const loverEmail = myEmail.toLowerCase().trim(); //trim обрезает пустые значения вначале и конце
//   return console.log(loverEmail);
// };

// checkMyEmail("   emaRedav@gmail.com   "); //emaredav@gmail.com
// checkMyEmail(" neReTez@UKR.net   "); //neretez@ukr.net

//Функция изменения всех ненужных значений на другие
// const getRealInfo = function (oldText) {
//   const newText = oldText
//     .replaceAll("специальная военная операция", "война")
//     .replaceAll("специальныую военную операцию", "войну");
//   return console.log(newText);
// };

// getRealInfo("На Украине началась специальная военная операция");
// getRealInfo(
//   "24 февраля началась специальная военная операция. Воиска Украины остановят специальныую военную операцию и одержат победу"
// );

//Фунуиця отслеживания ручной клади на борту

// const goingToTheBoadr = function (lugagge) {
//   const loverLugagge = lugagge.toLowerCase();
//   if (
//     loverLugagge.includes("оружие") ||
//     loverLugagge.includes("взрывчатка") ||
//     loverLugagge.includes("нож") ||
//     loverLugagge.includes("боеприпасы")
//   ) {
//     console.log(
//       "Наша авиакомпания отказывает вам в полете. Обратитесь в нашу службу безопасности"
//     );
//   } else {
//     console.log("Добро пожаловать на борт нашей авиакомпании");
//   }
// };

// goingToTheBoadr("Пирачинный нож", "конфеты", "перчатки"); //Наша авиакомпания отказывает вам в полете. Обратитесь в нашу службу безопасности
// goingToTheBoadr("парик", "конфеты", "перчатки"); //Добро пожаловать на борт нашей авиакомпании
// goingToTheBoadr("холодное оружие", "конфеты", "перчатки"); //Наша авиакомпания отказывает вам в полете. Обратитесь в нашу службу безопасности
// goingToTheBoadr("боеприпасы для цирка", "конфеты", "перчатки"); //Наша авиакомпания отказывает вам в полете. Обратитесь в нашу службу безопасности
// goingToTheBoadr("взрывчатка для оглушения рыбы", "конфеты", "перчатки"); //Наша авиакомпания отказывает вам в полете. Обратитесь в нашу службу безопасности

//Написать функцию вывода имени и фамилии в регистре капиталайз
// const capitalizeName = function (item) {
//   const names = item.split(" ");
//   const namesCapitalize = [];
//   for (const title of names) {
//     namesCapitalize.push(title[0].toUpperCase() + title.slice(1));
//   }

//   const capitalizeFullName = namesCapitalize.join(" ");
//   return capitalizeFullName;
// };

// console.log(capitalizeName("pavlov igor vladimirovich"));
// console.log(capitalizeName("mr. jaine master jay jr."));

// const mess = "Hi there!";
// console.log(mess.padStart(23, " ").padEnd(46, "-"));

// //Функция маскировки символов (как в крдитной карте)
// const maskCard = function (cardnumber) {
//   const stringCardNumber = cardnumber + "";
//   const last4 = stringCardNumber.slice(-4);
//   return last4.padStart(stringCardNumber.length, "*");
// };

// console.log(maskCard(5456441474550288));
// console.log(maskCard("5457880014776432"));

const resText = document.querySelector(".result_text");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  while (resText.firstChild) {
    resText.removeChild(resText.firstChild);
  }
  const getOldText = document.querySelector("textarea").value;
  const lines = getOldText.split("\n");
  for (const line of lines) {
    let correctLine;
    if (line.includes("_")) {
      correctLine = line.toLowerCase().trim().split("_");
    }
    if (line.includes("-")) {
      correctLine = line.toLowerCase().trim().split("-");
    }
    if (line.includes("=")) {
      correctLine = line.toLowerCase().trim().split("=");
    }
    if (line.includes(" ")) {
      correctLine = line.toLowerCase().trim().split(" ");
    }
    if (line.includes("--")) {
      correctLine = line.toLowerCase().trim().split("--");
    }
    if (line.includes("__")) {
      correctLine = line.toLowerCase().trim().split("__");
    }

    const [firstWord, secondWord] = correctLine;
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toLocaleUpperCase()
    )}`;

    let html = `<h4>${output}</h4>`;

    resText.innerHTML += html;
  }
});
