/* Cevi Schönholzerswilen-Wuppenau – kleines Skript ohne externe Abhängigkeiten */
(function () {
  "use strict";

  /* ---- Mobile Navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- E-Mail-Adressen (Spamschutz: erst im Browser zusammengesetzt) ---- */
  document.querySelectorAll("a.mail").forEach(function (a) {
    var adr = a.dataset.u + "@" + a.dataset.d;
    a.href = "mailto:" + adr;
    a.textContent = adr;
  });

  /* ---- Bilder, die (noch) fehlen, ausblenden ---- */
  document.querySelectorAll("img[data-optional]").forEach(function (img) {
    function weg() { img.remove(); }
    if (img.complete && img.naturalWidth === 0) weg();
    else img.addEventListener("error", weg);
  });

  /* ---- Google-Kalender: Monatsansicht auf breiten Bildschirmen, Liste auf dem Handy ---- */
  document.querySelectorAll("iframe[data-monat]").forEach(function (f) {
    if (window.matchMedia("(min-width: 800px)").matches) f.src = f.dataset.monat;
  });

  /* ---- Kontaktformular: öffnet das E-Mail-Programm mit ausgefüllter Nachricht ---- */
  var form = document.getElementById("kontaktformular");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var betreff = "Anfrage über cevischwilen.ch von " + f.vorname.value + " " + f.nachname.value;
      var text = f.nachricht.value + "\n\n" + f.vorname.value + " " + f.nachname.value + "\n" + f.email.value;
      window.location.href = "mailto:" + form.dataset.u + "@" + form.dataset.d +
        "?subject=" + encodeURIComponent(betreff) + "&body=" + encodeURIComponent(text);
      var ok = document.getElementById("form-ok");
      if (ok) ok.hidden = false;
    });
  }

  /* ---- Jahr in der Fusszeile ---- */
  var j = document.getElementById("jahr");
  if (j) j.textContent = new Date().getFullYear();
})();
