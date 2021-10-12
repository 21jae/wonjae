
// // let design=["포토샵","일러스트","인디자인"];

// let design[];

// design[0]="포토샵";
// design[1]="일러스트";
// design[2]="인디자인";

// let design=new Array("포토샵","일러스트","인디자인");

// let design=["포토샵","일러스트","인디자인"];
// let ph=design[0];
// let il=design[1];

// document.querySelector('.design'),innerHTML=ph+"," + il;

// document.querySelector('.design2'),innerHTML=design;


let design=["포토샵","일러스트","피그마","HTML","CSS","javaScript","jQeury"];


// let job=design.length-1;
// document.write("배열의 길이를 반환"+job+"<br>");

// document.write(design.join('#')+"<br>");
// //중간중간 삽입('#')

// document.write(design.sort(),"<br>");  
// // 영문 - 한글 순

// document.write(design.pop(),"<br>");
// document.write(design+"<br>");
// // 마지막 요소를 제거합니다. 다음 출력일때

// document.write(design.push("제플린"),"<br>");


function joinBtn(){
    const joinbtn1 = design.join('*');
    document.querySelector('.join').innerHTML=joinbtn1;
}



function pushBtn(){
    design.push('제플린');
    document.querySelector('.push').innerHTML = design;
}

//뒤에 추가

function del(){
    design.pop();
    document.querySelector('.pop').innerHTML = design;
}

//뒤에 삭제

function shiftBtn(){
    design.shift();
    document.querySelector('.shift').innerHTML = design;
}

//앞에 삭제

function unshiftBtn(){
    design.unshift("추가");
    document.querySelector('.unshift').innerHTML = design;
}