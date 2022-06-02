import React, { useRef, useState, useEffect } from 'react';

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
  const [selected, setSelected] = useState(category[0]);

  const onClick = () => setIsActive(!isActive);

  const onClickHelpful = () => {
    setSelected(category[1]);
    setIsActive(!isActive);
  };

  const onClickNewest = () => {
    setSelected(category[2]);
    setIsActive(!isActive);
  };

  const onClickRelative = () => {
    setSelected(category[0]);
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <div className="menu-container">
        <span onClick={onClick} className="menu-trigger">
          <span>{selected}</span>
          <span className="material-symbols-outlined" style={{ verticalAlign: 'middle'}}>expand_more</span>
        </span>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "inactive" : "active"}`}
        >
          <ul>
            {category[0] === selected ? <div></div> :
              <li>
                <a onClick={onClickRelative}>{category[0]}</a>
              </li>
            }
            {category[1] === selected ? <div></div> :
              <li>
                <a onClick={onClickHelpful}>{category[1]}</a>
              </li>
            }
            {category[2] === selected ? <div></div> :
              <li>
                <a onClick={onClickNewest}>{category[2]}</a>
              </li>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sorter;
