#### Frontend Fiverr-clone:

**Q.1** Initially only navbar should be visible not menu item should visible on scrolling menu item should appear and also color of navbar & menu item should be white.

**Soln :**

- Define a useState var name **active** and its setter as **setActive**.

- define a fn name **isActive** which check **window.scroll > 0** or not.

- Define useEffect hook -> call isActive function -> addEventListener on scroll & fn will be isActive.

Note:

- whenever we use addEventListner we need to define cleanup fn as well.
  see code.

```jsx
import { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  // const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    isActive();
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>sign in</span>
          <span>Become a seller</span>
          <button style={active ? { color: "#000" } : { color: "#fff" }}>
            Join
          </button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test1</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
```

**Q2.** some functionality should be visible based on currentUser for ex-

**Soln:**

```js
const currentUser = {
  id: 1,
  username: "sanjeev",
  isSeller: true,
};
```

if currentUser have then we don't show login , and if currentUser is seller then only we show gig and add new gig etc.

**Q3.** How to make upload file input ?

```html
<!-- for single upload  -->
<input type="file" />
<!-- for multiple upload  -->
<input type="file" multiple />
```

**Q4.** slider

- here we use infinite slider which you can find on npm but this is not compatible with react v18 please other options

#### new branch created named as "home"
