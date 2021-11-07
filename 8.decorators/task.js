function cachingDecoratorNew(func) {
  let cash = [];
  function wrapper(...args) {
    const idx = cash.findIndex((item) => item.hash === args.join(","));
    if (idx === -1) {
      let result = func.call(this, ...args);
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
  let flag = true;
  function wrapper(...args) {
    if (flag === false) {
      return;
    }
    flag = false;
    func.call(this, ...args);
    setTimeout(() => {
      (flag = true), ms;
    });
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let flag = true;
  function wrapper(...args) {
    if (flag === false) {
      return;
    } else {
      flag = false;
      func.call(this, ...args);
      setTimeout(() => {
        (flag = true), ms;
      });
    }
    wrapper.count++;
  }
  wrapper.count = 0;
  return wrapper;
}
