/**Desing 1 --conventional desgin */

// import React from "react";
// import styled from "styled-components";
// const Loading = () => {
//   return (
//     <LoadingComponent>
//       {" "}
//       <div className="loading-container">
//         <div className="loader"></div>
//         <span className="loading-text">Loading...</span>
//       </div>
//     </LoadingComponent>
//   );
// };

// const LoadingComponent = styled.section`
// .loading-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// }

// .loader {
//   border: 8px solid #f3f3f3;
//   border-top: 8px solid #3498db;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   animation: spin 1.5s linear infinite;
// }

// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// .loading-text {
//   margin-top: 16px;
//   font-size: 18px;
// color: #fff;
// }

// `;

// export default Loading;

// ======================Design 2=========ChatGPT============

import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingComponent22>
      <div className="loading-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </LoadingComponent22>
  );
};

const LoadingComponent22 = styled.section`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .circle {
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    margin: 0 5px;
    opacity: 0.4;
    animation: loadingAnimation 1.4s infinite ease-in-out;
  }

  .circle:nth-child(1) {
    animation-delay: 0s;
  }

  .circle:nth-child(2) {
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes loadingAnimation {
    0% {
      transform: scale(0);
      opacity: 0.4;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0.4;
    }
  }
`;

export default Loading;
