import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "q"; 

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Concepts Books Publication",
        image: "./images/hp.png",
        paragraph: "CBPI is a ONE stop solution to all the problems faced by the Authors & students.With CBPI, You can Learn How to publish your Book, Thesis and Research paper etc. CBPI is a unique institution that focuses on real-world problems such as Book writing & publishing,Thesis writing & Publishing & Wall Charts for students.We provide services with precise results on all the services that CBPI offers"
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Dr. Ashad ullah Qureshi",
        image: "./images/asd.jpg",
        paragraph: "Ashad Ullah Qureshi, M.Tech, B.Tech, BEC Cambridge University, who received his M.Tech from Rajiv Gandhi Technical University Bhopal. He has contributed extensively to the betterment of students with his research & development. He has published many research papers in International Journals. He is the editor of 'Creative Musings of an Army wife', a unique out of waste coffee table book. He is recognized nationally as an elite academician in the field of computer science & engineering. In 2014 invented Student Welfare Smart Machine a  Student KIOSK for printing Solution. He is the recipient of the 2011 Young Scientist Award from Ministry of Electronics & Information Technology,  New Delhi.",
        
      },
    });
  };

  const updatePackagesPage = () => {
    return dispatch({
      type: "PACKAGES_UPDATE",
      payload: {
        name: "Packages",
        image: "./images/Package.jpg",
        paragraph: "To Publish your book or get your Theses or Research paper is written or for other services, you may check out our packages & Pricing section. Book publishing packages are shown below, and you can also register for the same. The prices are negotiable for some services; please get more information from our experts.",
        
      },
    });
  };

  const updateFAQPage = () => {
    return dispatch({
      type: "FAQ_UPDATE",
      payload: {
        name: "Frequently Asked Questions",
        image: "./images/ff.jpg",
        paragraph: "Book Publishing Related FAQ",
        
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updatePackagesPage, updateFAQPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
