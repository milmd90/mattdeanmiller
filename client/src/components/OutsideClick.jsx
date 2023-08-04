import React, { useRef, useEffect } from "react";

/**
 * Hook that calls onClick if clicks outside of the passed ref
 */
function useOutsideClick(ref, onClick, omitElements) {
  useEffect(() => {
    function handleClickOutside(event) {
      let skip = false;
      omitElements.forEach((omit) => {
        const match = !!event.target.closest(omit);
        skip = skip || match;
      })
      if (!skip && ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideClick(props) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.onClick, props.omitElements);
  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideClick;
