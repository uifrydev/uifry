import axiosInstance from '../utils/axios'
export const getUser=async()=>{
    try{
        console.log('fetching')
        const res=await axiosInstance.get('/profile')
        return res
    }catch(err){
        console.log(err)
        
    }
}