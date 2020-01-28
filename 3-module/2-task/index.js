/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let minMax = str
  // Экранирование символов для разделения строки на массивы
    .split(/ |,/)
  // Фильтруем содержимое массива на соответствие Number (Блять, это можно сделать проще? Выглядит пожеванно)
    .filter( value => !isNaN(parseFloat(value)))
  // Приводим к типу данных Number
    .map(value => parseFloat(value));
  // Возвращаем это убожество с использованием встроенного объекта Math.min\max
  return {
    min: Math.min.apply(null, minMax), 
    max: Math.max.apply(null, minMax)
  }
    
} 
