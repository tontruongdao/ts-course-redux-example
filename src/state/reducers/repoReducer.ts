import { ActionType } from '../action-type'
import { Action } from '../actions'

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string []
}

// Will Always Need To Match The Interface
const reducer = (
    state: RepoState, 
    action: Action
): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default: 
      return state
  }

}

export default reducer