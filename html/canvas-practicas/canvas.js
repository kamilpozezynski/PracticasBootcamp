let canvas = document.querySelector("#myCanvas");
let ctx =  canvas.getContext('2d');

const NUM_FRAMES = 7;

letcWidth  = canvas.scrollWidth;
letcHeight = canvas.scrollHeight;

let imgList = new Array();

let spriteX = 0,
    spriteY = 0,
    spriteZ = 0;


const drawImage = (e) => {
    ctx.drawImage(e.target, 0, 0);
}

const initImages = () => {
    for (let i=0; i<NUM_FRAMES; i++) {
        imgList.push(new Image());

        if (i==6) {
            imgList[i].addEventListener('load', drawImage);
        }
        imgList[i].src = `./sprite-frames/Frame${i}.png`
    }
}

const animate = dir  => {
    if ( dir > 0) {
        spriteIndex = ( spriteIndex >= 6) ? 0 : ++ spriteIndex;
        spriteX = (spriteX >= 1000 ) ? 1000 :  spriteX + 5;
    } else{
        spriteIndex = ( spriteIndex <= 0) ? 6 : -- spriteIndex;
        spriteX = (spriteX <= 0 ) ? 0 :  spriteX - 5;
    }
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(imgList[spriteIndex], spriteX, spriteY, imgList[spriteIndex].width,imgList[spriteIndex].height);
}

const keysBinding = () => {
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 37){
            animate(-1);
            return;
        }
        if (e.keyCode == 39){
            animate(1);
        }
    });

    document.addEventListener('keyup', e=>{
        if (e.keyCode ==  37 || e.keyCode == 39){
            ctx.clearRect(0,0,canvas.width, canvas.height);
            spriteIndex =  6;
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillRect(0,0, canvas.width, canvas.height);
            ctx.drawImage(imgList[spriteIndex], spriteY, spriteX, imgList[spriteIndex].width,imgList[spriteIndex].height);
        }
    })
}
keysBinding();
initImages();

ctx.fillStyle = "rgba(255,0,0,1)";
ctx.fillRect(0,0,canvas.width,canvas.height);


