import {Router} from 'express'; import MongoBug from '../models/MongoBug.js'; import {prisma} from '../db.js';
const r=Router();
// Mongo CRUD + aggregation + indexing demonstration
r.post('/mongo/bugs',async(req,res)=>res.status(201).json({bug:await MongoBug.create(req.body)}));
r.get('/mongo/bugs',async(req,res)=>res.json({bugs:await MongoBug.find(req.query).sort({createdAt:-1})}));
r.get('/mongo/aggregate',async(req,res)=>res.json({rows:await MongoBug.aggregate([{$group:{_id:'$difficulty',count:{$sum:1}}},{$sort:{count:-1}}])}));
// Relational transaction demonstration: both writes succeed or roll back.
r.post('/sql/transaction',async(req,res)=>{const result=await prisma.$transaction(async tx=>{const bug=await tx.bug.create({data:{title:req.body.title||'Transaction demo',description:'Created atomically',difficulty:'EASY',language:'JavaScript',topic:'Transactions'}});const user=await tx.user.findFirst();if(!user)throw new Error('Seed a user first');const attempt=await tx.bugAttempt.create({data:{userId:user.id,bugId:bug.id,submittedSolution:'transaction demo',status:'FAILED'}});return {bug,attempt}});res.status(201).json(result)});
export default r;
