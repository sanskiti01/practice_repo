import {prisma} from '../db.js';
export async function listBugs({q,difficulty,sort='createdAt'}){const where={...(difficulty?{difficulty}:{}),...(q?{OR:[{title:{contains:q,mode:'insensitive'}},{description:{contains:q,mode:'insensitive'}},{topic:{contains:q,mode:'insensitive'}}]}:{})};const orderBy=sort==='title'?{title:'asc'}:sort==='difficulty'?{difficulty:'asc'}:{createdAt:'desc'};return prisma.bug.findMany({where,orderBy});}
export async function getBug(id){return prisma.bug.findUnique({where:{id:Number(id)}})}
