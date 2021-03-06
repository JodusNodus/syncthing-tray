const initialState = {
  isFailure: false,
  isSuccess: false,
  config: {},
}
export default function config(state = initialState, {type, payload}) {
  switch (type){
    case 'CLIENT_CONFIG_GET_SUCCESS':
    return {
      isFailure: false,
      isSuccess: true,
      config: payload,
    }
    case 'CLIENT_CONFIG_GET_FAILURE':
    return {
      isFailure: true,
      isSuccess: false,
      config: payload,
    }
    case 'CLIENT_CONFIG_SET_SUCCESS':
    return {
      isFailure: false,
      isSuccess: true,
      config: payload,
    }
    case 'AUTO_LAUNCH_GET_SUCCESS':
    return {
      ...state,
      config: {
        ...state.config,
        autoLaunch: payload,
      },
    }
    case 'AUTO_LAUNCH_SET_SUCCESS':
    return {
      ...state,
      config: {
        ...state.config,
        autoLaunch: payload,
      },
    }
    default:
    return state
  }
}
