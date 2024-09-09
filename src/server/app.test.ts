import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./app";

describe("GET /hello", () => {
  it("should return a greeting with the provided name", async () => {
    const response = await request(app).get("/hello?name=Qosay");
    expect(response.body.greeting).toBe("Hello, Qosay");
  });

  it("should return a default greeting when no name is provided", async () => {
    const response = await request(app).get("/hello");
    expect(response.body.greeting).toBe("Hello, World!");
  });
});

describe("GET /info", () => {
  it("should return the general information", async () => {
    const response = await request(app).get("/info");
    expect(response.body).toHaveProperty("time");
    expect(response.body).toHaveProperty("client_address");
    expect(response.body).toHaveProperty("host_name");
    expect(response.body).toHaveProperty("headers");
  });

  it("should return a the host name", async () => {
    const response = await request(app).get("/info");
    expect(response.body.host_name).toBe("DESKTOP-KV7HSRQ");
  });
});
