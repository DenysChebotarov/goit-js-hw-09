!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled",!0)}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled",!0)})),t.startBtn.style.backgroundColor="green",t.stopBtn.style.backgroundColor="red",t.startBtn.style.fontSize="24px",t.stopBtn.style.fontSize="24px",t.startBtn.style.cursor="pointer",t.stopBtn.style.cursor="pointer"}();
//# sourceMappingURL=01-color-switcher.fb73d639.js.map