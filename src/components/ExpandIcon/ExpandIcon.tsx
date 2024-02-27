import React from 'react';

import './expand-icon.pcss';

interface IProps {
    expanded: boolean;
}

export function ExpandIcon(props: IProps) {
    const { expanded } = props;

    return (
        <div className={ `expand-icon ${expanded ? 'expanded-icon' : ''}` } />
    );
}
