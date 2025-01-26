"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../src/server");
describe("My Application", () => {
    afterAll((done) => {
        (0, server_1.Shutdown)(done);
    });
    it('Starts and has the proper test environment', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(process.env.NODE_ENV).toBe('test');
        expect(server_1.app).toBeDefined();
    }), 10000);
    it('Returns all options allowed to be called by users (http methods)', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).options('/');
        expect(res.status).toBe(200);
        expect(res.headers['access-control-allow-methods']).toBe('GET, POST, PUT, DELETE, PATCH');
    }));
});
