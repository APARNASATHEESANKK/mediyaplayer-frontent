import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'



 function Home() {
  const[addVideoResponse,setAddVideoRsponse]=useState("")
  const[deleteVideoResponsecat,setDeleteVideoResponsecat]=useState("")
  const [updatecatefromView,setUpdatcatfromView]=useState("")
  return (
<>
<div className='container my-5 d-flex justify-content-between'>
  {/*linked to 'Add page' using 'Add selector */}
<Add setAddVideoRsponse={setAddVideoRsponse} />
{/*linked to 'History page' */}
<Link to={'/history'} className='text-warning text-decoration-none fw-bold'>Watch History</Link>
</div>

<div className='container my-5 row p-5'>
  <div className='col-lg-6'>
    <h3 className='text-info'>All Videos</h3>
    <View addVideoResponse={addVideoResponse} deleteVideoResponsecat={deleteVideoResponsecat} setUpdatcatfromView={setUpdatcatfromView} />
  </div>
  <div className='col-lg-6 p-5'>
    <Category setDeleteVideoResponsecat={setDeleteVideoResponsecat} updatecatefromView={updatecatefromView}/>
  </div>
</div>

</>
  )
}

export default Home