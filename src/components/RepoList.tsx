import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions'

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepo } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repo)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    searchRepo(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepoList