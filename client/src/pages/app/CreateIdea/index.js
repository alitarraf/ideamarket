import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateFrame1,
  CreateFrame2,
  CreateFrame3,
  CreateFrame4,
} from "@/components/createIdea";

const CreateIdeaPage = () => {
  const [step, setStep] = useState(1);

  let navigate = useNavigate();

  const create1Callback = (callback) => {
    console.log(callback);
    setStep(2);
  };
  const create2Callback = (callback) => {
    console.log(callback);
    setStep(3);
  };
  const create3Callback = (callback) => {
    console.log(callback);
    setStep(4);
  };
  const create4Callback = (callback) => {
    console.log(callback);
    setStep(1);
    navigate("/app");
  };
  return (
    <div>
      {step === 1 && <CreateFrame1 create1={create1Callback} />}
      {step === 2 && <CreateFrame2 create2={create2Callback} />}
      {step === 3 && <CreateFrame3 create3={create3Callback} />}
      {step === 4 && <CreateFrame4 create4={create4Callback} />}
    </div>
  );
};

export default CreateIdeaPage;
