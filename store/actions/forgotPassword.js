import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";


export const forgotPassword = (e) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_PASSWORD_START,
  });
  try {
    var data = new FormData();
    data.append("name", e.name);
    data.append("email_address", e.email_address);
    data.append("subject", e.subject);
    data.append("message", e.message);

    var config = {
      method: "post",
      url: `http://nodeserver.mydevfactory.com:5589/user/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    const { token } = res.data;

    if (token) {
      localStorage.setItem("token_key", token);
      console.log(toast);
      toast.success(`Welcome user`);
      location.reload();
    }
  } catch (error) {
    console.log(error);      
  }
};
