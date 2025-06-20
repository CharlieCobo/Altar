import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router";

export default () => {
    const parent = useRef(null);
  
    useEffect(() => {
      parent.current && autoAnimate(parent.current);
    }, [parent]);
  
    return (
      <>
        <nav>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/crews/list" className="nav-link">
            Crews
          </Link>
          <Link to="/band" className="nav-link">
            Band
          </Link>
        </nav>
        <main ref={parent}>
          <Outlet />
        </main>
      </>
    );
  };