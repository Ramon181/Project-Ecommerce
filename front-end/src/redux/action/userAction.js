import axios from "axios";

export const register = async (name, userName, email, password) => {
    try {
        return await axios.post("http://localhost:3001/user/register", { name, userName, email, password })
        .then((res)=>{
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("role", 'user');
              }
              console.log(res.data)
              return res.data;
        });

    } catch (error) {
        console.log(error)
    }
}