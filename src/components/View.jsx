import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'



function View({addVideoResponse,deleteVideoResponsecat,setUpdatcatfromView}) {

  const[allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState('')
  console.log(allVideos)

  useEffect(()=>{
    getAllVideos()
  },[addVideoResponse,deleteVideoResponse,deleteVideoResponsecat])

  const getAllVideos=async()=>{
    try{
    const result=await getVideoAPI()
    if(result.status>=200 && result.status< 300){
      setAllVideos(result.data)
    }
  }
  catch(err){
    console.log(err);

  }
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
  const dropCategoryVideo=async(e)=>{
    const{videoDetails,categoryId}= JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(`video Details :${videoDetails} and category id:${categoryId}`);
    
  
    try{
      const{data}=await getSingleCategoryAPI(categoryId)
      console.log(data);
      const UpdatedCategoryAllvideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(UpdatedCategoryAllvideos);

      const {id,categoryName}=data

      const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:UpdatedCategoryAllvideos})
      console.log(response);
      setUpdatcatfromView
      const result=await addVideoAPI(videoDetails)
      console.log(result);
      setUpdatcatfromView(response)
      getAllVideos()
  }
  catch(err){

  }
}
  return (
    <div>
        <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)}  onDrop={(e)=>dropCategoryVideo(e)}>
          {
          allVideos?.length>0?

          allVideos?.map(video=>(
       <Col key={video?.id}lg={4} sm={6} xs={12}>
       <VideoCard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
       </Col>
       ))
        :
       <div className='text-danger'>
         Nothing to display
       </div>
          }
         
        </Row>
    </div>
  )
}

export default View