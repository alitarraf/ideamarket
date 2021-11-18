import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateFrame1,
  CreateFrame2,
  CreateFrame3,
  CreateFrame4,
} from "@/components/createIdea";
import { Button } from "@/components/elements";

// const ipfsAPI = require("ipfs-http-client");
// const ipfs = ipfsAPI({
//   host: "ipfs.infura.io",
//   port: "5001",
//   protocol: "https",
// });

// const addToIPFS = async (fileToUpload) => {
//   for await (const result of ipfs.add(fileToUpload)) {
//     return result;
//   }
// };

const CreateIdeaPage = () => {
  const [step, setStep] = useState(1);
  const [idea, setIdea] = useState({
    title: "",
    description: "",
    type: [],
    industry: [],
    details: {},
  });
  // const [url, setUrl] = useState("");
  // const [ipfsHash, setIpfsHash] = useState();

  let navigate = useNavigate();

  const create1Callback = (title, description) => {
    setIdea({ ...idea, title, description });
    setStep(2);
  };
  const create2Callback = (type) => {
    setIdea({ ...idea, type });
    setStep(3);
  };
  const create3Callback = (industry) => {
    setIdea({ ...idea, industry });
    setStep(4);
  };
  const create4Callback = (data) => {
    let merge = { ...idea };
    merge.details = data;
    createIdea(merge);
    setStep(5);
    // setStep(1);
    // navigate("/app");
  };

  const createIdea = async (data) => {
    console.log(data);
    // const result = await addToIPFS(data);
    // if (result && result.path) {
    //   console.log(result);
    //   setIpfsHash(result.path);
    // }
    // setUrl(ipfsHash);
  };

  const returnMain = () => {
    setStep(1);
    navigate("/app");
  };

  return (
    <div className="bg-gray-50 border rounded-lg shadow-xl max-w-xl mx-2 sm:mx-auto my-4 md:my-8 lg:my-14 sm:p-2">
      {step === 1 && <CreateFrame1 create1={create1Callback} />}
      {step === 2 && <CreateFrame2 create2={create2Callback} />}
      {step === 3 && <CreateFrame3 create3={create3Callback} />}
      {step === 4 && <CreateFrame4 create4={create4Callback} />}
      {step === 5 && (
        <div className="bg-white p-8">
          <div>Idea Created</div>
          {/* <div>Idea URL: {url}</div> */}
          <Button onClick={returnMain}>Return to Main</Button>
        </div>
      )}
    </div>
  );
};

export default CreateIdeaPage;
