import CardList from "@/components/CardList";
import { cardSelectors } from "@/features/cards";
import { RootState } from "@/infrastructure";
import { styled } from "@/infrastructure/theme";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (s: RootState) => ({
  columns: cardSelectors.cards(s)
});

type Props = ReturnType<typeof mapStateToProps>;

const Page = styled.div`
  width: 100%;
  height: 100%;

  flex-grow: 1;

  display: flex;
  flex-direction: row;

  font-family: sans-serif;

  background-color: #eceeee;
`;

function Home({ columns }: Props) {
  return (
    <Page>
      {columns.map(col => (
        <CardList {...col} />
      ))}
    </Page>
  );
}

export default connect(mapStateToProps)(Home);
