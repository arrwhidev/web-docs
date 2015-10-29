import assert from 'assert';
import DiffUtils from '../util/DiffUtils.js';

const assertObjEqual = (expected, result) => {
    assert.equal(expected.op, result.op);
    assert.equal(expected.line, result.line);
    assert.equal(expected.text, result.text);
}

describe('DiffUtils', function() {
  describe('#createDiffObject()', function () {
      it('should create a correctly formatted object', function () {
          const result = DiffUtils.createDiffObject('add', 9, 'hello world');
          const expected = {
              op: 'add',
              line: 9,
              text: 'hello world'
          };

          assertObjEqual(expected, result);
      });
  });

  describe('#calculateModifiedLine()', function () {
      it('should return a nothing object when arrays are the same', function () {
          const oldLines = ['line 0', 'line 1', 'line 2'];
          const newLines = ['line 0', 'line 1', 'line 2'];

          const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
          const expected = DiffUtils.createDiffObject('nothing', 0, '');
          assertObjEqual(expected, result);
      });

    it('should return modified line when arrays are same length', function () {
        const oldLines = ['line 0', 'line 1', 'line 2'];
        const newLines = ['line 0', 'hello line 1', 'line 2'];

        const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
        const expected = DiffUtils.createDiffObject('modified', 1, 'hello line 1');
        assertObjEqual(expected, result);
    });

    it('should return added line when new line added to end', function () {
        const oldLines = ['line 0', 'line 1', 'line 2'];
        const newLines = ['line 0', 'line 1', 'line 2', 'extra line'];

        const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
        const expected = DiffUtils.createDiffObject('add', 3, 'extra line');
        assertObjEqual(expected, result);
    });

    it('should return added line when new line added to middle', function () {
        const oldLines = ['line 0', 'line 1', 'line 2'];
        const newLines = ['line 0', 'line 0.5', 'line 1', 'line 2'];

        const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
        const expected = DiffUtils.createDiffObject('add', 1, 'line 0.5');
        assertObjEqual(expected, result);
    });

    it('should return removed line when line removed from end', function () {
        const oldLines = ['line 0', 'line 1', 'line 2'];
        const newLines = ['line 0', 'line 1'];

        const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
        const expected = DiffUtils.createDiffObject('remove', 2, '');
        assertObjEqual(expected, result);
    });

    it('should return removed line when line removed from middle', function () {
        const oldLines = ['line 0', 'line 1', 'line 2', 'line 3'];
        const newLines = ['line 1', 'line 2', 'line 3'];

        const result = DiffUtils.calculateModifiedLine(oldLines, newLines);
        const expected = DiffUtils.createDiffObject('remove', 0, '');
        assertObjEqual(expected, result);
    });
  });

  describe('#calculateDiff()', function () {
      it('should create a diff object', function () {
          const oldText = '# hello\n * one\n * two\n * three\n\n## another \ntesting!';
          const newText = '# hello\n * one\n * two\n * three\n * four\n\n## another \ntesting!';

          const result = DiffUtils.calculateDiff(oldText, newText);
          const expected = DiffUtils.createDiffObject('add', 4, ' * four');

          assertObjEqual(expected, result);
      });
  });

  describe('#applyDiff()', function () {
      it('should transform text using diff obj when adding a new line', function () {
          const oldText = '# hello\n * one\n * two\n * three\n\n## another \ntesting!';
          const diffObj = DiffUtils.createDiffObject('add', 4, ' * four');

          const result = DiffUtils.applyDiff(oldText, diffObj);
          const expected = '# hello\n * one\n * two\n * three\n * four\n\n## another \ntesting!';

          assert.equal(expected, result);
      });

      it('should transform text using diff obj when modifying a line', function () {
          const oldText = '# hello\n * one\n * two\n * three\n\n## another \ntesting!';
          const diffObj = DiffUtils.createDiffObject('modified', 2, 'YO!');

          const result = DiffUtils.applyDiff(oldText, diffObj);
          const expected = '# hello\n * one\nYO!\n * three\n\n## another \ntesting!';

          assert.equal(expected, result);
      });

      it('should transform text using diff obj when modifying empty string', function () {
          const oldText = '';
          const diffObj = DiffUtils.createDiffObject('modified', 0, 'q');

          const result = DiffUtils.applyDiff(oldText, diffObj);
          const expected = 'q';

          assert.equal(expected, result);
      });

      it('should transform text using diff obj when removing a line', function () {
          const oldText = '# hello\n * one\n * two\n * three\n\n## another \ntesting!';
          const diffObj = DiffUtils.createDiffObject('remove', 2, '');

          const result = DiffUtils.applyDiff(oldText, diffObj);
          const expected = '# hello\n * one\n * three\n\n## another \ntesting!';

          assert.equal(expected, result);
      });
  });
});
