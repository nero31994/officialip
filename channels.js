const channels = [
  { 
    name: "AXN (SD)", 
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd", 
    drm: { kid: "fd5d928f5d974ca4983f6e9295dfe410", key: "3aaa001ddc142fedbb9d5557be43792f" } 
  },
  { 
    name: "Bilyonaryo Channel", 
    url: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd", 
    drm: { kid: "227ffaf09bec4a889e0e0988704d52a2", key: "b2d0dce5c486891997c1c92ddaca2cd2" } 
  },
  { 
    name: "Buko (SD)", 
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd", 
    drm: { kid: "d273c085f2ab4a248e7bfc375229007d", key: "7932354c3a84f7fc1b80efa6bcea0615" } 
  },
  { 
    name: "CCTV 4 (DASH)", 
    url: "https://ott.studentsdemo.com/stream/phcathenatv/gtv/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01", 
    hls: { kid: "", key: "" } 
  },
  { 
    name: "CNN HD (DASH)", 
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd", 
    drm: { kid: "900c43f0e02742dd854148b7a75abbec", key: "da315cca7f2902b4de23199718ed7e90" } 
  },
  { 
    name: "DepEd Channel (SD)", 
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd", 
    drm: { kid: "0f853706412b11edb8780242ac120002", key: "2157d6529d80a760f60a8b5350dbc4df" } 
  },
  { 
    name: "Hits HD", 
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd", 
    drm: { kid: "dac605bc197e442c93f4f08595a95100", key: "975e27ffc1b7949721ee3ccb4b7fd3e5" } 
  },
  { 
    name: "Hits Now", 
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd", 
    drm: { kid: "14439a1b7afc4527bb0ebc51cf11cbc1", key: "92b0287c7042f271b266cc11ab7541f1" } 
  },
  { 
    name: "IBC 13 (SD)", 
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd", 
    drm: { kid: "04e292bc99bd4ccba89e778651914254", key: "ff0a62bdf8920ce453fe680330b563a5" } 
  },
  { 
    name: "NBA", 
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd", 
    drm: { kid: "f36eed9e95f140fabbc88a08abbeafff", key: "0125600d0eb13359c28bdab4a2ebe75a" } 
  },
  { 
    name: "Nickelodeon", 
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd", 
    drm: { kid: "9ce58f37576b416381b6514a809bfd8b", key: "f0fbb758cdeeaddfa3eae538856b4d72" } 
  },
  { 
    name: "Premier Sports HD", 
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd", 
    drm: { kid: "fc19c98cb9504a0fb78b22fea0a4b814", key: "ea683112a96d4ae6c32d4ea13923e8c7" } 
  },
  { 
    name: "PTV 4 (SD)", 
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd", 
    drm: { kid: "71a130a851b9484bb47141c8966fb4a3", key: "ad1f003b4f0b31b75ea4593844435600" } 
  },
  { 
    name: "Sari Sari (SD)", 
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd", 
    drm: { kid: "0a7ab3612f434335aa6e895016d8cd2d", key: "b21654621230ae21714a5cab52daeb9d" } 
  },
  { 
    name: "SPOTV HD", 
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd", 
    drm: { kid: "ec7ee27d83764e4b845c48cca31c8eef", key: "9c0e4191203fccb0fde34ee29999129e" } 
  },
  { 
    name: "SPOTV2 HD", 
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd", 
    drm: { kid: "7eea72d6075245a99ee3255603d58853", key: "6848ef60575579bf4d415db1032153ed" } 
  },
  { 
    name: "TAP Edge", 
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd", 
    drm: { kid: "4553f7e8011f411fb625cefc39274300", key: "98f2f1d153367e84b5d559dc9dfb9a35" } 
  },
  { 
    name: "TAP Sports", 
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd", 
    drm: { kid: "eabd2d95c89e42f2b0b0b40ce4179ea0", key: "0e7e35a07e2c12822316c0dc4873903f" } 
  },
  { 
    name: "TV5 HD", 
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd", 
    drm: { kid: "2615129ef2c846a9bbd43a641c7303ef", key: "07c7f996b1734ea288641a68e1cfdc4d" } 
  },
  { 
    name: "TV Maria", 
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd", 
    drm: { kid: "fa3998b9a4de40659725ebc5151250d6", key: "998f1294b122bbf1a96c1ddc0cbb229f" } 
  },
  { 
    name: "TVN Movies", 
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd", 
    drm: { kid: "2e53f8d8a5e94bca8f9a1e16ce67df33", key: "3471b2464b5c7b033a03bb8307d9fa35" } 
  },
  { 
    name: "TVN Premiere", 
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd", 
    drm: { kid: "e1bde543e8a140b38d3f84ace746553e", key: "b712c4ec307300043333a6899a402c10" } 
  },
  { 
    name: "TVUP", 
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd", 
    drm: { kid: "83e813ccd4ca4837afd611037af02f63", key: "a97c515dbcb5dcbc432bbd09d15afd41" } 
  },
  { 
    name: "Warner TV HD", 
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd", 
    drm: { kid: "4503cf86bca3494ab95a77ed913619a0", key: "afc9c8f627fb3fb255dee8e3b0fe1d71" } 
  }
];
