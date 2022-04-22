


const Test = () => {


return (
    <>
  <a href="#offcanvasExample" className="btn btn-primary" data-bs-toggle="offcanvas" role="button"
      aria-controls="offcanvasExample"> Link with href</a>


  <div className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <div>
        Some text as placeholder.
      </div>

    </div>
  </div>
  </>

  )


}



export default Test