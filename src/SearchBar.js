import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='video'> Search Video </label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              id='video'
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
