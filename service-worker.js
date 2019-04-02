//pertama kali melakukan install. jika berhasil, tampilkan 'Service worker	installing...'
self.addEventListener('install', function(event) {
	console.log('Service worker	installing...');
	// TODO 3.4: Skip waiting
	self.skipWaiting();
});

//kemudian diaktivasi. saat aktivasi, ditampilkan 'Service worker	activating...'
self.addEventListener('activate', function(event) {
	console.log('Service worker	activating...');
});

// I'm a new service worker

self.addEventListener('fetch', function(event) {
	console.log('Fetching:', event.request.url);
});