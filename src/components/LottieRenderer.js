import React from 'react';
import Lottie from 'react-lottie';

const LottieRenderer = ({animationData,height=400,width=400}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            />
        </div>
    );
};

export default LottieRenderer;