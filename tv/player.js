var video = document.getElementById('video');
let source = [
	"Select,Select",
	"VCDN VTV6,https://nvzoftzsvflivcf.vcdn.com.vn/vtv6/vtv6@mid.m3u8",
	"VCDN VTV2,https://nvzoftzsvflivcf.vcdn.com.vn/vtv2/vtv2@mid.m3u8",
	"VCDN vtvcab6,https://nvzoftzsvflivcf.vcdn.com.vn/vtvcab6/vtvcab6@high.m3u8",
	"TVOnline VTV5,https://tvonline.vn/channel/vtv5/?source=7",
	"Test,https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
	"VTV1,https://vips-livecdn.fptplay.net/hda1/vtv1hd_vhls.smil/chunklist_b5000000.m3u8",
	"VTV2,https://vips-livecdn.fptplay.net/hda1/vtv2_vhls.smil/chunklist_b5000000.m3u8",
	"VTV3,https://vips-livecdn.fptplay.net/hda1/vtv3hd_vhls.smil/chunklist_b5000000.m3u8",
	"VTV5,https://vips-livecdn.fptplay.net/hda2/vtv5hd_vhls.smil/chunklist_b5000000.m3u8",
	"VTV6,https://vips-livecdn.fptplay.net/hda1/vtv6hd_vhls.smil/chunklist_b5000000.m3u8",
	"HTV1,https://livecdn.fptplay.net/sdb/htv1_hls.smil/chunklist_b1200000.m3u8",
    "AXN,http://vips-livecdn.fptplay.net/hda3/axnhd_vhls.smil/chunklist_b5000000.m3u8",
    "Warner Bros,http://vips-livecdn.fptplay.net/hda3/warnertv_vhls.smil/chunklist_b5000000.m3u8",
    "Cinema World,https://vips-livecdn.fptplay.net/hda2/cinemawork_vhls.smil/chunklist_b5000000.m3u8",
    "Cinemax,http://vips-livecdn.fptplay.net/hda1/cinemax_vhls.smil/chunklist_b5000000.m3u8",
    "HBO,http://vips-livecdn.fptplay.net/hda1/hbo_vhls.smil/chunklist_b5000000.m3u8",
    "BBC Earth,http://vips-livecdn.fptplay.net/hda2/bbcearth_vhls.smil/chunklist_b5000000.m3u8",
    "BBC Lifestyle,https://vips-livecdn.fptplay.net/sdb/bbclifestyle_2000.stream/chunklist_b500000.m3u8",
    "Discovery Channel,https://vips-livecdn.fptplay.net/hda2/discovery_vhls.smil/chunklist_b5000000.m3u8",
    "Discovery Asia,http://vips-livecdn.fptplay.net/hda2/discoveryasia_vhls.smil/chunklist_b5000000.m3u8",
    "Nat Geo,https://vips-livecdn.fptplay.net/hda2/natgeohd_vhls.smil/chunklist_b5000000.m3u8",
    "WILD,http://htv-drm-live-cdn.fptplay.net/CDN-FPT02/NATGEOWILD-HD-1080p/playlist.m3u8",
    "Rock Entertainment,https://vips-livecdn.fptplay.net/hda1/blueantent_vhls.smil/chunklist_b5000000.m3u8",
    "Rock Extreme,https://vips-livecdn.fptplay.net/hda1/blueantext_vhls.smil/chunklist_b5000000.m3u8",
    "Asian Food Network,https://vips-livecdn.fptplay.net/hda1/afchd_vhls.smil/chunklist_b5000000.m3u8",
    "Animal Planet,http://vips-livecdn.fptplay.net/hda2/animalplanet_vhls.smil/chunklist_b5000000.m3u8",
    "Ariang,https://vips-livecdn.fptplay.net/sdb/arirang_hls.smil/chunklist_b2500000.m3u8",
    "KBS World,https://vips-livecdn.fptplay.net/sdb/kbs_hls.smil/chunklist_b2500000.m3u8",
    "NHK World,https://vips-livecdn.fptplay.net/hda2/nhkworld_vhls.smil/chunklist_b5000000.m3u8",
    "KIX,https://vips-livecdn.fptplay.net/hda1/kixhd_vhls.smil/chunklist_b5000000.m3u8",
    "Fashion TV,http://vips-livecdn.fptplay.net/hda2/fashiontvhd_vhls.smil/chunklist_b5000000.m3u8",
    "History,http://htv-drm-live-cdn.fptplay.net/CDN-FPT02/FOX-HD-1080p/playlist.m3u8",
    "TLC,https://vips-livecdn.fptplay.net/hda2/travelliving_vhls.smil/chunklist_b5000000.m3u8",
    "Outdoor Channel,https://vips-livecdn.fptplay.net/hda1/outdoorfhd_vhls.smil/chunklist_b5000000.m3u8",
    "ABCAustrali,https://vips-livecdn.fptplay.net/sdb/australiaplus_hls.smil/chunklist_b2500000.m3u8",
    "TV5 Monde Asie,https://vips-livecdn.fptplay.net/sdb/tv5_hls.smil/chunklist_b2500000.m3u8",
    "Bloomberg TV,https://vips-livecdn.fptplay.net/sdb/bloomberg_hls.smil/chunklist_b2500000.m3u8",
    "CNBC,https://vips-livecdn.fptplay.net/sdb/cnbc_hls.smil/chunklist_b2500000.m3u8",
    "France 24,https://vips-livecdn.fptplay.net/sdb/france24_hls.smil/chunklist_b2500000.m3u8",
    "MTV Asia,https://vips-livecdn.fptplay.net/sdb/mtv_hls.smil/chunklist_b2500000.m3u8",
    "Animax,https://vips-livecdn.fptplay.net/hda3/animaxport_vhls.smil/chunklist_b5000000.m3u8",
    "Happy Kids,https://e4.endpoint.cdn.sctvonline.vn/hls/happykid/sd2/index.m3u8",
    "Baby First,https://vips-livecdn.fptplay.net/hda1/babyfirst_vhls.smil/chunklist_b5000000.m3u8",
    "Baby TV,https://vips-livecdn.fptplay.net/hda3/babytvhd_vhls.smil/chunklist_b5000000.m3u8",
    "BBC Cbeebies,https://vips-livecdn.fptplay.net/hda3/cbeebies_vhls.smil/chunklist_b5000000.m3u8",
    "Boomerang,https://vips-livecdn.fptplay.net/hda3/boomerang_vhls.smil/chunklist_b5000000.m3u8",
    "Cartoon Network,https://vips-livecdn.fptplay.net/hda3/cartoonnetworkhd_vhls.smil/chunklist_b5000000.m3u8",
    "Da Vinci,https://vips-livecdn.fptplay.net/hda2/davincihd_vhls.smil/chunklist_b5000000.m3u8",
    "DreamWorks,https://vips-livecdn.fptplay.net/hda3/dreamworks_vhls.smil/chunklist_b5000000.m3u8",
    "Test,http://cineapp.org:8000/series/Fernando/Fernando/109363.avi",
    "Test2,http://bo50uarv.megogo.xyz/iptv/7V87U4BYW3GNVQ/6181/index.m3u",
]
var arr = [];
var arrLinkByName = {};
for(let k of source){
    var s = k;
    if(s){
        var ss = s.split(",");
        arr.push({
            name: ss[0],
            value:ss[1]
        })
	arrLinkByName[ss[0]] = ss[1];
    }
}
let _select = document.getElementById("selectChannel");
if(_select){
	for(let k of arr){
		var option = document.createElement("option");
		option.text = k.name;
		option.value = k.name;
		_select.appendChild(option);
	}
}

function playM3u8(url){
  if(Hls.isSupported()) {
      video.volume = 0.7;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url
    }
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.src = url;
		video.addEventListener('canplay',function() {
		  video.play();
		});
		video.volume = 0.7;
		document.title = url;
  	}
}

function playPause() {
    video.paused?video.play():video.pause();
}

function volumeUp() {
    if(video.volume <= 0.9) video.volume+=0.1;
}

function volumeDown() {
    if(video.volume >= 0.1) video.volume-=0.1;
}

function seekRight() {
    video.currentTime+=5;
}

function seekLeft() {
    video.currentTime-=5;
}

function vidFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
}

var linkPlay = window.location.href.split("#")[1];
if(linkPlay){
	console.log("linkPlay",linkPlay);
	if(linkPlay.startsWith("http")){
		playM3u8(linkPlay);
	}
}
//playM3u8(window.location.href.split("#")[1])
$(window).on('load', function () {
    $('#video').on('click', function(){this.paused?this.play():this.pause();});
    Mousetrap.bind('space', playPause);
    Mousetrap.bind('up', volumeUp);
    Mousetrap.bind('down', volumeDown);
    Mousetrap.bind('right', seekRight);
    Mousetrap.bind('left', seekLeft);
    Mousetrap.bind('f', vidFullscreen);
});

function redirect() {
    var optVal = $("#selectChannel option:selected").val();
    console.log("Channel: " + optVal,arrLinkByName);
    if(arrLinkByName && arrLinkByName[optVal]){
	window.location.replace("#" + arrLinkByName[optVal]);
	playM3u8(arrLinkByName[optVal]);
    }
  }
