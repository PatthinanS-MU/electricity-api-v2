const request = require("supertest");
const app = require("../index");

describe("Electricity API Comprehensive Test Suite", () => {
  // API 1: Total electricity usages for each year
  it("should return total electricity usage by year", async () => {
    const response = await request(app).get("/api/usage/total-by-year");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("should return total electricity usage by year for another scenario", async () => {
    const response = await request(app).get("/api/usage/total-by-year");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  // API 2: Total electricity users for each year
  it("should return total electricity users by year", async () => {
    const response = await request(app).get("/api/users/total-by-year");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("should return total electricity users by year for another scenario", async () => {
    const response = await request(app).get("/api/users/total-by-year");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  // API 3: Usage of specific province by specific year
  it("should return electricity usage for a specific province and year", async () => {
    const response = await request(app).get("/api/usage/Bangkok/2020");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(response.body).toBeInstanceOf(Object);
    }
  });

  it("should return electricity usage for another province and year", async () => {
    const response = await request(app).get("/api/usage/ChiangMai/2021");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(response.body).toBeInstanceOf(Object);
    }
  });

  // API 4: Users of specific province by specific year
  it("should return electricity users for a specific province and year", async () => {
    const response = await request(app).get("/api/users/Bangkok/2020");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(response.body).toBeInstanceOf(Object);
    }
  });

  it("should return electricity users for another province and year", async () => {
    const response = await request(app).get("/api/users/ChiangMai/2021");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(response.body).toBeInstanceOf(Object);
    }
  });

  // API 5: Usage history by specific province
  it("should return electricity usage history for a specific province", async () => {
    const response = await request(app).get("/api/usage/history/Bangkok");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(
        Array.isArray(response.body) || response.body instanceof Object,
      ).toBe(true);
    }
  });

  it("should return electricity usage history for another province", async () => {
    const response = await request(app).get("/api/usage/history/ChiangMai");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(
        Array.isArray(response.body) || response.body instanceof Object,
      ).toBe(true);
    }
  });

  // API 6: User history by specific province
  it("should return electricity user history for a specific province", async () => {
    const response = await request(app).get("/api/users/history/Bangkok");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(
        Array.isArray(response.body) || response.body instanceof Object,
      ).toBe(true);
    }
  });

  it("should return electricity user history for another province", async () => {
    const response = await request(app).get("/api/users/history/ChiangMai");
    expect(response.status).toBe(200);
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(
        Array.isArray(response.body) || response.body instanceof Object,
      ).toBe(true);
    }
  });

  // Error Handling Test
  it("should return 404 for an unknown endpoint", async () => {
    const response = await request(app).get("/api/unknown-endpoint");
    expect(response.status).toBe(404);
  });

  it("should return 404 for another unknown endpoint", async () => {
    const response = await request(app).get("/api/nonexistent-endpoint");
    expect(response.status).toBe(404);
  });
});