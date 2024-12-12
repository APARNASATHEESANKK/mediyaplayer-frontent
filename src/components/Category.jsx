import React, { useEffect, useState } from 'react'
import { FloatingLabel,Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category({setDeleteVideoResponsecat,updatecatefromView}) {

  const  [categoryName,setCategoryName]=useState("")
  const [allCategory,setAllCategory]=useState([])
  const [show,setShow] =useState(false);
  console.log(categoryName);
  console.log(allCategory);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
  getAllCategory()
  },[updatecatefromView])

  const addCategory=async () =>{
    try{
      const result= await addCategoryAPI({categoryName,allVideos:[]})
      console.log(addCategory);
      getAllCategory()
      handleClose()
    }
    catch(err){

      console.log(err);

    }
  }

  const getAllCategory=async()=>{
    try{
      const result=await getCategoryAPI()
        setAllCategory(result.data)
      
    }
    catch(err){
      console.log(err);
    }
  }
 const deleteCategory=async(categoryId)=>{
  try{
    await deleteCategoryAPI(categoryId)
    getAllCategory()
  }
  catch(err){
    console.log(err);
  }
 }
 const dropVideo= async(e,categoryId)=>{

  const videoId=e.dataTransfer.getData("videoId")
  console.log(`video draged with the id ${videoId} and dropped inthe category with id ${categoryId}`);

  try{
  const {data} =await getSingleVideoAPI(videoId)
  console.log(data)
  const selectedCategory=allCategory?.find(category=>category.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory)
  await updateCategoryAPI(categoryId,selectedCategory)
  getAllCategory()
  const response=await deleteVideoAPI(videoId)
  setDeleteVideoResponsecat(response)
  }
  catch(err){
    console.log(err);

  }
 }

 const dragOverCategory=(e)=>{
   e.preventDefault()
 }
 const videoDragstarted=(e,videoDetails,categoryId)=>{
  const shareData={videoDetails,categoryId}
  e.dataTransfer.setData("shareData",JSON.stringify(shareData))
 }
  return (
    <>
    <div className='d-flex justify-content-around'>
      <h3 className='text-info'>All Category</h3>

      <button onClick={handleShow} className='btn btn-warning fw-bold rounded-circle'>+</button>
      </div>
      {/* used to display */}
     { allCategory?.length>0 ?
     allCategory?.map(category=> (
       <div droppable={true} onDrop={(e)=>dropVideo(e,category?.id)} onDragOver={(e)=>dragOverCategory(e)} className='d-flex justify-content-around border border-3 rounded border-white p-2 mt-5'>
        <div>
       <h5 className='text-warning'>{category.categoryName}</h5>
       <button onClick={()=>deleteCategory(category.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
     </div>
     {/* here we display the video which we dragged*/}
     <div className='row mt-2 mb-2'>
     {
      category.allVideos?.length>0&&
      category.allVideos?.map(video=>(
      <div draggable={true}  onDragStart={(e)=>videoDragstarted(e,video,category.id)} key={video?.id} className='col-lg-6'>
        <VideoCard videoDetails={video} insideCategory={true}/>
        </div>
      ))
     }
     </div>
     </div>
       ))
     :
     <div className='text-danger fw-bold mt-3'>No category added yet</div>
     }
     

      <Modal
      show={show} 
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>category Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-3 border-info p-3 rounded'>
            { /*category name */}

            <FloatingLabel controlId="category" label="Category" className="mb-3">
               <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name"/>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
     
      </>
  )
}

export default Category