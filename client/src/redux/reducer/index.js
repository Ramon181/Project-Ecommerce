import { ALL_CATEGORIES, ALL_PRODUCTS, DETAILS_PRODUCT, GET_PRODUCTS_FILTERED, MAX_VISITS, ORDER_DATA, ORDER_NAME, ORDER_PRICE, ORDER_RATING, ORDER_STOCK, RESET_FILTER, RESET_PRODUCT, SEARCH_PRODUCT, UPDATE_FILTER, USER_INFO } from "../action";


const initialState = {
    product: [],
    allProduct: [],
    productfilter: [],
    loading:false,
    productList: [],
    allCategory: [],
    details: [],
    visitMax: [],
    filter: {
        category: "",
        name: "",
        minPrice: 0,
        maxPrice: 2147483647, // Max integer value
    },
    userInfo:{}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                product: action.payload,
                allProduct: action.payload,
                loading:false
            }
        case RESET_PRODUCT:
            return{
                ...state,
                loading:true,
                product:[]
            }

        case SEARCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case DETAILS_PRODUCT:
            return {
                ...state,
                details: action.payload
            }

        case ALL_CATEGORIES:
            return {
                ...state,
                allCategory: action.payload
            }
        case MAX_VISITS:
            return {
                ...state,
                visitMax: action.payload
            }

        case GET_PRODUCTS_FILTERED:
            return {
                ...state,
                productfilter: action.payload,
                productList: action.payload.rows,
            }

        case RESET_FILTER:
            return {
                ...state,
                filter: initialState.filter,
            };
        case UPDATE_FILTER:
            return {
                ...state,
                filter: { ...state.filter, ...action.payload },
            };


        case USER_INFO:
            return{
                ...state,
                userInfo: action.payload
            }








        ////////////////////////////////////////////////////////////////////////////



        case ORDER_NAME:

            let name = action.payload === "DESCENDENTE" ?
                state.product.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) : action.payload === "ASCENDENTE" ?
                    state.product.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                        return 0
                    }) : state.product

            return {
                ...state,
                allProduct: name
            }
        case ORDER_RATING:
            const sortScore = action.payload === 'min' ? state.product.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return 1
                }
                if (b.rating > a.rating) {
                    return -1
                }
                return 0
            }) :
                state.product.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return -1
                    }
                    if (b.rating > a.rating) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                product: action.payload === 'default' ? state.product : sortScore


            };
        case ORDER_PRICE:
            const sortPrice = action.payload === 'min' ? state.product.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1
                }
                if (b.price > a.price) {
                    return -1
                }
                return 0
            }) :
                state.product.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1
                    }
                    if (b.price > a.price) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                product: action.payload === 'default' ? state.product : sortPrice


            };

        case ORDER_STOCK:
            const sortCountinstock = action.payload === 'min' ? state.product.sort(function (a, b) {
                if (a.stock > b.stock) {
                    return 1
                }
                if (b.stock > a.stock) {
                    return -1
                }
                return 0
            }) :
                state.product.sort(function (a, b) {
                    if (a.stock > b.stock) {
                        return -1
                    }
                    if (b.stock > a.stock) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                product: action.payload === 'default' ? state.product : sortCountinstock


            };

        case ORDER_DATA:

            let data = action.payload === "data" ?
                state.product.sort((a, b) => {
                    if (a.date === b.date) {
                        return 0;
                    }
                    if (a.date < b.date) {
                        return 1;
                    }
                    return -1;
                }) : state.product

            return {
                ...state,
                allProduct: data
            }

        default: return state
    }
}

export default rootReducer;