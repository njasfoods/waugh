import React from "react";
import { Controller } from "react-hook-form";

const ApplicantInformation = ({ control, fields }) => {
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <h3 className="text-lg font-semibold">Applicant {index + 1}</h3>

          <Controller
            name={`applicants[${index}].fullName`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Full Name"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].dob`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="date"
                  placeholder="Date of Birth"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].idNumber`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="National ID/Passport Number"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].trn`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="TRN"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].address`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Current Address"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].phone`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Phone Number"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />

          <Controller
            name={`applicants[${index}].email`}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Email Address"
                  className={`w-full p-2 border rounded-lg mb-4 ${
                    fieldState.invalid ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        </div>
      ))}
    </>
  );
};

export default ApplicantInformation;
