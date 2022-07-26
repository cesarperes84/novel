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
    author: string,
    date: string,
    name: string,
    photos: string[],
    year: string,
  };
  results: ResultType[];
  statusContent: string;
  statusResult: string;
}

export type ActionType = {
  type: Types,
  payload?: any,
}

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
