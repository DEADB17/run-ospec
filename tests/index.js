'use strict';

/*eslint-disable no-magic-numbers */

const o = require('ospec');

o.spec('math', () => {
    o('addition', () => {
        o(1 + 1).equals(2);
    });

    o('subtraction', () => {
        o(1 - 1).notEquals(2);
    });
});
