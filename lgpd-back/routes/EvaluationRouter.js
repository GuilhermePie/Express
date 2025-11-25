import express from "express"
let router = express.Router();

import evaluationService from "../services/EvaluationService.js"

router.post("/addEvaluation", async (req,res)=>{
    const evaluationModel = {
        id:req.body.id,
        concept:req.body.concept
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation)
})

router.get("/getAllEvaluations", async (req,res)=>{
    const allevaluations = await evaluationService.getAllEvaluations()
    return res.status(200).json(allevaluations)
})

router.get("/evaluation/:id", async (req,res)=>{
    const evaluationById = await evaluationService.getEvaluationById(req.params.id)
    return res.status(200).json(evaluationById)
})

router.delete("/deleteEvaluation/:id", async (req,res)=>{
    const deleteEvaluation = await evaluationService.deleteEvaluationById(req.params.id)
    return res.status(200).json(deleteEvaluation)
})

router.put("/updateEvaluationById", async (req,res)=>{
    const evaluationModel = {
        id:req.body.id,
        concept:req.body.concept
    }

    const evaluation = await evaluationService.updateEvaluationById(req.params.id,evaluationModel);
    return res.status(200).json(evaluation)
})


export default router