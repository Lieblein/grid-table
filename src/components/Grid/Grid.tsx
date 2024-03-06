import React from 'react';

import { ICustomer } from '../../types';
import { formatNumber } from '../../utils';
import useExpand from '../../hooks/useExpand';
import ExpandIcon from '../ExpandIcon';
import './grid.pcss';

/*
+ хорошо смотрится для разного размера контента
+ есть контекстное меню ссылки

- tab + focus не работает
Но скоро будет - https://github.com/whatwg/html/pull/9425
- Убили доступность <button /> & <a />.
Браузеры удаляют любой элемент с display: contents из дерева доступности.
https://developer.mozilla.org/ru/docs/Web/CSS/display#display_contents
*/

interface IProps {
    customers: ICustomer[];
}

export function Grid(props: IProps) {
    const { customers } = props;

    const [expandedCustomers, toggleExpandedCustomer] = useExpand();

    return (
        <div className='grid-container'>
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
                            <button
                                className={ `expand-button grid-row grid-customer-row ${isLastCustomer && !expanded ? 'last-grid-customer' : ''}` }
                                type='button'
                                onClick={ () => toggleExpandedCustomer(id) }
                            >
                                <div className='grid-item'>
                                    <ExpandIcon expanded={ expanded } />
                                </div>
                                <div className='bold grid-item'>
                                    { name }
                                </div>
                                <div className='bold money grid-item grid-revenue'>
                                    { formatNumber(revenue, ' ₽') }
                                </div>
                                <div className='bold money grid-item'>
                                    { formatNumber(pgm, ' ₽') }
                                </div>
                                <div className='bold grid-item'>
                                    •
                                </div>
                                <div className='bold grid-item'>
                                    { formatNumber(pgmPercent, '%') }
                                </div>
                            </button>
                            {
                                projects.map(({ id, name, revenue, pgm, pgmPercent }) => (
                                    <a
                                        key={ id }
                                        className={ `grid-row ${expanded ? '' : 'hidden-row'}` }
                                        href={ `./project/${id}` }
                                    >
                                        <div className='grid-item' />
                                        <div className='project-name grid-item'>
                                            { name }
                                        </div>
                                        <div className='money grid-item grid-revenue'>
                                            { formatNumber(revenue, ' ₽') }
                                        </div>
                                        <div className='money grid-item'>
                                            { formatNumber(pgm, ' ₽') }
                                        </div>
                                        <div className='grid-item'>
                                            •
                                        </div>
                                        <div className='grid-item'>
                                            { formatNumber(pgmPercent, '%') }
                                        </div>
                                    </a>
                                ))
                            }
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
