import React, { useState } from 'react';
import { IPagination } from '../types/data';
import {
  getCountRanges,
  getFirstPage,
  getLastPage,
  getPagesArray,
  getPagesCount,
} from '../utils/helper';

const Pagination: React.FC<IPagination> = ({
  totalCountOfUsers,
  countOfUsersPerPage = 5,
  countOfNumbersDisplayedOnPage = 10,
  setCurrentPage,
  currentPage,
}) => {
  // количество страниц
  const pagesCount = getPagesCount(totalCountOfUsers, countOfUsersPerPage);
  // массив с номерами станиц
  let numbersOfPages = getPagesArray(pagesCount);
  // количество диапазонов отображаемых страниц
  const countRangesOfDisplayedPages = getCountRanges(
    pagesCount,
    countOfNumbersDisplayedOnPage
  );
  // номер диапазона отображаемых страниц
  const [numberRangeOfDisplayedPages, setNumberRangeOfDisplayedPages] =
    useState(1);

  const firstNumberOfDisplayedPages = getFirstPage(
    numberRangeOfDisplayedPages,
    countOfNumbersDisplayedOnPage
  );

  const lastNumberOfDisplayedPages = getLastPage(
    numberRangeOfDisplayedPages,
    countOfNumbersDisplayedOnPage
  );

  return (
    <div className="pageNumber__wrapper">
      {numberRangeOfDisplayedPages > 1 && (
        <span
          className="pageNumber"
          onClick={() =>
            setNumberRangeOfDisplayedPages(numberRangeOfDisplayedPages - 1)
          }
        >
          PREV
        </span>
      )}
      {numbersOfPages
        .filter(
          (page: number) =>
            page >= firstNumberOfDisplayedPages &&
            page <= lastNumberOfDisplayedPages
        )
        .map((page: number) => {
          return (
            <span
              className={
                page === currentPage
                  ? 'pageNumber pageNumber__current'
                  : 'pageNumber'
              }
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </span>
          );
        })}
      {countRangesOfDisplayedPages > numberRangeOfDisplayedPages && (
        <span
          className="pageNumber"
          onClick={() =>
            setNumberRangeOfDisplayedPages(numberRangeOfDisplayedPages + 1)
          }
        >
          NEXT
        </span>
      )}
    </div>
  );
};

export { Pagination };
