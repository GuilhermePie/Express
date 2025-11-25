import teacherRepository from "../repositories/TeacherRepository.js"

const saveTeacher = (teacherModel)=>{
    return teacherRepository.saveTeacher(teacherModel)
}

const getTeacherById = (id)=>{
    return teacherRepository.getTeachersById(id)
}

const getAllTeachers = ()=>{
    return teacherRepository.getAllTeacherss()
}

const deleteTeacherById = (id)=>{
    return teacherRepository.deleteTeachersById(id)
}

const updateTeacherById = (id,teacherModel)=>{
    return teacherRepository.updateTeachersById(id,teacherModel)
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default service