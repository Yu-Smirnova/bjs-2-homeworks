function cachingDecoratorNew(func) {
  let cash = [];
  function wrapper(...args) {
    const idx = cash.findIndex((item) => item.hash === args.join(","));
    if (idx === -1) {
      let result = func(...args);
      cash.push({ hash: args.join(","), value: result });
      if (cash.length > 5) {
        cash.shift();
      }
      console.log(`Вычисляем: ${result}`);
      return `Вычисляем: ${result}`;
    } else {
      console.log(`Из кэша: ${cash[idx].value}`);
      return `Из кэша: ${cash[idx].value}`;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  func();
  let flag = true;
  function wrapper(...args) {
    if (flag === false) {
      timeout = setTimeout(() => {
        func(...args), (flag = false);
      }, ms);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args), (flag = true);
      }, ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  func();
  let flag = true;
  wrapper.count = 1;
  function wrapper(...args) {
    if (flag === false) {
      timeout = setTimeout(() => {
        func(...args), (flag = false);
      }, ms);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args), (flag = true);
      }, ms);
    }
    wrapper.count++;
  }
  return wrapper;
}
