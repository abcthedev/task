import { Action, LOAD_DATA, LOAD_IMG } from "../actions/actions";
import { Img, WhyUsData } from "../data";


export interface LoadData {
  Data:any,
  ImgData:any,
}

const intialState ={
  Data : WhyUsData,
  ImgData:Img
}

export const appReducer = (state:LoadData=intialState, action: Action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return {...state, Data:[...state.Data,action.payload]}
    }

    case LOAD_IMG: {
      return {...state, ImgData:[...state.ImgData,action.payload]}
    }
    default:
      return state;
  }
};

export type AppState = ReturnType<typeof appReducer>

