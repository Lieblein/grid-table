import React from 'react';

import './app.pcss';

enum DataType {
    USUALLY = 'usually',
    FEW = 'few',
    MANY = 'many',
}

export function App() {
    const [dataType, setDataType] = React.useState(DataType.USUALLY);

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
                <div>
                    TODO:
                </div>
            </section>
            <section className='section'>
                <h2 className='section-title'>
                    Flex
                </h2>
                <div>
                    TODO:
                </div>
            </section>
            <section className='section'>
                <h2 className='section-title'>
                    Grid
                </h2>
                <div>
                    TODO:
                </div>
            </section>
        </div>
    );
}
