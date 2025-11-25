import express from "express"
let router = express.Router();

import courseService from "../services/CourseService.js"

router.post("/addCourse", async (req,res)=>{
    const courseModel = {
        id:req.body.id,
        name:req.body.name
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course)
})

router.get("/getAllCourses", async (req,res)=>{
    const allcourses = await courseService.getAllCourses()
    return res.status(200).json(allcourses)
})

router.get("/course/:id", async (req,res)=>{
    const courseById = await courseService.getCourseById(req.params.id)
    return res.status(200).json(courseById)
})

router.delete("/deleteCourse/:id", async (req,res)=>{
    const deleteCourse = await courseService.deleteCourseById(req.params.id)
    return res.status(200).json(deleteCourse)
})

router.put("/updateCourseById", async (req,res)=>{
    const courseModel = {
        id:req.body.id,
        name:req.body.name
    }

    const course = await courseService.updateCourseById(req.params.id,courseModel);
    return res.status(200).json(course)
})


export default router