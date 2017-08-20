var playlist = new Object( {Beyonce: "Pretty Hurts"});

var updatePlaylist = (playlist, artist, song) => {
	playlist[artist] = song;
	return playlist;
}

var removeFromPlaylist = (playlist, artistName) => {
	delete playlist[artistName]
	return playlist;
}