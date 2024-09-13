"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-2 text-gray-900 items-end font-medium">
      <button
        type="button"
        onClick={() => router.back()}
      className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back
      </button>
      
    </div>
  );
};

export default BackButton;
