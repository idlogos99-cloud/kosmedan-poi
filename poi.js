// KosMedan - POI V58 - SATU SUMBER
// File ini dipakai bersama oleh: Admin V4, Cari Kos, Detail Kos
// Dashboard V51 TIDAK pakai file ini (Dashboard tidak hitung jarak, GPS dicek Admin).
// Cara pakai: load file ini SEBELUM script utama, dengan <script src="URL_POI_JS"></script>
// Setelah itu POI tersedia di window.KM_POI dan window.POI_ALL.
// Kalau ada POI yang berubah, edit HANYA file ini. Jangan copy-paste array POI ke file lain.
// Total: 77 POI = 26 Kampus + 26 RS + 15 Mall + 10 Transport. Bidadari sudah dihapus (tidak ada di Medan).
(function(){
  var POI = [
    // KAMPUS - 26
    {nama:"USU",lat:3.562,lng:98.658,cat:"KAMPUS"},
    {nama:"UNIMED",lat:3.607528,lng:98.71675,cat:"KAMPUS"},
    {nama:"UMSU",lat:3.5885,lng:98.694,cat:"KAMPUS"},
    {nama:"UINSU",lat:3.604994,lng:98.721378,cat:"KAMPUS"},
    {nama:"POLMED",lat:3.562,lng:98.659,cat:"KAMPUS"},
    {nama:"UISU",lat:3.568,lng:98.693,cat:"KAMPUS"},
    {nama:"UMA",lat:3.55,lng:98.685,cat:"KAMPUS"},
    {nama:"UNPAB",lat:3.590239,lng:98.645394,cat:"KAMPUS"},
    {nama:"Nommensen",lat:3.595,lng:98.682,cat:"KAMPUS"},
    {nama:"UNIKA",lat:3.544689,lng:98.621723,cat:"KAMPUS"},
    {nama:"UNPRI",lat:3.573,lng:98.645,cat:"KAMPUS"},
    {nama:"Potensi Utama",lat:3.658,lng:98.685,cat:"KAMPUS"},
    {nama:"UNIVA",lat:3.5455,lng:98.701,cat:"KAMPUS"},
    {nama:"Darma Agung",lat:3.57892,lng:98.664713,cat:"KAMPUS"},
    {nama:"Univ Sari Mutiara",lat:3.605,lng:98.65,cat:"KAMPUS"},
    {nama:"Methodist (Univ)",lat:3.57874,lng:98.670603,cat:"KAMPUS"},
    {nama:"ITM",lat:3.56692,lng:98.69626,cat:"KAMPUS"},
    {nama:"Mikroskil",lat:3.586,lng:98.692,cat:"KAMPUS"},
    {nama:"Al Azhar",lat:3.585,lng:98.70,cat:"KAMPUS"},
    {nama:"UNHAR",lat:3.576,lng:98.685,cat:"KAMPUS"},
    {nama:"Poltekkes",lat:3.53,lng:98.60,cat:"KAMPUS"},
    {nama:"Poltekpar",lat:3.61,lng:98.71,cat:"KAMPUS"},
    {nama:"LP3M",lat:3.5805,lng:98.6685,cat:"KAMPUS"},
    {nama:"AMIK Tunas",lat:3.59,lng:98.675,cat:"KAMPUS"},
    {nama:"STBA PIA",lat:3.586,lng:98.694,cat:"KAMPUS"},
    {nama:"UPMI",lat:3.58,lng:98.66,cat:"KAMPUS"},
    // RS - 26
    {nama:"RS Adam Malik",lat:3.518291,lng:98.608373,cat:"RS"},
    {nama:"RS Pirngadi",lat:3.598097,lng:98.688395,cat:"RS"},
    {nama:"RS Advent",lat:3.590231,lng:98.649835,cat:"RS"},
    {nama:"RS Columbia",lat:3.592,lng:98.678,cat:"RS"},
    {nama:"RS Siloam",lat:3.585943,lng:98.673644,cat:"RS"},
    {nama:"RS Bunda Thamrin",lat:3.585271,lng:98.651063,cat:"RS"},
    {nama:"RS Murni Teguh",lat:3.592,lng:98.68,cat:"RS"},
    {nama:"RS Mitra Medika",lat:3.59,lng:98.66,cat:"RS"},
    {nama:"RS USU",lat:3.567988,lng:98.657492,cat:"RS"},
    {nama:"RS Haji",lat:3.613508,lng:98.714609,cat:"RS"},
    {nama:"RS Royal Prima",lat:3.588,lng:98.664,cat:"RS"},
    {nama:"RS Permata Bunda",lat:3.575,lng:98.685,cat:"RS"},
    {nama:"RS Bhayangkara",lat:3.57,lng:98.66,cat:"RS"},
    {nama:"RS Mitra Sejati",lat:3.575,lng:98.65,cat:"RS"},
    {nama:"RS Sufina Azis",lat:3.595,lng:98.69,cat:"RS"},
    {nama:"RS Estomihi",lat:3.57,lng:98.69,cat:"RS"},
    {nama:"RS Martha Friska",lat:3.65,lng:98.68,cat:"RS"},
    {nama:"RS Eshmun",lat:3.70,lng:98.65,cat:"RS"},
    {nama:"RS Kesdam",lat:3.5935,lng:98.6805,cat:"RS"},
    {nama:"RS Imelda",lat:3.60,lng:98.68,cat:"RS"},
    {nama:"RS Bina Kasih",lat:3.595,lng:98.675,cat:"RS"},
    {nama:"RS Sari Mutiara",lat:3.598,lng:98.681,cat:"RS"},
    {nama:"RS Methodist",lat:3.5838,lng:98.6895,cat:"RS"},
    {nama:"RS Santa Elisabeth",lat:3.5753762,lng:98.6766563,cat:"RS"},
    {nama:"RS Herna",lat:3.585,lng:98.675,cat:"RS"},
    {nama:"RS Hermina",lat:3.61,lng:98.65,cat:"RS"},
    // MALL - 15
    {nama:"Sun Plaza",lat:3.5918,lng:98.6765,cat:"MALL"},
    {nama:"Centre Point",lat:3.59177,lng:98.6811,cat:"MALL"},
    {nama:"Delipark",lat:3.59415,lng:98.67459,cat:"MALL"},
    {nama:"Medan Mall",lat:3.58795,lng:98.6865,cat:"MALL"},
    {nama:"Medan Fair",lat:3.59287,lng:98.66373,cat:"MALL"},
    {nama:"Manhattan",lat:3.591114,lng:98.62661,cat:"MALL"},
    {nama:"Lippo Plaza",lat:3.588,lng:98.675,cat:"MALL"},
    {nama:"Cambridge",lat:3.585,lng:98.65,cat:"MALL"},
    {nama:"Grand Palladium",lat:3.592,lng:98.672,cat:"MALL"},
    {nama:"Thamrin Plaza",lat:3.586609,lng:98.692026,cat:"MALL"},
    {nama:"Ringroad City",lat:3.575775,lng:98.625573,cat:"MALL"},
    {nama:"Hermes Place",lat:3.575,lng:98.675,cat:"MALL"},
    {nama:"Focal Point",lat:3.58,lng:98.676,cat:"MALL"},
    {nama:"Millennium",lat:3.605,lng:98.655,cat:"MALL"},
    {nama:"Yuki Simpang",lat:3.54,lng:98.70,cat:"MALL"},
    // TRANSPORT - 10
    {nama:"Terminal Amplas",lat:3.539207,lng:98.718201,cat:"TRANSPORT"},
    {nama:"Terminal Pinang Baris",lat:3.588969,lng:98.610167,cat:"TRANSPORT"},
    {nama:"Stasiun Medan",lat:3.590878,lng:98.679742,cat:"TRANSPORT"},
    {nama:"Kualanamu",lat:3.642,lng:98.885,cat:"TRANSPORT"},
    {nama:"Belawan",lat:3.775,lng:98.69,cat:"TRANSPORT"},
    {nama:"Lapangan Merdeka",lat:3.59025,lng:98.678586,cat:"TRANSPORT"},
    {nama:"Masjid Raya",lat:3.575111,lng:98.687321,cat:"TRANSPORT"},
    {nama:"Istana Maimun",lat:3.575201,lng:98.683883,cat:"TRANSPORT"},
    {nama:"Merdeka Walk",lat:3.590168,lng:98.678031,cat:"TRANSPORT"},
    {nama:"Podomoro City",lat:3.585,lng:98.673,cat:"TRANSPORT"}
  ];
  window.KM_POI = POI;
  window.POI_ALL = POI;
  window.KM_POI_VERSION = "V58";
  window.KM_POI_COUNT = POI.length;
  function haversineMeter(a,b,c,d){
    var R=6371000, toRad=function(x){return x*Math.PI/180;};
    var dLat=toRad(c-a), dLon=toRad(d-b);
    var s=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(dLon/2)*Math.sin(dLon/2);
    return R*2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));
  }
  function cariTerdekat(lat,lng,list){
    if(!lat||!lng) return null;
    var best=null, min=1e12;
    for(var i=0;i<list.length;i++){ var p=list[i]; var d=haversineMeter(lat,lng,p.lat,p.lng); if(d<min){min=d;best=p;} }
    return best?{nama:best.nama,jarak:Math.round(min)}:null;
  }
  window.KM_haversineMeter = haversineMeter;
  window.KM_cariTerdekat = cariTerdekat;
  window.KM_POI_BY_CAT = function(cat){ return POI.filter(function(p){return p.cat===cat;}); };
})();
