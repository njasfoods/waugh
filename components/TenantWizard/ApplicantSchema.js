import { z } from "zod";

const applicantSchema = z.object({
  applicants: z.array(
    z.object({
      fullName: z.string().min(8, "Full name must be at least 8 characters long"),
      dob: z.string().min(1, "Date of Birth is required"),
      idNumber: z.string().min(8, "National ID/Passport Number must be at least 8 characters long"),
      trn: z.string().min(9, "TRN must be at least 9 characters long"),
      address: z.string().min(10, "Current Address must be at least 10 characters long"),
      phone: z.string().min(10, "Phone Number must be at least 10 characters long"),
      email: z.string().email("Invalid email address"),
      employment: z.object({
        employer: z.string().min(3, "Employer name must be at least 3 characters long"),
        position: z.string().min(3, "Position must be at least 3 characters long"),
        employerAddress: z.string().min(10, "Employer Address must be at least 10 characters long"),
        employerPhone: z.string().min(10, "Employer Phone Number must be at least 10 characters long"),
        monthlyIncome: z.number().positive("Monthly income must be a positive number"),
      }),
    })
  ),
  property: z.object({
    address: z.string().min(10, "Property address must be at least 10 characters long"),
    moveInDate: z.date().min(new Date(), "Move-in date cannot be in the past"),
    leaseTerm: z.string().min(3, "Lease term must be at least 3 characters long"),
  }),
  rentalHistory: z.array(
    z.object({
      landlordName: z.string().min(3, "Landlord's name must be at least 3 characters long"),
      landlordContact: z.string().min(10, "Landlord's contact must be at least 10 characters long"),
      rentalAddress: z.string().min(10, "Rental address must be at least 10 characters long"),
      tenancyDuration: z.string().min(3, "Tenancy duration must be at least 3 characters long"),
      reasonForLeaving: z.string().min(5, "Reason for leaving must be at least 5 characters long"),
    })
  ).optional(),
  references: z.object({
    personal: z.array(
      z.object({
        name: z.string().min(3, "Personal reference name must be at least 3 characters long"),
        relationship: z.string().min(3, "Relationship must be at least 3 characters long"),
        phone: z.string().min(10, "Phone number must be at least 10 characters long"),
        email: z.string().email("Invalid email address"),
      })
    ),
    professional: z.array(
      z.object({
        name: z.string().min(3, "Professional reference name must be at least 3 characters long"),
        relationship: z.string().min(3, "Relationship must be at least 3 characters long"),
        phone: z.string().min(10, "Phone number must be at least 10 characters long"),
        email: z.string().email("Invalid email address"),
      })
    ),
  }),
  additionalInfo: z.object({
    occupants: z.array(
      z.object({
        name: z.string().min(3, "Occupant name must be at least 3 characters long"),
        age: z.number().int().positive("Occupant age must be a positive integer"),
      })
    ).optional(),
    pets: z.array(
      z.object({
        type: z.string().min(3, "Pet type must be at least 3 characters long"),
        count: z.number().int().positive("Pet count must be at least 1"),
      })
    ).optional(),
  }).optional(),
  documents: z.object({
    idProof: z.string().min(1, "ID proof is required"),
    incomeProof: z.string().min(1, "Income proof is required"),
    supportingDocuments: z.array(z.string()).optional(),
  }),
});

export default applicantSchema;
