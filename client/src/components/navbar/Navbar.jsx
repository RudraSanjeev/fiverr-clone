import { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState(false);
  useEffect(() => {
    isActive();
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  // useLocation give the url related things
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const currentUser = {
    id: 1,
    username: "sanjeev",
    isSeller: true,
  };

  const handleOptions = () => {
    setOptions(!options);
  };
  const resetOptions = () => {
    setOptions(false);
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>sign in</span>}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && (
            <button style={active ? { color: "#000" } : { color: "#fff" }}>
              Join
            </button>
          )}
          {currentUser && (
            <div className="user">
              <img
                src="data:image/jpeg;base64,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"
                alt="imgErr"
                onClick={handleOptions}
              />
              <span>{currentUser?.username}</span>
              <div
                className="options"
                style={!options ? { display: "none" } : { display: "flex" }}
              >
                {currentUser?.isSeller && (
                  <>
                    <Link
                      to="/mygigs"
                      className="link optionLink"
                      onClick={(e) => setOptions(false)}
                    >
                      Gigs
                    </Link>
                    <Link
                      to="/add"
                      className="link optionLink"
                      onClick={(e) => setOptions(false)}
                    >
                      Add new Gig
                    </Link>
                  </>
                )}
                <Link
                  to="/orders"
                  className="link optionLink"
                  onClick={(e) => setOptions(false)}
                >
                  Orders
                </Link>
                <Link
                  to="/messages"
                  className="link optionLink"
                  onClick={(e) => setOptions(false)}
                >
                  Messages
                </Link>
                <Link
                  to="/message"
                  className="link optionLink"
                  onClick={(e) => setOptions(false)}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/" className="link ">
              Graphics & Design
            </Link>
            <Link to="/" className="link optionLink">
              Video & Animation
            </Link>
            <Link to="/" className="link optionLink">
              Writing & Translation
            </Link>
            <Link to="/" className="link optionLink">
              AI Services
            </Link>
            <Link to="/" className="link optionLink">
              Digital Marketing
            </Link>
            <Link to="/" className="link optionLink">
              Music & Audio
            </Link>
            <Link to="/" className="link optionLink">
              Programming & Tech
            </Link>
            <Link to="/" className="link optionLink">
              Business
            </Link>
            <Link to="/" className="link optionLink">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
