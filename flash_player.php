<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript" src="ep_player.js"></script>

	<div id="flashcontent">
		To view the <a href="http://www.e-phonic.com/mp3player/" target="_blank">E-Phonic MP3 Player</a> you will need to have Javascript turned on and have <a href="http://www.adobe.com/go/getflashplayer/" target="_blank">Flash Player 9</a> or better installed.
	</div>

	<script type="text/javascript">
		// <![CDATA[

		var so = new SWFObject("ep_player.swf", "ep_player", "301", "16", "9", "#FFFFFF");
		so.addVariable("skin", "skins/micro_player/skin.xml");
		so.addVariable("playlistxml", "<track><location>http://stream.lhome.fr/mpd.mp3</location><title>_</title></track>");
		so.addVariable("autoplay", "true");
		so.addVariable("shuffle", "false");
		so.addVariable("repeat", "false");
		so.addVariable("buffertime", "1");
		so.addVariable("notifyonevent", "true");
		so.addParam("allowscriptaccess", "always");
		so.write("flashcontent");

		// ]]>

var flag = false;

function EP_onEvent(evt) {
	if (evt == 'MP3_STOPPED') {
		flag = true;
	}
	if (evt == 'MP3_NEXT') {
		flag = false;
	}
}



		setInterval(function() {
			if (flag) {
				EP_next('ep_player');
			}
		}, 2000);

	</script>
