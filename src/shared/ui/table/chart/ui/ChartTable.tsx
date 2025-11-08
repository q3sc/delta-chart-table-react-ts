import type { ChartTableProps, TableDataRowProps } from './ChartTable.types'
import './ChartTable.scss'
import { useState } from 'react'
import React from 'react'
import LinearChart from '../../../chart/linear'


/**
 * Constants, variables
 */

const blockName: string = 'chart-table'


/**
 * Functions
 */

const isIncreased = (todaysValue : number, comaringValue : number) : boolean => {
    return todaysValue > comaringValue
}

const isDecreased = (todaysValue : number, comaringValue : number) : boolean => {
    return todaysValue < comaringValue
}

const getCellBackgroundColorClassName = (todaysValue : number, comaringValue : number) : string => {
    const increased = isIncreased(todaysValue, comaringValue)
    const decreased = isDecreased(todaysValue, comaringValue)

    let className = ''

    if (decreased || increased) {
        className = `${blockName}__body-cell--background-color-${decreased ? 'red' : 'green'}`
    }

    return className
}

const getCellPercentTextColorClassName = (todaysValue : number, comaringValue : number) : string => {
    return isDecreased(todaysValue, comaringValue) ? `${blockName}__body-cell-percent--text-color-red` : ''
}

const percentageDiff = (todaysValue : number, comaringValue : number) : number => {
    return Math.round(((todaysValue - comaringValue) / comaringValue) * 100)
}


/**
 * Conponent
 */

const ChartTable = ({data} : ChartTableProps) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)

    const handleRowClick = (index: number) => {
        setSelectedRowIndex(selectedRowIndex === index ? null : index)
    }

    const handleRowKeyUp = (event: React.KeyboardEvent<HTMLTableRowElement>, index: number) => {
        event.key === 'Enter' && setSelectedRowIndex(selectedRowIndex === index ? null : index)
    }
    
    return (
        <div className={`${blockName}-wrapper`}>
            <table className={blockName}>
                <thead className={`${blockName}__header`}>
                    <tr className={`${blockName}__header-row`}>
                        <th className={`${blockName}__header-cell`}>Показатель</th>
                        <th className={`${blockName}__header-cell ${blockName}__header-cell--2`}>Текущий день</th>
                        <th className={`${blockName}__header-cell`}>Вчера</th>
                        <th className={`${blockName}__header-cell`}>Этот день недели</th>
                    </tr>
                </thead>
                <tbody className={`${blockName}__body`}>
                    {data.map((rowData: TableDataRowProps, index: number) => {
                        const isRowSelected = selectedRowIndex === index

                        return (
                            <React.Fragment key={index}>
                                <tr className={`${blockName}__body-row`} tabIndex={0} key={index} onClick={() => handleRowClick(index)} onKeyUp={(event) => handleRowKeyUp(event, index)}>
                                    <td className={`${blockName}__body-cell ${blockName}__body-cell--1`}>{rowData[0]}</td>
                                    <td className={`${blockName}__body-cell ${blockName}__body-cell--2`}>{rowData[1]}</td>
                                    <td className={`${blockName}__body-cell ${blockName}__body-cell--3 ${getCellBackgroundColorClassName(rowData[1], rowData[2])}`}>
                                        <div className={`${blockName}__body-cell-grid`}>
                                            {rowData[2]}
                                            <span className={`${blockName}__body-cell-percent ${getCellPercentTextColorClassName(rowData[1], rowData[2])}`}>
                                                <b>{percentageDiff(rowData[1], rowData[2])}</b>%
                                            </span>
                                        </div>
                                    </td>
                                    <td className={`${blockName}__body-cell ${getCellBackgroundColorClassName(rowData[1], rowData[3])}`}>{rowData[3]}</td>
                                </tr>
                                {isRowSelected && (
                                    <tr key={`chart-${index}`}>
                                        <td colSpan={4} className={`${blockName}__chart-cell`}>
                                            <LinearChart/>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        )
                    })}
                </tbody>    
            </table>
        </div>
    )
}


export default ChartTable
