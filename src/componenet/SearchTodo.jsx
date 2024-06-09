import React from 'react'
import NavTodo from './NavTodo'

const SearchTodo = () => {
  return (
    <div>
        <NavTodo/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12-col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchTodo