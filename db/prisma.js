import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   console.log('process.env.NODE_ENV ', process.env.NODE_ENV)
// }
