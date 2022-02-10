import $ from 'jquery';
import { a } from './a';
import './index.css';

console.log($.ajax);
console.log(a);
console.log('gogo');

class Test {
  #a = 100;
}

const tt = new Test();

console.log('tt', tt.a);
