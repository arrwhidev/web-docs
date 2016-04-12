export const calculateDiff = (oldText, newText) => {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');
    return calculateModifiedLine(oldLines, newLines);
}

export const applyDiff = (oldText, diffObj) => {
    const oldLines = oldText.split('\n');

    if(diffObj.op === 'add') {
        oldLines.splice(diffObj.line, 0, diffObj.text);
    } else if(diffObj.op === 'modified') {
        oldLines[diffObj.line] = diffObj.text;
    } else if(diffObj.op === 'remove') {
        oldLines.splice(diffObj.line, 1);
    }

    return oldLines.reduce((prev, curr) => {
        if(prev === '') return curr;
        return prev + '\n' + curr;
    }, '');
}

export const createDiffObject = (op, line, text) => {
    return { op, line, text };
}

export const calculateModifiedLine = (oldLines, newLines) => {
    let op, len;
    if(newLines.length > oldLines.length) {
        op = 'add';
        len = newLines.length;
    } else if(newLines.length < oldLines.length) {
        op = 'remove';
        len = oldLines.length;
    } else {
        op = 'modified';
        len = oldLines.length;
    }

    for(let i = 0; i < len; i++) {
        if(oldLines[i] !== newLines[i]) {
            let text = newLines[i];
            if(op === 'remove') text = '';
            return createDiffObject(op, i, text);
        }
    }

    return createDiffObject('nothing', 0, '');
}
