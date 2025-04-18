import React from 'react'
import landingImg from '../assets/tenor.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/img1.png'
import category from '../assets/img2.png'
import history from '../assets/img3.png'
import { Link } from 'react-router-dom';


 function Landing() {
  return (
    <>
   <div className='container mt-5 w-100'>
     <div className='row align-items-center my-5'>
     <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
      <h3 style={{fontFamily:"Sevillana,cursive"}}>Welcome to <span className='text-warning'>Media Player</span> </h3>
      <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil maiores dolore impedit, reiciendis corporis, accusamus tempora aspernatur mollitia consequuntur fugiat, optio rem neque voluptates dolor repudiandae incidunt alias numquam.</p>
      <Link to={'/home'}><button className='btn btn-warning'>Get Start</button></Link>
     </div>
     
     <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
      <div className='p-4 my-4'>
      <img className='img-fluid' src={landingImg} style={{maxHeight:'500px',Width:'800px'}}  alt="" />
        </div>
        </div>
      </div>
    </div>
    {/*features */}
    <div className='container mt-5'>
      <h3 style={{fontFamily:"Sevillana"}} className='text-warning text-center mb-5'>Features</h3>
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-6 col-12 mb-5 p-2 d-flex justify-content-center'>
        <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
      <Card.Img className='img-fluid' variant="top" style={{height:'250px'}} src={settings} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove the videos
        </Card.Text>
    
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-4'>
        <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}} src={ category} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
         Users can categorize the videos by drag and drop feature.
        </Card.Text>
    
      </Card.Body>
    </Card>
        </div>

        <div className='col-lg-4'>
        <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}} src={ history} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
         Users can manage the watch history of all Video
        </Card.Text>
    
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    
    {/*  footer section */}
    <div className='border border-3 border-warning rounded p-3 container mt-5'>
      <div className='row mt-3'>
         <div className='col-lg text-yellow'>
          <h3 className='text-warning'style={{fontFamily:"Sevillana"}}>Simple Fast and powerfull</h3><br/>
          <div className='mb-5'>
        <p><span className='fs-5'>Play Everthing:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        <div>
        <p><span className='fs-5'>Categorize Video:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        <div>
        <p><span className='fs-5'>Manage History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        </div>
        <div className='col-lg'>
        <iframe width="560" height="400" src="https://www.youtube.com/embed/HkvVaj_28C8?si=OT_nMqoPDA0Jp-HG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing
