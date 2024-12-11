
import React,{useContext, useEffect, useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import uploadImg from '../assets/upload.png'
import SERVERURL from '../services/serverUrl'
import { updateProjectAPI } from '../services/allAPI'


const Edit = ({project}) => {
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponse)
  const [preview,setPreview] = useState("")
  const [uploadFileStatus,setUploadFileStatus]=useState(false)
  const [projectDetails,setProjectDetails] = useState({
    title:project?.title, languages:project?.languages, overview:project?.overview, github:project?.github,website:project?.website,projectImage:""
  })
  console.log(projectDetails);
    const [show, setShow] = useState(false);
    useEffect(()=>{
      if(projectDetails.projectImage.type=="image/png" || projectDetails.projectImage.type=="image/jpg" || projectDetails.projectImage.type=="image/jpeg"){
        setUploadFileStatus(true)
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }else{
        setUploadFileStatus(false)
        setProjectDetails({...projectDetails,projectImage:""})
      }
    },[projectDetails.projectImage])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateProject = async ()=>{
    const {title,languages,overview,github,website,projectImage}= projectDetails
    if(title && languages && overview && github && website){
      //api call
      const reqBody = new  FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      preview? reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project?.projectImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader ={
          "Content-Type":"multipart/fprm-data",
          "Authorization":`Bearer ${token}`
        }
        // Make Api call
        try{

          const result = await updateProjectAPI(id,reqBody,reqHeader)
          if(result.status==200){
            alert("Project updated successfully!!!")
            handleClose()
            setEditProjectResponse(result)
          }
        }catch(err){
          console.log(err);
          
        }
      }
    }else{
      alert("Please Fill the form...")
    }

  }
  return (
  
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit"></i></button>
      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} style={{display:'none'}} type="file" />
              <img src={preview?preview:`${SERVERURL}/uploads/${project?.projectImage}`} alt="" className='img-fluid'/>
            </label>
            {!uploadFileStatus&&<div className="text-warning fw-bolder">
              "Upload only the following file types (jpeg, jpg, png) here!!"
            </div>}
          </div> 

          <div className="col-lg-8">
              <div className="mb-2">
                <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" className='form-control' placeholder='Project Title'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" className='form-control' placeholder='Project Langueges'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} type="text" className='form-control' placeholder='Project Overview'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" className='form-control' placeholder='Project github link'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" className='form-control' placeholder='Project website link'/>
              </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">UPDATE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit