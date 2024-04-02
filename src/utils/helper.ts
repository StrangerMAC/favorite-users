export const getPagesCount = (
  totalCountOfUsers: number,
  countOfUsersPerPage: number
): number => {
  return Math.ceil(totalCountOfUsers / countOfUsersPerPage);
};

export const getCountRanges = (
  pagesCount: number,
  countOfNumbersDisplayedOnPage: number
): number => {
  return Math.ceil(pagesCount / countOfNumbersDisplayedOnPage);
};

export const getFirstPage = (
  numberRangeOfDisplayedPages: number,
  countOfNumbersDisplayedOnPage: number
): number => {
  return (numberRangeOfDisplayedPages - 1) * countOfNumbersDisplayedOnPage + 1;
};

export const getLastPage = (
  numberRangeOfDisplayedPages: number,
  countOfNumbersDisplayedOnPage: number
): number => {
  return numberRangeOfDisplayedPages * countOfNumbersDisplayedOnPage;
};

export const getPagesArray = (pagesCount: number): number[] => {
  let pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
};
