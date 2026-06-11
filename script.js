// Image placeholders that upgrade to real art automatically.
// Each .media element declares data-img (the file it WANTS) and data-label
// (what to show until that file exists). Drop the file into /images and reload.

document.querySelectorAll(".media").forEach((box) => {
  const src = box.dataset.img;
  const label = box.dataset.label || "Image";

  const showPlaceholder = () => {
    box.classList.add("is-placeholder");
    box.innerHTML =
      `<div class="media__label">${label}` +
      `<span class="media__file">${src}</span></div>`;
  };

  if (!src) return showPlaceholder();

  const img = new Image();
  img.onload = () => {
    box.classList.remove("is-placeholder");
    box.innerHTML = "";
    img.alt = label;
    box.appendChild(img);
  };
  img.onerror = showPlaceholder;
  img.src = src;
});
