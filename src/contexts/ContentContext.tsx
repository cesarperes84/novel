import { createContext, useContext, useMemo, useReducer, Dispatch, useCallback, } from 'react';

import {
  getContent,
  getDayContent,
} from '../services/contentServices';

import initialState from '../constants/initialStateApp';
import { ActionType, reducer, StateType, Types } from '../reducers/reducersContent';

interface ContentContextData extends StateType {
  dispatchContent: Dispatch<ActionType>,
  handleSearch: any,
  loadDayContent: any,
};

interface Props {
  children: React.ReactNode;
}

const ContentContext = createContext<ContentContextData>({
    ...initialState,
    dispatchContent: ({ type, payload }) => {},
    handleSearch: () => {},
    loadDayContent: () => {},
  } as ContentContextData);

const ContentProvider = ({children}: Props): JSX.Element => {
  const [state, dispatchContent] = useReducer(reducer, initialState);

  const loadDayContent = useCallback(() => {
    dispatchContent({ type: Types.SetStatusDayContent, payload: 'loading' });
    return getDayContent()
      .then((response) => {
        dispatchContent({ type: Types.SetDayContent, payload: response.data  });
      })
      .catch((error) => {
        dispatchContent({ type: Types.SetStatusDayContent, payload: 'error' });
      });
  }, []);

  const handleSearch = useCallback(({ term } : { term: string }) => {
    dispatchContent({ type: Types.SetStatusResult, payload: 'loading' });
    getContent({ term })
      .then((response) => {
        dispatchContent({ type: Types.SetContent, payload: response.data  });
      })
      .catch((error) => {
        dispatchContent({ type: Types.SetStatusResult, payload: 'error' });
      });
  }, []);

  const providerValue = useMemo(() => ({
    ...state,
    dispatchContent,
    handleSearch,
    loadDayContent,
  }), [handleSearch, loadDayContent, state]);

  return (
    <ContentContext.Provider
      value={providerValue}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContentContext = (): ContentContextData => useContext(ContentContext);

export { ContentProvider, ContentContext };
