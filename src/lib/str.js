export const includes = (str, search) =>
  str && search && str.toLowerCase().indexOf(search.toLowerCase()) >= 0;

export const cleanCategories = (str) => {
  const res = str.split(',').reduce((acc, val) => {
    val = val.trim();

    if (val) {
      acc.push(val);
    }

    return acc;
  }, []);

  return res.join(', ');
};
