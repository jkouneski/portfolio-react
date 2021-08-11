import React from "react";



const Contact = () => {
    return (
    <div className="jumbotron">
      <main className="container mt-5">
        <div className="row">
          <section className="col-md-8">
            <div>
              <h2 className="display-4">Contact Me</h2>
            </div>
            <div className="content">
              <form>
                <div className="form-group">
                  <label for="nameInput" >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-50"
                    id="nameInput"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="emailInput" >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-50"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                  </small>
                </div>
                <div className="form-group">
                  <label for="messageInput">
                    Message
                  </label>
                  <textarea
                    className="form-control w-75"
                    id="messageInput"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <br />
    </div>
    
        
    );
};

export default Contact;