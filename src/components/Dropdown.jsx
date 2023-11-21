import React from 'react'

const Dropdown = () => {
  return (
    <div className='main-container'>
        <div className='dropdown'>
            <label for="dropdown-menu">Should you use a Dropdown?</label>
            <br/>
            <select name='dropdown-menu'>
                <option value="" disabled selected>Select</option>
                <option value='yes'>Yes</option>
                <option value='no'>Probably not</option>
            </select>
        </div>
    </div>
  )
}

export default Dropdown
