
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href") || "";
    if (href.includes(page)) a.classList.add("active");
  });

  document.querySelectorAll("[data-checklist]").forEach(box => {
    const key = "minecraft-club-" + (box.dataset.checklist || location.pathname);
    const inputs = box.querySelectorAll("input[type='checkbox']");
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    inputs.forEach((input, i) => {
      input.checked = !!saved[i];
      input.addEventListener("change", () => {
        localStorage.setItem(key, JSON.stringify([...inputs].map(x => x.checked)));
      });
    });
  });
});
