import Teacher from "../models/Teacher.js"

const saveTeacher = async(TeacherModule)=>{
    const save = await Teacher.create(TeacherModule);
    return save
}

const getAllTeachers = async()=>{
    return await Teacher.findAll({
        order:[['id','ac']]
    });

}


const getTeacherById = async(id)=>{
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async(id)=>{
    return await Teacher.destroy({where:{id:id}});
}

const updateTeacherById = async(id,TeacherModel)=>{
    try {
        const result = await Teacher.update(TeacherModel,{where:{id:id}})
        if(result[0]===1){
            return {message:"Teacher atualizado com sucesso!"}
        }else{
            return {message:"Teacher não encontrado!", status:404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;