import React from 'react'
import loading from './Spinner.gif'
const Spinner =() =>{
        return (
            <div className="text-center" >
                <img src={loading} style={{fontSize:'10px !important'}} alt="spinner" />
            </div>
        )
    
}
export default Spinner;