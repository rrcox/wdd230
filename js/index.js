// Set copyright year in footer
const currentDate = new Date(document.lastModified);
const copyrightYear = currentDate.getFullYear();
document.querySelector("footer div span").textContent = copyrightYear;

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;
