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
      <h2>fetching...</h2>;
    }
    return (
      <div>
        {this.props.error && <p className="error">{this.props.error}</p>}
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchPeople }
)(CharacterListView);
