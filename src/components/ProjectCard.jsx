import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className='btn shadow '>
      <Card.Img  height={'200px'} variant="top" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='img-fluid' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" alt="" />

            </div>
            <div className='col-lg-6'>
              <h3>Title</h3>
              <h6>Language Used: <span className='text-danger'> language</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview : </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id fuga voluptatum facilis veniam, mollitia ipsum officia maiores recusandae, doloribus omnis! Repellat nam rerum accusantium aperiam officiis iste magni doloremque!
              
              </p>
            </div>

          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard