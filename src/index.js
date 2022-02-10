import $ from 'jquery';
import { a } from './a';
import './index.css';
import './index.scss';
import './ch03.scss';

console.log($.ajax);
console.log(a);
console.log('gogo', 'jojo', PRODUCTION);

class Test {
  #a = 100;
}

const tt = new Test();

console.log('tt', tt.a);
