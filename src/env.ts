import { z } from 'zod'

const encSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = encSchema.parse(import.meta.env)
