import useRealtimeTickers from '@src/utils/hooks/useRealtimeTickers';

interface HomePropTypes {
  className?: string;
}

export default function Home({ className }: HomePropTypes) {
  const tickers = useRealtimeTickers();
  console.log(tickers);
  return <div>123</div>;
}
