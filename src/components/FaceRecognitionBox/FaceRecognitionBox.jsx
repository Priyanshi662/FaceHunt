import React from 'react';
import './styleFace.css';
const FaceRecognitionBox =({ImageURL,Boxes})=>{
	return(
		<div className='center ma2'>
		<div className='absolute mt2'>
          <img id='inputimage' alt='FaceDetection' src={ImageURL} width='500px' height='auto'/>
          {Boxes.map(box =>
          <div key={`box${box.topRow}${box.rightCol}`}
              className='bounding-box'
              style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
          </div>
        )}
		</div>
		</div>
        )
}
export default FaceRecognitionBox;