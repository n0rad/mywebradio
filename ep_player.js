/*
 * E-Phonic MP3 Player Javascript API v1.0.2 (c)2007 PJ Arts
 * http://www.e-phonic.com/mp3player/
 *
 */

function EP_getElement(id) {
	var e = document.getElementById(id);
	if(e && e.EP_isLoaded) if(e.EP_isLoaded()) return e;
	return undefined;
}

function EP_play(id) {
	var e = EP_getElement(id);
	if(e) e.EP_play();
}

function EP_stop(id) {
	var e = EP_getElement(id);
	if(e) e.EP_stop();
}

function EP_pause(id) {
	var e = EP_getElement(id);
	if(e) e.EP_pause();
}

function EP_prev(id) {
	var e = EP_getElement(id);
	if(e) e.EP_prev();
}

function EP_next(id) {
	var e = EP_getElement(id);
	if(e) e.EP_next();
}

function EP_loadMP3(id, file) {
	var e = EP_getElement(id);
	if(e) e.EP_loadMP3(file);
}

function EP_loadPlayList(id, file) {
	var e = EP_getElement(id);
	if(e) e.EP_loadPlayList(file);
}

function EP_playIndex(id, index) {
	var e = EP_getElement(id);
	if(e) e.EP_playIndex(index);
}

function EP_getTrackInfo(id) {
	var e = EP_getElement(id);
	if(e) var i = e.EP_getTrackInfo();
	return i;
}

function EP_setPlayListXML(id, xml) {
	var e = EP_getElement(id);
	if(e) e.EP_setPlayListXML (xml);
}

////////////////////////////////////////////////
// Called by the player when the status of the 
// player changes. To use this please add:
// so.addVariable("notifyonevent", "true");
// to your SWF Object code
//function EP_onEvent(evt) {
//	if(EP_eventHandler) EP_eventHandler(evt);
//}
