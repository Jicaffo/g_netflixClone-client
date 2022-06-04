// import { useState, useContext, createContext, useEffect } from "react";

// // Invocar las peticiones desde "services".
// import {
//   getAllProfilesRequest,
//   createProfileRequest,
//   deleteProfileRequest,
//   getProfileRequest,
// } from "../Services/profiles";

// const context = createContext();

// // Hook para context
// export const useProfiles = () => {
//   const contextProfiles = useContext(context);
//   return contextProfiles;
// };

// export const ProfilesProvider = ({ children }) => {
//   const [profiles, setProfiles] = useState([]);

//   const getAllProfiles = async () => {
//     const response = await getAllProfilesRequest();
//     //   console.log(response);
//     setProfiles(response.data);
//   };

//   const createProfile = async (profile) => {
//     const response = await createProfileRequest(profile);
//     setProfiles([...profiles, response.data]);
//     // console.log(response.data);
//     // Lo mandamos en el onSubmit de formik -> createProfile(values)
//   };

//   const deleteProfile = async (profileId) => {
//     await deleteProfileRequest(profileId);
//     setProfiles(profiles.filter((profile) => profile._id !== profileId));
//   };

//   const getProfile = async (profileId) => {
//     await getProfileRequest(profileId);
//     //   console.log(response.data);
//     setProfiles(profiles.filter((profile) => profile._id !== profileId));
//   };

//   useEffect(() => {
//     //getAllProfiles(); // TODO: Tira error por consola
//   }, []);

//   //console.log(profiles);

//   return (
//     <context.Provider
//       value={{
//         profiles,
//         getAllProfiles,
//         createProfile,
//         deleteProfile,
//         getProfile,
//       }}
//     >
//       {children}
//     </context.Provider>
//   );
// };
