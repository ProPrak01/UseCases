import React from 'react'
import './facial_recognition.css'
import face_recognition from '../../assets/face_recognition.jpg'
const Facial_recognition = () => {
  return (
  <div className="recognition-container">
  <div className="image-section">
    <img src={face_recognition} alt="Facial Recognition" />
  </div>
  <div className="text-section">
    <h2>Facial Recognition</h2>
    <p>
      Facial recognition system is a technology capable of identifying or verifying a person
      from a digital image or a video frame from a video source. The system is being used in
      many ways such as Mobile phones, cybersecurity, checkpoint gates, etc. face including
      videos three divisions like face detection, Face Capture, Face match The face detection
      process is an important process that detects and locates human faces in images &amp; also.
    </p>
    <p><strong>How facial recognition technology works?</strong> :</p>
    <p>
      Computer Vision used for Video Cameras for Face Recognition Computer vision helps
      to conclude actions through a sequence of images or video Computer vision provides
      security through FACE ID advanced technology.
    </p>
  </div>
</div>


  )
}

export default Facial_recognition