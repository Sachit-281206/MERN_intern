const express=require("express");
const {createStudent,getAllStudents, getStudent,deleteStudent, updateStudent} =require("../controllers/studentController");

const router=express.Router();
router.post("/",createStudent);
router.get("/",getAllStudents);
router.get("/:id",getStudent);
router.delete("/:id",deleteStudent);
router.put("/:id",updateStudent); 

module.exports=router;
