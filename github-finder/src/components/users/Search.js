import React, { useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext
  const { clearUsers, searchUsers} = githubContext
  const [text, setText] = useState('')

  // This method is used to dynamically update whenever text input changes in the search form
  const onChange = e => setText(e.target.value)

  // This method is used to submit the search form
  const onSubmit = e => {
    e.preventDefault()
    if (text==='') {
      setAlert('Please enter a username', 'light')
    } else { 
      searchUsers(text)
      setText('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
          <input type="text" name='text' placeholder='Search Users'
          value={text} 
          onChange={onChange}
          />
          <input type="submit" value="search" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
      <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
      )}
    </div>
  )
}

export default Search
