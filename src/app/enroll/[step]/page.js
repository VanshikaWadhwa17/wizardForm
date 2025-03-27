// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import dynamic from "next/dynamic";
// import { useSelector, useDispatch } from "react-redux";
// import { updateStep } from "@/store/wizardSlice";
// import ProgressBar from "@/components/ProgressBar";
// import Button from "@/components/Button";

// const steps = {
//   1: dynamic(() => import("./step1"), { ssr: false }),
//   2: dynamic(() => import("./step2"), { ssr: false }),
//   3: dynamic(() => import("./step3"), { ssr: false }),
//   4: dynamic(() => import("./step4"), { ssr: false }),
//   5: dynamic(() => import("./step5"), { ssr: false }),
// };

// export default function WizardPage() {
//   const router = useRouter();
//   const currentStep = useSelector((state) => state.wizard.currentStep); // Get from Redux

//   useEffect(() => {
//     if (currentStep < 1 || currentStep > 5) {
//       router.push("/enroll/1");
//     }
//   }, [currentStep, router]);

//   const StepComponent = steps[currentStep] || steps[1];

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <ProgressBar currentStep={currentStep} totalSteps={5} />
//       <StepComponent />
//       <Button currentStep={currentStep} />
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux"; 
import { updateStep } from "@/store/wizardSlice"; 
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";

const steps = {
  1: dynamic(() => import("./step1"), { ssr: false }),
  2: dynamic(() => import("./step2"), { ssr: false }),
  3: dynamic(() => import("./step3"), { ssr: false }),
  4: dynamic(() => import("./step4"), { ssr: false }),
  5: dynamic(() => import("./step5"), { ssr: false }),
};

export default function WizardPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.wizard.currentStep); 

  
  useEffect(() => {
    const urlStep = parseInt(window.location.pathname.split("/").pop(), 10);
    if (!isNaN(urlStep) && urlStep !== currentStep) {
      dispatch(updateStep(urlStep)); 
    }
  }, [currentStep, dispatch]);

  useEffect(() => {
    if (currentStep < 1 || currentStep > 5) {
      router.push("/enroll/1");
      dispatch(updateStep(1)); 
    }
  }, [currentStep, router, dispatch]);

  const StepComponent = steps[currentStep] || steps[1];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ProgressBar currentStep={currentStep} totalSteps={5} />
      <StepComponent />
      {/* <Button currentStep={currentStep} /> */}
    </div>
  );
}
