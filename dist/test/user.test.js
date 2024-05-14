'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var axios = require("axios");
// Assume your API base URL
var API_BASE_URL = "http://127.0.0.1:3000/api/users";
var PAGINATON_BASE_URL = "http://localhost:3000/api/users/pagination";
var idArray = [];
// Your single user endpoint
/* const getSingleUserEndpoint = (userId: string) =>
  `${API_BASE_URL}/users/${userId}`; */
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    var userIDs, _i, _a, item;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, axios.get("http://127.0.0.1:3000/api/users")];
            case 1:
                userIDs = _b.sent();
                // Recorremos el array data y extraemos los valores de _id
                for (_i = 0, _a = userIDs.data; _i < _a.length; _i++) {
                    item = _a[_i];
                    idArray.push(item._id);
                }
                return [2 /*return*/];
        }
    });
}); });
describe("API Tests", function () {
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
    test("GET /pagination?filter=edad:30 filter for edad field", function () { return __awaiter(void 0, void 0, void 0, function () {
        var edadMin, edadMax, response, asExpected, users, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    edadMin = 1000;
                    edadMax = 2000;
                    return [4 /*yield*/, axios.get("".concat(PAGINATON_BASE_URL, "?filter=edad:").concat(edadMin, "-").concat(edadMax))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.headers["content-type"]).toMatch(/application\/json/);
                    expect(response.data).toBeDefined();
                    asExpected = true;
                    users = response.data;
                    for (i = 1; i < users.length; i++) {
                        if (users[i].edad < edadMin || users[i].edad > edadMax)
                            asExpected = false;
                        return [2 /*return*/];
                    }
                    expect(asExpected).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
