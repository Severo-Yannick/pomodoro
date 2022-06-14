import { format } from 'date-fns'

export const initialState = {
  status: 'off', // 'off' | 'working' | 'resting'
  settings: {
    workDuration: 10,
    breakDuration: 5,
  },
  sessions: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SESSION':
      return {
        ...state,
        sessions: [
          ...state.sessions,
          {
            date: format(new Date(), 'dd/MM/yyyy HH:mm'),
            ...state.settings
          },
        ],
      }
    case 'START_TIMER':
      return {
        ...state,
        status: 'working'
      }
    case 'STOP_TIMER':
      return {
        ...state,
        status: 'off'
      }
    case 'SWITCH_MODE':
      return {
        ...state,
        status: state.status === 'working' ? 'resting' : 'working'
      }
    case 'SET_WORK_DURATION':
      return {
        ...state,
        settings: {
          ...state.settings,
          workDuration: action.value
        },
      }
    case 'SET_BREAK_DURATION':
      return {
        ...state,
        settings: {
          ...state.settings,
          breakDuration: action.value
        },
      }
    default:
      return state
  }
}