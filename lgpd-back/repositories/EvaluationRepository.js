import Evaluation from "../models/Evaluation.js"

const saveEvaluation = async(EvaluationModule)=>{
    const save = await Evaluation.create(EvaluationModule);
    return save
}

const getAllEvaluations = async()=>{
    return await Evaluation.findAll({
        order:[['id','ac']]
    });

}


const getEvaluationById = async(id)=>{
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async(id)=>{
    return await Evaluation.destroy({where:{id:id}});
}

const updateEvaluationById = async(id,EvaluationModel)=>{
    try {
        const result = await Evaluation.update(EvaluationModel,{where:{id:id}})
        if(result[0]===1){
            return {message:"Evaluation atualizado com sucesso!"}
        }else{
            return {message:"Evaluation não encontrado!", status:404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;