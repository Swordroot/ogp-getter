import { getOGP } from "../../src/index";
describe("ogp get test", () => {
  it("test", async () => {
    await getOGP("https://swordroot.work/").catch(err => {throw err})
  });
});
