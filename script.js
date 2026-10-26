// ===== Settings: change this to the business email =====
const BUSINESS_EMAIL = "hello@example.com";

// ===== Mobile menu =====
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") links.classList.remove("open");
});

// ===== Catalog =====
const catalog = document.getElementById("catalog");
const filters = document.querySelector(".filters");

function priceText(item) {
  if (item.price == null) return "Ask for price";
  return `$${item.price} <small>/ ${item.per}</small>`;
}

function render(category) {
  const list = category === "all" ? ITEMS : ITEMS.filter((i) => i.category === category);
  catalog.innerHTML = list.map((item) => `
    <article class="card">
      <div class="card-img">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" loading="lazy">` : `<span>${item.emoji || "🎄"}</span>`}
      </div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-foot">
          <span class="price">${priceText(item)}</span>
          <button class="add" data-name="${item.name}">+ Add</button>
        </div>
      </div>
    </article>`).join("");
}

filters.innerHTML = [{ id: "all", label: "All" }, ...CATEGORIES]
  .map((c, i) => `<button class="filter${i === 0 ? " active" : ""}" data-cat="${c.id}">${c.label}</button>`)
  .join("");

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filters.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
  render(btn.dataset.cat);
});

render("all");

// ===== "Add" buttons fill in the request form =====
const itemsBox = document.querySelector('textarea[name="items"]');

function addToRequest(text) {
  itemsBox.value = itemsBox.value.trim() ? `${itemsBox.value.trim()}\n${text}` : text;
}

catalog.addEventListener("click", (e) => {
  const btn = e.target.closest(".add");
  if (!btn) return;
  addToRequest(btn.dataset.name);
  btn.textContent = "✓ Added";
  btn.classList.add("added");
});

document.querySelectorAll("[data-package]").forEach((a) =>
  a.addEventListener("click", () => addToRequest(`Package: ${a.dataset.package}`))
);

// ===== Request form → opens email =====
document.getElementById("request-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = [
    `Name: ${f.get("name")}`,
    `Contact: ${f.get("contact")}`,
    `Event date: ${f.get("date")}`,
    `Guests: ${f.get("guests") || "-"}`,
    `Event type: ${f.get("type")}`,
    `Delivery & setup: ${f.get("delivery") ? "Yes" : "No"}`,
    "",
    "Items:",
    f.get("items") || "(not sure yet)",
  ].join("\n");
  const subject = `Rental request – ${f.get("date")}`;
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
