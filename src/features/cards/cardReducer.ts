import { RootAction } from "@/infrastructure/rootAction";
import produce from "immer";
import { getType } from "typesafe-actions";
import * as userActions from "./cardActions";
import cardConstants from "./cardConstants";
import { CardState } from "./cardTypes";

const cardsReducer = (state: CardState | undefined, action: RootAction) => {
  if (!state) {
    return cardConstants.defaultState;
  }

  let newState = state;

  switch (action.type) {
    case getType(userActions.addCard):
      newState = produce(state, d => {
        const { col, title } = action.payload;

        d.cards[col].cards.push({
          title
        });
      });
      break;
    case getType(userActions.moveCard):
      newState = produce(state, d => {
        const { column, direction, cardNumber } = action.payload;

        d.cards[column + direction].cards.push(
          d.cards[column].cards[cardNumber]
        );

        d.cards[column].cards = d.cards[column].cards.filter(
          (_, i) => i !== cardNumber
        );
      });
      break;
  }

  localStorage.setItem("cards", JSON.stringify(newState));

  return newState;
};

export default cardsReducer;
