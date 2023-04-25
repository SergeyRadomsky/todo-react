import { useState } from 'react';
import { SortTypes, ViewOfLists } from '../../TodoForm/constants';
import {
  changeViewTodosAction,
  sortTodosAction,
} from '../../../store/todos/reducer';
import { ThunkAppDispath } from '../../../store/store';
// import { type } from '@testing-library/user-event/dist/type';

const useSortTodos = (dispatch: ThunkAppDispath) => {
  const [ViewOfList, setViewOfList] = useState<ViewOfLists>(ViewOfLists.list);
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

  const getNewView = () => {
    if (ViewOfList === ViewOfLists.list) {
      return ViewOfLists.table;
    }

    if (ViewOfList === ViewOfLists.table) {
      return ViewOfLists.list;
    }

    return ViewOfLists.list;
  };

  const changeViewOfList = () => {
    const type = getNewView();

    if (type === ViewOfLists.list) {
      setViewOfList(type);
      dispatch(changeViewTodosAction(ViewOfLists.list));

      return;
    }
    // ПОЧЕМУ НЕ РАБОТАЛО??
    // if (type === ViewOfLists.list) {
    //   setViewOfList(type);
    //   dispatch(changeViewTodosAction(ViewOfLists.table));

    //   return;
    // }

    setViewOfList(type);
    dispatch(changeViewTodosAction(ViewOfLists.table));
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

  // const changeViewOfList = (type: ViewOfLists) => {
  //   if (type === ViewOfLists.table) {
  //     setViewOfList(ViewOfLists.table);
  //     dispatch(changeViewTodosAction(type));

  //     return;
  //   }

  //   if (type === ViewOfLists.list) {
  //     setViewOfList(ViewOfLists.list);
  //     dispatch(changeViewTodosAction(type));
  //   }
  // };

  return {
    changeSortByLenght,
    getNextStatus,
    changeSortByData,
    changeSortByStatus,
    sortType,
    setSortType,
    changeViewOfList,
    setViewOfList,
    ViewOfList,
  };
};

export default useSortTodos;
