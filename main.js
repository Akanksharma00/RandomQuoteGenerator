let block = document.querySelector('.color-box');
// let color = ['#FF5733','#78FF33','#78FF33','#3372FF','#33FFEC','#123F3B','#F8FB52','#FB9C17','#FB173D','#8C118C'];
let thoughts = ["You are off to great places, today is your day. Your mountain is waiting, so get on your way.","You always pass failure on the way to success.","No one is perfect - that is why pencils have erasers.","Winning does not always mean being first. Winning means you are doing better than you have done before.",
"You are braver than you believe, and stronger than you seem, and smarter than you think.","It always seems impossible until it is done.","Keep your face to the sunshine and you cannot see a shadow.",
"Once you replace negative thoughts with positive ones, you will start having positive results.","Positive thinking will let you do everything better than negative thinking will.","In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
"The only time you fail is when you fall down and stay down.","When you are enthusiastic about what you do, you feel this positive energy. It is very simple.","Positive anything is better than negative nothing.",
"Winning is fun, but those moments that you can touch someone life in a very positive way are better.","Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude."];

let btn = document.getElementById('btn');
btn.addEventListener('click',changeColor);
btn.addEventListener('mouseover', changeStyle);
btn.addEventListener('mouseout',changeToOriginal);


function changeColor(){
    let random = Math.floor(Math.random()*10);
    // block.style.backgroundColor = color[random];
    block.textContent = thoughts[random];
}

function changeStyle(){
    btn.id = 'btn-over';
}

function changeToOriginal(){
    btn.id = 'btn';
}