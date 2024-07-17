import React from "react";

const Card = ({ title, text, buttonText }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{text}</p>
                    <a href="#" className="btn btn-primary mt-auto">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;