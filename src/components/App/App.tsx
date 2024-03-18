import React from 'react';

import { ICustomer, IInvoice } from '../../types';
import Table from '../Table';
import FlexList from '../FlexList';
import Grid from '../Grid';
import Invoices from '../Invoices';
import './app.pcss';

enum DataType {
    USUALLY = 'usually',
    FEW = 'few',
    MANY = 'many',
}

const data: Record<DataType, { customers: ICustomer[]; invoices: IInvoice[]; }> = {
    [DataType.USUALLY]: {
        customers: [
            {
                id: 1,
                name: 'Рабочая мама',
                projects: [
                    {
                        id: 11,
                        name: 'Обеспечение притягательных парадигм',
                        revenue: 11500000,
                        pgm: 10000000,
                        pgmPercent: 45,
                    },
                    {
                        id: 12,
                        name: 'Охват наглядных платформ',
                        revenue: 5000000,
                        pgm: -100000,
                        pgmPercent: -10,
                    },
                    {
                        id: 13,
                        name: 'Шкалирование виртуальных решений',
                        revenue: 4200000,
                        pgm: 4200000,
                        pgmPercent: 50,
                    },
                ],
                revenue: 20700000,
                pgm: 13200000,
                pgmPercent: 40,
            },
            {
                id: 2,
                name: 'Кооператив Озеро',
                projects: [
                    {
                        id: 21,
                        name: 'Обеспечение особо притягательных парадигм',
                        revenue: 1150000,
                        pgm: 1000000,
                        pgmPercent: 45,
                    },
                ],
                revenue: 1150000,
                pgm: 1000000,
                pgmPercent: 45,
            },
            {
                id: 3,
                name: 'Друзейка',
                projects: [
                    {
                        id: 31,
                        name: 'Создание проекта через ручку',
                        revenue: 30000000,
                        pgm: -27000000,
                        pgmPercent: -90,
                    },
                ],
                revenue: 30000000,
                pgm: -27000000,
                pgmPercent: -90,
            },
        ],
        invoices: [
            {
                id: 1,
                signed: true,
                certificate_number: null,
                revenue: 100000,
                completion: 100,
                end_date: '2024-01-31',
            },
            {
                id: 2,
                signed: true,
                certificate_number: 'A0-123',
                revenue: 1000000,
                completion: 75,
                end_date: '2024-02-29',
            },
            {
                id: 3,
                signed: false,
                certificate_number: '12345',
                revenue: 10000000,
                completion: 20,
                end_date: '2024-03-31',
            },
        ],
    },
    [DataType.FEW]: {
        customers: [
            {
                id: 1,
                name: 'Рабочая мама',
                projects: [
                    {
                        id: 11,
                        name: 'Обеспечение притягательных парадигм',
                        revenue: 30000,
                        pgm: 10000,
                        pgmPercent: 33,
                    },
                    {
                        id: 12,
                        name: 'Охват наглядных платформ',
                        revenue: 50000,
                        pgm: null,
                        pgmPercent: null,
                    },
                    {
                        id: 13,
                        name: 'Шкалирование виртуальных решений',
                        revenue: null,
                        pgm: null,
                        pgmPercent: null,
                    },
                ],
                revenue: 80000,
                pgm: 10000,
                pgmPercent: 3,
            },
            {
                id: 2,
                name: 'Кооператив Озеро',
                projects: [
                    {
                        id: 21,
                        name: 'Обеспечение особо притягательных парадигм',
                        revenue: null,
                        pgm: null,
                        pgmPercent: null,
                    },
                ],
                revenue: null,
                pgm: null,
                pgmPercent: null,
            },
            {
                id: 3,
                name: 'Друзейка',
                projects: [
                    {
                        id: 31,
                        name: 'Создание проекта через ручку',
                        revenue: null,
                        pgm: null,
                        pgmPercent: null,
                    },
                ],
                revenue: null,
                pgm: null,
                pgmPercent: null,
            },
        ],
        invoices: [
            {
                id: 1,
                signed: true,
                certificate_number: null,
                revenue: 0,
                completion: 100,
                end_date: '2024-01-31',
            },
            {
                id: 2,
                signed: true,
                certificate_number: 'A0-123',
                revenue: 0,
                completion: 75,
                end_date: '2024-02-29',
            },
            {
                id: 3,
                signed: false,
                certificate_number: '12345',
                revenue: 0,
                completion: 20,
                end_date: '2024-03-31',
            },
        ],
    },
    [DataType.MANY]: {
        customers: [
            {
                id: 1,
                name: 'Рабочая мама',
                projects: [
                    {
                        id: 11,
                        name: 'Обеспечение притягательных парадигм',
                        revenue: 11500000,
                        pgm: 10000000,
                        pgmPercent: 45,
                    },
                    {
                        id: 12,
                        name: 'Охват наглядных платформ',
                        revenue: 5000000,
                        pgm: -100000,
                        pgmPercent: -10,
                    },
                    {
                        id: 13,
                        name: 'Шкалирование виртуальных решений',
                        revenue: 4200000,
                        pgm: 4200000,
                        pgmPercent: 50,
                    },
                ],
                revenue: 20700000,
                pgm: 13200000,
                pgmPercent: 40,
            },
            {
                id: 2,
                name: 'Кооператив Озеро',
                projects: [
                    {
                        id: 21,
                        name: 'Обеспечение особо притягательных парадигм',
                        revenue: 1150000,
                        pgm: 100000000,
                        pgmPercent: 450,
                    },
                ],
                revenue: 1150000,
                pgm: 100000000,
                pgmPercent: 450,
            },
            {
                id: 3,
                name: 'Друзейка',
                projects: [
                    {
                        id: 31,
                        name: 'Создание проекта через ручку',
                        revenue: 300000000,
                        pgm: -270000000,
                        pgmPercent: -91.125,
                    },
                ],
                revenue: 300000000,
                pgm: -270000000,
                pgmPercent: -91.125,
            },
        ],
        invoices: [
            {
                id: 1,
                signed: true,
                certificate_number: null,
                revenue: 100000,
                completion: 100,
                end_date: '2024-01-31',
            },
            {
                id: 2,
                signed: true,
                certificate_number: 'db663d6f-2e75-11ed-b8db-1831bf6945b2',
                revenue: 1000000,
                completion: 75,
                end_date: '2024-02-29',
            },
            {
                id: 3,
                signed: false,
                certificate_number: '12345',
                revenue: 100000000,
                completion: 20,
                end_date: '2024-03-31',
            },
        ],
    },
};

export function App() {
    const [dataType, setDataType] = React.useState(DataType.USUALLY);
    const { customers, invoices } = data[dataType];

    return (
        <div className='app'>
            <div className='button-group'>
                <div className='button-group-title'>
                    Контента
                </div>
                <button
                    className={ `button ${dataType === DataType.USUALLY ? 'active-button' : ''}` }
                    type='button'
                    onClick={ () => setDataType(DataType.USUALLY) }
                >
                    обычно
                </button>
                <button
                    className={ `button ${dataType === DataType.FEW ? 'active-button' : ''}` }
                    type='button'
                    onClick={ () => setDataType(DataType.FEW) }
                >
                    мало
                </button>
                <button
                    className={ `button ${dataType === DataType.MANY ? 'active-button' : ''}` }
                    type='button'
                    onClick={ () => setDataType(DataType.MANY) }
                >
                    много
                </button>
            </div>
            <section className='section'>
                <h2 className='section-title'>
                    Table
                </h2>
                <Table customers={ customers } />
            </section>
            <section className='section'>
                <h2 className='section-title'>
                    Flex
                </h2>
                <FlexList customers={ customers } />
            </section>
            <section className='section'>
                <h2 className='section-title'>
                    Grid
                </h2>
                <Grid customers={ customers } />
            </section>
            <section className='section'>
                <h2 className='section-title'>
                    Invoices
                </h2>
                <Invoices
                    className='invoices-container small-invoices-container'
                    invoices={ invoices }
                />
                <Invoices
                    className='invoices-container large-invoices-container'
                    invoices={ invoices }
                />
            </section>
        </div>
    );
}
