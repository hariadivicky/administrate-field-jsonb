(function () {
  let eventName = 'ready'
  if (typeof TurboLinks !== 'undefined') eventName = 'turbolinks:load'
  if (typeof Turbo !== 'undefined') eventName = 'turbo:load'

  document.addEventListener(eventName, () => {
    $(".administrate-field-jsonb-accordion").each(function () {
      $(this).click(function () {
        $(this).toggleClass("administrate-field-jsonb-active").next().toggle();
      });
    });
  });
})();
