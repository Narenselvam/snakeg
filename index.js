let blockSize =25;
let rows =20;
let cols = 20;
var board;
var context;
var sx= blockSize *5;
var sy= blockSize *5;

window.onload = function(){
    board=document.getElementById("board");
    board.height=rows*blockSize;
    board.width=cols*blockSize;
    context=board.getcontext("2d");
    update();

}
function update(){
    context.fillStyle="blue";
    context.fillRect(0, 0,board.width,board.height);
    context.fillStyle="grey";
}