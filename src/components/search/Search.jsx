import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import "./Search.css"
const Search = ()=>{
    return(
        <Fragment>
                <div className="container-fluid p-0 search-content navbar">
                    <form className="d-flex" role="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="form-control" type="search" placeholder="Search Facebook" aria-label="Search"/>
                    </form>
                </div>
        </Fragment>
    )
}
export default Search;