import './SearchBar.css'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import axios from 'axios'
import debounce from 'lodash.debounce'

const SearchBar = ({ setLinks }) => {
  const [sentence, setSentence] = useState('')
  const [items, setItems] = useState([])
  const refInput = useRef()

  useEffect(() => {
    if (!sentence) return

    let prepSentance = '%' + sentence.replace(' ', '%') + '%'

    axios.get(`http://localhost:8000/cities/${prepSentance}`).then(response => {
      setItems(response.data)
    })
  }, [sentence])

  const clearInput = () => {
    setItems([])
    setSentence('')
    refInput.current.value = ''
  }

  const changeSentence = value => {
    setSentence(value)
  }

  const handleChange = useCallback(
    event => debounce(changeSentence(event.target.value), 300),
    []
  )

  const searchHandle = () => {
    setLinks(refInput.current.value)
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" ref={refInput} onChange={handleChange} />
        <div className="closeIcon">
          {sentence.length !== 0 && (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <div className="searchIcon">
          <button className="button" id="searchButton" onClick={searchHandle}>
            Search
          </button>
        </div>
      </div>

      {items.length !== 0 && (
        <div className="dataResult">
          <ul>
            {items.map(item => {
              return (
                <div key={item.id}>
                  <li
                    className="dataItem"
                    onClick={() => {
                      refInput.current.value = item.name
                      setItems([])
                      // searchHandle()
                    }}
                  >
                    <SearchIcon />
                    <p>{item.name}</p>
                  </li>
                  <Divider />
                </div>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
