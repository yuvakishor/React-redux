import React from 'react';




const ContactCrad = (props) => {
    console.log(props)
    return (
        <div className="col-md-3 mt-5">
            <div className="card">
                <img src={require(`../asserts/${props.imgUrl}`)} alt="logo"/>
                <div className="card-body">
                    <h3 style={{ color: "green" }}>{props.name}</h3>
                    <h5>Email:{props.email}</h5>
                    <p><strong>phone:</strong>{props.phone}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactCrad;



