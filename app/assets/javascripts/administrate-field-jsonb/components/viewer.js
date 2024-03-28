(function () {
  eventName = 'ready'
  if (typeof TurboLinks !== 'undefined') eventName = 'turbolinks:load'
  if (typeof Turbo !== 'undefined') eventName = 'turbo:load'

  document.addEventListener(eventName, () => {
    $('.administrate-jsoneditor-viewer').each(function () {

      let $current = $(this).find("textarea");

      let options = {
        navigationBar: false,
        search: false,
        enableSort: false,
        enableTransform: false,
        mode: 'view',
        modes: [],
      };

      let viewer = new JSONEditor(this, options);

      viewer.set(JSON.parse($current.val()));
    });
  })
})();
