import { createContext, useState, useEffect, useRef } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [dropVisible, setDropVisible] = useState(false);
  const [dropVisibleSecond, setDropVisibleSecond] = useState(false);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false); // State to manage arrow rotation
  const [arrowRotatedSecond, setArrowRotatedSecond] = useState(false); // State to manage arrow rotation

  const dropdownRef = useRef(null); // Ref for first dropdown
  const dropdownRefSecond = useRef(null); // Ref for second dropdown

  // Toggle first dropdown visibility
  const toggleDropdown = () => {
    setDropVisible((prevState) => !prevState); // Toggles between true and false
    setArrowRotated((prevState) => !prevState);
    setDropVisibleSecond(false); // Close second dropdown if open
    setArrowRotatedSecond(false);
  };

  // Toggle second dropdown visibility
  const toggleDropdownSecond = () => {
    setDropVisibleSecond((prevState) => !prevState); // Toggles between true and false
    setArrowRotatedSecond((prevState) => !prevState);
    setDropVisible(false); // Close first dropdown if open
    setArrowRotated(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        dropdownRefSecond.current &&
        !dropdownRefSecond.current.contains(event.target)
      ) {
        // Close both dropdowns if click is outside
        setDropVisible(false);
        setArrowRotated(false);
        setDropVisibleSecond(false);
        setArrowRotatedSecond(false);
      }
    };

    // Add event listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, dropdownRefSecond]);

  const value = {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    visible,
    setVisible,
    dropVisible,
    setDropVisible,
    toggleDropdown,
    dropVisibleSecond,
    setDropVisibleSecond,
    arrowRotatedSecond,
    setArrowRotatedSecond,
    arrowRotated,
    setArrowRotated,
    toggleDropdownSecond,
    dropdownRef, // Pass ref for first dropdown
    dropdownRefSecond, // Pass ref for second dropdown
  };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
