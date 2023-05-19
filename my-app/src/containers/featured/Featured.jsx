import React from 'react'
import './featured.css';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.jpg';



const Feature = () => {
  return (
    <div className='featured section__padding' id="featured">
      <div className='featured-content'>
        <p>Javascript implementation practice projects</p>

        <div className='image-boxes'>
          <div className='img-box small'>
            <p>image 1</p>
            <img src={feature1} alt="ft1" />
          </div>


          <div className='img-box small'>
            <p>image 2</p>
            <img src={feature2} alt="ft1" />
          </div>


        </div>
      </div>
    </div>

  )
}

export default Feature