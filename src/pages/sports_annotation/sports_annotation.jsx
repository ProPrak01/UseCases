import React from 'react'
import face_recognition from '../../assets/sa1.jpg'
import face_recognition2 from '../../assets/sa2.jpg'

const Sports_annotation = () => {
  return (
    <div className="recognition-container">
  <div className="image-section">
    <img className='img1 imgsec' src={face_recognition} alt="Facial Recognition" />
    <img className='img2 imgsec' src={face_recognition2} alt="Facial Recognition" />

  </div>
  <div className="text-section">
    <div className='head'><h1><div className='blue'>Sports</div> Annotation</h1></div>
    <div className="Pcontent">
    AI in sports annotation is transforming the way we understand and engage with sports. By leveraging computer vision and machine learning algorithms, AI systems can analyze video footage in real time, identifying and labeling key events, players, and actions. This technology enables detailed performance tracking, offering insights into player movements, strategies, and game dynamics. Additionally, AI-driven sports annotation automates the generation of highlights and summaries, enhancing the viewing experience for fans and providing valuable tools for coaches and analysts. The precision and speed of AI annotation allow for a deeper, data-driven understanding of sports, paving the way for more informed decision-making and innovative broadcasting techniques.    </div>
     
    <p className='quest'><strong>How  does the AI in<span style={{backgroundColor:"rgb(179, 179, 247)" ,paddingLeft:"1vh",paddingRight:"1vh"}}> Sports annotation  </span>  works?</strong></p>
    <p>
    AI in sports annotation works by analyzing video footage of games using computer vision and machine learning algorithms. It identifies and labels key events, players, and actions, enabling real-time analysis, performance tracking, and highlight generation.    </p>
  </div>
</div>
  )
}

export default Sports_annotation