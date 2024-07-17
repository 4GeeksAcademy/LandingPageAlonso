import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to this React Landing Page</h1>
                <p className="col-md-8 fs-4">Hi i´m just a Jumbotron.</p>
                <button className="btn btn-primary btn-lg" type="button">Jumbobutton</button>
            </div>
        </div>
    );
};

export default Jumbotron;