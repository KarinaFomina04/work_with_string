//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.

function repeatString(str, rep, sep) {
    let result = str;
    for (let i = 1; i < rep; i++) {
        result += sep + str;
    }
    return result;
}
console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается
// с указанной подстроки, в противном случае - false. Регистр не учитывается.

function checkStart(str, substr) {
    const strL = str.toLowerCase();
    const subStr = substr.toLowerCase();
    return strL.startsWith(subStr);
}
console.log(checkStart("Incubator", "inc")) //=> true
console.log(checkStart("Incubator", "yo")) //=> false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (str, n) => {
 return str.slice(0, n)
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)) //=> "Всем студе..."


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка, то возвращает null.
const getMinLengthWord = (str) => {
    const words = str.split(' ');
    let shortest = words[0];
    if (!str) {
        return null
    } else {
        for (let i = 1; i < words.length; i++) {
            if (words[i].length < shortest.length) {
                shortest = words[i];
            }
        }
        return shortest;
    }
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))// => "Всем"
console.log(getMinLengthWord(""))// => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
const setUpperCase = (string) => {
    return string.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' ') //конкотинация заглавная буква word[0].toUpperCase() + остальное слово word.substring(1))
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))//=> "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
function isIncludes(str, substr) {
    let substrSet = new Set(substr.toLowerCase()); //создаем множество для substr
    for(let char of substrSet) { //цикл for of используется для перебора элементов, в данном случае в множестве substrSet
        if(!str.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
}
console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))// => false
console.log(isIncludes("Incubator", "inbba")) // => true
console.log(isIncludes("Incubator", "inba"))// => true
console.log(isIncludes("Incubator", "Incubatorrr")) //=> true