import axios from "axios";

 


export const getMylist = async (id) => {
    try {
      const res = await axios.get("/api/posts");;
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
 