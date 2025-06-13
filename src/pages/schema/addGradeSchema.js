// gradeSchema.ts
import { z } from "zod";

export const gradeSchema = z.object({
    gradeName: z.string().min(1, "Please enter grade name"),
    description: z.string().optional(),
    createdDate: z
        .any()
        .refine((val) => val && typeof val === "object", {
            message: "Please select created date",
        }),
    isEnabled: z.boolean(),
});

