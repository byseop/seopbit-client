interface HomeSummaryPropTypes {
  className?: string;
}

export default function HomeSummary({ className }: HomeSummaryPropTypes) {
  return <div className={className} />;
}
