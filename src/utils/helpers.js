export function isFieldEmpty(obj) {
  const isEmpty = Object.keys(obj).some((key) => obj[key].value.length === 0);
  return isEmpty;
}

export function hasErrorMessage(obj) {
  const hasError = Object.values(obj).some((value) => value.error.length > 0);
  return hasError;
}

export function isFieldTouched(obj) {
  const isTouched = Object.keys(obj).some((value) => obj[value].isTouched);
  return isTouched;
}

export function hasDuplicateValue(arr, value) {
  let count = 0;

  arr.forEach((el) => {
    if (el.trim().toLowerCase() === value.trim().toLowerCase()) {
      count = count + 1;
    }
  });

  return count > 1 ? true : false;
}

export function cloneArrWitoutLast(arr) {
  return arr.slice(0, arr.length - 1);
}
