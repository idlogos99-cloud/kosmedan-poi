// KosMedan - POI V67 - FIX V66 - Koordinat diperbaiki + TRANSPORT dipisah + Tambah POI hilang
(function(){
  var POI = [
    // KAMPUS
    {nama:"USU",lat:3.5617,lng:98.6563,cat:"KAMPUS"},
    {nama:"UNIMED",lat:3.607528,lng:98.71675,cat:"KAMPUS"},
    {nama:"UMSU",lat:3.614314,lng:98.675407,cat:"KAMPUS"},
    {nama:"UINSU Kampus I",lat:3.5965,lng:98.6825,cat:"KAMPUS"},
    {nama:"UINSU Kampus II",lat:3.604994,lng:98.721378,cat:"KAMPUS"},
    {nama:"UISU",lat:3.562272,lng:98.693844,cat:"KAMPUS"},
    {nama:"UISU Gedung Johor",lat:3.535707,lng:98.663057,cat:"KAMPUS"},
    {nama:"UMA Kampus I",lat:3.589,lng:98.703,cat:"KAMPUS"},
    {nama:"UMA Kampus II",lat:3.576549,lng:98.643466,cat:"KAMPUS"},
    {nama:"UNPAB",lat:3.590239,lng:98.645394,cat:"KAMPUS"},
    {nama:"Nommensen",lat:3.597714,lng:98.681459,cat:"KAMPUS"},
    {nama:"UNIKA",lat:3.5425,lng:98.6221,cat:"KAMPUS"},
    {nama:"UNPRI Sampul",lat:3.598865,lng:98.652759,cat:"KAMPUS"},
    {nama:"UNPRI Sekip",lat:3.596737,lng:98.665097,cat:"KAMPUS"},
    {nama:"UNPRI Danau Singkarak",lat:3.604054,lng:98.654208,cat:"KAMPUS"},
    {nama:"Potensi Utama",lat:3.637902,lng:98.667025,cat:"KAMPUS"},
    {nama:"UNIVA",lat:3.545,lng:98.698996,cat:"KAMPUS"},
    {nama:"Darma Agung",lat:3.57892,lng:98.664713,cat:"KAMPUS"},
    {nama:"Univ Sari Mutiara",lat:3.59775,lng:98.643045,cat:"KAMPUS"},
    {nama:"Methodist (Univ)",lat:3.57874,lng:98.670603,cat:"KAMPUS"},
    {nama:"ITM",lat:3.569498,lng:98.696153,cat:"KAMPUS"},
    {nama:"Mikroskil",lat:3.587708,lng:98.690743,cat:"KAMPUS"},
    {nama:"Al Azhar",lat:3.585123,lng:98.700456,cat:"KAMPUS"},
    {nama:"UNHAR HM Joni",lat:3.568151,lng:98.694772,cat:"KAMPUS"},
    {nama:"UNHAR Imam Bonjol",lat:3.576436,lng:98.677374,cat:"KAMPUS"},
    {nama:"Poltekkes",lat:3.510112,lng:98.616716,cat:"KAMPUS"},
    {nama:"Poltekpar",lat:3.613569,lng:98.718246,cat:"KAMPUS"},
    {nama:"LP3M",lat:3.5805,lng:98.6685,cat:"KAMPUS"},
    {nama:"AMIK Tunas",lat:3.590123,lng:98.675456,cat:"KAMPUS"},
    {nama:"STBA PIA",lat:3.586123,lng:98.694123,cat:"KAMPUS"},
    {nama:"UPMI",lat:3.567559,lng:98.690563,cat:"KAMPUS"},
    // TAMBAHAN V67 - YANG HILANG DI V66
    {nama:"Universitas Sutomo",lat:3.609251,lng:98.680215,cat:"KAMPUS"},
    {nama:"Univ Tjut Nyak Dien",lat:3.5968,lng:98.6465,cat:"KAMPUS"},
    {nama:"Universitas Terbuka Medan",lat:3.574664,lng:98.713739,cat:"KAMPUS"},

    // RS - KOORDINAT DIPERBAIKI V67
    {nama:"RS Adam Malik",lat:3.518414,lng:98.608638,cat:"RS"},
    {nama:"RS Pirngadi",lat:3.598097,lng:98.688395,cat:"RS"},
    {nama:"RS Advent",lat:3.590231,lng:98.649835,cat:"RS"},
    {nama:"RS Columbia",lat:3.591123,lng:98.678234,cat:"RS"},
    {nama:"RS Siloam",lat:3.585943,lng:98.673644,cat:"RS"},
    {nama:"RS Bunda Thamrin",lat:3.585271,lng:98.651063,cat:"RS"},
    {nama:"RS Murni Teguh",lat:3.590542,lng:98.68155,cat:"RS"},
    {nama:"RS Mitra Medika Premiere",lat:3.586179,lng:98.66699,cat:"RS"},
    {nama:"RS Mitra Medika Amplas",lat:3.537726,lng:98.711832,cat:"RS"},
    {nama:"RS USU",lat:3.567326,lng:98.657204,cat:"RS"},
    {nama:"RS Haji",lat:3.613508,lng:98.714609,cat:"RS"},
    {nama:"RS Royal Prima",lat:3.588123,lng:98.664234,cat:"RS"},
    {nama:"RS Permata Bunda",lat:3.538123,lng:98.712345,cat:"RS"},
    {nama:"RS Bhayangkara",lat:3.57424,lng:98.657789,cat:"RS"},
    {nama:"RS Mitra Sejati",lat:3.540994,lng:98.67987,cat:"RS"},
    {nama:"RS Sufina Azis",lat:3.595123,lng:98.690123,cat:"RS"},
    {nama:"RS Estomihi",lat:3.556722,lng:98.695106,cat:"RS"},
    {nama:"RS Martha Friska",lat:3.65,lng:98.68,cat:"RS"},
    {nama:"RS Eshmun",lat:3.686763,lng:98.655777,cat:"RS"},
    {nama:"RS Kesdam",lat:3.5935,lng:98.6805,cat:"RS"},
    {nama:"RS Imelda",lat:3.600123,lng:98.680456,cat:"RS"},
    {nama:"RS Bina Kasih",lat:3.595234,lng:98.675345,cat:"RS"},
    {nama:"RS Sari Mutiara",lat:3.59775,lng:98.643045,cat:"RS"},
    {nama:"RS Methodist",lat:3.5838,lng:98.6895,cat:"RS"},
    {nama:"RS Santa Elisabeth",lat:3.5753762,lng:98.6766563,cat:"RS"},
    {nama:"RS Herna",lat:3.585123,lng:98.675234,cat:"RS"},
    {nama:"RS Hermina",lat:3.610123,lng:98.650234,cat:"RS"},

    // MALL
    {nama:"Sun Plaza",lat:3.5918,lng:98.6765,cat:"MALL"},
    {nama:"Centre Point",lat:3.59177,lng:98.6811,cat:"MALL"},
    {nama:"Delipark",lat:3.59416,lng:98.67466,cat:"MALL"},
    {nama:"Medan Mall",lat:3.58795,lng:98.6865,cat:"MALL"},
    {nama:"Medan Fair",lat:3.593189,lng:98.663489,cat:"MALL"},
    {nama:"Manhattan",lat:3.591114,lng:98.62661,cat:"MALL"},
    {nama:"Lippo Plaza",lat:3.586521,lng:98.673324,cat:"MALL"},
    {nama:"Cambridge",lat:3.584769,lng:98.667519,cat:"MALL"},
    {nama:"Grand Palladium",lat:3.592123,lng:98.672345,cat:"MALL"},
    {nama:"Thamrin Plaza",lat:3.586609,lng:98.692026,cat:"MALL"},
    {nama:"Ringroad City",lat:3.575775,lng:98.625573,cat:"MALL"},
    {nama:"Hermes Place",lat:3.57068,lng:98.66623,cat:"MALL"},
    {nama:"Focal Point",lat:3.574,lng:98.626,cat:"MALL"},
    {nama:"Millennium",lat:3.615452,lng:98.649702,cat:"MALL"},
    {nama:"Yuki Simpang",lat:3.575811,lng:98.688001,cat:"MALL"},

    // TRANSPORT - V67: HANYA TRANSPORT HARIAN, KUALANAMU & BELAWAN DIPISAH
    {nama:"Terminal Amplas",lat:3.539207,lng:98.718201,cat:"TRANSPORT"},
    {nama:"Terminal Pinang Baris",lat:3.588969,lng:98.610167,cat:"TRANSPORT"},
    {nama:"Stasiun Medan",lat:3.590878,lng:98.679742,cat:"TRANSPORT"},
    {nama:"Stasiun Helvetia",lat:3.607123,lng:98.643456,cat:"TRANSPORT"},
    {nama:"Stasiun Bandar Khalipah",lat:3.595123,lng:98.705123,cat:"TRANSPORT"},

    // BANDARA & PELABUHAN - DIPISAH, JANGAN DIPAKAI BUAT cariTerdekat TRANSPORT
    {nama:"Kualanamu",lat:3.637,lng:98.885,cat:"BANDARA_PELABUHAN"},
    {nama:"Belawan",lat:3.775,lng:98.69,cat:"BANDARA_PELABUHAN"}
  ];
  window.KM_POI = POI;
  window.POI_ALL = POI;
  window.KM_POI_VERSION = "V67";
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
