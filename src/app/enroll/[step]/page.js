"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import ProgressBar from "@/components/ProgressBar";
import WizardNav from "@/components/WizardNav";
import { WizardProvider } from "@/context/WizardContext";


const steps = {
  1: dynamic(() => import("./step1"), { ssr: false }),
  2: dynamic(() => import("./step2"), { ssr: false }),
  3: dynamic(() => import("./step3"), { ssr: false }),
  4: dynamic(() => import("./step4"), { ssr: false }),
  5: dynamic(() => import("./step5"), { ssr: false }),
};

export default function WizardPage() {
  const router = useRouter();
  const params = useParams();
  const stepIndex = Number(params?.step || "1");

  useEffect(() => {
    if (isNaN(stepIndex) || stepIndex < 1 || stepIndex > 5) {
      router.push("/enroll/1");
    }
  }, [stepIndex, router]);

  const StepComponent = steps[stepIndex] || steps[1];

  return (
    <WizardProvider>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <ProgressBar currentStep={stepIndex} totalSteps={5} />
        <StepComponent /> 
        <WizardNav currentStep={stepIndex} />
      </div>
    </WizardProvider>
  );
}
