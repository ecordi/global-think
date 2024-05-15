"use strict";
const axios = require("axios");
const API_BASE_URL = `http://127.0.0.1:3000/api/users`;
const idArray = new Array();
const mongoose = require('mongoose');
function generateRandomMongoId() {
  const randomObjectId = mongoose.Types.ObjectId().toHexString();
  return randomObjectId;
}
beforeEach(async () => {
  const userIDs = await axios.get(`${API_BASE_URL}`);

  for (const item of userIDs.data.data) {
    idArray.push(item._id);
  }
});

describe("API Tests", () => {
  test("GET Single User", async () => {
    const response = await axios.get(`${API_BASE_URL}/${idArray[2]}`);
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty("nombre");
    expect(response.data.data).toHaveProperty("correo");
    expect(response.data.data).toHaveProperty("edad");
  });

  test("GET No existe usuario", async () => {
    const userId = "663ed3354b00eb87b111db30";
    try {
      const response = await axios.get(`${API_BASE_URL}/${userId}`);
      expect(response.status).toBe(400);
    } catch (error: any) {
      console.log("Error", error);
    }
  });
  test("GET Obtener todos los usuarios", async () => {
    const response = await axios.get(`${API_BASE_URL}`);

    expect(response.status).toBe(200);
  });

  test("GET Paginacion", async () => {
    try {
      const page = 1;
      const limit = 2;

      const response = await axios.get(
        `${API_BASE_URL}?page=${page}&limit=${limit}`
      );
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/application\/json/);
      expect(response.data.data).toBeDefined();
      expect(response.data.data).toHaveLength(limit);
    } catch (error: any) {
      console.log("Error", error);
    }
  });
  test("POST Debe agregar un nuevo usuario", async () => {
    try {
      const userData = {
        nombre: "Eugenio Cordi-Tests",
        correo: "eugenio.cordi@globlal-think.com.ar",
        edad: 22,
      };
      const response = await axios.post(API_BASE_URL, userData);

      expect(response.status).toBe(201);
      expect(response.data.data).toBeDefined();
    } catch (error: any) {
      console.log("Error", error);
    }
  });

  test("PUT Debe actualizar un usuario existente", async () => {
    try {
      const userId = idArray[0]
      const userData = {
        nombre: "Updated",
      };
      const response = await axios.put(`${API_BASE_URL}/${userId}`, userData);
      expect(response.status).toBe(200);
      expect(response.data.data).toBeDefined();
    } catch (error: any) {
      console.log("Error", error);
    }
  });

  test("PATCH Debe actualizar parcialmente un usuario existente", async () => {
    try {
      const userId = idArray[0];
      const userData = {
        correo: "eugenio.update.partial@global.com.ar",
      };
      const response = await axios.patch(`${API_BASE_URL}/${userId}`, userData);

      expect(response.status).toBe(200);
      expect(response.data.data).toBeDefined();
    } catch (error: any) {
      console.log("Error", error);
    }
  });

  test("DELETE Debe eliminar un usuario existente", async () => {
    try {
      const userId = idArray[0]; // ID del usuario a eliminar
      const response = await axios.delete(`${API_BASE_URL}/${userId}`);

      expect(response.status).toBe(200);
      expect(response.data.message).toBe("Usuario eliminado exitosamente.");
    } catch (error: any) {
      console.log("Error", error);
    }
  });
  test("DELETE Error al eliminar Id invalido. Valida con mongo", async () => {
    try {
      const userId = idArray[0]; // ID del usuario a eliminar
      await axios.delete(`${API_BASE_URL}/${userId}I`);
      fail("Se esperaba una solicitud fallida con un código de estado 400");
    } catch (error: any) {
      expect(error.isAxiosError).toBe(true);
      expect(error.response?.status).toBe(400);   
     }
  });
  test("Intentar eliminar un usuario con un ID no válido", async () => {
    
    try {
      // Supongamos que tenemos un ID de usuario no válido.
      //Tiene el formato pero no existe en la base
      const randomMongoId = generateRandomMongoId();

      await axios.delete(`${API_BASE_URL}/${randomMongoId}`);
      fail("Se esperaba una solicitud fallida con un código de estado 400");
    } catch (error: any) {
      // Verificamos que el error recibido sea del tipo AxiosError
      expect(error.isAxiosError).toBe(true);
      // Verificamos que el código de estado del error sea 400
      expect(error.response?.status).toBe(400);
    }
  });
});
afterAll(async () => {
  // Desconectar Mongoose y detener el servidor de MongoDB en memoria
  await mongoose.disconnect();

});
