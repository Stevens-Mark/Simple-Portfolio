

const OffCanvas = ( { props } ) => {

  const {id, description } = props

  return (
    <>
      <a href={`#project${id}Info`} className="btn btn-primary" data-bs-toggle="offcanvas" role="button"
        aria-controls={`project${id}Info`}>Link with href</a>

      <div className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={`project${id}Info`} aria-labelledby={`project${id}Label`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id={`project${id}Label`}>Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          <div className="text-dark">
              {description}
          </div>

        </div>
      </div>
    </>
  )
}

export default OffCanvas