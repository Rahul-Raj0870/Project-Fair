import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/imageupload.png'
const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn btn-primary'>+ New Projects</button>
    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input style={{display:'none'}} type="file" />
                <img className='img-fluid' height={'200px'} src={uploadImg} alt="" />
              </label>
              <div className="text-warning">*Upload Only the following file types (jpeg,jpg,png)here!!!</div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text"  className='form-control' placeholder='Project Title'/>
              </div>
              <div className="mb-2">
              <input type="text"  className='form-control' placeholder='Project Languages'/>
    
              </div>
              <div className="mb-2">
              <input type="text"  className='form-control' placeholder='Project Overview'/>
               
              </div>
              <div className="mb-2">
              <input type="text"  className='form-control' placeholder='Project github link'/>
              
              </div>
              <div className="mb-2">
              <input type="text"  className='form-control' placeholder='Project website link'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add