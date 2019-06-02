import { userActions, userSelectors } from "@/features/user";
import { RootState } from "@/infrastructure";
import { styled } from "@/infrastructure/theme";
import React, { useCallback } from "react";
import { connect } from "react-redux";

const StyledDiv = styled.div`
  color: ${p => p.theme.primary};
`;

const mapStateToProps = (s: RootState) => ({
  user: userSelectors.user(s)
});

const dispatchProps = {
  setUser: userActions.set
};

type Props = typeof dispatchProps;

function Home({ setUser }: Props) {
  const onChange = useCallback(
    e => {
      setUser({
        name: e.target.value
      });
    },
    [setUser]
  );

  return (
    <StyledDiv>
      <div>Hi</div>
      <input onChange={onChange} />
    </StyledDiv>
  );
}

export default connect(
  mapStateToProps,
  dispatchProps
)(Home);
