import React, { useState } from 'react';
import { MarketCode, Ticker } from '@src/types/upbit';
import { Tickers } from '@utils/hooks/useRealtimeTickers';
import { filterList } from './constant';
import { changePrefix } from '@utils/changePrefix';

interface HomeTablePropTypes {
  className?: string;
  tickers: Tickers;
}

function HomeTable({ className, tickers }: HomeTablePropTypes) {
  const [filter, setFilter] = useState('All');

  const handleClickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const disabled = e.currentTarget.getAttribute('disabled');
    !disabled && setFilter(e.currentTarget.getAttribute('data-value') || 'All');
  };

  return (
    <div className={className}>
      <div className="table-inner">
        <div className="table-tab">
          <ul>
            {filterList.map((list) => (
              <li
                key={list.value}
                className={`${filter === list.value ? 'active' : ''}`}
              >
                <button
                  onClick={handleClickFilter}
                  data-value={list.value}
                  disabled={!list.available}
                >
                  {list.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="table-wrap">
          <div className="table-row table-header">
            <div className="table-col name t-l">
              <span>코인명</span>
            </div>
            <div className="table-col price t-r">
              <span>현재가격</span>
            </div>
            <div className="table-col change t-r">
              <span>전일대비</span>
            </div>
            <div className="table-col volume t-r">
              <span>24시간 거래대금</span>
            </div>
            <div className="table-col highest t-l">
              <span>최근 1년 최고가 (오늘 비율)</span>
            </div>
          </div>
          {Object.values(tickers).map((ticker) => (
            <Row ticker={ticker} key={ticker.code} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(HomeTable);

const Row = React.memo(({ ticker }: { ticker: Ticker & MarketCode }) => {
  // console.log('rerender');
  const code = ticker.code.split('-')[1];
  return (
    <div className="table-row">
      <div className="table-col name t-l">
        <div className="logo">
          <img src={`https://static.upbit.com/logos/${code}.png`} alt={code} />
        </div>
        <span className="code">{code}</span>
        <span className="name">{ticker.korean_name}</span>
      </div>
      <div className="table-col price t-r">
        <span className={`color-${ticker.change}`}>
          {ticker.trade_price.toLocaleString()}
        </span>
      </div>
      <div className="table-col change t-r">
        <span className={`color-${ticker.change}`}>
          {changePrefix(ticker.change)}
          {(ticker.change_rate * 100).toFixed(2)}%
        </span>
      </div>
      <div className="table-col volume t-r">
        <span className={`color-${ticker.change}`}>
          {parseInt(
            (ticker.acc_trade_price_24h / 1000000).toFixed(0)
          ).toLocaleString()}{' '}
          <i>백만</i>
        </span>
      </div>
      <div className="table-col highest t-l">
        <span>
          {ticker.highest_52_week_price.toLocaleString()} (
          {((ticker.trade_price / ticker.highest_52_week_price) * 100).toFixed(
            2
          )}
          %)
        </span>
      </div>
    </div>
  );
});
