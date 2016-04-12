import React from 'react';
import mui from 'material-ui';
import { write } from '../io/io';
import { calculateDiff } from '../util/DiffUtils';

export default ({ markdown }) => {
    const writeToNetwork = ev => {
        const diffObj = calculateDiff(markdown, ev.target.value);
        write(diffObj);
    }

    return (
        <mui.TextField
            onChange={writeToNetwork}
            value={markdown}
            multiLine={true}
            hintText='Write some markdown...'
            className='edit-text'
        />
    );
}
