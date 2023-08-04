import Box from '../box/box';
import Button from '../button/button';
import './filter.scss';
import { filterList } from '../../utils/filter';
import { updateFilter } from '../../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.todoList.filter);

  const handleFilterClick = (filterName) => dispatch(updateFilter(filterName));

  return (
    <Box className='filter' radius>
      <FilterList
        filters={filterList}
        currentFilter={currentFilter}
        dispatchHandler={handleFilterClick}
      />
    </Box>
  );
}

function FilterList({ filters, currentFilter, dispatchHandler }) {
  const activeClass = 'filter__btn--active';

  const filterButtons = filters.map((filterName, index) => {
    const isFilterActive = currentFilter === filterName;

    return (
      <li className='filter__list-item' key={index}>
        <Button
          onClick={() => dispatchHandler(filterName)}
          className={`filter__btn ${isFilterActive ? activeClass : ''}`}
        >
          {filterName}
        </Button>
      </li>
    );
  });

  return <ul className='filter__list'>{filterButtons}</ul>;
}

export default Filter;
