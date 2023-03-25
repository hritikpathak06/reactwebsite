import React from 'react';
import Crad from './Crad';
import Sdata from '../Sdata';

const Services = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center mb-3'>Our Services</h1>
                <div className='container-fluid mb-5'>
                      <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                            {
                                Sdata.map((val, index) => {
                                    return <Crad
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                })
                            }
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </>
    )
}

export default Services
