// המשמעות של (:) זה שמגדירים את הטיפוס מעכל ועוזר לנו לטעטת פחות
// לדוגמה שאם כתבתי קוד ארוך ואז רציתי להכניס מספר אז הוא פה עוזר
// ואמר לי שאני הגדרתי אותו טיפוס סטרינג לא מספר
// how we strat the file app.ts 
//  * tsc app.tc
function func(num1, num2) {
    if (num1 === void 0) { num1 = 8; }
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
}
console.log(func(1, 5)); // num1=1 num2=5
console.log(func(1)); // num1=1 num2=5
console.log(func()); // num1=8 num2=5
//----------------------Optional param-------------------------
// Optional paramשאתה לא חייב לקבל ערך
function func(num1, num2) {
    console.log(num1, num2);
}
console.log(func(1, 5));
console.log(func(1)); // num1=1 num2=5
console.log(func()); // num1=undefined num2=undefined
