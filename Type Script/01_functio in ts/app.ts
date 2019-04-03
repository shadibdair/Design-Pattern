// המשמעות של (:) זה שמגדירים את הטיפוס מעכל ועוזר לנו לטעטת פחות
// לדוגמה שאם כתבתי קוד ארוך ואז רציתי להכניס מספר אז הוא פה עוזר
// ואמר לי שאני הגדרתי אותו טיפוס סטרינג לא מספר

// how we strat the file app.ts 
//  * tsc app.tc


function func(num1:number=8,num2:number=5):number  
{
    return num1+num2;
}

console.log(func(1,5));
console.log(func(1)); // num1=1 num2=5
console.log(func()); // num1=8 num2=5


//----------------------Optional param-------------------------
// Optional paramשאתה לא חייב לקבל ערך
function func(num1?:number,num2?:number):void  
{
    console.log( num1,num2);
}

console.log(func(1,5));
console.log(func(1)); // num1=1 num2=5
console.log(func()); // num1=undefined num2=undefined