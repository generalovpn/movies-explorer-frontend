import React from 'react'

const CheckBox = ({isShorts, isShortsHandler}) => {
  return (
    <>
    
    <label
        className="search__checkbox-container"
      >
        <input
          type="checkbox"
          className="search__checkbox"
          name="checkbox"
          checked={isShorts}
          onChange={isShortsHandler}
        />
        <span className="search__checkbox-toggle" />
        Короткометражки
      </label>

    </>
    
  )
}

export default CheckBox