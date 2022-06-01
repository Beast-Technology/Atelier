import React, { useRef, useState, useEffect } from 'react';
// import { useDetectOutsideClick } from '../helper/DetectClick.jsx';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
 const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

function Sorter() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(useDetectOutsideClick(dropdownRef, false));
  const [category, setCategory] = useState(['Relative', 'Helpful', 'Newest']);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <span onClick={onClick} className="menu-trigger">
          <span>{category[0]}</span>
          <span className="material-symbols-outlined" style={{ verticalAlign: 'middle'}}>expand_more</span>
        </span>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "inactive" : "active"}`}
        >
          <ul>
            <li>
              <a href="#">{category[1]}</a>
            </li>
            <li>
              <a href="#">{category[2]}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sorter;
