"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building,
  FileText,
  Users,
  PawPrint,
  History,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import BackButton from "../../../components/ui/BackButton";

const steps = [
  { name: "Applicant Info", icon: <User className="w-6 h-6 text-gray-50" /> },
  { name: "Co-Applicant", icon: <Users className="w-6 h-6 text-gray-50" /> },
  { name: "Property", icon: <Building className="w-6 h-6 text-gray-50" /> },
  { name: "Employment", icon: <FileText className="w-6 h-6 text-gray-50" /> },
  {
    name: "Rental History",
    icon: <History className="w-6 h-6 text-gray-50" />,
  },
  { name: "References", icon: <Phone className="w-6 h-6 text-gray-50" /> },
  {
    name: "Additional Info",
    icon: <PawPrint className="w-6 h-6 text-gray-50" />,
  },
];

export default function TenantApplicationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const hasPets = watch("hasPets");

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send this data to your backend
    alert("Application submitted successfully!");
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="nationalId">National ID/Passport Number</Label>
              <Input
                id="nationalId"
                {...register("nationalId", {
                  required: "National ID/Passport number is required",
                })}
              />
              {errors.nationalId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nationalId.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="trn">TRN</Label>
              <Input
                id="trn"
                {...register("trn", { required: "TRN is required" })}
              />
              {errors.trn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.trn.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentAddress">Current Address</Label>
              <Textarea
                id="currentAddress"
                {...register("currentAddress", {
                  required: "Current address is required",
                })}
              />
              {errors.currentAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentAddress.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input
                id="emailAddress"
                type="email"
                {...register("emailAddress", {
                  required: "Email address is required",
                })}
              />
              {errors.emailAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="coApplicantFullName">Full Name</Label>
              <Input
                id="coApplicantFullName"
                {...register("coApplicantFullName")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantDateOfBirth">Date of Birth</Label>
              <Input
                id="coApplicantDateOfBirth"
                type="date"
                {...register("coApplicantDateOfBirth")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantNationalId">
                National ID/Passport Number
              </Label>
              <Input
                id="coApplicantNationalId"
                {...register("coApplicantNationalId")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantTrn">TRN</Label>
              <Input id="coApplicantTrn" {...register("coApplicantTrn")} />
            </div>
            <div>
              <Label htmlFor="coApplicantCurrentAddress">Current Address</Label>
              <Textarea
                id="coApplicantCurrentAddress"
                {...register("coApplicantCurrentAddress")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantPhoneNumber">Phone Number</Label>
              <Input
                id="coApplicantPhoneNumber"
                type="tel"
                {...register("coApplicantPhoneNumber")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantEmailAddress">Email Address</Label>
              <Input
                id="coApplicantEmailAddress"
                type="email"
                {...register("coApplicantEmailAddress")}
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="propertyAddress">
                Property Address Applying For
              </Label>
              <Input
                id="propertyAddress"
                {...register("propertyAddress", {
                  required: "Property address is required",
                })}
              />
              {errors.propertyAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyAddress.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="desiredMoveInDate">Desired Move-In Date</Label>
              <Input
                id="desiredMoveInDate"
                type="date"
                {...register("desiredMoveInDate", {
                  required: "Move-in date is required",
                })}
              />
              {errors.desiredMoveInDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.desiredMoveInDate.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="leaseTerm">Lease Term (months)</Label>
              <Input
                id="leaseTerm"
                type="number"
                {...register("leaseTerm", {
                  required: "Lease term is required",
                })}
              />
              {errors.leaseTerm && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.leaseTerm.message}
                </p>
              )}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="currentEmployer">Current Employer</Label>
              <Input
                id="currentEmployer"
                {...register("currentEmployer", {
                  required: "Current employer is required",
                })}
              />
              {errors.currentEmployer && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentEmployer.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                {...register("position", { required: "Position is required" })}
              />
              {errors.position && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.position.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="employerAddress">Employer Address</Label>
              <Textarea
                id="employerAddress"
                {...register("employerAddress", {
                  required: "Employer address is required",
                })}
              />
              {errors.employerAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.employerAddress.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="employerPhoneNumber">Employer Phone Number</Label>
              <Input
                id="employerPhoneNumber"
                type="tel"
                {...register("employerPhoneNumber", {
                  required: "Employer phone number is required",
                })}
              />
              {errors.employerPhoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.employerPhoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="monthlyIncome">Monthly Income</Label>
              <Input
                id="monthlyIncome"
                type="number"
                {...register("monthlyIncome", {
                  required: "Monthly income is required",
                })}
              />
              {errors.monthlyIncome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.monthlyIncome.message}
                </p>
              )}
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">
              Co-Applicant Employment Details (If Applicable)
            </h3>
            <div>
              <Label htmlFor="coApplicantCurrentEmployer">
                Current Employer
              </Label>
              <Input
                id="coApplicantCurrentEmployer"
                {...register("coApplicantCurrentEmployer")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantPosition">Position</Label>
              <Input
                id="coApplicantPosition"
                {...register("coApplicantPosition")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantEmployerAddress">
                Employer Address
              </Label>
              <Textarea
                id="coApplicantEmployerAddress"
                {...register("coApplicantEmployerAddress")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantEmployerPhoneNumber">
                Employer Phone Number
              </Label>
              <Input
                id="coApplicantEmployerPhoneNumber"
                type="tel"
                {...register("coApplicantEmployerPhoneNumber")}
              />
            </div>
            <div>
              <Label htmlFor="coApplicantMonthlyIncome">Monthly Income</Label>
              <Input
                id="coApplicantMonthlyIncome"
                type="number"
                {...register("coApplicantMonthlyIncome")}
              />
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">Current Landlord</h3>
            <div>
              <Label htmlFor="currentLandlordName">Name</Label>
              <Input
                id="currentLandlordName"
                {...register("currentLandlordName", {
                  required: "Current landlord name is required",
                })}
              />
              {errors.currentLandlordName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentLandlordName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentLandlordContactNumber">
                Contact Number
              </Label>
              <Input
                id="currentLandlordContactNumber"
                type="tel"
                {...register("currentLandlordContactNumber", {
                  required: "Current landlord contact number is required",
                })}
              />
              {errors.currentLandlordContactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentLandlordContactNumber.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentRentalAddress">
                Address of Rental Property
              </Label>
              <Textarea
                id="currentRentalAddress"
                {...register("currentRentalAddress", {
                  required: "Current rental address is required",
                })}
              />
              {errors.currentRentalAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentRentalAddress.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentTenancyDuration">
                Duration of Tenancy
              </Label>
              <Input
                id="currentTenancyDuration"
                {...register("currentTenancyDuration", {
                  required: "Current tenancy duration is required",
                })}
              />
              {errors.currentTenancyDuration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentTenancyDuration.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="currentReasonForLeaving">
                Reason for Leaving
              </Label>
              <Textarea
                id="currentReasonForLeaving"
                {...register("currentReasonForLeaving", {
                  required: "Reason for leaving is required",
                })}
              />
              {errors.currentReasonForLeaving && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentReasonForLeaving.message}
                </p>
              )}
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Previous Landlord (if applicable)
            </h3>
            <div>
              <Label htmlFor="previousLandlordName">Name</Label>
              <Input
                id="previousLandlordName"
                {...register("previousLandlordName")}
              />
            </div>
            <div>
              <Label htmlFor="previousLandlordContactNumber">
                Contact Number
              </Label>
              <Input
                id="previousLandlordContactNumber"
                type="tel"
                {...register("previousLandlordContactNumber")}
              />
            </div>
            <div>
              <Label htmlFor="previousRentalAddress">
                Address of Rental Property
              </Label>
              <Textarea
                id="previousRentalAddress"
                {...register("previousRentalAddress")}
              />
            </div>
            <div>
              <Label htmlFor="previousTenancyDuration">
                Duration of Tenancy
              </Label>
              <Input
                id="previousTenancyDuration"
                {...register("previousTenancyDuration")}
              />
            </div>
            <div>
              <Label htmlFor="previousReasonForLeaving">
                Reason for Leaving
              </Label>
              <Textarea
                id="previousReasonForLeaving"
                {...register("previousReasonForLeaving")}
              />
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">Personal Reference</h3>
            <div>
              <Label htmlFor="personalReferenceName">Name</Label>
              <Input
                id="personalReferenceName"
                {...register("personalReferenceName", {
                  required: "Personal reference name is required",
                })}
              />
              {errors.personalReferenceName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.personalReferenceName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="personalReferenceRelationship">
                Relationship
              </Label>
              <Input
                id="personalReferenceRelationship"
                {...register("personalReferenceRelationship", {
                  required: "Personal reference relationship is required",
                })}
              />
              {errors.personalReferenceRelationship && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.personalReferenceRelationship.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="personalReferencePhoneNumber">Phone Number</Label>
              <Input
                id="personalReferencePhoneNumber"
                type="tel"
                {...register("personalReferencePhoneNumber", {
                  required: "Personal reference phone number is required",
                })}
              />
              {errors.personalReferencePhoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.personalReferencePhoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="personalReferenceEmailAddress">
                Email Address
              </Label>
              <Input
                id="personalReferenceEmailAddress"
                type="email"
                {...register("personalReferenceEmailAddress", {
                  required: "Personal reference email address is required",
                })}
              />
              {errors.personalReferenceEmailAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.personalReferenceEmailAddress.message}
                </p>
              )}
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Professional Reference
            </h3>
            <div>
              <Label htmlFor="professionalReferenceName">Name</Label>
              <Input
                id="professionalReferenceName"
                {...register("professionalReferenceName", {
                  required: "Professional reference name is required",
                })}
              />
              {errors.professionalReferenceName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalReferenceName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="professionalReferenceRelationship">
                Relationship
              </Label>
              <Input
                id="professionalReferenceRelationship"
                {...register("professionalReferenceRelationship", {
                  required: "Professional reference relationship is required",
                })}
              />
              {errors.professionalReferenceRelationship && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalReferenceRelationship.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="professionalReferencePhoneNumber">
                Phone Number
              </Label>
              <Input
                id="professionalReferencePhoneNumber"
                type="tel"
                {...register("professionalReferencePhoneNumber", {
                  required: "Professional reference phone number is required",
                })}
              />
              {errors.professionalReferencePhoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalReferencePhoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="professionalReferenceEmailAddress">
                Email Address
              </Label>
              <Input
                id="professionalReferenceEmailAddress"
                type="email"
                {...register("professionalReferenceEmailAddress", {
                  required: "Professional reference email address is required",
                })}
              />
              {errors.professionalReferenceEmailAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalReferenceEmailAddress.message}
                </p>
              )}
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="numberOfOccupants">Number of Occupants</Label>
              <Input
                id="numberOfOccupants"
                type="number"
                {...register("numberOfOccupants", {
                  required: "Number of occupants is required",
                })}
              />
              {errors.numberOfOccupants && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.numberOfOccupants.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="occupantNamesAndAges">
                Names and Ages of All Occupants
              </Label>
              <Textarea
                id="occupantNamesAndAges"
                {...register("occupantNamesAndAges", {
                  required: "Occupant names and ages are required",
                })}
              />
              {errors.occupantNamesAndAges && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.occupantNamesAndAges.message}
                </p>
              )}
            </div>
            <div>
              <Label>Do you have any pets?</Label>
              <RadioGroup defaultValue="no">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="yes"
                    id="hasPetsYes"
                    {...register("hasPets")}
                  />
                  <Label htmlFor="hasPetsYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="no"
                    id="hasPetsNo"
                    {...register("hasPets")}
                  />
                  <Label htmlFor="hasPetsNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {hasPets === "yes" && (
              <div>
                <Label htmlFor="petDetails">Type and Number of Pets</Label>
                <Textarea
                  id="petDetails"
                  {...register("petDetails", {
                    required: "Pet details are required",
                  })}
                />
                {errors.petDetails && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.petDetails.message}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <div className="md:w-1/2  text-secondary p-8">
        <BackButton />
        <h1 className="text-4xl font-bold mb-6">Tenant Application</h1>
        <p className="text-xl text-secondary-light mb-8">
          Join our community of responsible tenants. Fill out the application to
          find your perfect home.
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 ${
                index === currentStep
                  ? "text-secondary-light"
                  : "text-secondary"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStep ? "bg-primary" : "bg-gray-700"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-6 h-6 text-gray-50" />
                ) : (
                  step.icon
                )}
              </div>
              <span className="text-lg">{step.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          <div className="mt-8 flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Submit Application
              </Button>
            ) : (
              <Button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
