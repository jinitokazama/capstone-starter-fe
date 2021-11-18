function BadRequest(props) {
    return (
      <div className="BadRequest page-wrap d-flex flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                <span className="display-1 d-block">400</span>
                <div className="mb-4 lead">Invalid request, please verify the request is correctly formatted.</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default BadRequest;