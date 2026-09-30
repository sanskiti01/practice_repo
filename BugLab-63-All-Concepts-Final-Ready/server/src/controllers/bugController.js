import {prisma} from '../db.js'; import {listBugs,getBug} from '../services/bugService.js';
export async function createBug(req,res){const bug=await prisma.bug.create({data:req.body});res.status(201).json({bug})}
export async function getBugs(req,res){res.json({bugs:await listBugs(req.query)})}
export async function getOne(req,res){const bug=await getBug(req.params.id);if(!bug)return res.status(404).json({message:'Bug not found'});res.json({bug})}
export async function createAttempt(req,res){const id=Number(req.params.id);const bug=await getBug(id);if(!bug)return res.status(404).json({message:'Bug not found'});const attempt=await prisma.bugAttempt.create({data:{userId:req.user?.sub?Number(req.user.sub):1,bugId:id,submittedSolution:req.body.submittedSolution,status:'FAILED',hintsUsed:req.body.hintsUsed||0,timeSpent:req.body.timeSpent||0}});res.status(201).json({attempt})}
export async function stats(req,res){const total=await prisma.bug.count();const solved=await prisma.bugAttempt.count({where:{status:'PASSED'}});res.json({total,solved,avgTime:42})}
