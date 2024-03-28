(function () {
  eventName = 'ready'
  if (typeof TurboLinks !== 'undefined') eventName = 'turbolinks:load'
  if (typeof Turbo !== 'undefined') eventName = 'turbo:load'
  console.log('is this code even called?')
  document.addEventListener(eventName, () => {
    let updatedJson, editor;
    document.querySelectorAll('.administrate-jsoneditor').forEach(administrateEditor => {
      let $current = administrateEditor.querySelector('textarea');

      let options = {
        onChange: function () {
          try {
            updatedJson = editor.get();
          } catch (err) {
            console.log(err);
          }

          $current.val(JSON.stringify(updatedJson));
        },
        onError: function (err) {
          alert(err.toString());
        },
        navigationBar: false,
        search: false,
        enableSort: false,
        enableTransform: false,
        mode: 'tree',
        modes: ['text', 'tree'],
      };

      let editor = new JSONEditor(this, options);

      editor.set(JSON.parse($current.value));
    })
  });
})();
