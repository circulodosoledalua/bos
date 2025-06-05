function acharH3() {
  const termo =
  document.getElementById("acharH3").value.toLowerCCase();
    const h3s =
    document.querySelectorAll("h3");
  h3s.forEach(h3 => {
    h3.classList.remove("highlight");
    if
    (h3.textContent.toLowerCase().includes(termo)) {
      h3.classList.add("highlight");
      
      if (!encontrou) {

        h3.scrollIntoView( { behavior: "smooth", block: "center" });
        encontrou = true;

      }
    }
  }); 
}