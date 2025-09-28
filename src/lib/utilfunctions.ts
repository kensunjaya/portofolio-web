export const handleScrollTo = (id: string) => {
  const el = id ? document.querySelector(id) : document.body;
  el?.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    el?.scrollIntoView({ behavior: "smooth" });
  }, 400);
  if (id) {
    window.history.replaceState(null, "", id);
  }
};

export const handleOpenUrl = (url: string) => {
  window.open(url, "_blank");
};