Package.describe({
	summary : 'History object, allows you to navigate back and forward trough added values.\nPlease Note: This is not the same as Browser History.'
});

Package.on_use(function(api) {
	api.export(['History']);
	api.add_files('history.js', ['client', 'server']);
});
