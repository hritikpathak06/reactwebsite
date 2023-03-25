import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        email: '',
        number: '',
        message: ''
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData(((preVal) => {
            return{
                ...preVal,
                [name] : value
            }
        }))
    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`my name is: ${data.fullname} my mobile number is: ${data.number} my email is: ${data.email} and message is: ${data.message}`)
    }


    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    onChange={inputEvent}
                                    value={data.fullname}
                                    placeholder="xyxz" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    onChange={inputEvent}
                                    value={data.email}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile No</label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="number"
                                    onChange={inputEvent}
                                    value={data.number}
                                    placeholder="83939988" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="message"
                                    onChange={inputEvent}
                                    value={data.message}
                                    rows="3"
                                    placeholder='give a message'>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className='btn btn-outline-primary' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
