import assert from 'assert';
import toHtml from '../util/ToHtml.js';

describe('ToHtml', function() {
      it('should return correct html', function () {
          const result = toHtml('# Hello World');
          const expected = '<h1 id="hello-world">Hello World</h1>\n'
          assert.equal(expected, result);
      });
 });
