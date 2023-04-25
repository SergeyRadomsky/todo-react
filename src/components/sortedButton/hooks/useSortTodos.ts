import { useState } from 'react';
import { SortTypes } from '../../TodoForm/constants';
import {
  toggleViewTodosAction,
  sortTodosAction,
} from '../../../store/todos/reducer';
import { ThunkAppDispath } from '../../../store/store';

const useSortTodos = (dispatch: ThunkAppDispath) => {
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.all);

  const getNextStatus = () => {
    if (sortType === SortTypes.all) {
      return SortTypes.completed;
    }

    if (sortType === SortTypes.completed) {
      return SortTypes.active;
    }

    if (sortType === SortTypes.active) {
      return SortTypes.all;
    }

    return SortTypes.all;
  };

  const toggleViewOfList = () => {
    dispatch(toggleViewTodosAction());
  };

  const changeSortByStatus = () => {
    const type = getNextStatus();

    if (type === SortTypes.all) {
      setSortType(type);
      dispatch(sortTodosAction(SortTypes.all));
    }

    if (type === SortTypes.completed) {
      setSortType(type);
      dispatch(sortTodosAction(SortTypes.completed));
    }

    if (type === SortTypes.active) {
      setSortType(type);
      dispatch(sortTodosAction(SortTypes.active));
    }
  };

  const changeSortByData = (type: SortTypes) => {
    if (sortType === type) {
      const newSortType =
        type === SortTypes.dateAsc ? SortTypes.dateDesk : SortTypes.dateAsc;
      setSortType(newSortType);
      dispatch(sortTodosAction(newSortType));
    } else {
      // Если выбран новый тип сортировки, то устанавливаем его и сбрасываем порядок сортировки
      setSortType(type);
      dispatch(sortTodosAction(type));
    }
  };

  const changeSortByLenght = (type: SortTypes) => {
    if (sortType === type) {
      // Если тип сортировки уже выбран, то меняем порядок сортировки
      const newSortType =
        type === SortTypes.lenghtAsc
          ? SortTypes.lenghtDesk
          : SortTypes.lenghtAsc;
      setSortType(newSortType);
      dispatch(sortTodosAction(newSortType));
    } else {
      // Если выбран новый тип сортировки, то устанавливаем его и сбрасываем порядок сортировки
      setSortType(type);
      dispatch(sortTodosAction(type));
    }
  };

  return {
    changeSortByLenght,
    getNextStatus,
    changeSortByData,
    changeSortByStatus,
    sortType,
    setSortType,
    toggleViewOfList,
  };
};

export default useSortTodos;
