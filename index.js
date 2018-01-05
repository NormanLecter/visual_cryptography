var Jimp = require("jimp");

/*****************************************************/

let itForWidth = 0;
let itForHeight = 0;
let  decide;

let share1 = new Jimp(100, 50, (err, image) => {
  if(err){
    console.log(err);
  }
});

let share2 = new Jimp(100, 50, (err, image) => {
  if(err){
    console.log(err);
  }
});

let blackResult = new Jimp(100, 50, (err, image) => {
  if(err){
    console.log(err);
  }
});

/*****************************************************/

Jimp.read("black.bmp").then( (image) => {
  let data = image.bitmap.data;
  let width = image.bitmap.width;
  let height = image.bitmap.height;
  for(let i = 0; i < width - 1; i++){
    for(let j = 0; j < height - 1; j++){
      if(image.getPixelColor(i,j) < 1000000){
        decide = Math.floor((Math.random() * 100) + 1); 
        if(decide <= 16){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 16 && decide <= 33){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 33 && decide <= 49){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 49 && decide <= 65){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 65 && decide <= 81){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 81){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
        }
      }
      else{
        decide = Math.floor((Math.random() * 100) + 1); 
        if(decide <= 16){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 16 && decide <= 33){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
        }
        else if(decide > 33 && decide <= 49){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
        }
        else if(decide > 49 && decide <= 65){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
        }
        else if(decide > 65 && decide <= 81){
          share1.setPixelColor(0xffffffff, i + itForWidth, j); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share1.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j); 
          share2.setPixelColor(0x00000000, i + itForWidth, j + 1); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j + 1); 
        }
        else if(decide > 81){
          share1.setPixelColor(0x00000000, i + itForWidth, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share1.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share1.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth + 1, j); 
          share2.setPixelColor(0xffffffff, i + itForWidth, j + 1); 
          share2.setPixelColor(0x00000000, i + itForWidth + 1, j + 1); 
        }
    }
  }
  itForWidth++;
}

share1.write("share1.bmp");
share2.write("share2.bmp");

for(let i = 0; i < 100; i++){
  for(let j = 0; j < 50; j++){
  blackResult.setPixelColor(share1.getPixelColor(i,j)-share2.getPixelColor(i,j),i,j);
  }
}
blackResult.write("blackResult.bmp");
}).catch(function (err) {
  console.error(err);
});