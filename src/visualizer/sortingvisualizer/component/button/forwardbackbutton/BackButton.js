import React, { useContext } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { VisualizerStateContext } from '../../../Visualizer';
import './styles.css';
import { resetArray } from '../../../util/VisualizerUtil';

const BackButton = () => {
  const { isPlay, animationPercentage, executeBackwardSwapAnimation, idx, arrayData } = useContext(
    VisualizerStateContext
  );

  const isEmpty = animationPercentage === 0;

  const handleBackButtonClick = () => {
    executeBackwardSwapAnimation();
    // this is to check if we are at the start animation, to reset the color of the block
    if (idx - 1 === 0) {
      resetArray(arrayData);
    }
  };

  return (
    <button
      className="forward-back-button-holder"
      style={{
        transform: 'translateX(-10px)',
        cursor: isEmpty ? '' : isPlay ? 'not-allowed' : 'pointer',
      }}
      onClick={() => (isPlay ? () => {} : handleBackButtonClick())}
    >
      <IconContext.Provider
        value={{
          className: 'forward-back-button',
          style: { color: isEmpty ? 'white' : '#8789B5' },
        }}
      >
        <AiOutlineLeft />
      </IconContext.Provider>
    </button>
  );
};

export default BackButton;
