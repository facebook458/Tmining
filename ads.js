function loadAds(){
 document.querySelectorAll(".ads").forEach(ad=>{
  ad.innerHTML=`<script src='//libtl.com/sdk.js' data-zone='ZONE_ID'></script>`;
 });

 bannerAds.innerHTML=`<script src='//libtl.com/sdk.js' data-zone='ZONE_ID'></script>`;
}
