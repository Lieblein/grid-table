import React from 'react';

import { ICustomer } from '../../types';
import { formatNumber } from '../../utils';
import useExpand from '../../hooks/useExpand';
import ExpandIcon from '../ExpandIcon';
import './flex-list.pcss';

/*
+ просто сделать
+ свобода вёрстки
+ нативные button & link

- фиксированная ширина
- и как следствие: некрасиво, баги, обрезание контента через ...
*/

interface IProps {
    customers: ICustomer[];
}

export function FlexList(props: IProps) {
    const { customers } = props;

    const [expandedCustomers, toggleExpandedCustomer] = useExpand();

    return (
        <ul>
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
                            <li>
                                <button
                                    className={ `expand-button interaction-item ${isLastCustomer && !expanded ? 'last-list-customer' : ''}` }
                                    type='button'
                                    onClick={ () => toggleExpandedCustomer(id) }
                                >
                                    <div className='list-main'>
                                        <ExpandIcon expanded={ expanded } />
                                        <div className='bold list-name'>
                                            { name }
                                        </div>
                                    </div>
                                    <div className='bold money list-money'>
                                        { formatNumber(revenue, ' ₽') }
                                    </div>
                                    <div className='list-pgm'>
                                        <div className='bold money list-money'>
                                            { formatNumber(pgm, ' ₽') }
                                        </div>
                                        <div className='bold'>
                                            •
                                        </div>
                                        <div className='bold list-percent'>
                                            { formatNumber(pgmPercent, '%') }
                                        </div>
                                    </div>
                                </button>
                            </li>
                            {
                                projects.map(({ id, name, revenue, pgm, pgmPercent }) => (
                                    <li key={ id }>
                                        <a
                                            className={ `interaction-item ${expanded ? '' : 'hidden-interaction-item'}` }
                                            href={ `./project/${id}` }
                                        >
                                            <div className='project-name list-name'>
                                                { name }
                                            </div>
                                            <div className='money list-money'>
                                                { formatNumber(revenue, ' ₽') }
                                            </div>
                                            <div className='list-pgm'>
                                                <div className='money list-money'>
                                                    { formatNumber(pgm, ' ₽') }
                                                </div>
                                                <div>
                                                    •
                                                </div>
                                                <div className='list-percent'>
                                                    { formatNumber(pgmPercent, '%') }
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </React.Fragment>
                    );
                })
            }
        </ul>
    );
}
