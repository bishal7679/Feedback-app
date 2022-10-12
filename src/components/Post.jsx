import {useParams, Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
  //const params = useParams()
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
      navigate('/about')
  }

  if (status === 404) {
      return <Navigate to='/Notfound' />
  }
  return (
   
      // {/* <h1>Params {params.id}</h1>
      // <p>Name {params.name}</p> */}
      
      <div>

        <h1>Post</h1>
        <button onClick={onClick}>click me</button>
        <Routes>
          <Route path='/show' element={<h1>Hello world</h1>} />
        </Routes>
      </div>
   
  )
}

export default Post
