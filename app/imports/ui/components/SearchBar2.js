import _ from 'lodash';
import React from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const source = _.times(5, () => ({
  title: this.props.vendors.name,
  description: this.props.vendors.description,
  image: this.props.vendors.photo,
  price: this.props.vendors.cost,
}));

const initialState = {
  loading: false,
  results: [],
  value: '',
};

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
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

function SearchExampleStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
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
      <Grid>
        <Grid.Column width={6}>
          <Search
              loading={loading}
              onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
              }
              onSearchChange={handleSearchChange}
              results={results}
              value={value}
          />
        </Grid.Column>

        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
          </Segment>
        </Grid.Column>
      </Grid>
  );
}
class SearchBar extends React.Component {}
SearchBar.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
export default SearchExampleStandard;