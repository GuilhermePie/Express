import express from "express"
let router = express.Router();

import userRouter from "./UserRouter"
import teacherRouter from "./TeacherRouter"
import courseRouter from "./CourseRouter"
import evaluationRouter from "./EvaluationRouter"

router.get("/",(req,res)=>{
    console.log("subiu")
    res.status(200).json({message:"Sucesso"})
})

router.use("/", userRouter)
router.use("/", teacherRouter)
router.use("/", courseRouter)
router.use("/", evaluationRouter)

export default router