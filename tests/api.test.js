const request = require("supertest");
const app = require("../index");

describe("Electricity API Endpoints", () => {
  // Test Case 1: Total Usage
  it("should return total electricity usage by year", async () => {
    const response = await request(app).get("/api/usage/total-by-year");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  // Test Case 2: Specific Province Usage
  it("should return electricity usage for a specific province and year", async () => {
    const response = await request(app).get("/api/usage/Bangkok/2020");
    expect(response.status).toBe(200);

    // Fix: toBeInstanceOf is for constructors, not string values
    if (response.body.message) {
      expect(response.body.message).toBe("Data not found");
    } else {
      expect(response.body).toBeInstanceOf(Object);
    }
  });

  // Test Case 3: Verify Data Structure for Users
  it("should return electricity users data for a specific province and year", async () => {
    const response = await request(app).get("/api/users/Bangkok/2020");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});