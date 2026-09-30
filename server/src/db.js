import mongoose from 'mongoose'; import {PrismaClient} from '@prisma/client';
export const prisma=new PrismaClient(); export async function connectMongo(){if(process.env.MONGODB_URI) await mongoose.connect(process.env.MONGODB_URI);}
