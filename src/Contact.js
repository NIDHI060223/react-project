import React from 'react';

function Contact() {
 
  return (
    <div>
      <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="" method="get" className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
              <button type="submit" className="input-group-text bg-success text-light">
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div id="mapid" style={{ width: "100%", height: "300px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
        width="100%"
        height="400px"
        frameBorder="0"
        style={{border: "0"}}
        allowFullScreen
        title="Google Maps"
      ></iframe>
      </div>

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post">
            <div className="row">
              <div className="form-group col-md-6 mb-3 pt-5">
                <label htmlFor="inputname">Name</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group col-md-6 mb-3 pt-5">
                <label htmlFor="inputemail">Email</label>
                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputsubject">Subject</label>
              <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Message</label>
              <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
