import { CardListProps } from "@/components/CardList";
export interface CardState {
  cards: CardListProps[];
}

export enum MoveCardDirection {
  left = -1,
  right = 1
}

export interface MoveCardPayload {
  direction: MoveCardDirection;
  column: number;
  cardNumber: number;
}
