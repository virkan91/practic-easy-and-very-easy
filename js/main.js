

//  EASY

// 1. Создайте функцию, которая принимает число в качестве аргумента. 
//Сложите все числа от 1 до числа, которое вы передали функции. Например,
// если на входе 4, ваша функция должна вернуть 10, потому что 1 + 2 + 3 + 4 = 10.


// function addUp(num) {
// 	let sum = 0;
// 	for(let i = 1; i<=num; i++){
// 		sum += i;
// 	}
// 	return sum;
// }
// console.log(addUp(4));



// 2.Найдите самое маленькое и самое большое число

// function minMax(arr) {
// 	let min = Math.min(...arr);
// 	let max = Math.max(...arr);
// 	return [min, max];
// }
//   console.log(minMax([1, 2, 3, 4, 5]));



// 3. Найдите индекс

// function findIndex(lst, str) {
// 	for (let i = 1; i <= lst.length; i++) {
// 	    if (lst[i] == str) {
// 	    return i;
// 		}
// 	}
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));



// 4.Исправьте код на вкладке кода, чтобы пройти это испытание 
//(только синтаксические ошибки). Посмотрите на примеры ниже, 
//чтобы получить представление о том, что должна делать функция.


    // function sumArray(arr) {
    // 	let sum = 0;	
    //   for (let i=0; i<arr.length; i++) {
    // 	  sum+=arr[i];
    // 	}
    //   return sum;
    // }
    // console.log(sumArray([1, 2, 3, 4, 5]));



/// VERY EASY

// 1.ES6: Destructuring Arrays I

    // const arr = [1, 2, 3, 4, 5, 6]
    // let [a, b] = arr


// 2.Дюймы в футы

    // function inchesToFeet(inches) {
    // 	if (inches < 12) return 0; 
    // 	return inches/12;
    // }
    // console.log(inchesToFeet(36));


// 3.Вернуть последний элемент в массиве

    // function getLastItem(arr) {
    // 	return arr.pop();
    // }
    // console.log(getLastItem([1, 2, 3]));
    // console.log(getLastItem(["cat", "dog", "duck"]));

// 4. Создайте функцию, которая принимает базовое число и число степени и возвращает вычисление.

    // function calculateExponent(num, exp) {
    // 	return Math.pow(num,exp);
    // }
   //  console.log(calculateExponent(5, 5));

// 5.Узнать високосный год

// function leapYear(year) {
// 	if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
// 		return true;
// 	}
// 	return false;
// }
// console.log(leapYear(2020));
// console.log(leapYear(2021));

// 6. Я хотел бы подсчитать, сколько в среднем я живу в одном доме.
//Зная человека ageи количество раз, 
//когда он переезжал из дома как moves, верните среднее количество лет, которое он провел, живя в одном и том же доме.

// function yearsInOneHouse(age, moves) {
// 	return Math.round(age / (moves + 1));
// }


// 7. Перевернуть логическое значение

// function flipBool(b) {
// 	if (b > 0 || b == 1){
// 		return 0
// 	} 
// 	return 1
// }
// console.log(flipBool(true));
// console.log(flipBool(false));


// 8.Создайте функцию, которая принимает имя и возвращает приветствие 
//в виде строки. Не используйте обычную функцию, используйте функцию стрелки .

// const helloName = name => `Hello ${name}!`


// 9. Число четное или нечетное?

    // function isEvenOrOdd(num) 
    // {
    // 	if(num % 2 == 0){
    // 	return "even";
    // 	}
    // 	return "odd";
    // }


// 10. Эовин написала функцию, isOdd()которая проверяет, является ли заданное число нечетным. 
// К сожалению, функция не возвращает правильный результат для всех входных данных. Помогите ей исправить ошибку.


    // function isOdd(num) 
    // {
    // 	if (num % 2 != 0){
    // 	return true;
    // 	}
    // 	return false;
    // }