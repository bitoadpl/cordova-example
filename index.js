console.log('index.js init');

var zeroconf = cordova.plugins.zeroconf;

zeroconf.register('_http._tcp.local.', 'Android Phone', 80, {
    'foo' : 'bar'
});

