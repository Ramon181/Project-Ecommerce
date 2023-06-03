import axios from "axios";

export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const DETAILS_PRODUCT = "DETAILS_PRODUCT";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const GET_PRODUCTS_FILTERED = "GET_PRODUCTS_FILTERED";
export const RESET_PRODUCT = "RESET_PRODUCT";


export const ALL_CATEGORIES = "ALL_CATEGORIES";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";
export const ORDER_PRICE = "ORDER_PRICE";
export const ORDER_STOCK = "ORDER_STOCK";
export const MAX_VISITS = "MAX_VISITS";
export const ORDER_DATA = "ORDER_DATA";
export const RESET_FILTER = "RESET_FILTER";

export const USER_INFO = "USER_INFO";


export const getAllProdut = () => {
    return async function (dispatch) {
        dispatch({
            type: RESET_PRODUCT,
        })

        const resul = await axios.get(`http://localhost:3001/products`)
        dispatch({
            type: ALL_PRODUCTS,
            payload: resul.data

        })
    }
}

export function getProductName(name) {
    return async function (dispatch) {
        try {
            const resul = await axios.get(`http://localhost:3001/products/filterBy?name=${name}`)
            return dispatch({
                type: SEARCH_PRODUCT,
                payload: resul.data
            });
        } catch {
            return alert("No se pudo encontrar el producto");

        }
    };
}

export const getProductsFiltered = (filter) => {
    return async (dispatch) => {
        const {
            category,
            name,
            minPrice,
            maxPrice,
        } = filter;
        const products = await axios.get(`http://localhost:3001/products/filter`, {
            params: {
                category,
                name,
                minPrice,
                maxPrice,
            },
        });
        dispatch({
            type: GET_PRODUCTS_FILTERED,
            payload: products.data,
        });
    };
}

export function maxVisits(number) {
    return async function (dispatch) {
        try {
            const resul = await axios.get(`http://localhost:3001/products/max?visit=${number}`)
            return dispatch({
                type: MAX_VISITS,
                payload: resul.data
            });
        } catch {
            return alert("No se pudo encontrar el producto");

        }
    };
}

export const updateFilter = (filter) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_FILTER,
            payload: filter,
        });
    };
};

export const resetFilter = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_FILTER,
            payload: null,
        });
    };
};


export const detailsProduct = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/products/${id}`)
            dispatch({
                type: DETAILS_PRODUCT,
                payload: res.data,
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const postProdut = (payload) => {
    return async function (dispatch) {
        const resp = await axios.post("http://localhost:3001/products", payload)
        return resp
    }
}

export const statusFalse = (id) => {

    return async function (dispatch) {
        const resp = await axios.put("http://localhost:3001/products/status/false", id);
        console.log(resp)
        return resp
    }

}

export const statusTrue = (id) => {

    return async function (dispatch) {
        const resp = await axios.put("http://localhost:3001/products/status/true", id);
        return resp
    }

}

export const visits = (id, visit) => {

    return async function (dispatch) {
        const resp = await axios.put("http://localhost:3001/products/visits", { id, visit: visit });

        return resp
    }

}

export const getAllCategory = () => {
    return async function (dispatch) {
        const resul = await axios.get("http://localhost:3001/categories")

        dispatch({
            type: ALL_CATEGORIES,
            payload: resul.data
        })
    }
}
export const addCategory = (payload) => {
    return async function (dispatch) {
        const resp = await axios.post("http://localhost:3001/categories", payload)

        return resp
    }
}


export const OrderName = (payload) => {
    return {
        type: ORDER_NAME,
        payload
    }
};


//* Filter por Score

export const orderRating = (payload) => {
    return {
        type: ORDER_RATING,
        payload
    }
}


//* filter por Price  

export const orderPrice = (payload) => {
    return {
        type: ORDER_PRICE,
        payload
    }
}

export const orderData = (payload) => {
    return {
        type: ORDER_DATA,
        payload
    }
}

//* filter por CountInStock


export const orderStock = (payload) => {
    return {

        type: ORDER_STOCK,

        payload
    }
}

export const register = (newUser) => {
        return axios.post("http://localhost:3001/user/register", newUser)
        .then((res)=>{
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("role", 'user');
            }
            console.log(res.data)
            return res.data;
        })
}

export const userState = (payload) => {
    return {
        type:USER_INFO,
        payload
    }
}

