import _ from 'lodash';
import React from 'react';
import { Search } from 'semantic-ui-react';

function gatherInfo(vendorInfo) {
  const sortedInfo = { title: vendorInfo.name, description: vendorInfo.description, image: vendorInfo.photo, price: vendorInfo.cost };
  console.log('Sorted Info');
  console.log(sortedInfo);
  return sortedInfo;

}
let hasInitializedVendors = 0;

let importedVendorData = [];

let source;

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

function SearchExampleStandard(vendorDataImport) {
  // TEST CODE
  console.log('vendorDataImport');
  console.log(vendorDataImport);
  // TEST CODE
  if (this.hasInitializedVendors === 0) {
    for (let i = 0; i < vendorDataImport.length; i++) {
      importedVendorData[i] = vendorDataImport[i];
      console.log(vendorDataImport[i]);
    }
    this.hasInitializedVendors = 1;
  }
  // TEST CODE
  console.log('importedVendorData');
  console.log(importedVendorData);
  // TEST CODE
  this.source = _.map(importedVendorData, gatherInfo);
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

  // TEST CODE
  console.log('This is the data that is being given into SearchBar Class');
  console.log(source);
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
export default SearchExampleStandard;
