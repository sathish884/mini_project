import React from 'react'
import Header from '../Header_Component/Header'

function ViewContact(props) {
  return (
    <div>
      <Header content="View Contact Page" />

      <div className="row">
        <div className="col p-5">
          <button type='button' className='btn btn-success'>Add</button>
        </div>
      </div>

      <div className="row">
        <div className="col px-5">
          <table className="table table-striped table-hover">
            <thead className='table-dark'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Controls</th>
              </tr>
            </thead>
            <tbody>
              {
                props.getList.map((data, index) => (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td><button className='btn btn-primary'>Delete</button></td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ViewContact