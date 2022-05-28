import axios from "axios";

// *** OBTENER TODOS LOS PERFILES ***

// Obtener todos los perfiles
export const getAllProfilesRequest = async () => {
  const response = await axios.get("/api/profiles");
};

// // Llevar la siguiente lógica al componente "UserProfiles"
// // import { getAllProfilesRequest } from "../services/profiles";
// import { useState, useEffect } from "react";

// // --- Inicio Dentro del componente ---
// const [profiles, setProfiles] = useState([]);

// // Invocar al request para obtener todos los perfiles y asignar al estado de perfiles
// const getAllProfiles = async () => {
//   const response = await getAllProfilesRequest();
//   //   console.log(response);
//   setProfiles(response.data);
// };

// useEffect(() => {
//   getAllProfiles();
// }, []);

// A partir de acá ya tendremos disponible para el mapeo el estado de "profiles"
// Y Podemos validar lo siguiente

// Si el arreglo de perfiles se encuentra vacio, mostrar mensaje
// if (profiles.length === 0) {
//   <div>
//     <h1>There are no profiles, please add a new profile</h1>
//   </div>;
// }
// --- Fin Dentro del componente ---

// *** CREAR UN PERFIL ***

// // Crear un perfil
export const createProfileRequest = async (profile) => {
  const response = await axios.post("/api/profiles/", profile);
  //   console.log(response)
};

// // Llevar la siguiente lógica al componente "AddUserProfiles"
// import { createProfileRequest } from "../services/profiles";
// import { useState } from "react";

// // --- Inicio Dentro del componente ---
// // const [profiles, setProfiles] = useState([]); --> redeclararlo en el componente

// const createProfile = async (profile) => {
//   const response = await createProfileRequest(profile);
//   setProfiles([...profiles, response.data]);
//   // Lo mandamos en el onSubmit de formik -> createProfile(values)
// };

// // A partir de acá ya tendremos disponible el estado del "perfil"
// // --- Fin Dentro del componente ---

// // *** ELIMINAR UN PERFIL ***

// // En el onClick del botón de eliminar un perfil(componente EditUserProfile),colocar:  onClick={() => deleteProfile(profileId)}

// Eliminar un perfil
export const deleteProfileRequest = async (profileId) => {
  const response = await axios.delete(`/api/profiles/${profileId}`);
  // console.log(response)
};

// // --- Inicio Dentro del componente ---
// import { deleteProfileRequest } from "../services/profiles";
// // const [profiles, setProfiles] = useState([]); --> redeclararlo en el componente para el rerenderizado en el filtro de los perfiles

// const deleteProfile = async (profileId) => {
//   await deleteProfileRequest(profileId);
//   //   console.log(response.data);
//   setProfiles(profiles.filter((profile) => profile._id !== profileId));
// };

// // --- Fin Dentro del componente ---

// // *** OBTENER UN PERFIL *** (PENDIENTE)
// // GET /api/profiles/:profileId
export const getProfileRequest = async (profileId) => {
  const response = await axios.get(`/api/profiles/${profileId}`);
};
// // --- Inicio Dentro del componente ---
// import { getProfileRequest } from "../services/profiles";

// const getProfile = async (profileId) => {
//   await getProfileRequest(profileId);
//   //   console.log(response.data);
//   setProfiles(profiles.filter((profile) => profile._id !== profileId));
// };
// // --- Fin Dentro del componente ---

// // *** ACTUALIZAR UN PERFIL ***
// // PATCH /api/profiles/:profileId
// export const updateProfileRequest = async (profileId, newFields) => {
//   const response = await axios.patch(`/api/profiles/${profileId}`, newFields);
// };

// // --- Inicio Dentro del componente ---
// import { updateProfileRequest } from "../services/profiles";

// const updateProfile = async (profileId, newProfile) => {
//   const response = await updateProfileRequest(profileId, newProfile);
//   //   console.log(response);
//   setProfiles(
//     profiles.map((profile) =>
//       profile._id === profileId ? response.data : profile
//     )
//   );
// };
// // Lo mandamos en el onSubmit de formik -> updateProfile(params.id, values)
// // --- Fin Dentro del componente ---
