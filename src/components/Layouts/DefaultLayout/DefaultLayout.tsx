import Header from '../Header';

interface DefaultLayoutPropTypes {
  className?: string;
  children: React.ReactNode;
}

export default function DefaultLayout({
  className,
  children
}: DefaultLayoutPropTypes) {
  return (
    <main className={className}>
      <Header />
      <section className="main-section">{children}</section>
    </main>
  );
}
