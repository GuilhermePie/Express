import User from "../models/User.js"

const saveUser = async(UserModule)=>{
    const save = await User.create(UserModule);
    return save
}

const getAllUsers = async()=>{
    return await User.findAll({
        order:[['id','ac']]
    });

}


const getUserById = async(id)=>{
    return await User.findByPk(id);
}

const deleteUserById = async(id)=>{
    return await User.destroy({where:{id:id}});
}

const updateUserById = async(id,UserModel)=>{
    try {
        const result = await User.update(UserModel,{where:{id:id}})
        if(result[0]===1){
            return {message:"User atualizado com sucesso!"}
        }else{
            return {message:"User não encontrado!", status:404}
        }
    } catch (error) {
        console.error()
    }
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;