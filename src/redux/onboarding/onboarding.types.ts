// export const INCREMENT = 'INCREMENT';

// export interface TAction {
//     type: string;
// }

// export interface TaskAction extends TAction {
//     number: number;
// }

// export function incTaskNo (num:number): TaskAction{
//     return {
//         type: INCREMENT,
//         number: num,
//     }
// }

// export const SET_TASKNO = 'SET_TASKNO';
// export const GET_TASKNO = 'GET_TASKNO';

// export interface GetTaskNo {
//   type: typeof GET_TASKNO;
// }

// export interface SetTaskNo{
//   type: typeof SET_TASKNO;
//   payload: number;
// }

// export type TaskActions = GetTaskNo | SetTaskNo;

export enum ActionType{
    ADD = 'addnumber',
  }

export interface addAction {
    type: ActionType.ADD
    // payload: 1
  }

export type Action = addAction