import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p>FETCHING DATA...</p>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
//the sub reducer is encompased inside the index reducers
//destructering syntax to alias what's destructered ({ charsReducer: state })
const mstp = ({ charsReducer: state }) => {
  return {
    characters: state.characters,
    fetching: state.isFetching
  };
};

export default connect(
  mstp,
  { fetchPeople }
)(CharacterListView);
