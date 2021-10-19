// // 날짜를 출력하는 방법입니다

// //New Date() 함수에 대해 설명드리겠습니다.

// let today=new Date();

// let todayYear=today.getFullYear();
// document.write(todayYear + '<br>');


// //0~11 ★ +1 ★
// let todayMonth=today.getMonth()+1;
// document.write(todayMonth+ '<br>');


// // .0일 .1월 .2화 .3수 .4목 .5금 .6토

// let todayDay=today.getDay();
// document.write(todayDay + '<br>');

// //컴퓨터는 무적권 숫자로 반환

// // if(todayDay==0){
// //     document.write('일요일');
// // } else if(todayDay==1){
// //     document.write('월요일')
// // } else if(todayDay==2){
// //     document.write('화요일')
// // } else if(todayDay==3){
// //     document.write('수요일')
// // } else if(todayDay==4){
// //     document.write('목요일')
// // } else if(todayDay==5){
// //     document.write('금요일')
// // } else{
// //     document.write('토요일')
// // }



// let todayMinute=today.getMinutes();
//     document.write(todayMinute+ '<br>');

// let todayHours=today.getHours();
//     document.write(todayHours+ '<br>');

// let todaySec=today.getSeconds();
//     document.write(todaySec + '<br>');

// let todayTime=today.getTime();
//     document.write(todayTime + '<br>');


// 년 월 일 시 분 초


const now= Date.now();
console.log(now);


const today= new Date();    
const year= today.getFullYear();

console.log(today); 
console.log(year);

const month=today.getMonth();

console.log(today); 
console.log(month);

