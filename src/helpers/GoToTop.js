import { useEffect, useState } from 'react'
import upArrow from '../assets/icons/arrow_up_white.svg'

/**
* A go to top button appears after scrolling down a distance
 * @function GoToTop
 * @returns {JSX} back to top button
 */
const GoToTop = () => {

  const [showButton, setShowButton] = useState(false) 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
    return () => setShowButton(false)
  }, [])
    
  const scrollToTop = () => {   
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    })
  }
  
  return (
    <>       
      {showButton && (
        <span className='position-fixed top-90 start-50 translate-middle rounded-circle bg-danger shadow'>
        <img className='icons m-2 cursor-pointer' onClick={scrollToTop} src={upArrow} alt="Back to top arrow" title="Back To Top"/>
        </span>
      )}
  </>
  )
}

export default GoToTop