interface FooterPropTypes {
  className?: string;
}

export default function Footer({ className }: FooterPropTypes) {
  return (
    <footer className={className}>
      <div className="footer-inner">SEOPBIT | byseop@gmail.com</div>
    </footer>
  );
}
