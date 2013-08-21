var delegate = require('delegate');
var ga = require('analytics');

delegate.bind(document.body, '[data-track-event]', 'click', function(event){
  var el = event.target || event.srcElement;
  ga.trackEvent({
    category: el.getAttribute('data-category'),
    action: el.getAttribute('data-action') || 'Click',
    label: el.getAttribute('data-label'),
    value: el.getAttribute('data-value')
  });
});
