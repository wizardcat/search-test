import './App.css'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import SearchBar from './сomponents/SearchBar'

function App() {
  const [links, setLinks] = useState('')

  const Links = ({ links }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
          marginTop: '50px',
          fontSize: '35px',
        }}
      >
        <Link
          href={`https://www.google.com.ua/search?q=${links}`}
          underline="hover"
        >
          {links}
        </Link>
      </Box>
    )
  }

  return (
    <div className="App">
      <SearchBar setLinks={setLinks} />
      <Links links={links} />
    </div>
  )
}

export default App
