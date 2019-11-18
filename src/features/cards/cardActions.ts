import { createAction } from "typesafe-actions";
import { MoveCardPayload } from "./cardTypes";

export const addCard = createAction("@cards/add")<{
  title: string;
  col: number;
}>();

export const moveCard = createAction("@cards/move")<MoveCardPayload>();
