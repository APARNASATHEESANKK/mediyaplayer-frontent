import React from 'react'
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { deleteVideoAPI, saveWatchHistory } from '../Services/allAPI';
import  Button  from 'react-bootstrap/Button';


function VideoCard({videoDetails,setDeleteVideoResponse,insideCategory}) {
  console.log(videoDetails)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{ 
    
    const {captions,youtubeUrl}=videoDetails

     const localTime=new Date()
     const formatedDate=localTime.toLocaleString()
     console.log(formatedDate);

     const historyData={captions,youtubeUrl,formatedDate}

     try{
        await saveWatchHistory(historyData)
     }
     catch(err){
      console.log(err)
     }
  setShow(true)
};

   

     

  const deleteVideo=async(videoId)=>{
     try{
      const result=await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
     }
     catch(err){
      console.log(err)
     }

  }
  const dragVideostarted=(e,videoId)=>{
    console.log(`onDrag started with video id:${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
  }
  return (
    <div>
     <Card className='mb-5' draggable={true} onDragStart={(e)=>dragVideostarted(e,videoDetails?.id)}>
      <Card.Img onClick={handleShow} style={{height:'170px'}} variant="top" src={videoDetails?.imageUrl} />
      <Card.Body>
        <Card.Title className='d-flex alighn-items-center justify-content-center'>
          <p className='ms-2'>{videoDetails?.captions}</p>
          {!insideCategory &&
          <button onClick={()=>deleteVideo(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash" style={{color:'red',fontSize:'16px'}}></i></button>
          }
       </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.captions}</Modal.Title>
        </Modal.Header>
        <Modal.Body>    

        <iframe width="770" height="377" src={`${videoDetails?.youtubeUrl}?autoplay=1`} title="Aavesham - Jukebox | Jithu Madhavan | Fahadh Faasil |Sushin Shyam | Nazriya Nazim | Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        </Modal>
    </div>
  )
}

export default VideoCard