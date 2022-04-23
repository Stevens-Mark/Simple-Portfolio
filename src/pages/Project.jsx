import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import OffCanvas from '../components/OffCanvas'


const Project = ( { siteData } ) => {

  const projects = siteData
  const idUrl = useParams().id   // Get ID from URL param

  const [data, setData] = useState('')

  useEffect(() => {
    document.title = `Project-${idUrl}`
    window.scrollTo(0, 0)
  }, [idUrl])

  useEffect(() => {
    const projectToShow = projects.find((proj) => proj.id === idUrl)
    if (projectToShow) {
          setData(projectToShow)
      }
      else {
        console.log('error')
      }
  }, [idUrl, projects])


  return (
    <>
      <main id="top">
        <h1>{data.title}</h1>
        <img src={data.cover} alt={data.alt}/>
        <OffCanvas props={data} />
      </main>
    </>
  )
}

export default Project



