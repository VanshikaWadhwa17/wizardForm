"use client";

import { useRouter } from "next/navigation";

export default function WizardNav({ currentStep }) {
  const router = useRouter();
  const totalSteps = 5;

  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 && (
        <button
          onClick={() => router.push(`/enroll/${currentStep - 1}`)}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          Previous
        </button>
      )}
      {currentStep < totalSteps && (
        <button
          onClick={() => router.push(`/enroll/${currentStep + 1}`)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
}
