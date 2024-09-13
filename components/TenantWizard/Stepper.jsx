// components/Stepper.js
import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div>
      <h2>{steps[currentStep - 1].title}</h2>
      <p>{steps[currentStep - 1].description}</p>
    </div>
  );
};

export default Stepper;
