interface RepoState {
  loading: boolean;
  error: string | null;
  data: string []
}

interface SearchRepoAction {
  type: 'search_repo'
}

interface SearchRepoSuccessAction {
  type: 'search_repo_success'
  payload: string[]
}

interface SearchRepoErrorAction {
  type: 'search_repo_error'
  payload: string
}


// Will Always Need To Match The Interface
const reducer = (
    state: RepoState, 
    action: SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction
): RepoState => {
  switch (action.type) {
    case 'search_repo':
      return { loading: true, error: null, data: [] }
    case 'search_repo_success':
      return { loading: false, error: null, data: action.payload }
    case 'search_repo_error':
      return { loading: false, error: action.payload, data: [] }
    default: 
      return state
  }

}

export default reducer