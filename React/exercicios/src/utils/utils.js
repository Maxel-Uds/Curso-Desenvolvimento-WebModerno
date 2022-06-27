import React from 'react';

export function childrenWithProps(props) {
    // (array que vai ser manipulado, elemento) 
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props, ...child.props});
    })
}