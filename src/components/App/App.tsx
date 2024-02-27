import React from 'react';

import { ICustomer } from '../../types';
import Table from '../Table';
import FlexList from '../FlexList';
import Grid from '../Grid';
import './app.pcss';

enum DataType {
    USUALLY = 'usually',
    FEW = 'few',
    MANY = 'many',
}

const data: Record<DataType, ICustomer[]> = {
    [DataType.USUALLY]: [
        {
            id: 1,
            name: 'Don Danon',
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
            name: 'ИП Овальный',
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
    [DataType.FEW]: [
        {
            id: 1,
            name: 'Don Danon',
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
            name: 'ИП Овальный',
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
    [DataType.MANY]: [
        {
            id: 1,
            name: 'Don Danon',
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
            name: 'ИП Овальный',
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
};

export function App() {
    const [dataType, setDataType] = React.useState(DataType.USUALLY);
    const customers = data[dataType];

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
        </div>
    );
}
