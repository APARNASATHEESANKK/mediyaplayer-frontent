import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';




function Add({setAddVideoRsponse}) {

  const [videoDetails,setVideoDetails]=useState({captions:"",imageUrl:"",youtubeUrl:""})

  const [isInvalidUrl,setIsInvalidUrl]=useState(false)
  console.log(videoDetails)
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedUrl=(url)=>{

    if(url.includes('v=')){
     
      const videoId=url.split('v=') [1].slice(0,11)
      console.log(videoId);



      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
      setIsInvalidUrl(false)

    }
    else{
      {
      setIsInvalidUrl(true)
      setVideoDetails({...videoDetails,youtubeUrl:""})
      }
    }
  }

  const uploadData=async()=>{

    const {captions,imageUrl,youtubeUrl}=videoDetails

    if(captions && imageUrl && youtubeUrl){
      
     try{
      const result= await addVideoAPI(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        setAddVideoRsponse(result.data)
        handleClose()

        toast.success(`${result.data.captions} added to your collection`)
      }
     }
     catch(err){
       console.log(err);
     }
    }
    else{ 
      toast.warning("please enter a field completely")
    }
  }
  return (
   <>

   <div>
   <h6 className='text-warning fw-bold'>Upload New Video<button className='btn btn-warning ms-3 rounded-circle fw-bold fs-5' onClick={handleShow}>+</button></h6>
   </div>
   <Modal
        show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details</p>
        <div className='border border-info p-3'>

          {/* Caption*/}

        <FloatingLabel controlId="caption"label="Caption"className="mb-3">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,captions:e.target.value})} type="text" placeholder="Caption" />
      </FloatingLabel>

     {/*  image url */}

     <FloatingLabel controlId="image"label="Image url"className="mb-3">
        <Form.Control  onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Image Url" />
      </FloatingLabel>

      {/* youtube url*/}

      <FloatingLabel controlId="url"label="Youtube url"className="mb-3">
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Youtube Url" />
      </FloatingLabel>
      {isInvalidUrl &&
      <div className='text-danger mt-3'>
        Invalid url
        </div>
        }

        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-info" onClick={uploadData}>Upload</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add

