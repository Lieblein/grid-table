import React from 'react';

import { IInvoice } from '../../types';
import { formatNumber } from '../../utils';
import './invoices.pcss';

interface IProps {
    className?: string;
    invoices: IInvoice[];
}

export function Invoices({ className, invoices }: IProps) {
    return (
        <div className={ `${className} invoices` }>
            {
                invoices.map((invoice) => {
                    const {
                        id,
                        certificate_number,
                        revenue,
                        completion,
                        end_date,
                        signed,
                    } = invoice;
                    const relativeRevenue = Math.round(revenue * completion / 100);

                    return (
                        <React.Fragment key={ id }>
                            <div className='invoice-grid-item first-invoice-row-item'>
                                <div className='invoice-grid-item-header'>
                                    Acceptance Certificate #
                                </div>
                                <div className='invoice-code'>
                                    { certificate_number ?? '-' }
                                </div>
                            </div>
                            <div className='invoice-grid-item'>
                                <div className='invoice-grid-item-header'>
                                    Revenue w/o VAT
                                </div>
                                <div>
                                    { formatNumber(revenue, ' ₽') }
                                </div>
                            </div>
                            <div className='invoice-grid-item'>
                                <div className='invoice-grid-item-header'>
                                    Completion %
                                </div>
                                <div>
                                    { completion }%
                                </div>
                            </div>
                            <div className='invoice-grid-item'>
                                <div className='invoice-grid-item-header'>
                                    Revenue from WiP, w/o VAT
                                </div>
                                <div>
                                    { formatNumber(relativeRevenue, ' ₽') }
                                </div>
                            </div>
                            <div className='invoice-grid-item'>
                                <div className='invoice-grid-item-header'>
                                    Reporting Period End Date
                                </div>
                                <div>
                                    { end_date }
                                </div>
                            </div>
                            <div className='invoice-grid-item'>
                                <div className='invoice-grid-item-header'>
                                    Invoice Status
                                </div>
                                <div>
                                    { signed ? 'Signed' : 'Not Signed' }
                                </div>
                            </div>
                            <div className='invoice-grid-item empty-invoice-grid-item' />
                            <div className='invoice-grid-item last-invoice-row-item'>
                                <div className='invoice-buttons'>
                                    <button
                                        className='invoice-button'
                                        type='button'
                                    >
                                        <svg
                                            className='invoice-button-icon'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
                                        </svg>
                                    </button>
                                    <button
                                        className='invoice-button'
                                        type='button'
                                    >
                                        <svg
                                            className='invoice-button-icon'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
