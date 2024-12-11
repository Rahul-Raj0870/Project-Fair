import React, {createContext,useState } from 'react'
export const addProjectContext = createContext()
export const editProjectContext = createContext()
const ContextShare = ({Children}) => {
  const [addProjectResponse,setAddProjectResponse] = useState("")
  const [editProjectResponse,setEditProjectResponse] = useState("")

  return (
    <addProjectContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
      <editProjectContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
        {Children}
        </editProjectContext.Provider>
    </addProjectContext.Provider>
  )
}

export default ContextShare