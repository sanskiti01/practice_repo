import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,index:true},description:String,tags:[String],difficulty:{type:String,index:true},createdAt:{type:Date,default:Date.now}},{timestamps:true}); schema.index({title:'text',description:'text'}); export default mongoose.model('MongoBug',schema);
