import { createStandardAction } from "typesafe-actions";
import { MoveCardPayload } from "./cardTypes";

export const addCard = createStandardAction("@cards/add")<{
  title: string;
  col: number;
}>();

export const moveCard = createStandardAction("@cards/move")<MoveCardPayload>();
