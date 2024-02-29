import { z } from 'zod'

const encSchema = z.object({
  VITE_API_URL: z.string().url(),
})

export const env = encSchema.parse(import.meta.env)
