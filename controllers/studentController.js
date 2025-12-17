const Student=require("../models/Student");

exports.createStudent=async(req,res)=>{
    try{
        const totalCount=await Student.countDocuments({});
        req.body['rollno']=1+totalCount;
        const student=await Student.create(req.body);
        res.json(student);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};  

exports.getAllStudents=async(req,res)=>{
    try{

        const student=await Student.find();
        res.json(student);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

exports.getStudent=async (req,res)=>{
    try{
        const student=await Student.findOne({rollno:req.params.id});
        res.json(student);
    }
    catch(err){
        res.ststus(500).json({error:err.message});
    }
};

exports.deleteStudent=async (req,res)=>{
    try{
        const student=await Student.findOneAndDelete({rollno:req.params.id});
        if(!student) return res.status(404).json({message:"student not found"});

        res.json({message:"student deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.updateStudent=async (req,res)=>{
    try{
        const student=await Student.findOneAndUpdate({rollno:req.params.id},req.body,{new:true});
        if(!student) return res.status(404).json({message:"student not found"});

        res.json(student);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}