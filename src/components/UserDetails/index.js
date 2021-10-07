import UserDetails from './UserDetails';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  const {data} = state.users;
  return {data};
};

const actionCreators = {};

export default connect(
  mapStateToProps,
  actionCreators,
)(UserDetails);
