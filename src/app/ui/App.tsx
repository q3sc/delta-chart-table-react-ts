import ChartTable from '../../shared/ui/table/chart';
import type { TableDataProps } from '../../shared/ui/table/chart/ui/ChartTable.types';
import './App.scss'


const App = () => {
  const data: TableDataProps = [
    [
      'Выручка, руб',
      500521,
      480521,
      4805121,
    ],
    [
      'Наличные',
      300000,
      300000,
      300000,
    ],
    [
      'Безналичный расчет',
      100000,
      100000,
      100000,
    ],
    [
      'Кредитные карты',
      100521,
      100521,
      100521,
    ],
    [
      'Средний чек, руб',
      1300,
      900,
      900,
    ],
    [
      'Средний гость, руб',
      1200,
      800,
      800,
    ],
    [
      'Удаление из чека (после оплаты), руб',
      1000,
      1100,
      900,
    ],
    [
      'Удаление из чека (до оплаты), руб',
      1300,
      1300,
      900,
    ],
    [
      'Количество чеков',
      34,
      36,
      34,
    ],
    [
      'Количество гостей',
      34,
      36,
      32,
    ]
  ]

  return (
    <div className="app">
      <div className="container">
        <ChartTable data={data} />
      </div>
    </div>
  )
}


export default App
