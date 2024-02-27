import React from 'react';

import { ICustomer } from '../../types';
import { formatNumber } from '../../utils';
import useExpand from '../../hooks/useExpand';
import ExpandIcon from '../ExpandIcon';

interface IProps {
    customers: ICustomer[];
}

export function FlexList(props: IProps) {
    const { customers } = props;

    const [expandedCustomers, toggleExpandedCustomer] = useExpand();

    return (
        <ul>

        </ul>
    );
}
