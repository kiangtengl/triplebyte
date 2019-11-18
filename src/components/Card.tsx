import { cardActions, MoveCardDirection } from "@/features/cards";
import { styled } from "@/infrastructure/theme";
import React, { useCallback } from "react";
import { connect } from "react-redux";

export interface CardProps {
  title: string;
}

export interface CardOuterProps {
  canMoveLeft: boolean;
  canMoveRight: boolean;
  column: number;
  cardNumber: number;
}

const CardWrapper = styled.li`
  list-style: none;
  padding: 14px 8px;
  margin-bottom: 12px;
  margin-left: 0px;
  background-color: white;

  display: flex;
  flex-direction: row;
`;

const MoveCardButton = styled.div`
  cursor: pointer;
`;

const CardContent = styled.div`
  flex-grow: 1;
  margin: 0 12px;
`;

const dispatchProps = {
  moveCard: cardActions.moveCard
};

type Props = CardProps & CardOuterProps & typeof dispatchProps;

export function Card(p: Props) {
  const { column, moveCard, cardNumber } = p;

  const moveLeft = useCallback(() => {
    moveCard({
      column,
      direction: MoveCardDirection.left,
      cardNumber
    });
  }, [column, cardNumber, moveCard]);

  const moveRight = useCallback(() => {
    moveCard({
      column,
      direction: MoveCardDirection.right,
      cardNumber
    });
  }, [column, cardNumber, moveCard]);

  return (
    <CardWrapper>
      <MoveCardButton onClick={moveLeft}>{p.canMoveLeft && "<"}</MoveCardButton>
      <CardContent>{p.title}</CardContent>
      <MoveCardButton onClick={moveRight}>
        {p.canMoveRight && ">"}
      </MoveCardButton>
    </CardWrapper>
  );
}

export default connect(null, dispatchProps)(Card);
