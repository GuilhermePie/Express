import express from "express"
let router = express.Router();

import teacherService from "../services/TeacherService.js"

router.post("/addTeacher", async (req,res)=>{
    const teacherModel = {
            id:req.body.id,
            name:req.body.name
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher)
})

router.get("/getAllTeachers", async (req,res)=>{
    const allteachers = await teacherService.getAllTeachers()
    return res.status(200).json(allteachers)
})

router.get("/teacher/:id", async (req,res)=>{
    const teacherById = await teacherService.getTeacherById(req.params.id)
    return res.status(200).json(teacherById)
})

router.delete("/deleteTeacher/:id", async (req,res)=>{
    const deleteTeacher = await teacherService.deleteTeacherById(req.params.id)
    return res.status(200).json(deleteTeacher)
})

router.put("/updateTeacherById", async (req,res)=>{
    const teacherModel = {
            id:req.body.id,
            name:req.body.name
    }

    const teacher = await teacherService.updateTeacherById(req.params.id,teacherModel);
    return res.status(200).json(teacher)
})


export default router