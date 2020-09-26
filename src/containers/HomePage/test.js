/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const puppeteer = require("puppeteer");

describe("H2 Text", () => {
  test("h2 loads correctly", async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".main-currency");

    const html = await page.$eval(".main-currency", (e) => e.innerHTML);
    expect(html).toBe("USD");

    browser.close();
  }, 16000);
});

describe("Delete Currency Card", () => {
  test("Can delete currency card", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:3000/");
    await page.click("button[type=button]");

    const html = await page.$eval(".list-card h3", (e) => e.innerHTML);
    expect(html).toBe("Currently you haven't selected any currency.");
    browser.close();
  }, 9000000);
});

describe("Add Currency Card", () => {
  test("Can add currency card", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".add");
    await page.click(".add");
    await page.waitForSelector(".selector");
    await page.click(".submit");
    await page.click("button[type=button]");

    const html = await page.$eval(".list-card h3", (e) => e.innerHTML);
    expect(html).toBe("CAD");

    browser.close();
  }, 9000000);
});

describe("Add Duplicate Currency Card", () => {
  test("Cannot add duplicate currency card", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".add");
    await page.click(".add");
    await page.waitForSelector(".selector");
    await page.click(".submit");
    await page.click("button[type=button]");

    await page.click(".add");
    await page.waitForSelector(".selector");
    await page.click(".submit");

    const html = await page.$eval(".list-card span", (e) => e.innerHTML);
    expect(html).toBe("Currency already exists, please try another one.");

    browser.close();
  }, 9000000);
});
