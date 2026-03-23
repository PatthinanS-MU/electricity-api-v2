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
  // Test Case 3: Verify Data Structure for Users
});
