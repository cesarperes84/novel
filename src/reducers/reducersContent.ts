import initialState from '../constants/initialStateApp';

export enum Types {
  SetDayContent = "setDayContent",
  SetStatusDayContent = "setStatusDayContent",
  SetStatusResult = "setStatusResult",
  SetContent = "setContent",
}

export type ResultType = {
  name: string;
  photos: string[];
}

export type StateType = {
  content: {
    name: string,
    photos: string[],
  };
  results: ResultType[];
  statusContent: string;
  statusResult: string;
}

export type ActionType = {
  type: Types,
  payload?: any,
}

/* export type ContentState = typeof initialState;

export function reducer(state: StateType, action: ActionType): ContentState { */
  
export function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
      case Types.SetContent:
        return {
          ...state,
          results: action.payload,
          statusResult: 'loaded',
        };
      case Types.SetDayContent:
        return { 
          ...state,
          content: action.payload,
          statusContent: 'loaded',
         };
      case Types.SetStatusDayContent:
        return { 
          ...state,
          statusContent: action.payload,
         };
      case Types.SetStatusResult:
        return { 
          ...state,
          statusResult: action.payload
         };
      default:
        throw new Error(`Unhandled  action type ${action.type}`)
    }
  };
