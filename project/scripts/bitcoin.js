const companies = [
  {
    country: "USA",
    name: "Galoy",
    job: "Provides banking software and infrastructure",
  },
  {
    country: "Nigeria",
    name: "Qala",
    job: "Trains bitcoin and lightning devs",
  },
  {
    country: "South Korea",
    name: "Upbit",
    job: "Cryptocurrency exchange",
  },
  {
    country: "USA",
    name: "Chaincode",
    job: "Bitcoin research and development",
  },
  {
    country: "Nigeria",
    name: "Bitnob",
    job: "Bitcoin-based financial services",
  },
  {
    country: "USA",
    name: "PAXful",
    job: "Peer-to-peer Bitcoin market place",
  },
];
const learnmore = () => {
  const main = document.querySelector("main");
  const learnContainer = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const h21 = document.createElement("h2");
  const h22 = document.createElement("h2");
  h21.textContent = "Blockchain";
  p1.textContent =
    "As a decentralized system, bitcoin operates without a central authority or single administrator, so that anyone can create a new bitcoin address and transact without needing any approval. This is accomplished through a specialized distributed ledger called a blockchain that records bitcoin transactions.The blockchain is implemented as an ordered list of blocks. Each block contains a SHA-256 hash of the previous block, chaining them in chronological order. The blockchain is maintained by a peer-to-peer network. Individual blocks, public addresses, and transactions within blocks are public information, and can be examined using a blockchain explorer. Nodes validate and broadcast transactions, each maintaining a copy of the blockchain for ownership verification. A new block is created every 10 minutes on average, updating the blockchain across all nodes without central oversight. This process tracks bitcoin spending, ensuring each bitcoin is spent only once. Unlike a traditional ledger that tracks physical currency, bitcoins exist digitally as unspent outputs of transactions.";
  h22.textContent = "Mining";
  p2.textContent =
    "Bitcoin mining involves validating transactions and maintaining the blockchain through significant computational power and specialized hardware. Miners group and broadcast transactions into blocks, which are verified by the network using a proof of work (PoW) system. This involves finding a nonce that produces a hash meeting the network's difficulty target, a process that is simple to verify but hard to generate. The difficulty adjusts every 2,016 blocks to maintain a ten-minute interval between new blocks. Successful miners receive transaction fees and a block reward, which halves every 210,000 blocks until the total supply reaches 21 million bitcoins. The PoW system and block chaining secure the blockchain, making alterations extremely difficult. Bitcoin mining's environmental impact is significant, contributing to global electricity consumption and greenhouse gas emissions, with much of the energy sourced from fossil fuels. Additionally, the short lifespan of mining hardware generates substantial electronic waste.";
  learnContainer.append(h21, p1, h22, p2);
  main.innerHTML = "";
  main.appendChild(learnContainer);
};
const contactus = () => {
  const form = document.createElement("form");
  form.method = "get";
  form.action = "review.html";
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const textarea = document.createElement("textarea");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Full Name";
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const inquiryLabel = document.createElement("label");
  inquiryLabel.textContent = "Make an inquiry";
  const nameDiv = document.createElement("div");
  const emailDiv = document.createElement("div");
  const inquiryDiv = document.createElement("div");
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Post your inquiry";
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.required = true;
  nameLabel.for = "name";
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.required = true;
  emailLabel.for = "email";
  textarea.id = "inquiry";
  textarea.required = true;
  inquiryLabel.for = "inquiry";
  const wrapNodes = (grannie, parent, child) => {
    parent.appendChild(child);
    grannie.appendChild(parent);
  };
  wrapNodes(nameDiv, nameLabel, nameInput);
  wrapNodes(emailDiv, emailLabel, emailInput);
  wrapNodes(inquiryDiv, inquiryLabel, textarea);
  form.append(nameDiv, emailDiv, inquiryDiv, submitButton);
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(form);
};
const a2 = document.querySelectorAll("nav a")[1];
a2.onclick = learnmore;
const a3 = document.querySelectorAll("nav a")[2];
a3.onclick = contactus;
const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;
document.addEventListener("DOMContentLoaded", () => {
  const compWrap = document.querySelector(".compWrap");
  companies.forEach((company) => {
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerHTML = `Name of company: <i>${company.name}</i>`;
    p2.innerHTML = `Originated from: ${company.country}`;
    p3.innerHTML = `What they do: ${company.job}`;
    div.append(p1, p2, p3);
    compWrap.appendChild(div);
  });
});
const exchangeRates = {
  naira: 105943740,
  dollar: 64925,
  euros: 59468,
  pounds: 50018,
};
const convertCurrency = (currency) => {
  const valToXchange = document.getElementById("xchange-value").value;
  if (!valToXchange) {
    alert("Please enter a value to exchange");
    return;
  }
  const result = Math.round(valToXchange * exchangeRates[currency]);
  alert(`${result} ${currency}`);
};
document.querySelector(".convert").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const currency = event.target.id;
    convertCurrency(currency);
  }
});
const menu = document.getElementById("menu");
const navg = document.querySelector("nav");
menu.addEventListener("click", () => {
  navg.classList.toggle("open");
  menu.classList.toggle("open");
});
