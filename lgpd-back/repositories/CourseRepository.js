import Course from "../models/Course.js"

const saveCourse = async(CourseModule)=>{
    const save = await Course.create(CourseModule);
    return save
}

const getAllCourses = async()=>{
    return await Course.findAll({
        order:[['id','ac']]
    });

}


const getCourseById = async(id)=>{
    return await Course.findByPk(id);
}

const deleteCourseById = async(id)=>{
    return await Course.destroy({where:{id:id}});
}

const updateCourseById = async(id,CourseModel)=>{
    try {
        const result = await Course.update(CourseModel,{where:{id:id}})
        if(result[0]===1){
            return {message:"Course atualizado com sucesso!"}
        }else{
            return {message:"Course não encontrado!", status:404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;