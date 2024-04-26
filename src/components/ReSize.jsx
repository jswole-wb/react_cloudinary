import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary, transformationStringFromObject } from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";


const ReSize = () => {


// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqf3gf0pr'
  }
});

// cld.image returns a CloudinaryImage with the configuration set.
//const myImage = cld.image('sample');

// The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

// Render the image in a React component.


// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image('docs/lacnpf55hnrkdbuvq5fc'); 

// Resize to 250 x 250 pixels using the 'fill' crop mode.
//myImage.resize(fill().width(250).height(250));



// Transform the image.
myImage
.resize(fill(150, 150))
.roundCorners(byRadius(20))
.effect(sepia())
.overlay(   
  source(
    text('This is my picture resized', new TextStyle('arial',18))
    .textColor('white')      
  )
  .position(new Position().gravity(compass('north')).offsetY(20)))
.rotate(byAngle(20))
.format('png');
//myImage.setVersion(1610625835);
// Return the delivery URL
const myUrl = myImage.toURL();

// Render the image in a React component.

  return (
    <>
    <div>reSize</div>
    <div>
    <AdvancedImage cldImg={myImage} />
  </div>
    </>
    
  )
}

export default ReSize