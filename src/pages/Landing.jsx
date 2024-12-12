import React from 'react'
import landingImg from '../assets/Bg2B.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/img1.png'
import category from '../assets/img2.png'
import history from '../assets/img3.png'
import { Link } from 'react-router-dom';


 function Landing() {
  return (
    <>
    <div className='container mt-5'>
     
     <div className='col-lg-5'>
      <h3 style={{fontFamily:"Sevillana"}}>Welcome to <span className='text-warning'>Media Player</span> </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil maiores dolore impedit, reiciendis corporis, accusamus tempora aspernatur mollitia consequuntur fugiat, optio rem neque voluptates dolor repudiandae incidunt alias numquam.</p>
      <Link to={'/home'}><button className='btn btn-warning'>Get Start</button></Link>
     </div>
     <div className='col-lg'>
     
     </div>
     <div className='col-lg-6'>
      <img style={{marginLeft:'800px',marginTop:"-200px"}} src={landingImg} alt="" />
        </div>
    </div>
    {/*features */}
    <div className='container mt-5'>
      <h3 style={{fontFamily:"Sevillana"}} className='text-warning text-center'>Features</h3>
      <div className='row'>
        <div className='col-lg-4'>
        <Card style={{ width: '22rem',height:'400px' }} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}} src={settings} />
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
    <div className='border border-3 border-white rounded p-3 container mt-5'>
      <div className='row mt-3'>
         <div className='col-lg text-white'>
          <h3 className='text-warning'style={{fontFamily:"Sevillana"}}>Simple Fast and powerfull</h3>
          <div className='mb-5'>
        <p><span className='fs-5 '>Play Everthing:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        <div>
        <p><span className='fs-5 '>Categorize Video:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        <div>
        <p><span className='fs-5 '>Manage History</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit totam officia expedita, sit minima nisi blanditiis repellendus facilis eveniet optio sapiente harum minus ut ratione vel. Possimus, quasi velit.</p>
        </div>
        </div>
        <div className='col-lg'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=ep__cNzuf3B6IQni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing