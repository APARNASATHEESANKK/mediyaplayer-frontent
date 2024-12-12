import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


// api call for add video details

export const addVideoAPI=async(video)=>{

 return await  commonAPI("POST",`${server_url}/allVideos`,video)

    

}
//api call for get videos
export const getVideoAPI=async()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"")
}

// api call for delete videocard

export const deleteVideoAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})
}

// api call for add watch history

export const saveWatchHistory=async(videoDetails)=>{
    return await commonAPI("POST",`${server_url}/watchHistory`,videoDetails)
}

// api call for add watch history

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/watchHistory`,"")
}
// api call for delete videocard

export const deleteHistoryAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/watchHistory/${videoId}`,{})
}

// api call for add category

export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${server_url}/category`,categoryDetails)
}

// api call for all category

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

// api call for delete category

export const deleteCategoryAPI=async(categoryoId)=>{
    return await commonAPI("DELETE",`${server_url}/category/${categoryoId}`,{})
}


//api call for getting single video

export const getSingleVideoAPI=async(videoId)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${videoId}`,"")
}

//api call for update category

export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${categoryId}`,categoryDetails)
}

// api call to get single data

export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI("GET",`${server_url}/category/${categoryId}`)
}