import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';

// Import required actions.
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
import PDFViewer from './PDFViewer';

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqf3gf0pr'
  }
}); 

// Use the image with public ID, 'sample'.
const myImage = cld.image('docs/Dynamic_document_types_or_live_configuration_of_schemas_and_document_types_in_Nuxeo___by_Mariana_Cedica___Nuxeo_Open_Kitchen___Medium_jwtein');
const pdfUrl = 'docs/Dynamic_document_types_or_live_configuration_of_schemas_and_document_types_in_Nuxeo___by_Mariana_Cedica___Nuxeo_Open_Kitchen___Medium_jwtein';
// Transform the image.
myImage
  .resize(fill(850, 850))
  .roundCorners(byRadius(20))
  .effect(sepia())
  .overlay(   
    source(
      text('This is my picture  ', new TextStyle('arial',18))
      .textColor('red')      
    )
    .position(new Position().gravity(compass('north')).offsetY(20)))
  .rotate(byAngle(20))
  .format('png');

  // Return the delivery URL
  const myUrl = myImage.toURL();

const WaterMark = () => {
  return (
    <>
     <div>WaterMark PDF</div>
     <div>
         <div>
    <AdvancedImage cldImg={myImage} />
    <PDFViewer pdfUrl={pdfUrl} />
  </div>
    </div>
    </>
   
  )
}
export default WaterMark
