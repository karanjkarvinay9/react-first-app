import React from 'react'

const Card = ({displayData}) => {
    return (
        <>
            {displayData.map((currElem) => {
                return (
                    <div className="col-md-6 col-lg-4" key = {currElem.id}>
                    <div className="card my-3">
                        <div className="card-thumbnail">
                            <img src={currElem.Link} className="img-fluid img-thumbnail" alt="thumbnail"  ></img>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{currElem.name}</h3>
                            <h6 className="card-subtitle mb-2 text-muted">{ currElem.category }</h6>
                            <p className="card-text">{currElem.describe}</p>
                            <a href="https://www.markuptag.com/images/image-one.jpg" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
                )
                })
            }
        
      </>
    )
}

export default Card;
