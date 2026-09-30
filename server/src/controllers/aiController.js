import {getAiHint,mockHint} from '../services/aiService.js';
export async function hint(req,res){try{const result=await getAiHint(req.body.bugDescription);res.json(result)}catch(e){res.status(e.status||500).json({message:e.message})}}
export async function mock(req,res){res.json(await mockHint(Number(req.params.id)))}
export async function stream(req,res){res.setHeader('Content-Type','text/event-stream');res.setHeader('Cache-Control','no-cache');res.setHeader('Connection','keep-alive');const result=await getAiHint(req.body.bugDescription);for(const word of JSON.stringify(result).split(' ')){res.write(`data: ${word}\\n\\n`);await new Promise(r=>setTimeout(r,15))}res.write('event: done\\ndata: true\\n\\n');res.end()}
