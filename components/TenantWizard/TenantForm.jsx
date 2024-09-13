// components/TenantForm.js
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import applicantSchema from "@/components/TenantWizard/ApplicantSchema";
import Stepper from "./Stepper";
import ApplicantInformation from "./steps/ApplicantInformation";
import PropertyInformation from "./steps/PropertyInformation";
// Import other step components

const TenantForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(applicantSchema),
    defaultValues: {
      applicants: [
        {
          fullName: "",
          dob: "",
          idNumber: "",
          trn: "",
          address: "",
          phone: "",
          email: "",
          employment: {
            employer: "",
            position: "",
            employerAddress: "",
            employerPhone: "",
            monthlyIncome: 0,
          },
        },
      ],
      property: {
        address: "",
        moveInDate: "",
        leaseTerm: "",
      },
      rentalHistory: [
        {
          landlordName: "",
          landlordContact: "",
          rentalAddress: "",
          tenancyDuration: "",
          reasonForLeaving: "",
        },
      ],
      references: {
        personal: [
          {
            name: "",
            relationship: "",
            phone: "",
            email: "",
          },
        ],
        professional: [
          {
            name: "",
            relationship: "",
            phone: "",
            email: "",
          },
        ],
      },
      additionalInfo: {
        occupants: [
          {
            name: "",
            age: 0,
          },
        ],
        pets: [
          {
            type: "",
            count: 1,
          },
        ],
      },
      documents: {
        idProof: "",
        incomeProof: "",
        supportingDocuments: [],
      },
    },
  });

  const onSubmit = (data) => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final data submitted:", data);
      alert("Form submitted successfully!");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ApplicantInformation control={control} />;
      case 2:
        return <PropertyInformation control={control} />;
      // Add cases for other steps
      default:
        return <div>Step not found</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stepper steps={stepperList} currentStep={currentStep} />
      {renderStepContent()}
      <button type="submit">Next</button>
    </form>
  );
};

export default TenantForm;
