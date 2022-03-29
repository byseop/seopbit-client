import useRealtimeTickers from '@src/utils/hooks/useRealtimeTickers';
import HomeSummary from '@components/Home/HomeSummary';
import HomeTable from '@components/Home/HomeTable';

interface HomePropTypes {
  className?: string;
}

export default function Home({ className }: HomePropTypes) {
  const tickers = useRealtimeTickers();
  return (
    <div className="home">
      <HomeSummary />
      <HomeTable tickers={tickers} />
    </div>
  );
}
