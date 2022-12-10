var video = document.getElementById('video');
let source = [
	"Select,Select",
//856175157.r.vtvcdn.com - OK - 10/12/2022
"PHIM TRUYỆN TRONG & NGOÀI NƯỚC,https://856175157.r.vtvcdn.com/ondrm/PHIM_VIET/m20_index.m3u8",//OK-10/12/2022
"PHIM TRUYỆN TRONG & NGOÀI NƯỚC,https://856175157.r.vtvcdn.com/ondrm/VAN_HOA/m20_index.m3u8",
"PHIM TRUYỆN TRONG & NGOÀI NƯỚC,https://856175157.r.vtvcdn.com/ondrm/E_CHANNEL/m30_index.m3u8",
"Thể Thao,https://856175157.r.vtvcdn.com/ondrm/HAY_TV/m30_index.m3u8",
"KÊNH KHÁC,https://856175157.r.vtvcdn.com/ondrm/D_DRAMAS_HD/m30_index.m3u8",
"Thiếu Nhi - Hoạt hình,https://856175157.r.vtvcdn.com/ondrm/BIBI/m20_index.m3u8",
"VĂN HÓA - NGHỆ THUẬT & GIẢI TRÍ,https://856175157.r.vtvcdn.com/ondrm/INFO_TV/m20_index.m3u8",
"PHIM TRUYỆN TRONG & NGOÀI NƯỚC,https://856175157.r.vtvcdn.com/ondrm/O2_TV/m20_index.m3u8",
"VĂN HÓA - NGHỆ THUẬT & GIẢI TRÍ,https://856175157.r.vtvcdn.com/ondrm/STYLE_TV_HD/m30_index.m3u8",
"Quảng Cáo,https://livecdn.fptplay.net/sdb/vtvhyundai_hls.smil/chunklist_b2500000.m3u8",
"CA NHẠC & THỜI TRANG,https://856175157.r.vtvcdn.com/ondrm/M_CHANNEL/m20_index.m3u8",
"VĂN HÓA - NGHỆ THUẬT & GIẢI TRÍ,https://nvzoftzsvflivcf.vcdn.com.vn/vtvcab17/vtvcab17@high.m3u8",
"PHIM TRUYỆN TRONG & NGOÀI NƯỚC,https://856175157.r.vtvcdn.com/ondrm/FILM_TV/m20_index.m3u8",
"VĂN HÓA - NGHỆ THUẬT & GIẢI TRÍ,https://856175157.r.vtvcdn.com/ondrm/VFAMILY/m20_index.m3u8",
"Thiếu Nhi - Hoạt hình,https://856175157.r.vtvcdn.com/ondrm/BIBI_PLUS_clear/m20_index.m3u8",
"GIÁO DỤC - KHOA HỌC - CÔNG NGHỆ & ĐỜI SỐNG,https://856175157.r.vtvcdn.com/ondrm/LIFE_TV/m20_index.m3u8",
	//nvzoftzsvflivcf.vcdn.com.vn - ok - 10/12/2022
	"VCDN VTV6,https://nvzoftzsvflivcf.vcdn.com.vn/vtv6/vtv6@mid.m3u8",
	"VCDN VTV2,https://nvzoftzsvflivcf.vcdn.com.vn/vtv2/vtv2@mid.m3u8",
	"VCDN vtvcab6,https://nvzoftzsvflivcf.vcdn.com.vn/vtvcab6/vtvcab6@high.m3u8",
//tvonline.vn - CORS
//"TVOnline VTV5,https://tvonline.vn/channel/vtv5/?source=7",//CORS
	//vtsstr4.tv24.vn - ok - 10/12/2022
"SCTV8,https://vtsstr4.tv24.vn/live/SCTV8_SD_new.smil/playlist.m3u8",
	//s@s6.hopslan.com:443 - OK - 10/12/2022
	"2DFTV,https://s@s6.hopslan.com:443/zdff1/tracks-v1a1/mono.m3u8",
	"Test,https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
	"MBC 1,https://shls-mbc1na-prod-dub.shahid.net/out/v1/84ab37e99d6e4b16b33c6600f94f6ccb/index_8.m3u8",//CORS
//cors
"TV,https://alpha.tv.online.tm/hls/ch001.m3u8",
//vws.vegacdn.vn - ok - 10/12/2022
"Nam a,https://884030f97a.vws.vegacdn.vn/live/_definst_/stream_1_a0acb/chunklist.m3u8",
"THETHAO_HD,https://856175157.r.vtvcdn.com/ondrm/THETHAO_HD/m30_index.m3u8",
"E Channel,https://856175157.r.vtvcdn.com/ondrm/E_CHANNEL/m30_index.m3u8",
"Film TV - VTVCab19,https://856175157.r.vtvcdn.com/ondrm/FILM_TV/m20_index.m3u8",
"HAY YV - OnSport,https://856175157.r.vtvcdn.com/ondrm/HAY_TV/m30_index.m3u8",
"O2TV - OnCine,https://856175157.r.vtvcdn.com/ondrm/O2_TV/m20_index.m3u8",
"PhimViet - OnPhimViet,https://856175157.r.vtvcdn.com/ondrm/PHIM_VIET/m20_index.m3u8",
//cors
// "VTV1 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtv1/chunklist_2.m3u8",
// "VTV2 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtv2/chunklist_1.m3u8",
// "VTV3 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtv3/chunklist_2.m3u8",
// "VTV4 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtv4/chunklist_1.m3u8",
// "VTV5 HD,https://838765eeba.vws.vegacdn.vn/live/vtv5/chunklist_1.m3u8",
// "VTV6 HD,https://838765eeba.vws.vegacdn.vn/live/vtv6/chunklist_2.m3u8",
// "VTV7 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtv7/chunklist_1.m3u8",
// "VTV8 HD,https://8387f03af3.vws.vegacdn.vn/live/vtv8/chunklist_1.m3u8",
// "VTV9 HD,https://838765eeba.vws.vegacdn.vn/live/vtv9/chunklist_3.m3u8",
// "VTC1 HD,https://8387e1fb5a.vws.vegacdn.vn/live/vtc-1/chunklist_2.m3u8",
// "VTC2,https://8387d1dfc2.vws.vegacdn.vn/live/vtc2/chunklist_1.m3u8",
// "VTC3 HD,https://8387f03af3.vws.vegacdn.vn/live/vtc3/chunklist_1.m3u8",
// "VTC4 HD,https://8387d1dfc2.vws.vegacdn.vn/live/vtc4/chunklist_1.m3u8",
// "VTC5,https://8387d1dfc2.vws.vegacdn.vn/live/vtc5/chunklist_1.m3u8",
// "VTC6,https://8387d1dfc2.vws.vegacdn.vn/live/vtc6/chunklist_1.m3u8",
// "VTC7 - Today TV,https://8387e1fb5a.vws.vegacdn.vn/live/vtc7/chunklist_2.m3u8",
// "VTC8,https://8387d1dfc2.vws.vegacdn.vn/live/vtc8/chunklist_1.m3u8",
// "VTC9,https://8387f03af3.vws.vegacdn.vn/live/vtc9/chunklist_1.m3u8",
// "VTC10,https://8387e1fb5a.vws.vegacdn.vn/live/vtc10/chunklist_2.m3u8",
// "VTC11,https://8387e1fb5a.vws.vegacdn.vn/live/vtc11/chunklist_2.m3u8",
// "VTC12,https://8387d1dfc2.vws.vegacdn.vn/live/vtc12/chunklist_1.m3u8",
// "VTC13 HD,https://8387d1dfc2.vws.vegacdn.vn/live/vtc13/chunklist_1.m3u8",
// "VTC14 HD,https://8387d1dfc2.vws.vegacdn.vn/live/vtc14/chunklist_1.m3u8",
// "VTC16 HD,https://8387d1dfc2.vws.vegacdn.vn/live/vtc16/chunklist_1.m3u8",
// "HTV1,https://8387e1fb5a.vws.vegacdn.vn/live/htv1/chunklist_2.m3u8",
// "HTV2 Vie Channel,https://8387e1fb5a.vws.vegacdn.vn/live/htv2/chunklist_2.m3u8",
// "HTV3 Dreams TV,https://8387e1fb5a.vws.vegacdn.vn/live/htv3/chunklist_2.m3u8",
// "HTV Keys,https://8387f03af3.vws.vegacdn.vn/live/htv4/chunklist_2.m3u8",
// "HTV7 HD,https://8387f03af3.vws.vegacdn.vn/live/htv7/chunklist_2.m3u8",
// "HTV9 HD,https://8387f03af3.vws.vegacdn.vn/live/htv9/chunklist_2.m3u8",
// "HTV Thể Thao,https://8387f03af3.vws.vegacdn.vn/live/htv-thethao/chunklist_2.m3u8",
// "HTVC Thuần Việt HD,https://8387f03af3.vws.vegacdn.vn/live/htvc-thuanviet/chunklist_2.m3u8",
// "FBNC,https://8387f03af3.vws.vegacdn.vn/live/fbnc/chunklist_2.m3u8",
// "HTVC Phụ Nữ,https://8387d1dfc2.vws.vegacdn.vn/live/htvc-phunu/chunklist_1.m3u8",
// "HTVC Ca Nhạc,https://8387d1dfc2.vws.vegacdn.vn/live/htvc-canhac/chunklist_1.m3u8",
// "HTVC Phim,https://8387d1dfc2.vws.vegacdn.vn/live/htvc-phim/chunklist_1.m3u8",
// "DW,https://8387d1dfc2.vws.vegacdn.vn/live/dw/chunklist_1.m3u8",
// "THVL1 HD _ TH Vĩnh Long,https://8387f03af3.vws.vegacdn.vn/live/thvl1/chunklist_2.m3u8",
// "ANTV HD,https://8387f03af3.vws.vegacdn.vn/live/antv/chunklist_2.m3u8",
// "SCTV2 - NetStars,https://8387d1dfc2.vws.vegacdn.vn/live/sctv2-netstars/chunklist_2.m3u8",
// "BTV10 NCM,https://8387e1fb5a.vws.vegacdn.vn/live/ncm/chunklist_1.m3u8",
// "Quốc Hội HD,https://8387f03af3.vws.vegacdn.vn/live/quochoi/chunklist_2.m3u8",
// "QPVN - Quốc Phòng,https://8387f03af3.vws.vegacdn.vn/live/qpvn/chunklist_2.m3u8",
// "Nhân Dân TV,https://8387f03af3.vws.vegacdn.vn/live/nhandan/chunklist_2.m3u8",
// "BTV4 HD _ TH Bình Dương,https://8387e1fb5a.vws.vegacdn.vn/live/btv4-movie/chunklist_1.m3u8",
// "THĐT2 - Miền Tây,https://8387e1fb5a.vws.vegacdn.vn/live/dongthap2/chunklist_1.m3u8",
// "BTV9 An Viên HD,https://8387e1fb5a.vws.vegacdn.vn/live/anvien/chunklist_1.m3u8",
// "ANT - Thiếu Nhi (BPTV3),https://8387e1fb5a.vws.vegacdn.vn/live/binhphuoc3/chunklist_1.m3u8",
	//618b88f69e53b.streamlock.net - OK - 10/12/2022
	"THTV2,https://618b88f69e53b.streamlock.net/THTV2/travinhtv2/chunklist_w517483768.m3u8",
	"THTV,https://60acee235f4d5.streamlock.net:443/THTV/travinhtv/chunklist.m3u8",
	//tshift.fptplay.net - OK - 10/12/2022
	"HBO 0-10,https://tshift.fptplay.net/dvr/hbo_1500.stream/chunks_dvr_range-0-10.m3u8",
	"KixHD,https://tshift.fptplay.net/dvr/kixhd_1000.stream/chunks_dvr_range-0-10.m3u8",
//livevlive.vtvcab.vn - ok - 10/12/2022
"-- VTV CAB --,",
"ON SPORT 1,https://livevlive.vtvcab.vn/hls/OS_ONSPORT1/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 2,https://livevlive.vtvcab.vn/hls/OS_ONSPORT2/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 3,https://livevlive.vtvcab.vn/hls/OS_ONSPORT3/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 4,https://livevlive.vtvcab.vn/hls/OS_ONSPORT4/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 5,https://livevlive.vtvcab.vn/hls/OS_ONSPORT5/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 6,https://livevlive.vtvcab.vn/hls/OS_ONSPORT6/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 7,https://livevlive.vtvcab.vn/hls/OS_ONSPORT7/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 8,https://livevlive.vtvcab.vn/hls/OS_ONSPORT8/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 9,https://livevlive.vtvcab.vn/hls/OS_ONSPORT9/sc-gaFEAA/m40_index.m3u8",
"ON SPORT 10,https://livevlive.vtvcab.vn/hls/OS_ONSPORT10/sc-gaFEAA/m40_index.m3u8",
	//amtv1.livestreamingcdn.com - ok - 10/12/2022 - kenh nuoc ngoai
	"Am2Abr,https://amtv1.livestreamingcdn.com/am2abr/index.m3u8",
	//api.vthanhtivi.pw - CORS
// 	"Vieon, https://api.vthanhtivi.pw/v1/getlink/vieon/vie-giai-tri-hd",
	//vips-livecdn.fptplay.net - CORS - 10/12/2022
// "VTV1,https://vips-livecdn.fptplay.net/hda1/vtv1hd_vhls.smil/chunklist_b5000000.m3u8",
// "VTV2,https://vips-livecdn.fptplay.net/hda1/vtv2_vhls.smil/chunklist_b5000000.m3u8",
// "VTV3,https://vips-livecdn.fptplay.net/hda1/vtv3hd_vhls.smil/chunklist_b5000000.m3u8",
// "VTV5,https://vips-livecdn.fptplay.net/hda2/vtv5hd_vhls.smil/chunklist_b5000000.m3u8",
// "VTV6,https://vips-livecdn.fptplay.net/hda1/vtv6hd_vhls.smil/chunklist_b5000000.m3u8",
// "HTV1,https://livecdn.fptplay.net/sdb/htv1_hls.smil/chunklist_b1200000.m3u8",
// "AXN,http://vips-livecdn.fptplay.net/hda3/axnhd_vhls.smil/chunklist_b5000000.m3u8",
// "Warner Bros,http://vips-livecdn.fptplay.net/hda3/warnertv_vhls.smil/chunklist_b5000000.m3u8",
// "Cinema World,https://vips-livecdn.fptplay.net/hda2/cinemawork_vhls.smil/chunklist_b5000000.m3u8",
// "Cinemax,http://vips-livecdn.fptplay.net/hda1/cinemax_vhls.smil/chunklist_b5000000.m3u8",
// "HBO,http://vips-livecdn.fptplay.net/hda1/hbo_vhls.smil/chunklist_b5000000.m3u8",
// "BBC Earth,http://vips-livecdn.fptplay.net/hda2/bbcearth_vhls.smil/chunklist_b5000000.m3u8",
// "BBC Lifestyle,https://vips-livecdn.fptplay.net/sdb/bbclifestyle_2000.stream/chunklist_b500000.m3u8",
// "Discovery Channel,https://vips-livecdn.fptplay.net/hda2/discovery_vhls.smil/chunklist_b5000000.m3u8",
// "Discovery Asia,http://vips-livecdn.fptplay.net/hda2/discoveryasia_vhls.smil/chunklist_b5000000.m3u8",
// "Nat Geo,https://vips-livecdn.fptplay.net/hda2/natgeohd_vhls.smil/chunklist_b5000000.m3u8",
// "WILD,http://htv-drm-live-cdn.fptplay.net/CDN-FPT02/NATGEOWILD-HD-1080p/playlist.m3u8",
// "Rock Entertainment,https://vips-livecdn.fptplay.net/hda1/blueantent_vhls.smil/chunklist_b5000000.m3u8",
// "Rock Extreme,https://vips-livecdn.fptplay.net/hda1/blueantext_vhls.smil/chunklist_b5000000.m3u8",
// "Asian Food Network,https://vips-livecdn.fptplay.net/hda1/afchd_vhls.smil/chunklist_b5000000.m3u8",
// "Animal Planet,http://vips-livecdn.fptplay.net/hda2/animalplanet_vhls.smil/chunklist_b5000000.m3u8",
// "Ariang,https://vips-livecdn.fptplay.net/sdb/arirang_hls.smil/chunklist_b2500000.m3u8",
// "KBS World,https://vips-livecdn.fptplay.net/sdb/kbs_hls.smil/chunklist_b2500000.m3u8",
// "NHK World,https://vips-livecdn.fptplay.net/hda2/nhkworld_vhls.smil/chunklist_b5000000.m3u8",
// "KIX,https://vips-livecdn.fptplay.net/hda1/kixhd_vhls.smil/chunklist_b5000000.m3u8",
// "Fashion TV,http://vips-livecdn.fptplay.net/hda2/fashiontvhd_vhls.smil/chunklist_b5000000.m3u8",
// "History,http://htv-drm-live-cdn.fptplay.net/CDN-FPT02/FOX-HD-1080p/playlist.m3u8",
// "TLC,https://vips-livecdn.fptplay.net/hda2/travelliving_vhls.smil/chunklist_b5000000.m3u8",
// "Outdoor Channel,https://vips-livecdn.fptplay.net/hda1/outdoorfhd_vhls.smil/chunklist_b5000000.m3u8",
// "ABCAustrali,https://vips-livecdn.fptplay.net/sdb/australiaplus_hls.smil/chunklist_b2500000.m3u8",
// "TV5 Monde Asie,https://vips-livecdn.fptplay.net/sdb/tv5_hls.smil/chunklist_b2500000.m3u8",
// "Bloomberg TV,https://vips-livecdn.fptplay.net/sdb/bloomberg_hls.smil/chunklist_b2500000.m3u8",
// "CNBC,https://vips-livecdn.fptplay.net/sdb/cnbc_hls.smil/chunklist_b2500000.m3u8",
// "France 24,https://vips-livecdn.fptplay.net/sdb/france24_hls.smil/chunklist_b2500000.m3u8",
// "MTV Asia,https://vips-livecdn.fptplay.net/sdb/mtv_hls.smil/chunklist_b2500000.m3u8",
// "Animax,https://vips-livecdn.fptplay.net/hda3/animaxport_vhls.smil/chunklist_b5000000.m3u8",
// "Happy Kids,https://e4.endpoint.cdn.sctvonline.vn/hls/happykid/sd2/index.m3u8",
// "Baby First,https://vips-livecdn.fptplay.net/hda1/babyfirst_vhls.smil/chunklist_b5000000.m3u8",
// "Baby TV,https://vips-livecdn.fptplay.net/hda3/babytvhd_vhls.smil/chunklist_b5000000.m3u8",
// "BBC Cbeebies,https://vips-livecdn.fptplay.net/hda3/cbeebies_vhls.smil/chunklist_b5000000.m3u8",
// "Boomerang,https://vips-livecdn.fptplay.net/hda3/boomerang_vhls.smil/chunklist_b5000000.m3u8",
// "Cartoon Network,https://vips-livecdn.fptplay.net/hda3/cartoonnetworkhd_vhls.smil/chunklist_b5000000.m3u8",
// "Da Vinci,https://vips-livecdn.fptplay.net/hda2/davincihd_vhls.smil/chunklist_b5000000.m3u8",
// "DreamWorks,https://vips-livecdn.fptplay.net/hda3/dreamworks_vhls.smil/chunklist_b5000000.m3u8",
// "Test,http://cineapp.org:8000/series/Fernando/Fernando/109363.avi",
// "Test2,http://bo50uarv.megogo.xyz/iptv/7V87U4BYW3GNVQ/6181/index.m3u",
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
