// components/steps/PropertyInformation.js
import React from "react";
import { Controller } from "react-hook-form";

const PropertyInformation = ({ control }) => {
  return (
    <>
    <Controller
      name="property.address"
      control={control}
      render={({ field }) => (
        <input
          {...field}
          placeholder="Property Address"
          className="w-full p-2 border rounded-lg mb-4"
        />
      )}
    />
    <Controller
      name="property.moveInDate"
      control={control}
      render={({ field }) => (
        <input
          {...field}
          placeholder="Desired Move-In Date"
          className="w-full p-2 border rounded-lg mb-4"
        />
      )}
    />
    <Controller
      name="property.leaseTerm"
      control={control}
      render={({ field }) => (
        <input
          {...field}
          placeholder="Lease Term (months)"
          className="w-full p-2 border rounded-lg mb-4"
        />
      )}
    />
  </>
  );
};

export default PropertyInformation;
