import React from "react";

export default function AddSession() {
  return (
    <div className="container">
      <div className="row">
        <h2>New session</h2>
        <form>
        <div className="col-25">
          <label for="Diagnosis">Medical Diagnosis</label>
        </div>
        <div className="col-75">
          <input type="text" id="Diagnosis" />
        </div>
      <div className="row">
        <div className="col-25">
          <label for="Date">Date & Time</label>
        </div>
        <div className="col-75">
          <input type="text" id="Date" />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="country">Medicine</label>
        </div>
        <div className="col-75">
          <textarea id="subject" name="subject" style={{height:"200px"}}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="subject">Required</label>
        </div>
        <div className="col-75">
          <textarea id="subject" name="subject" style={{height:"200px"}}></textarea>
        </div>
      </div>
      </form>
    </div>
    </div>
  );
}
