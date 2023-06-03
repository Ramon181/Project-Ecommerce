/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProdut, getProductsFiltered, resetFilter, updateFilter } from "../../../redux/action";

const SeachBar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [empty, setEmpty] = useState(false);

  const product = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const navegate = useNavigate()

  useEffect(() => {
    dispatch(getAllProdut());
  }, [dispatch]);

  // console.log(allProductsName, "SearchBar");

  const onSubmit = e => {
    if (search === "") {
      e.preventDefault();
      setEmpty(true);
    } else {
      e.preventDefault();
      dispatch(updateFilter({name: search}));
      navegate("/result")
      dispatch(resetFilter())

      setSearch("");
      setSuggestions([]);
      setEmpty(false);
    }
  };

  const onClick = s => {
    setSearch(s);
    setSuggestions([]);
  };

  const onchange = e => {
    if (e === "") {
      setSearch(e);
      setSuggestions([]);
    } else {
      let matches = [];
      if (e.length > 0) {
        matches = product.filter(p => {
          const regex = new RegExp(`${e}`, "gi");
          return p.name.match(regex);
        });
      }

      console.log(product)

      setSuggestions(matches);

      setSuggestions(matches.slice(0, 10));
      setSearch(e);
      setEmpty(false);
    }
  };

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={(e) => onSubmit(e)}
        autoComplete="off">
        <input
          className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
          type="text"
          name="text"
          value={search}
          onChange={(e) => onchange(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
      {suggestions ? (
        <div  className="flex w-full justify-center relative">
          <ul className="absolute rounded-lg top-0 flex flex-col bg-white w-full z-30">
            {suggestions &&
              suggestions.map((suggestion, i) => (
                <li className="pl-8 rounded-lg pr-2 py-1 border-b-2 border-l-2 border-r-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                  <svg
                    className="absolute w-4 h-4 left-2 top-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p
                    className="text-sm"
                    onClick={() => onClick(suggestion.name)}
                    key={i}
                  >
                    {suggestion.name}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SeachBar;
