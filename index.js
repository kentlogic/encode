const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  console.log(message);
  document.querySelector("#message-compose").setAttribute("hidden", true);

  document.querySelector("#message-decode").removeAttribute("hidden");
  document.querySelector("#message-text").innerHTML = message;
}

document.querySelector("#copy-btn").addEventListener("click", () => {
  document.execCommand("copy");
  document.querySelector("#success-tag").classList.remove("is-hidden");
  console.log("copied");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-compose").setAttribute("hidden", true);
  document.querySelector("#link-form").removeAttribute("hidden");

  const input = document.querySelector("#message-input");
  const encoded = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encoded}`;
  linkInput.select();
});
