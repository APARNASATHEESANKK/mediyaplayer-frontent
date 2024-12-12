import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'



 function History() {
   const [history,setHistory]=useState([])
   console.log(history);

   useEffect(()=>{

    getAllHistory()

   },[])

  const getAllHistory=async()=>{
    try{

     const result= await getHistoryAPI()
     setHistory(result.data)
    }
    catch(err){
      console.log(err);
    }
   }

    const deleteHistory=async(videoId)=>{
      try{
        await deleteHistoryAPI(videoId)
        getAllHistory()
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div>
    <div className='container mt-4'>
    <div className='d-flex justify-content-between'>    
    <h3 className='text-warning mb-4'>Watch History</h3>   
      <Link to={'/home'} className='text-danger text-decoration-none'>Back to <i class="fa-solid fa-house" style={{color:'red'}}></i></Link>
      </div>
     {
              history?.length>0?
              <table className='table'>
                 <thead>
                   <tr>
                    <th>#</th>
                    <th>Caption</th>
                    <th>Link</th>
                    <th>Date</th>
                    <th>...</th>
                   </tr>
                 </thead>
                 <tbody>
                 {
                  history?.map(video=>(
                 
                  <tr key={video?.id}>
                  <td>{video?.id}</td>
                  <td>{video?.captions}</td>
                  <td ><a style={{color:'blue'}} href={video?.youtubeUrl}>{video.youtubeUrl}</a></td>
                  <td>{video.formatedDate}</td>
                  <td><button onClick={()=>deleteHistory(video?.id)} className="btn bg-black"><i class="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
                  </tr>
                
              ))
                 }
                 </tbody>
              </table>
      :
      <div className='text-danger'>
        <h3>Nothing to display</h3>
      </div>
     }
    </div>
  </div>
)
}

export default History