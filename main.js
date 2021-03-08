var canvas=new fabric.canvas("myCanvas");
block_width=30;
block_height=30;
player_image="";
block_image="";

function player_update(){
    fabric.Image.fromURL("player.jpg",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            left:player_x,
            top:player_y

        });
        canvas.add(player_object);
    });
}
function new_image(){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            left:player_x,
            top:player_y

        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown" ,my_keydown)
function my_keydown(){
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("Shift and p pressed together-");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true&&keyPressed=='77'){
        console.log("Shift and m pressed together");
        block_width-=block_width;
        block_height-=block_height;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
}
if(keyPressed=='38'){
    up_1();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='70'){
    new_image('thor_face.png');
    console.log("f");
}
if(keyPressed=='66'){
    new_image('hulkd_body.png');
    console.log("b");
}
if(keyPressed=='76'){
    new_image('ironman_legs.png');
    console.log("l");
}
if(keyPressed=='82'){
    new_image('spderman_right_hand.png');
    console.log("r");
}
if(keyPressed=='82'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block image height = " + block_height);
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<=500) {
        player_y=player_y+block_height;
        console.log("block image height = " + block_height);
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>0) {
        player_x=player_x+block_height;
        console.log("block image height = " + block_height);
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_y<850) {
        player_x=player_x+block_height;
        console.log("block image height = " + block_height);
        console.log("block image width = " + block_width);
        canvas.remove(player_object);
        player_update();
    }
}