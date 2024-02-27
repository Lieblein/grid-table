import React from 'react';

import { ICustomer } from '../../types';
import { formatNumber } from '../../utils';
import useExpand from '../../hooks/useExpand';
import ExpandIcon from '../ExpandIcon';
import './table.pcss';

/*
+ просто сделать
+ хорошо смотрится для разного размера контента

- даже с tr + tabIndex, tab + enter не работает
- при закрывании expand нет анимации
- нет контекстного меню ссылки
*/

interface IProps {
    customers: ICustomer[];
}

export function Table(props: IProps) {
    const { customers } = props;

    const [expandedCustomers, toggleExpandedCustomer] = useExpand();

    return (
        <table className='table'>
            <tbody>
                {
                    customers.map((customer, index) => {
                        const {
                            id,
                            name,
                            revenue,
                            pgm,
                            pgmPercent,
                            projects,
                        } = customer;

                        const expanded = expandedCustomers.has(id);
                        const isLastCustomer = customers.length - 1 === index;

                        return (
                            <React.Fragment key={ id }>
                                <tr
                                    className={ `table-customer ${isLastCustomer && !expanded ? 'last-table-customer' : ''}` }
                                    onClick={ () => toggleExpandedCustomer(id) }
                                    tabIndex={ 0 }
                                >
                                    <td>
                                        <ExpandIcon expanded={ expanded } />
                                    </td>
                                    <td className='bold table-name'>
                                        { name }
                                    </td>
                                    <td className='bold money table-revenue'>
                                        { formatNumber(revenue, ' ₽') }
                                    </td>
                                    <td className='bold money'>
                                        { formatNumber(pgm, ' ₽') }
                                    </td>
                                    <td className='bold table-dot'>
                                        •
                                    </td>
                                    <td className='bold'>
                                        { formatNumber(pgmPercent, '%') }
                                    </td>
                                </tr>
                                {
                                    projects.map(({ id, name, revenue, pgm, pgmPercent }) => (
                                        <tr
                                            key={ id }
                                            className={ expanded ? '' : 'hidden-tr' }
                                            onClick={ () => document.location.href = `./project/${id}` }
                                            tabIndex={ 0 }
                                        >
                                            <td />
                                            <td className='table-name project-name'>
                                                { name }
                                            </td>
                                            <td className='money table-revenue'>
                                                { formatNumber(revenue, ' ₽') }
                                            </td>
                                            <td className='money'>
                                                { formatNumber(pgm, ' ₽') }
                                            </td>
                                            <td className='table-dot'>
                                                •
                                            </td>
                                            <td>
                                                { formatNumber(pgmPercent, '%') }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </React.Fragment>
                        );
                    })
                }
            </tbody>
        </table>
    );
}
