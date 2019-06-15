import { cardActions } from "@/features/cards";
import { styled } from "@/infrastructure/theme";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import Card, { CardProps } from "./Card";

export interface CardListProps {
  title: string;
  color: string;
  column: number;
  cards: Array<CardProps>;
}

const dispatchProps = {
  addCard: cardActions.addCard
};

type Props = typeof dispatchProps & CardListProps;

const ListWrapper = styled.div`
  margin-left: 25px;
  flex-grow: 1;

  &:last-child {
    margin-right: 25px;
  }

  ul {
    margin-block-start: 0px;
    padding-inline-start: 0px;
  }
`;

const CardHeader = styled.p`
  color: white;
  background-color: ${p => p.color};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CardList(p: Props) {
  const onClick = useCallback(() => {
    const title = window.prompt("Title for your card") || "";

    p.addCard({ title, col: p.column });
  }, []);

  return (
    <ListWrapper>
      <CardHeader color={p.color}>{p.title}</CardHeader>
      <ul>
        {p.cards.map((card, i) => (
          <Card
            key={i}
            {...card}
            cardNumber={i}
            column={p.column}
            canMoveLeft={p.column > 0 && p.cards.length > 1}
            canMoveRight={p.column < p.cards.length && p.cards.length > 1}
          />
        ))}
      </ul>
      <div>
        <span>+</span>
        <span onClick={onClick}>Add a card</span>
      </div>
    </ListWrapper>
  );
}

export default connect(
  null,
  dispatchProps
)(CardList);
