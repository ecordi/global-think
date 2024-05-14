'use strict';
const axios = require("axios");
// Assume your API base URL
const API_BASE_URL = `http://127.0.0.1:3000/api/users`;
const PAGINATON_BASE_URL = "http://localhost:3000/api/users/pagination";
let idArray = [];

// Your single user endpoint
/* const getSingleUserEndpoint = (userId: string) =>
  `${API_BASE_URL}/users/${userId}`; */
beforeEach(async() => {  
  const userIDs = await axios.get(`http://127.0.0.1:3000/api/users`);
 

  // Recorremos el array data y extraemos los valores de _id
  for (const item of userIDs.data) {
    idArray.push(item._id);
  }
  

});

describe("API Tests", () => {
  // test("GET Single User", async () => {
  //  idArray.forEach(async (userId) => {
  //    const response = await axios.get(`${API_BASE_URL}/${idArray[2]}`);
  //     expect(response.status).toBe(200);
//   response.data.forEach(element => {
//     expect(element).toHaveProperty('nombre');
//     expect(element).toHaveProperty('correo');
//     expect(element).toHaveProperty('edad');

// })
  //  });
  // });

 //const BASE_URL= `http://127.0.0.1:3000/api/users`;
//  test('GET non-existent user', async () => {
//   const nonExistentUserId = "663ed3354b00eb87b111db30";

//   const response = await axios.get(`${API_BASE_URL}/${nonExistentUserId}`);
//   console.log("🚀 ~ file: user.test.ts:43 ~ test ~ response:", response.statusCode)
//   expect(response.status).toEqual(404);
// });


  // test("Get paginated response, page = 1", async () => {
  //   const response = await axios.get(`${PAGINATON_BASE_URL}?pi=2`);
  //   expect(response.status).toBe(200);
  //   expect(response.headers["content-type"]).toMatch(/application\/json/);
  //   expect(response.data).toBeDefined();

  //   expect(response.data).toHaveLength(5)
  
  // });

  // test("GET /pagination sorts by edad in ascending order", async () => {
  //   const response = await axios.get(
  //     `${PAGINATON_BASE_URL}?sort=edad&orderBy=asc`
  //   );
  //   expect(response.status).toBe(200);
  //   expect(response.headers["content-type"]).toMatch(/application\/json/);
  //   expect(response.data).toBeDefined();
  //   expect(response.data.users).toHaveLength(5)
  // });


  // test('GET /users/search?q=lolo search for expression "text"', async () => {
  //   const keyword = "lolo";
  //   const response = await axios.get(`${API_BASE_URL}/search?q=${keyword}`);
  //   expect(response.status).toBe(200)
  //   expect(response.headers['content-type']).toMatch(/application\/json/);
  //   expect(response.data).toBeDefined();

  //   const users = response.data.users;
  //   let found = false
  //   users.forEach(element => {
  //     if (element.nombre == keyword || element.edad == keyword || element.correo == element.keyword) {
  //       found = true;
  //     }
  //   });
  //   expect(found).toBe(true);
  // })

  test("GET /pagination?filter=edad:30 filter for edad field", async () => {
    const edadMin = 1000;
    const edadMax = 2000;
    const response = await axios.get(
      `${PAGINATON_BASE_URL}?filter=edad:${edadMin}-${edadMax}`
    );
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.data).toBeDefined();
    let asExpected = true;
    const users = response.data;
    for (let i = 1; i < users.length; i++) {
      if (users[i].edad < edadMin || users[i].edad > edadMax)
        asExpected = false;
      return;
    }
    expect(asExpected).toBe(true);
  });

});
// const axios = require("axios");
// // Assume your API base URL
// const API_BASE_URL = "http://localhost:3000/api/users";
// const PAGINATON_BASE_URL = "http://localhost:3000/api/users/pagination";

// // Your single user endpoint
// /* const getSingleUserEndpoint = (userId: string) =>
//   `${API_BASE_URL}/users/${userId}`; */

// const userIDs = [
//   "663ed3354b00eb87b111db29",
//   "64e8b7a7dac57be27ecf4f94",
//   "64e8b7afdac57be27ecf4f96",
//   "64e8b7b8dac57be27ecf4f98",
//   "64e8b7c7dac57be27ecf4f9c",
//   "64e8b7cddac57be27ecf4f9e",
// ];

// describe("API Tests", () => {
// /* test("GET Single User", async () => {
//     userIDs.forEach(async (userId) => {
//       console.log("🚀 ~ file: user.test.ts:163 ~ userIDs.forEach ~ userId:", userId)
//       const response = await axios.get(`${API_BASE_URL}/${userId}`);
//       if(!response.status.toBe(404)){
//       expect(response.status).toBe(200);
//       const { data } = response;
//       expect(data._id).toBe(userId);
//       expect(data).toHaveProperty("nombre");
//       expect(data).toHaveProperty("correo");
//       expect(data).toHaveProperty("edad");
//       }
//     });
//   });*/


//  test('GET /users/:id returns a 404 status code for non-existent user', async () => {
//       const nonExistentId = '64e8b7af3tc57bd27ac54f92'; // Use a non-existent user ID
//       const response = await axios.get(`http://localhost:3000/api/users/64e8b7af3tc57bd27ac54f92`);

//       expect(response.status).toBe(404); // User not found
//       expect(response.text).toBe('User not found');

//     }); 

// // test("Get All Users", async () => {
// //   const response = await axios.get(`${API_BASE_URL}`);

// //   expect(response.status).toBe(200);
// // });

// });
// // test("Get paginated response, page = 1", async () => {
// //   const response = await axios.get(`${PAGINATON_BASE_URL}?pi=1`);
// //   expect(response.status).toBe(200);
// //   expect(response.headers["content-type"]).toMatch(/application\/json/);
// //   expect(response.data).toBeDefined();

// //   //expect(data).toHaveLength(5)
// //   const jsonArray = response.data; // Assuming the API response is a JSON array
// //   console.log(response.data);
// // });

// // test("GET /pagination sorts by likes in ascending order", async () => {
// //   const response = await axios.get(
// //     `${PAGINATON_BASE_URL}?sort=likes&oderby=asc`
// //   );
// //   expect(response.status).toBe(200);
// //   expect(response.headers["content-type"]).toMatch(/application\/json/);
// //   expect(response.data).toBeDefined();

// //   const sortedUsers = response.data;
// //   for (let i = 1; i < sortedUsers.length; i++) {
// //     console.log(sortedUsers.length);
// //     const previousLikes = sortedUsers[i - 1].likes;
// //     const currentLikes = sortedUsers[i].likes;
// //     expect(previousLikes <= currentLikes).toBe(true);
// //   }
// //   //expect(data).toHaveLength(5)
// //   const jsonArray = response.data; // Assuming the API response is a JSON array
// //   console.log(response.data);
// // });

// // test("GET /pagination sorts by likes in ascending order", async () => {
// //   const response = await axios.get(
// //     `${PAGINATON_BASE_URL}?sort=likes&oderby=asc`
// //   );
// //   expect(response.status).toBe(200);
// //   expect(response.headers["content-type"]).toMatch(/application\/json/);
// //   expect(response.data).toBeDefined();

// //   const sortedUsers = response.data;
// //   for (let i = 1; i < sortedUsers.length; i++) {
// //     console.log(sortedUsers.length);
// //     const previousLikes = sortedUsers[i - 1].likes;
// //     const currentLikes = sortedUsers[i].likes;
// //     expect(previousLikes <= currentLikes).toBe(true);
// //   }
// //   //expect(data).toHaveLength(5)
// //   const jsonArray = response.data; // Assuming the API response is a JSON array
// //   console.log(response.data);
// // });

// // test('GET /users/search?q=text search for expression "text"', async () => {
// //   const keyword = "text";
// //   const response = await axios.get(`${API_BASE_URL}/search?q=${keyword}`);
// //   expect(response.status).toBe(200);
// //   expect(response.headers["content-type"]).toMatch(/application\/json/);
// //   expect(response.data).toBeDefined();

// //   const users = response.data.users;
// //   let found = false;
// //   users.forEach((element) => {
// //     if (
// //       element.title == keyword ||
// //       element.author == keyword ||
// //       element.description == element.keyword
// //     ) {
// //       found = true;
// //     }
// //   });
// //   expect(found).toBe(true);
// // });

// // test("GET /pagination?filter=likes:2-10 filter for likes field", async () => {
// //   const leastLike = 2;
// //   const mostLikes = 10;
// //   const response = await axios.get(
// //     `${PAGINATON_BASE_URL}?filter=likes:${leastLike}-${mostLikes}`
// //   );
// //   expect(response.status).toBe(200);
// //   expect(response.headers["content-type"]).toMatch(/application\/json/);
// //   expect(response.data).toBeDefined();
// //   let asExpected = true;
// //   const users = response.data;
// //   for (let i = 1; i < users.length; i++) {
// //     if (users[i].likes < leastLike || users[i].likes > mostLikes)
// //       asExpected = false;
// //     return;
// //   }
// //   expect(asExpected).toBe(true);
// // });
// //});
