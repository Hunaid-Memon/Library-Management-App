import React from 'react'

const AddData = ({ submitData }) => {

    const handleChange = e => {
        console.log(e.target.value);
    }

  

    return (
        <aside>
            <h2>Add Records</h2>
            <form onSubmit={submitData} >
                <div>
                    <label htmlFor="name">Student Name</label>
                    <input type="text" name='name' id='name' value={name} placeholder='Student Name' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={email} placeholder='Email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' id='phone' value={phone} placeholder='Phone' onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" className='submit' />
            </form>
        </aside>
    )
}

export default AddData;
