export const LOAD_DATA = "LOAD_DATA";
export const LOAD_IMG = "LOAD_IMG";

export interface Action {
  type:string,
  payload:string,
}

export const loadData = (data: any):Action => ({
  type: LOAD_DATA,
  payload: data,
});

export const loadImg = (data: any):Action => ({
  type: LOAD_IMG,
  payload: data,
});
