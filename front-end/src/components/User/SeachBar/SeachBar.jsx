/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllProdut,
  getProductsFiltered,
  resetFilter,
  updateFilter,
} from "../../../redux/action";

const SeachBar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [empty, setEmpty] = useState(false);

  const product = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const navegate = useNavigate();

  useEffect(() => {
    dispatch(getAllProdut());
  }, [dispatch]);

  // console.log(allProductsName, "SearchBar");

  const onSubmit = (e) => {
    if (search === "") {
      e.preventDefault();
      setEmpty(true);
    } else {
      e.preventDefault();
      dispatch(updateFilter({ name: search }));
      navegate("/result");
      dispatch(resetFilter());

      setSearch("");
      setSuggestions([]);
      setEmpty(false);
    }
  };

  const onClick = (s) => {
    setSearch(s);
    setSuggestions([]);
  };

  const onchange = (e) => {
    if (e === "") {
      setSearch(e);
      setSuggestions([]);
    } else {
      let matches = [];
      if (e.length > 0) {
        matches = product.filter((p) => {
          const regex = new RegExp(`${e}`, "gi");
          return p.name.match(regex);
        });
      }

      console.log(product);

      setSuggestions(matches);

      setSuggestions(matches.slice(0, 10));
      setSearch(e);
      setEmpty(false);
    }
  };

  return (
    <form action="" className="text-[13px] w-full mt-0 mb-1 mx-1" >
      <table className="border-spacing-[0_0] w-full mb-0.5 border-none border-0">
        <tbody className="table-row-group align-middle border-inherit">
          <tr className="table-row border-inherit align-middle">

            <td className="pr-3 align-middle  text-base">
              <div className="border border-solid border-[#a5a5a7] bg-white focus:border-[#1F2029] hover:border-[#1F2029] " >
                <table className="w-full p-0 border-spacing-0 border-collapse" >
                  <tbody className="table-row-group align-middle border-inherit">
                    <tr className="table-row border-inherit align-middle">
                      <td className=" align-middle pt-[5px] pb-1 px-[9px] w-full table-cell leading-none " >
                        <input
                        className="w-full h-auto m-0 p-0 border-[none] bg-left bg-no-repeat focus:border-[#1F2029] hover:border-[#1F2029] outline-none bg-[url('https://www.google.com/cse/static/images/1x/en/branding.png')]"
                          type="text"
                          name="search"
                          value={search}
                          onChange={(e) => onchange(e.target.value)}
                        />
                      </td>
                      <td className="table-cell" >
                        <div className="text-base relative select-none whitespace-nowrap px-0.5 py-0 ">
                          <button className="hidden cursor-pointer px-1 py-0 hover:inline-block" >
                            <span>x</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>

            <td className="align-middle  ml-0.5 w-[1%] leading-none" >
              <button className="bg-[#e9e9e9] bg-none border-[#1F2029] text-[0] w-auto align-middle border  px-[27px] py-1.5 rounded-sm border-solid">
                <svg
                  className="ml-auto h-5 px-4 text-gray-800 svg-inline--fa fa-search fa-w-16 fa-9x"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  ></path>
                </svg>
              </button>
            </td>

            

          </tr>
        </tbody>
      </table>
    </form>
  );

  // return (
  //   <div className="w-full h-full bg-gray-100 rounded flex flex-row items-center">
  //     <input
  //       className="border-l w-full h-full border-gray-300 bg-transparent font-semibold text-sm pl-4"
  //       type="text"
  //       placeholder="I'm searching for ..."
  //     />
  //     <button>
  //       <svg
  //         className="ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"
  //         aria-hidden="true"
  //         focusable="false"
  //         data-prefix="far"
  //         data-icon="search"
  //         role="img"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 512 512"
  //       >
  //         <path
  //           fill="currentColor"
  //           d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
  //         ></path>
  //       </svg>
  //     </button>
  //   </div>
  //   // <div className="w-full">
  //   //   <form className="w-full" onSubmit={(e) => onSubmit(e)}
  //   //     autoComplete="off">
  //   //     <input
  //   //       className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
  //   //       type="text"
  //   //       name="text"
  //   //       value={search}
  //   //       onChange={(e) => onchange(e.target.value)}
  //   //       placeholder="Search"
  //   //     />
  //   //     <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
  //   //       <svg
  //   //         className="text-gray-600 h-4 w-4 fill-current"
  //   //         xmlns="http://www.w3.org/2000/svg"
  //   //         version="1.1"
  //   //         id="Capa_1"
  //   //         x="0px"
  //   //         y="0px"
  //   //         viewBox="0 0 56.966 56.966"
  //   //         width="512px"
  //   //         height="512px"
  //   //       >
  //   //         <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
  //   //       </svg>
  //   //     </button>
  //   //   </form>
  //   //   {suggestions ? (
  //   //     <div  className="flex w-full justify-center relative">
  //   //       <ul className="absolute rounded-lg top-0 flex flex-col bg-white w-full z-30">
  //   //         {suggestions &&
  //   //           suggestions.map((suggestion, i) => (
  //   //             <li key={i} className="pl-8 rounded-lg pr-2 py-1 border-b-2 border-l-2 border-r-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
  //   //               <svg
  //   //                 className="absolute w-4 h-4 left-2 top-2"
  //   //                 xmlns="http://www.w3.org/2000/svg"
  //   //                 viewBox="0 0 20 20"
  //   //                 fill="currentColor"
  //   //               >
  //   //                 <path
  //   //                   fillRule="evenodd"
  //   //                   d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
  //   //                   clipRule="evenodd"
  //   //                 />
  //   //               </svg>
  //   //               <p
  //   //                 className="text-sm"
  //   //                 onClick={() => onClick(suggestion.name)}
  //   //                 key={i}
  //   //               >
  //   //                 {suggestion.name}
  //   //               </p>
  //   //             </li>
  //   //           ))}
  //   //       </ul>
  //   //     </div>
  //   //   ) : (
  //   //     <div></div>
  //   //   )}
  //   // </div>
  // );
};

export default SeachBar;
