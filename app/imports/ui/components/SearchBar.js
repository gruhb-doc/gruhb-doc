import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  source = _.times(5, () => ({
    title: this.props.vendors.name,
    description: this.props.vendors.description,
    image: this.props.vendors.photo,
    price: this.props.vendors.cost,
  }));

  initialState = {
    loading: false,
    results: [],
    value: '',
  };

  function

  exampleReducer(state, action) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return this.initialState;
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query };
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results };
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection };

      default:
        throw new Error();
    }
  }

  function

  SearchExampleStandard() {
    const [state, dispatch] = React.useReducer(this.exampleReducer, this.initialState);
    const { loading, results, value } = state;

    const timeoutRef = React.useRef();
    const handleSearchChange = React.useCallback((e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: 'START_SEARCH', query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: 'CLEAN_QUERY' });
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), 'i');
        const isMatch = (result) => re.test(result.title);

        dispatch({
          type: 'FINISH_SEARCH',
          results: _.filter(source, isMatch),
        });
      }, 300);
    }, []);
    React.useEffect(() => () => {
      clearTimeout(timeoutRef.current);
    }, []);

    return (
            <Search
                loading={loading}
                onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                }
                onSearchChange={handleSearchChange}
                results={results}
                value={value}
            />
    );
  }
}

/** Require an array of Stuff documents in the props. */
SearchBar.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default SearchBar;
