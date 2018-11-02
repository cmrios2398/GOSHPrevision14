let params = new URLSearchParams(window.location.search)

let app_page = params.get("app_page")
if (app_page) {
  document.querySelector(".phone .screen").src = "app/" + app_page
}

if (params.get("location")) {
  document.querySelector("body").dataset.location = params.get("location")
}

if (params.get("disable_fullscreen")) {
  document.querySelector("body").dataset.fullscreen = "true"
}

document.querySelector(".launch").addEventListener("click", () => {
  if (screenfull.enabled) {
    screenfull.request(document.querySelector(".container"))
  } else {
    alert("Browser doesn't support Fullscreen API, please use a browser that does.")
  }
})

screenfull.on("change", () => {
  document.querySelector("body").dataset.fullscreen = screenfull.isFullscreen ? "true" : "false"
})

document.querySelectorAll(".commands button").forEach(button => {
  button.addEventListener("click", e => {
    document.querySelector("body").dataset.location = e.target.dataset.location
  })
})
