'use strict';

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

let [a, b, c, ...d] = widgets;

console.log(a); // widget1
console.log(d); // [ 'widget4', 'widget5']
