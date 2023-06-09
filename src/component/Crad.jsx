import React from 'react';
import web from '../images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Crad = (props) => {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bolder">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span>
                        <NavLink to='/'>Go Back</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crad;
