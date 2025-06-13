import { z } from "zod";

const loginSchema = z.object({
    username: z.string({ required_error: 'Username is required.' }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default loginSchema;
