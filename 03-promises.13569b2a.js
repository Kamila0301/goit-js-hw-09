!function(){var e=document.querySelector(".form");e.addEventListener("submit",(function(o){o.preventDefault();for(var n=1;n<=e.amount.value;n++)Number(e.delay.value),Number(e.step.value);(function(e,o){Math.random()>.3?resolve("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms")):reject("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))})(i,delay).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.13569b2a.js.map
