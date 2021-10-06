import {createSelector} from 'reselect';

const getAllUsers = state => state.data;

const getVisabilityFilter = state => state.filterShow;

const getVisabilityUsers = createSelector(
  [getVisabilityFilter, getAllUsers],
  (visabilityFilter, users) => {
    if (visabilityFilter === 'all') {
      return users;
    } else {
      return users.filter(item => {
        const upName = item.name.first.toUpperCase();
        return upName.includes(visabilityFilter.toUpperCase());
      });
    }
  },
);

export default getVisabilityUsers;
