import React from 'react'
import LottieView from 'lottie-react-native';

const Error = () => {
    return (
        <LottieView 
            source={require('../../assets/notfound.json')} 
            style={{width: "100%", height: "100%"}}
            autoPlay 
            loop
        />
    )
}

export default Error;