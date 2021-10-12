
// let num=1.6184;

// let maxNum=Math.max(10,20,30,50);
// document.write(maxNum+'<br>')
// //최대값

// let minNum=Math.min(20,30,10,50);
// document.write(minNum+"<br>")
// //최소값

// let roundNum=Math.round(2.5);
// document.write(roundNum + '<br>')
// // 올림 공식 그대로 .5 이상인 경우에만 반올림

// let floorNum=Math.floor(1.6);
// document.write(floorNum+"<br>");
// //얜 무조건 버림

// let ceilNum=Math.ceil(2.0001);
// document.write(ceilNum+'<br>');
// // 소수점이 기준이 되는 반올림

// let randomNum=Math.random(num);
// document.write(randomNum+'<br>');
// // 0과 1 사이의 난수

// let piNum=Math.PI();
// document.write(piNum+'<br>')
// // 안 씁니다.


// let lottoNum=Math.random();
// let result = Math.ceil(lottoNum * 45);

// // let result = Math.ceil( math.random()* 45 );

// document.write(result);


let lottoNum1 = Math.ceil(Math.random() * 45);
document.querySelector('.num1').innerHTML=lottoNum1;

let lottoNum2 = Math.ceil(Math.random() * 45);
document.querySelector('.num2').innerHTML=lottoNum2;

let lottoNum3 = Math.ceil(Math.random() * 45);
document.querySelector('.num3').innerHTML=lottoNum3;

let lottoNum4 = Math.ceil(Math.random() * 45);
document.querySelector('.num4').innerHTML=lottoNum4;

let lottoNum5 = Math.ceil(Math.random() * 45);
document.querySelector('.num5').innerHTML=lottoNum5;

let lottoNum6 = Math.ceil(Math.random() * 45);
document.querySelector('.num6').innerHTML=lottoNum6;