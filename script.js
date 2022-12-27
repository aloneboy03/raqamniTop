'use strict';

let inputNum = document.querySelector('input');
let startBtn = document.querySelector('.start');
let restartBtn = document.querySelector('.restart');
let resultText = document.querySelector('.result--text');
let scoreTxt = document.querySelector('.attempt--num');

let compNum = Math.floor((Math.random() * 100) + 1);
// console.log(compNum);

// let score = 10;

restartBtn.addEventListener('click', () =>{
    let compNum2 = Math.floor((Math.random() * 100) + 1);
    compNum = compNum2;
    // console.log(compNum2);
    inputNum.value = "";
    resultText.textContent = "Kompyuter o'ylagan sonni toping!";
});

startBtn.addEventListener('click', () =>{
    // resultText.textContent = inputNum.value;
    if(inputNum.value < 0){
        resultText.textContent = "Musbat son kiriting";
        inputNum.value = "";
    }else
    if(inputNum.value === ""){
        resultText.textContent = "Birorta son kiriting ;)";
        inputNum.value = "";
    }else
    if(compNum > inputNum.value){
        resultText.textContent = `Siz kichik son kiritdingiz [ ${inputNum.value} ]`;
        inputNum.value = "";
    }else
    if(compNum < inputNum.value){
        resultText.textContent = `Siz katta son kiritdingiz [ ${inputNum.value} ]`;
        inputNum.value = "";
    }else
    if(compNum == inputNum.value){
        resultText.textContent = `Uraaa! Topdingiz :) [ ${inputNum.value} ]`;
        inputNum.value = "";
    }else{
        resultText.textContent = `Siz yutkazdingiz :(`;
        inputNum.value = "";
    }
    // if(score == 0){
    //     resultText.textContent = `Siz Yutkazdingiz`;
    //     inputNum.value = "";
    //     score = score - 1;
    //     scoreTxt.textContent = score;
        
    // }
})