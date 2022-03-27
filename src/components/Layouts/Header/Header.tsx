import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

interface HeaderPropTypes {
  className?: string;
}

export default function Header({ className }: HeaderPropTypes) {
  return (
    <header className={className}>
      <div className="header-inner">
        <h1 className="logo">SEOPBIT</h1>

        <nav className="gnb">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => `${isActive ? 'on' : ''}`}
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exchange"
                className={({ isActive }) => `${isActive ? 'on' : ''}`}
              >
                거래소
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="user">
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/register" className="register">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
