
const Footer = () => {

    return ( 
      <footer className="border-top">
        <div className="container py-5">

          <div className="row gy-4 gy-md-0 align-items-center">
            
            <div className="col-12 col-md-4">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item ">
                  <a href='#top' className='text-decoration-none text-uppercase fw-bold text-dark' aria-label="Link to Top">
                    <span className="bg-primary bg-gradient p-1 rounded-3 text-light">John</span> Doe
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-md-center">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item">
                  <a href='Legal Notice link' className='text-decoration-none text-dark' aria-label="Link to Instagram" rel="noreferrer" target='_blank'>
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-md-end">
              <ul className="list-inline list-unstyled mb-0">
                <li className="list-inline-item">
                  <a href='my linkedin link' className='text-decoration-none text-dark' aria-label="Link to LinkedIn" rel="noreferrer" target='_blank'>
                  <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href='my Instagram link' className='text-decoration-none text-dark' aria-label="Link to Instagram" rel="noreferrer" target='_blank'>
                  <i className="fab fa-instagram-square fa-2x"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href='my Twitter link' className='text-decoration-none text-dark' aria-label="Link to Twitter" rel="noreferrer" target='_blank'>
                  <i className="fab fa-twitter-square fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </footer>
    )
}

export default Footer