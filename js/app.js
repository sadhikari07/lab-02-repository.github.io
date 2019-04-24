'use strict';

//list of images

//Constructor
function Image(pic){
  this.image_url = pic.image_url;
  this.title = pic.title;
  this.description = pic.description;
  this.keyword = pic.keyWord;
  this.horns = pic.horns;
}

Image.allImages = [];

// FUNCTION DECLARATIONS

//Create image objects from JSON data
function createImageObject(){
  $.get('./data/page-1.json')
    .then(data => {
      data.forEach(picElement => Image.allImages.push(new Image(picElement)));
      displayImages();
    });

  // console.log(Image.allImages);
}

//Display images to home page
function displayImages(){
  //get the image element
  let imageTag = $('img');
  //assign the first image object to the first image tag
  imageTag.attr({'src': Image.allImages[0].image_url, 'alt': Image.allImages[0].title});
  // iterate through the images list  and create image tags

  for(let i = 1; i < Image.allImages.length; i++){
    imageTag.after(`<img src=${Image.allImages[i].image_url} alt=${Image.allImages[i].title} />`);
  }
}


// FUNCTION CALLS
createImageObject();

console.log(Image.allImages);


