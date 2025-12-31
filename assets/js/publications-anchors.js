document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".publications h2.bibliography").forEach((el) => {
    const year = el.textContent.trim();
    if (/^\d{4}$/.test(year)) {
      el.id = year;
    }
  });
});
