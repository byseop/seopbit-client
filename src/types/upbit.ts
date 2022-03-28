export interface MarketCode {
  market: string;
  korean_name: string;
  english_name: string;
}

export type ChangeEnum = 'RISE' | 'FALL' | 'EVEN';

export type TradeTypeEnum = 'ASK' | 'BID';
export interface Ticker {
  type: 'ticker';
  code: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: ChangeEnum;
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  trade_date: string;
  trade_time: string;
  trade_timestamp: number;
  ask_bid: TradeTypeEnum;
  acc_ask_volume: number;
  acc_bid_volume: number;
  highest_52_week_price: number;
  highest_52_week_date: number;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  market_state: string;
  is_trading_suspended: boolean;
  delisting_date: string;
  market_warning: string;
  timestamp: number;
  stream_type: string;
}
