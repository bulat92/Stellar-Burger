 export const WS_CONNECTION_START = "WS_CONNECTION_START",
  WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS",
  WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR",
  WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED",
  WS_GET_MESSAGE = "WS_GET_MESSAGE",
  WS_SEND_MESSAGE = "WS_SEND_MESSAGE";

interface ingredients {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPayload {
  orders: ingredients[] | [];
  total: number;
  totalToday: number;
}

interface IWSConnectStart {
  readonly type: typeof WS_CONNECTION_START;
}
interface IWSConnectSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
interface IWSConnectError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly message?: string;
}
interface IWSConnectClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
interface IWSGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: IPayload;
}
interface IWSSend {
  readonly type: typeof WS_SEND_MESSAGE;
}

export type TWS =
  | IWSConnectStart
  | IWSConnectSuccess
  | IWSConnectError
  | IWSConnectClosed
  | IWSGetMessage
  | IWSSend;
 