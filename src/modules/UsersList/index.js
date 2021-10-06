import UsersList from './UsersList';
import {connect} from 'react-redux';
import * as actions from '../../store/users/actions';
import selectorVasability from './selectors';

const mapStateToProps = state => {
  const {page, loading, refresh, filterShow} = state.users;
  const data = selectorVasability(state.users);
  return {data, page, loading, refresh, filterShow};
};

const actionCreators = {
  fetchUsers: actions.fetchUsers,
  startLoading: actions.startLoading,
  startRefresh: actions.startRefresh,
  selectFilter: actions.setVisabilityFilter,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(UsersList);
