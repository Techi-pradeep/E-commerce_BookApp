import axios from "axios";
import { API_CONFIG } from "../config";
import { toast } from 'react-toastify';

const usePostData = async (endpoint, data) =>  {
  const url = `${API_CONFIG.BASE_URL}/${endpoint}`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    // toast.success("Request successful");
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
    toast.error("Request failed");
    ;
  }
};

export default usePostData;



// =================================================================
// import axios from "axios";
// import { API_CONFIG } from "../config";

// const usePostData = async (endpoint, data) => {
//   const url = `${API_CONFIG.BASE_URL}/${endpoint}`;

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);  /** response holds all and responce.data hold res.json message */
//     return response.data;
//   } catch (error) {
//     console.log(`Error: ${error}`)
//     // throw new Error(error);
//   }
  
// };

// export default usePostData;

/**----in above hook------------------------------------------------
 * the data is sent as JSON. The axios.post method automatically serializes the data object into JSON format and sets the "Content-Type" header to "application/json". */





// ---------------------------------
// import { API_CONFIG } from "../config";

// const usePostData = async (endpoint, data) => {

//     const url = (`${API_CONFIG.BASE_URL}/${endpoint}`);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       return result;
//     } catch (error) {
//        console.log(`Error: ${error}`)
//     }
//   };

//   export default usePostData;
