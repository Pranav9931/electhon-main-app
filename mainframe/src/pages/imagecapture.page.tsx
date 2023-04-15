import { Button, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const ImageRecognition = () => {

    let videoRef = useRef(null);

    let photoRef = useRef(null);

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                const video = videoRef.current as unknown as HTMLVideoElement | undefined;
                if (video) {
                    video.srcObject = stream;
                    video.play();
                }


            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUserCamera()
    }, [videoRef])
    return (
        <div className="facescan-container">
            <div className="facescan-content">
                <Typography color="primary" sx={{ fontWeight: 700, fontSize: '16px' }}>
                    Place your entire face in the Camera.
                </Typography>
                <br />
                <center>
                    <video className="facescan" ref={videoRef}></video>
                </center>
                <br />
                <Button variant='contained' sx={{ width: '100%', height: '50px' }}>Capture Image</Button>
            </div>
        </div>
    )
}

export default ImageRecognition