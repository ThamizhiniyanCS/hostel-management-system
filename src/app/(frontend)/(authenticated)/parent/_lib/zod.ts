import { z } from 'zod'

export const createLeaveRequestFormSchema = z
  .object({
    number_of_days: z.coerce.number().min(1),
    date: z.date().optional(),
    from_date: z.date().optional(),
    to_date: z.date().optional(),
    subject: z.string().min(10).max(200),
    message: z.string(),
  })
  .refine(
    (data) => {
      if (data.number_of_days === 1) {
        return data.date != null
      } else {
        return data.from_date != null && data.to_date != null
      }
    },
    {
      message: 'Please provide the correct date(s) based on number of days',
      path: ['date'], // You can also use [] if you want it to appear generally
    },
  )
