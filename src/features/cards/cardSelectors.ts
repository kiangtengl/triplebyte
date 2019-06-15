import { RootState } from "@/infrastructure";
import { CardState } from "./cardTypes";

const $ = <TOutput>(f: (cardState: CardState) => TOutput) => (s: RootState) =>
  f(s.cards);

const userSelectors = {
  cards: $(s => s.cards)
};

export default userSelectors;
