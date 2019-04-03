// ts ? type script

//--------------Number Type--------------
let num1:number=7;
let num2:number=7.2;
let num3:number=NaN; // typeof(NaN) is Number
let num4:number=Number("7.2"); // num4 is 7.2
let num5:number=parseInt("7.2"); // num5 is 7
let num6:number=parseFloat("7.2"); // num5 is 7.2

//--------------String Type--------------
let str1:string="test";
let str2:string='test';
let str3:string=`test`;
let str4:string=num1.toString();

//--------------Boolean Type--------------
let bool1:boolean=true;
let bool2:boolean=false;
let bool3:boolean=3<7 && 4>9;

//--------------Any Type--------------
let x:any=true;
x="Bob";
x=6;
x=7.2;