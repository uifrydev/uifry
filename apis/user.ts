import axiosInstance from '../utils/axios'
export const getUser=async()=>{
    try{
        const res=await axiosInstance.get('/profile')
        return res
    }catch(err){
        console.log(err)
        
    }
}