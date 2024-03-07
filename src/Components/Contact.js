import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container">
        <h5 className='mt-4'> Contact Form: </h5>
       <p className='para'>A contact form serves as a vital bridge between a website and its visitors, enabling seamless communication and interaction. Designed with user convenience in mind, it offers a straightforward method for individuals to reach out, whether for inquiries, feedback, or collaboration opportunities. Through a well-crafted contact form, users can effortlessly convey their messages, providing essential details while maintaining privacy and security. From basic input fields for name and email to customizable message boxes, contact forms offer versatility in capturing diverse information efficiently. As an integral part of any website's interface, it offers a straightforward method for individuals to reach out, whether for inquiries, feedback, or collaboration opportunities. Through a well-crafted contact form, users can effortlessly convey their messages, providing essential details while maintaining privacy and security. From basic input fields for name and email to customizable message boxes a thoughtfully designed contact form not only facilitates communication but also enhances the overall user experience, fostering meaningful connections and fostering engagement.</p>
    <form className="row g-3 mt-2">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required />
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
    </>
  );
}
