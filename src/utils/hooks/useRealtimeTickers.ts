import { useState, useEffect } from 'react';
import useRootState from './useRootState';
import { MarketCode, Ticker } from '@src/types/upbit';

export type Tickers = {
  [key: string]: Ticker & MarketCode;
};

export default function useRealtimeTickers(currency: string = 'KRW') {
  const [tickers, setTickers] = useState<Tickers>({});
  const markets = useRootState((state) => state.markets);

  useEffect(() => {
    let ws: WebSocket;
    if (markets.data) {
      const marketCodes = markets.data
        .filter((m) => m.market.slice(0, 3) === currency)
        .map((m) => m.market);

      ws = new WebSocket('wss://api.upbit.com/websocket/v1');

      ws.onopen = () => {
        ws.send(
          `[{"ticket":"test"},{"type":"ticker","codes": ${JSON.stringify(
            marketCodes
          )}}]`
        );
      };

      ws.onmessage = async (e) => {
        const { data } = e;
        const ticker: Ticker = JSON.parse(await new Response(data).text());
        setTickers((prev) => ({
          ...prev,
          [ticker.code]: {
            ...ticker,
            ...(markets.data?.find(
              (m) => m.market === ticker.code
            ) as MarketCode)
          }
        }));
      };

      ws.onerror = (e) => {
        throw new Error(e as any);
      };
    }
    return () => ws?.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markets, currency]);

  return tickers;
}
