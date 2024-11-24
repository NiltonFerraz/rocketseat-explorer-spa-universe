import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

document.querySelector('.element').addEventListener('click', function() {
  this.classList.toggle('mark');
});
