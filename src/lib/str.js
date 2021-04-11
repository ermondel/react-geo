// case-insensitive search
export const strIncludes = (str, search) => {
  if (!str || !search) {
    return;
  }

  return str.toLowerCase().indexOf(search.toLowerCase()) >= 0;
};

// trim comma separated str
export const trimCSstr = (str) => {
  const res = str.split(',').reduce((acc, val) => {
    val = val.trim();

    if (val) {
      acc.push(val);
    }

    return acc;
  }, []);

  return res.join(', ');
};

// check if path A is a subset of path B
export const pathA_B = (pathA = '', pathB = '') => {
  if (pathA === '/') {
    pathA = '#root';
  }

  if (pathB === '/') {
    pathB = '#root';
  }

  if (pathA === pathB) {
    return true;
  }

  const pathAList = [];
  const pathBList = [];

  let str = '';

  for (let item of pathA.split('/')) {
    str = item.trim();
    str && pathAList.push(str);
  }

  for (let item of pathB.split('/')) {
    str = item.trim();
    str && pathBList.push(str);
  }

  for (let i = 0; i < pathAList.length; i++) {
    if (pathAList[i] !== pathBList[i]) {
      return false;
    }
  }

  return true;
};

// remove HTML tags
export const stripHTMLTags = (str) => str.replace(/(<([^>]+)>)/gi, '');
