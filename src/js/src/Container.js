import React from 'react';

export const Container = props => (
    <div style ={{width: '1400px', margin: '0 auto'}}>
        {props.children}
    </div>
)

export default Container;