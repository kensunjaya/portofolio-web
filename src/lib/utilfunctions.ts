export const handleScrollTo = (id: string) => {
  const el = id ? document.querySelector(id) : document.body;
  el?.scrollIntoView({ behavior: "smooth" });
};

export const handleOpenUrl = (url: string) => {
  window.open(url, "_blank");
};