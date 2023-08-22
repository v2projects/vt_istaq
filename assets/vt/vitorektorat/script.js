(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "start": "this.init(); this.syncPlaylists([this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist,this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_A7F30C91_B427_3E55_41E3_2FFDE14A29F5",
  "this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D",
  "this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A",
  "this.HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD",
  "this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E",
  "this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463",
  "this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8",
  "this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD",
  "this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56",
  "this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3",
  "this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B",
  "this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC",
  "this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8",
  "this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F",
  "this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8",
  "this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35",
  "this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D",
  "this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B",
  "this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520",
  "this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22",
  "this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC",
  "this.HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63",
  "this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5",
  "this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02",
  "this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA",
  "this.Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731",
  "this.Container_DD2DC412_D220_DDC8_4196_C82D4F0D1D2C",
  "this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08",
  "this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC",
  "this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "definitions": [{
 "duration": 1000,
 "id": "effect_F8C809F2_D497_ABB3_41E3_ADA43CD48856",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8CEF9FA_D497_ABB0_41B6_D7B25ADDDDC8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_FAD439C2_EDB8_4C5F_41D3_0DE70E4FCB7C",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F936A689_ED98_44ED_41DF_5F73C89230E4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 61.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9F69452_EEA9_C47E_41ED_83864F21C846",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -97.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C94BF394_EEA9_DCFB_41C2_1E2127ED03FB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_FEBB5A70_ED98_CC3A_41E2_3E744D2FBB94",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Keuangan",
 "hfovMin": "150%",
 "id": "panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CA820A4D_D261_AA58_41E2_4CAD61ACB7FF",
  "this.overlay_D2732840_DDAA_04B8_41E5_2B06BB08A495",
  "this.overlay_D222D6DE_DDB6_0D48_41C2_8DA03B756363"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 80.6,
   "yaw": 164.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_FEF51B6B_ED68_4C2D_41E3_E783BCE91E4D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8CF29F7_D497_ABB0_41B0_B6CFBACE1BC2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0.03,
  "class": "PanoramaCameraPosition",
  "pitch": -1.72
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D2F9FB_D497_ABB0_41BE_E253B82D64E5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_CE55BB41_EEA8_4C5D_41D7_1311EA96D76F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Biro",
 "hfovMin": "150%",
 "id": "panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CAEDD0A3_D260_D6C8_41B0_9024C25DC2CB",
  "this.overlay_CB2B647E_D260_DE38_41E7_10A52A46A06D",
  "this.overlay_C90CF99B_D260_D6F8_41E4_4456567BC6AF",
  "this.overlay_C9189743_D267_7A48_41D8_8B5F397F65B3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -55.92,
   "yaw": -137.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1"
  },
  {
   "backwardYaw": -7.17,
   "yaw": 93.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354"
  },
  {
   "backwardYaw": 79.92,
   "yaw": -14.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D"
  },
  {
   "backwardYaw": -94.38,
   "yaw": -26.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F598F2F2_ED9B_BC3F_41C2_584F34D4388D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -100.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C96A93C3_EEA9_DC5D_41D4_8D6E501B46A5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Biroo",
 "hfovMin": "150%",
 "id": "panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF2129E1_D263_D649_41D3_1C804C81B672",
  "this.overlay_CEF9411A_D260_B7F8_41DD_487687440198",
  "this.overlay_CF16D03A_D260_F638_41D0_52B98BEA43F7",
  "this.overlay_F0DA9017_EDB8_FBE5_41D2_4CB56460740C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 6.73,
   "yaw": -176.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785"
  },
  {
   "backwardYaw": -14.08,
   "yaw": 79.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826"
  },
  {
   "backwardYaw": -177.72,
   "yaw": 0.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_t.jpg",
 "hfovMax": 130
},
{
 "duration": 800,
 "id": "effect_CE89CE2D_EEA8_C42A_41E0_EAFF4F393CCC",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 23.75,
  "class": "PanoramaCameraPosition",
  "pitch": 2.05
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D5B9FB_D497_ABB0_41DD_BA62A4BB4530",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -22.75,
  "class": "PanoramaCameraPosition",
  "pitch": -4.88
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0.41
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_CE6EFC44_EE98_C45B_41A7_993CA3E0B230",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8D259FB_D497_ABB0_41D9_83D81A32B9AD",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Aula Mini edit",
 "hfovMin": "150%",
 "id": "panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CC6C4034_D4AE_98B7_41E0_E643D7737E88"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -102.34,
   "yaw": -4.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8D479FB_D497_ABB0_41E3_22FA8FE3DC26",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C949F2_D497_ABB3_41E1_BCD63B3019CA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4. Lobby 2",
 "hfovMin": "150%",
 "id": "panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0604F7F_D1C6_4BD7_4189_5DE2DFF0C969",
  "this.overlay_F18896E9_D1C2_DAFB_41B9_E75F7141A3F0",
  "this.overlay_F1AB1335_D1C2_3B68_41BF_B78FE246B72B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.28,
   "yaw": 120.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833"
  },
  {
   "backwardYaw": 46.23,
   "yaw": -6.22,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70"
  },
  {
   "backwardYaw": 63.36,
   "yaw": -121.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F586C2B3_ED9B_BC3D_41D7_FFFA8E543A3B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 7.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A782F2_ED9B_BC3F_41DF_AA86BE639D21",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8D749FB_D497_ABB0_41E9_7FBA34CACBB7",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_E1024466_D223_BE4B_41CE_AB527678DBF2",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "8. Perpus 3 edit",
 "hfovMin": "150%",
 "id": "panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C0CFB0E0_D220_D648_41D8_589DA522F36A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 6.68,
   "yaw": -5.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F5A412F2_ED9B_BC3F_41BB_E13C97F4FFAF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_C8DF964D_DD9A_0D48_41D3_C52232D6E317",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_C0B23666_D893_3846_41D1_C314C7C435F1",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8CE79FA_D497_ABB0_41B5_1F17EC2126BB",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 64.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C774A68B_EEA9_C4ED_41B3_5967B3797BC2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C399F2_D497_ABB3_41E2_0221F8B2DBB6",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D1F9FA_D497_ABB0_41E5_04D1C0880700",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -174.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4C98848_EEA9_CC6B_41E7_5E9CD90DABC9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_CF31A101_D774_D9BA_41CF_33DA5125ACA5",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 97.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C61EA471_EEA9_C43D_41E6_05A9BFDA62CD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F59812E3_ED9B_BC5E_41E2_FA09E2C3E3A2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C9D9F2_D497_ABB3_41E9_55BC0A78DE05",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 77.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C942A394_EEA9_DCFB_41E1_5B9F19D5AE55",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Biro",
 "hfovMin": "150%",
 "id": "panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CFDBDCB9_D260_AE38_41CD_03250B00AE57",
  "this.overlay_F13DF304_EDB9_DDDB_41E5_0DAD75D6BBAE",
  "this.overlay_F09494AA_EDB9_C42F_41D9_ED63497B7792",
  "this.overlay_F0FE2EC7_EDB8_4465_41EA_5773441E3F5A",
  "this.overlay_F075EBEA_EDB8_4C2F_41E1_F83D3C68FFC4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.48,
   "yaw": -177.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C90A49BF_EEA9_CC25_41DA_DEEF243310C2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 8.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C65304B0_EEA9_C43B_41DA_52363B066F33",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -86.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C97663A3_EEA9_DCDD_41D3_9B939A34D8E6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D5D9FB_D497_ABB0_41E4_6B6A663D625A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -176.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C69734F0_EEA9_C43B_41DC_230EFB6ADDC7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 144.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C621D4B0_EEA9_C43B_41E1_24D0F75481FE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Fakultas Teknik",
 "hfovMin": "150%",
 "id": "panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E3754281_D220_BAC8_41E5_7DBF4F4DD0D5",
  "this.overlay_E6CE6ED8_D220_EA78_41E2_A090BD454D27",
  "this.overlay_E190A3EE_D223_5A5B_418A_1ACB96BE7F5C",
  "this.overlay_E0283627_D220_FDC9_41DC_1F3778ADECBF",
  "this.overlay_E10314AB_D221_5ED8_41C7_6D1350F923F2",
  "this.overlay_E098AD80_D220_AEC8_41DE_932BEE2EDF39"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.52,
   "yaw": 158.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F59912F2_ED9B_BC3F_41EC_5EEBC6B42953",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F5A712F2_ED9B_BC3F_41AA_F06A623053D8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -93.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4FBD854_EEA9_CC7B_41C2_F60D3B5E9699",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C269F2_D497_ABB3_41DB_74ADBABE1024",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F59BF2E3_ED9B_BC5E_41D6_15E0723408A2",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -77.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C666B4E0_EEA9_C45B_41E3_8D0B07EAA015",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -98.16,
  "class": "PanoramaCameraPosition",
  "pitch": 4.69
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 175.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C431E778_EEA9_C42B_41E7_7CC2F1D94A83",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D629FB_D497_ABB0_41C7_1865FBFD001E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_C4C4C063_EEAF_DC5E_41E7_FADD652066C6",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D739FB_D497_ABB0_41DC_34E8A4DB226C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_CBA173F1_D76D_F85A_41E4_FBAEEE24A7DF",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8C929F2_D497_ABB3_41D2_427FD5654AF2",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 24.12,
  "class": "PanoramaCameraPosition",
  "pitch": -10.03
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D1C9FA_D497_ABB0_41E5_99269BF10788",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 173.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8FAD902_EEA9_CDDE_41D3_4123447C5EBF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D759FB_D497_ABB0_41A6_DC4E98939554",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 27.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C487B7F4_EEA9_C43B_41E8_B88ACCFF57FC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 42.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9E94462_EEA9_C45F_41D0_320496DAAADD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C049F2_D497_ABB3_41B5_C9E14604D1F0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_E422EEA0_D223_AAC8_41E7_A1F7BB619AA0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_C4C51063_EEAF_DC5E_41D1_9E9DBF6AE8B9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "23. Lantai 2 edit",
 "hfovMin": "150%",
 "id": "panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2E58984_D263_B6C8_41E9_45828CCF074B",
  "this.overlay_F374D0AD_D261_76D8_41E3_12BBF0BE2118",
  "this.overlay_F3374147_D267_5648_41DA_82410BC088BA",
  "this.overlay_C14D06E4_D795_D87A_41E9_F3EAAC708FF2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.97,
   "yaw": -2.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A"
  },
  {
   "backwardYaw": -104.79,
   "yaw": 92.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16"
  },
  {
   "backwardYaw": -173.69,
   "yaw": 102.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 75.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C688F4F0_EEA9_C43B_41DB_C39B5C98460F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C98993F3_EEA9_DC3D_41E8_A021C17E8B59",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A7B2F2_ED9B_BC3F_41D5_762BD3B1D2C3",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F5A482F2_ED9B_BC3F_41E9_73EB3E8304E1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Server",
 "hfovMin": "150%",
 "id": "panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C40EE3E2_D223_FA48_41D8_EE7735FE8CC4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.31,
   "yaw": -140.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Fakultas MIPA",
 "hfovMin": "150%",
 "id": "panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FF91A8EF_D2E1_D658_41AA_DFA31BCFEF79",
  "this.overlay_FC37BAFE_D2E0_AA38_41C8_C7F11F3B5907",
  "this.overlay_E335E9D2_D223_5648_41C3_35B256D01602"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.96,
   "yaw": 167.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_C4C61063_EEAF_DC5E_41EA_7DA6B4DE5164",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8D529FB_D497_ABB0_41C5_9047A43E8910",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F599F2F2_ED9B_BC3F_41E8_59D4C9BBBBA7",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 4.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6FCD57E_EEA9_C427_41E3_0FCA1E2DD011",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 143.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C95D6374_EEA9_DC3B_41E1_928FF560704D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 58.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C99303E3_EEA9_DC5D_41E6_84149179891B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A722F2_ED9B_BC3F_41ED_40614353760A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -100.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C92BDA3C_EEA9_CC2B_41E6_F5A25122F10B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_C8F0CF84_DDEA_3BB8_41B0_55FD2BABD521",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -179.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C64574C0_EEA9_C45B_41D6_508C074B7C3D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 57.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6B9250C_EEA9_C5EB_417B_CFF4DBAAEE0E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -86.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7A836DA_EEA9_C46E_41E0_97F3A8217909",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A632F2_ED9B_BC3F_41CA_8357869D06E2",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C299F2_D497_ABB3_41C2_24E78C91DB87",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 165.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7CA1708_EEA9_C5EB_41D9_F31350665473",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D7F9FB_D497_ABB0_41DA_0CE1F9997F71",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -173.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7DA26F8_EEA9_C42B_41A5_4AFF4352A27D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_F13EB8FE_EEAF_CC27_41EB_836801B060E0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 138.18,
  "class": "PanoramaCameraPosition",
  "pitch": 1.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A592F2_ED9B_BC3F_41E6_64F3FD641568",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 23.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4EBA864_EEA9_CC5B_41EC_8C2402027716",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_FCCE46E0_D221_5A48_41E3_1CE06E186EA4",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_C96D61C6_DDEA_07B8_41C4_1866AC8AFA45",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_CE61F624_DD96_0CF9_41CC_AB5D99F43349",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_C12565F3_D795_385E_417E_0D324D6290BA",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E3733E75_ED69_C425_41E3_D8850F000D42_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -71.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8E85947_EEA9_CC65_41D0_C831AAC06661",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 14.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C752667B_EEA9_C42D_41CA_3685517619EA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 9.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C62C64A1_EEA9_C4DA_41AC_19CB7463C11E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -19.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C722C66A_EEA9_C42F_41CE_CF2608D472BC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -99.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9D9F423_EEA9_DBDE_418B_1846CF362308",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 53.87,
  "class": "PanoramaCameraPosition",
  "pitch": -13.89
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C3C9F2_D497_ABB3_41C1_22DF4DCEC1E8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -173.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7EDC737_EEA9_C425_41EB_1198C039F684",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang PMB",
 "hfovMin": "150%",
 "id": "panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C5079BD3_D227_EA48_41E6_66810D7FC0E2",
  "this.overlay_C4EC01F6_D221_D648_41C4_E3D362358644",
  "this.overlay_C5DED8DD_D223_B678_41E0_BB17DF92B42A",
  "this.overlay_D2EB79B2_DDAE_07D8_41D6_D469016F7A1F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.27,
   "yaw": -82.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82"
  },
  {
   "backwardYaw": 164.3,
   "yaw": 80.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7"
  },
  {
   "backwardYaw": 93.07,
   "yaw": -7.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -21.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4B7780B_EEA9_CBEE_41C5_0A83844F75B4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 150.33,
  "class": "PanoramaCameraPosition",
  "pitch": -15.59
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -173.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C421B785_EEA9_C4E5_41E4_F33F76C3FCE6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 110.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C67504D0_EEA9_C47B_41E5_77B785DFC9CB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_FB1C16C5_EDA8_445A_41DB_BE89ECA323D2",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 151.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C915E98F_EEA9_CCE5_41E2_D06082ED21A6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -40.56,
  "class": "PanoramaCameraPosition",
  "pitch": -11.53
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung",
 "hfovMin": "150%",
 "id": "panorama_E3733E75_ED69_C425_41E3_D8850F000D42",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E20A7E66_ED79_C427_41EC_A916B925FA57"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 75.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6117471_EEA9_C43D_41D0_FCE9A04463B9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -0.44,
  "class": "PanoramaCameraPosition",
  "pitch": -0.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8F51911_EEA9_CDFD_41E1_19C9496C215F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_E3733E75_ED69_C425_41E3_D8850F000D42",
   "end": "this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false, -1, this.effect_F586D2B3_ED9B_BC3D_41D9_6AA6A9163C02, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true)",
   "camera": "this.panorama_E3733E75_ED69_C425_41E3_D8850F000D42_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false); this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true, -1, this.effect_F586C2B3_ED9B_BC3D_41D7_FFFA8E543A3B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_F8C059F2_D497_ABB3_41E0_49FA7061463A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "camera": "this.panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_F8C049F2_D497_ABB3_41B5_C9E14604D1F0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_F8C319F2_D497_ABB3_41D4_FF3486BE8C0D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "camera": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_F8C0F9F2_D497_ABB3_41E4_1A7F2C2FB1DA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_F8C3C9F2_D497_ABB3_41C1_22DF4DCEC1E8, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "camera": "this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_F8C3A9F2_D497_ABB3_41AF_E0C7CDC30775, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018",
   "end": "this.setComponentVisibility(this.HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD, false, -1, this.effect_F8C299F2_D497_ABB3_41C2_24E78C91DB87, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD, true)",
   "camera": "this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD, false); this.setComponentVisibility(this.HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD, true, -1, this.effect_F8C289F2_D497_ABB3_41DF_5DCAD448DFDF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC",
   "end": "this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false, -1, this.effect_F8C3B9F2_D497_ABB3_41CB_3FDBFB2DD411, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true)",
   "camera": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false); this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true, -1, this.effect_F8C399F2_D497_ABB3_41E2_0221F8B2DBB6, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B",
   "end": "this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false, -1, this.effect_F8C299F2_D497_ABB3_41E1_3EA2F55E74FE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true)",
   "camera": "this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false); this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true, -1, this.effect_F8C269F2_D497_ABB3_41DB_74ADBABE1024, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C",
   "end": "this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false, -1, this.effect_F8C569F2_D497_ABB3_41DE_809CB5BE209E, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true)",
   "camera": "this.panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false); this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true, -1, this.effect_F8C539F2_D497_ABB3_41EA_3E8EA297C8B0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627",
   "end": "this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false, -1, this.effect_F8C439F2_D497_ABB3_41E5_005591F4761A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true)",
   "camera": "this.panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false); this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true, -1, this.effect_F8C429F2_D497_ABB3_41DF_02268D147D80, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_F8C4F9F2_D497_ABB3_41CE_42B078C7FBD8, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "camera": "this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_F8C4C9F2_D497_ABB3_41E0_C61DE57195AA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82",
   "end": "this.setComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, false, -1, this.effect_F8C7A9F2_D497_ABB3_41D8_9E55106094C3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, true)",
   "camera": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, false); this.setComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, true, -1, this.effect_F8C799F2_D497_ABB3_41C3_2E57D34B31FF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511",
   "end": "this.setComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, false, -1, this.effect_F8C689F2_D497_ABB3_41E6_7AC2F4462B5F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, true)",
   "camera": "this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, false); this.setComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, true, -1, this.effect_F8C649F2_D497_ABB3_41DD_CB7F593C2BFA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733",
   "end": "this.setComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, false, -1, this.effect_F8C949F2_D497_ABB3_41E1_BCD63B3019CA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, true)",
   "camera": "this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, false); this.setComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, true, -1, this.effect_F8C929F2_D497_ABB3_41D2_427FD5654AF2, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354",
   "end": "this.setComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, false, -1, this.effect_F8C809F2_D497_ABB3_41E3_ADA43CD48856, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, true)",
   "camera": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, false); this.setComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, true, -1, this.effect_F8C9D9F2_D497_ABB3_41E9_55BC0A78DE05, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7",
   "camera": "this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826",
   "end": "this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false, -1, this.effect_F8CB39F7_D497_ABB0_41CA_6BED5F660110, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true)",
   "camera": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false); this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true, -1, this.effect_F8CB29F7_D497_ABB0_41E1_FB0ADE5958D0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586",
   "end": "this.setComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, false, -1, this.effect_F8CA09F7_D497_ABB0_41D3_F40D3B737B26, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, true)",
   "camera": "this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17); this.keepComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, false); this.setComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, true, -1, this.effect_F8CBC9F7_D497_ABB0_41AF_190AED4B3C86, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D",
   "end": "this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false, -1, this.effect_C4CBF063_EEAF_DC5E_41E7_983F4CE00EB4, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true)",
   "camera": "this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false); this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true, -1, this.effect_C4CBD063_EEAF_DC5E_41C9_9E848843BE9D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785",
   "end": "this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false, -1, this.effect_C4C51063_EEAF_DC5E_41D1_9E9DBF6AE8B9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true)",
   "camera": "this.panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false); this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true, -1, this.effect_C4C4C063_EEAF_DC5E_41E7_FADD652066C6, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E",
   "end": "this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false, -1, this.effect_C4C61063_EEAF_DC5E_41EA_7DA6B4DE5164, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true)",
   "camera": "this.panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20); this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false); this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true, -1, this.effect_C4C5F063_EEAF_DC5E_41E5_AF2EAA984805, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1",
   "end": "this.setComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, false, -1, this.effect_F8CC59F7_D497_ABB0_41C4_531CA60F6ECD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false, -1, this.effect_FEF51B6B_ED68_4C2D_41E3_E783BCE91E4D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, true); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true)",
   "camera": "this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21); this.keepComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, false); this.setComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, true, -1, this.effect_F8CC29F7_D497_ABB0_41DD_B3F9397FF47D, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true, -1, this.effect_FEF50B6B_ED68_4C2D_41C8_89D2B9B9E12B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8CF29F7_D497_ABB0_41B0_B6CFBACE1BC2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8CCF9F7_D497_ABB0_41C6_7460B8432610, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84",
   "camera": "this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8CCD9F7_D497_ABB0_41D2_8B706EB7F763, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8CCB9F7_D497_ABB0_41DD_F2BBFC8C48B0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16",
   "end": "this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false, -1, this.effect_F8CFB9FA_D497_ABB3_41CB_CD903FAE8761, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true)",
   "camera": "this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25); this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false); this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true, -1, this.effect_F8CF89F7_D497_ABB0_41DE_34D75DB37677, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C",
   "end": "this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false, -1, this.effect_F8CE79FA_D497_ABB0_41B5_1F17EC2126BB, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true)",
   "camera": "this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26); this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false); this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true, -1, this.effect_F8CE49FA_D497_ABB0_41E3_1A8484DB26F7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8D119FA_D497_ABB0_41B8_468F2A917108, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8CEF9FA_D497_ABB0_41B6_D7B25ADDDDC8, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172",
   "end": "this.setComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, false, -1, this.effect_F8D1F9FA_D497_ABB0_41E5_04D1C0880700, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, true)",
   "camera": "this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, false); this.setComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, true, -1, this.effect_F8D1C9FA_D497_ABB0_41E5_99269BF10788, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460",
   "end": "this.setComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, false, -1, this.effect_F8D0A9FA_D497_ABB0_41E5_261A9376FFAB, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, false, -1, this.effect_F9369689_ED98_44ED_41E6_1B39DC201365, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_FEBB6A70_ED98_CC3A_41EB_CD1BAE37445F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, true); this.keepComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, true); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29); this.keepComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, false); this.setComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, true, -1, this.effect_F8D099FA_D497_ABB0_41C6_D9514F24CD97, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, false); this.setComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, true, -1, this.effect_F936A689_ED98_44ED_41DF_5F73C89230E4, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_FEBB5A70_ED98_CC3A_41E2_3E744D2FBB94, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8D389FA_D497_ABB0_41E3_E9F02E3C6566, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8D369FA_D497_ABB0_41DF_9BBE6D9A60FE, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71",
   "end": "this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false, -1, this.effect_F8D259FB_D497_ABB0_41D9_83D81A32B9AD, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true)",
   "camera": "this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31); this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false); this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true, -1, this.effect_F8D249FB_D497_ABB0_41D4_2BDCF3075F94, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4",
   "end": "this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false, -1, this.effect_F8D529FB_D497_ABB0_41C5_9047A43E8910, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true)",
   "camera": "this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32); this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false); this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true, -1, this.effect_F8D2F9FB_D497_ABB0_41BE_E253B82D64E5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0",
   "end": "this.setComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, false, -1, this.effect_F8D5D9FB_D497_ABB0_41E4_6B6A663D625A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, true)",
   "camera": "this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33); this.keepComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, false); this.setComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, true, -1, this.effect_F8D5B9FB_D497_ABB0_41DD_BA62A4BB4530, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8D4A9FB_D497_ABB0_41EA_04D9D0A61628, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8D479FB_D497_ABB0_41E3_22FA8FE3DC26, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8D759FB_D497_ABB0_41A6_DC4E98939554, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8D749FB_D497_ABB0_41E9_7FBA34CACBB7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B",
   "end": "this.setComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, false, -1, this.effect_F8D629FB_D497_ABB0_41C7_1865FBFD001E, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, true)",
   "camera": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36); this.keepComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, false); this.setComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, true, -1, this.effect_F8D7F9FB_D497_ABB0_41DA_0CE1F9997F71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33",
   "end": "this.setComponentVisibility(this.HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63, false, -1, this.effect_F8D749FB_D497_ABB0_41E0_C14778E3084E, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63, true)",
   "camera": "this.panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.keepComponentVisibility(this.HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63, false); this.setComponentVisibility(this.HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63, true, -1, this.effect_F8D739FB_D497_ABB0_41DC_34E8A4DB226C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6",
   "end": "this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_F59812E3_ED9B_BC5E_41E2_FA09E2C3E3A2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_F59BF2E3_ED9B_BC5E_41D6_15E0723408A2, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4",
   "end": "this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_F59912F2_ED9B_BC3F_41EC_5EEBC6B42953, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_F598F2F2_ED9B_BC3F_41C2_584F34D4388D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251",
   "end": "this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_F5A632F2_ED9B_BC3F_41CA_8357869D06E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_F599F2F2_ED9B_BC3F_41E8_59D4C9BBBBA7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B",
   "end": "this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false, -1, this.effect_F5A722F2_ED9B_BC3F_41ED_40614353760A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true)",
   "camera": "this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true, -1, this.effect_F5A712F2_ED9B_BC3F_41AA_F06A623053D8, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB",
   "end": "this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false, -1, this.effect_F5A432F2_ED9B_BC3F_41E4_B34FC5E058AD, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true)",
   "camera": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42); this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false); this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true, -1, this.effect_F5A412F2_ED9B_BC3F_41BB_E13C97F4FFAF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20",
   "end": "this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false, -1, this.effect_F5A7B2F2_ED9B_BC3F_41D5_762BD3B1D2C3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true)",
   "camera": "this.panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43); this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false); this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true, -1, this.effect_F5A782F2_ED9B_BC3F_41DF_AA86BE639D21, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE",
   "end": "this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false, -1, this.effect_F5A492F2_ED9B_BC3F_41E6_11789537BA85, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true)",
   "camera": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44); this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false); this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true, -1, this.effect_F5A482F2_ED9B_BC3F_41E9_73EB3E8304E1, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F",
   "end": "this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false, -1, this.effect_F5A592F2_ED9B_BC3F_41E6_64F3FD641568, 'hideEffect', false); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true)",
   "camera": "this.panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 0); this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false); this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true, -1, this.effect_F5A572F2_ED9B_BC3F_41EA_B7A8BF4DD021, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 24.17,
  "class": "PanoramaCameraPosition",
  "pitch": -19.3
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D749FB_D497_ABB0_41E0_C14778E3084E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8CA09F7_D497_ABB0_41D3_F40D3B737B26",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_F47B0441_EDA8_445D_41CC_609D95459ED5",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "9. Perpus 4",
 "hfovMin": "150%",
 "id": "panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C1723E1E_D220_ADF8_41E2_D4B2E596FF90"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.52,
   "yaw": -118.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F5A492F2_ED9B_BC3F_41E6_11789537BA85",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 176.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8ED5937_EEA9_CC26_41E2_1244F4D9E925",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C289F2_D497_ABB3_41DF_5DCAD448DFDF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 5.95,
  "class": "PanoramaCameraPosition",
  "pitch": -10.48
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Laminar Air Flow",
 "hfovMin": "150%",
 "id": "panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E57B6639_D26F_BA38_41D1_FA8673FB949F",
  "this.overlay_F9D35CB4_D5BA_A9B0_41C5_6D893228AD50"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.1,
   "yaw": 107.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -133.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C443F7A7_EEA9_C426_41B2_7AB6E0E85B39",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8CE49FA_D497_ABB0_41E3_1A8484DB26F7",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -179.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C465B7C5_EEA9_C465_41EC_D694946D5632",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_E2727F22_D220_ABC8_41D8_8DE9DFE5EED9",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "items": [
  {
   "media": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A",
   "end": "this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false, -1, this.effect_F8CF29F7_D497_ABB0_41B0_B6CFBACE1BC2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true)",
   "camera": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, false); this.setComponentVisibility(this.HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8, true, -1, this.effect_F8CCF9F7_D497_ABB0_41C6_7460B8432610, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84",
   "camera": "this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C",
   "end": "this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false, -1, this.effect_F8CE79FA_D497_ABB0_41B5_1F17EC2126BB, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true)",
   "camera": "this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, false); this.setComponentVisibility(this.HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F, true, -1, this.effect_F8CE49FA_D497_ABB0_41E3_1A8484DB26F7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172",
   "end": "this.setComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, false, -1, this.effect_F8D1F9FA_D497_ABB0_41E5_04D1C0880700, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, true)",
   "camera": "this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 3, 4); this.keepComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, false); this.setComponentVisibility(this.HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8, true, -1, this.effect_F8D1C9FA_D497_ABB0_41E5_99269BF10788, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460",
   "end": "this.setComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, false, -1, this.effect_F8D0A9FA_D497_ABB0_41E5_261A9376FFAB, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, false, -1, this.effect_F9369689_ED98_44ED_41E6_1B39DC201365, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_FEBB6A70_ED98_CC3A_41EB_CD1BAE37445F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, true); this.keepComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, true); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 4, 5); this.keepComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, false); this.setComponentVisibility(this.HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35, true, -1, this.effect_F8D099FA_D497_ABB0_41C6_D9514F24CD97, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, false); this.setComponentVisibility(this.HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D, true, -1, this.effect_F936A689_ED98_44ED_41DF_5F73C89230E4, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_FEBB5A70_ED98_CC3A_41E2_3E744D2FBB94, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4",
   "end": "this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false, -1, this.effect_F8D529FB_D497_ABB0_41C5_9047A43E8910, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true)",
   "camera": "this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 5, 6); this.keepComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, false); this.setComponentVisibility(this.HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520, true, -1, this.effect_F8D2F9FB_D497_ABB0_41BE_E253B82D64E5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0",
   "end": "this.setComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, false, -1, this.effect_F8D5D9FB_D497_ABB0_41E4_6B6A663D625A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, true)",
   "camera": "this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 6, 7); this.keepComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, false); this.setComponentVisibility(this.HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22, true, -1, this.effect_F8D5B9FB_D497_ABB0_41DD_BA62A4BB4530, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B",
   "end": "this.setComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, false, -1, this.effect_F8D629FB_D497_ABB0_41C7_1865FBFD001E, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, true)",
   "camera": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 7, 8); this.keepComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, false); this.setComponentVisibility(this.HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC, true, -1, this.effect_F8D7F9FB_D497_ABB0_41DA_0CE1F9997F71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251",
   "end": "this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false, -1, this.effect_F5A632F2_ED9B_BC3F_41CA_8357869D06E2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true)",
   "camera": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 8, 9); this.keepComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, false); this.setComponentVisibility(this.HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B, true, -1, this.effect_F599F2F2_ED9B_BC3F_41E8_59D4C9BBBBA7, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B",
   "end": "this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false, -1, this.effect_F5A722F2_ED9B_BC3F_41ED_40614353760A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true)",
   "camera": "this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 9, 10); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true, -1, this.effect_F5A712F2_ED9B_BC3F_41AA_F06A623053D8, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB",
   "end": "this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false, -1, this.effect_F5A432F2_ED9B_BC3F_41E4_B34FC5E058AD, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true)",
   "camera": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 10, 11); this.keepComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, false); this.setComponentVisibility(this.HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02, true, -1, this.effect_F5A412F2_ED9B_BC3F_41BB_E13C97F4FFAF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE",
   "end": "this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false, -1, this.effect_F5A492F2_ED9B_BC3F_41E6_11789537BA85, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true)",
   "camera": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 11, 0); this.keepComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, false); this.setComponentVisibility(this.HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5, true, -1, this.effect_F5A482F2_ED9B_BC3F_41E9_73EB3E8304E1, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist",
 "class": "PlayList"
},
{
 "duration": 800,
 "id": "effect_C8B77C71_DDEE_1D58_41D6_2DF9A36F7156",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8CC59F7_D497_ABB0_41C4_531CA60F6ECD",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_CDCCF58D_D76D_58CA_41E2_5C04A786AB77",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 172.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C933FA1D_EEA9_CFEA_41DB_6EA17A5DDD2C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C78626BD_EEA9_C425_41D3_06EECC910DFA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 39.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C744F68A_EEA9_C4EF_41BE_3D85ABF897F8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 49.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C710C5FC_EEA9_C42B_41EA_87E4F88C4E17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Teras",
 "hfovMin": "150%",
 "id": "panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CAC1EA89_D07E_5538_41D1_668B2A6B2938",
  "this.overlay_CA5602F2_D042_5AE8_41B1_378298023F0E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -156.66,
   "yaw": -5.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 32.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C43FB757_EEA9_C465_4180_740F686B03D9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -97.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C51DC873_EEA9_CC3D_41BD_4D17C9C11ABA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 77.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0.41
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 93.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9B2D407_EEA9_DBE5_41E5_13AF50B6DEB7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 7.2,
  "class": "PanoramaCameraPosition",
  "pitch": 1.13
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C910699F_EEA9_CCE5_41EB_16E081D6BC03",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -162.49,
  "class": "PanoramaCameraPosition",
  "pitch": -12.24
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 178.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9A50414_EEA9_DBFB_41D1_86CF13E4CE27",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang LPM",
 "hfovMin": "150%",
 "id": "panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F364B85C_D261_7678_41E8_78DB59DDF305"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 35.78,
   "yaw": -118.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lantai 2",
 "hfovMin": "150%",
 "id": "panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F060FD8B_D263_6ED8_41CD_1DBFAD882516",
  "this.overlay_CD51BD9D_D261_AEF8_41E2_60EE7028D244",
  "this.overlay_CD023011_D261_55C8_41E1_1AE2B3D4F363",
  "this.overlay_F19E7FB6_D260_AAC8_41EA_18989ECDB183"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 108.53,
   "yaw": 97.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1"
  },
  {
   "backwardYaw": -118.31,
   "yaw": 35.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84"
  },
  {
   "backwardYaw": -2.73,
   "yaw": -82.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A"
  },
  {
   "backwardYaw": 2.66,
   "yaw": -156.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C91A0980_EEA9_CCDB_41D2_E3329E3BED6C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Podcast",
 "hfovMin": "150%",
 "id": "panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C543B4DE_D221_5E78_41C5_95C647E5E0E4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.35,
   "yaw": -115.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_F8C319F2_D497_ABB3_41D4_FF3486BE8C0D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "camera": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_F8C0F9F2_D497_ABB3_41E4_1A7F2C2FB1DA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC",
   "end": "this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false, -1, this.effect_F8C3B9F2_D497_ABB3_41CB_3FDBFB2DD411, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true)",
   "camera": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, false); this.setComponentVisibility(this.HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E, true, -1, this.effect_F8C399F2_D497_ABB3_41E2_0221F8B2DBB6, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511",
   "end": "this.setComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, false, -1, this.effect_F8C689F2_D497_ABB3_41E6_7AC2F4462B5F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, true)",
   "camera": "this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, false); this.setComponentVisibility(this.HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8, true, -1, this.effect_F8C649F2_D497_ABB3_41DD_CB7F593C2BFA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733",
   "end": "this.setComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, false, -1, this.effect_F8C949F2_D497_ABB3_41E1_BCD63B3019CA, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, true)",
   "camera": "this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 3, 4); this.keepComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, false); this.setComponentVisibility(this.HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD, true, -1, this.effect_F8C929F2_D497_ABB3_41D2_427FD5654AF2, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354",
   "end": "this.setComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, false, -1, this.effect_F8C809F2_D497_ABB3_41E3_ADA43CD48856, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, true)",
   "camera": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 4, 5); this.keepComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, false); this.setComponentVisibility(this.HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56, true, -1, this.effect_F8C9D9F2_D497_ABB3_41E9_55BC0A78DE05, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7",
   "camera": "this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826",
   "end": "this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false, -1, this.effect_F8CB39F7_D497_ABB0_41CA_6BED5F660110, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true)",
   "camera": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 6, 7); this.keepComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, false); this.setComponentVisibility(this.HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3, true, -1, this.effect_F8CB29F7_D497_ABB0_41E1_FB0ADE5958D0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586",
   "end": "this.setComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, false, -1, this.effect_F8CA09F7_D497_ABB0_41D3_F40D3B737B26, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, true)",
   "camera": "this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 7, 8); this.keepComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, false); this.setComponentVisibility(this.HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B, true, -1, this.effect_F8CBC9F7_D497_ABB0_41AF_190AED4B3C86, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1",
   "end": "this.setComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, false, -1, this.effect_F8CC59F7_D497_ABB0_41C4_531CA60F6ECD, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false, -1, this.effect_FEF51B6B_ED68_4C2D_41E3_E783BCE91E4D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, true); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true)",
   "camera": "this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 8, 0); this.keepComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, false); this.setComponentVisibility(this.HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC, true, -1, this.effect_F8CC29F7_D497_ABB0_41DD_B3F9397FF47D, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, false); this.setComponentVisibility(this.HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA, true, -1, this.effect_FEF50B6B_ED68_4C2D_41C8_89D2B9B9E12B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 162.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4D9B825_EEA9_CBDA_41D0_587BDF425632",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -62.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9BDE403_EEA9_DBDD_41D4_75E2FA37E1AF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Rapat LPPM",
 "hfovMin": "150%",
 "id": "panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C80969C0_D4B6_6BD0_41E5_E1767DE4A474"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 93.34,
   "yaw": -17.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 7.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_FAA55D3A_EDB8_C42F_41EC_ACBDAC444170",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "31. Lantai 2 edit",
 "hfovMin": "150%",
 "id": "panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F5259E90_D260_AAC8_41B5_6C5BBF707948",
  "this.overlay_FA02CC20_D263_6DC8_41A7_E5AF06D684EE",
  "this.overlay_FA3D7878_D261_B638_41D1_6B20B0B1904B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.08,
   "yaw": 3.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4"
  },
  {
   "backwardYaw": -152.95,
   "yaw": -21.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71"
  },
  {
   "backwardYaw": 158.92,
   "yaw": 160.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 29.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9CEF433_EEA9_C43D_41E4_A24AD42CFC82",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 122.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C960E3D5_EEA9_DC65_41E5_43EACF75F657",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang LPPM",
 "hfovMin": "150%",
 "id": "panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F4898845_D260_D648_41DE_005C3833554A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.71,
   "yaw": -122.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 174.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9C19442_EEA9_C45F_41E2_45B2008EA8C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 85.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C9244A4F_EEA9_CC66_41C5_AA8FB256F788",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Wakil Rektor",
 "hfovMin": "150%",
 "id": "panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F41C7895_D261_56C8_41E7_4C54A2605E9D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 162.55,
   "yaw": -104.22,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8D4A9FB_D497_ABB0_41EA_04D9D0A61628",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 2.46,
  "class": "PanoramaCameraPosition",
  "pitch": -0.41
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang IStirahatt",
 "hfovMin": "150%",
 "id": "panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C9E12F2D_D261_6BD8_41E2_6A306559529A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -26.2,
   "yaw": -94.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8CBC9F7_D497_ABB0_41AF_190AED4B3C86",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C3A9F2_D497_ABB3_41AF_E0C7CDC30775",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_FEBB6A70_ED98_CC3A_41EB_CD1BAE37445F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "38. Aula Mini edit",
 "hfovMin": "150%",
 "id": "panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CD1E9D29_D4AD_A850_41C3_AAF3A4BF1DD1",
  "this.overlay_CE5E7A2E_D4AA_A850_41D7_72FEDD523DC3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.03,
   "yaw": -102.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6"
  },
  {
   "backwardYaw": 6.81,
   "yaw": 95.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 20.72,
  "class": "PanoramaCameraPosition",
  "pitch": -21.18
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "32. Lantai 2 edit",
 "hfovMin": "150%",
 "id": "panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E1F4EA90_D267_6AC8_41C7_66D1AD7EE6A7",
  "this.overlay_E694F28D_D267_5AD8_41E2_A664D9756123",
  "this.overlay_E13E6F51_D260_AA48_41D2_6E44A060C84A",
  "this.overlay_E60982CB_D263_FA58_41B3_A521BC219407"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 97.65,
   "yaw": 108.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A"
  },
  {
   "backwardYaw": -170.74,
   "yaw": 8.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C"
  },
  {
   "backwardYaw": -35.12,
   "yaw": -130.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B"
  },
  {
   "backwardYaw": -171.11,
   "yaw": -28.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8C649F2_D497_ABB3_41DD_CB7F593C2BFA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C539F2_D497_ABB3_41EA_3E8EA297C8B0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8D0A9FA_D497_ABB0_41E5_261A9376FFAB",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_CA290C1E_D223_6DF8_41E2_3F2A01517DD7",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Aula Mini",
 "hfovMin": "150%",
 "id": "panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CECEE95C_D4AB_E8F0_41DA_D34D142EBA15",
  "this.overlay_CFD71D48_D4AA_E8D0_41D2_BBCD770EDEDA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.01,
   "yaw": 86.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C"
  },
  {
   "backwardYaw": 95.48,
   "yaw": 6.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_t.jpg",
 "hfovMax": 130
},
{
 "duration": 800,
 "id": "effect_F0DDB49E_EEA8_44E7_41E2_5F7A68207DF3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8CB29F7_D497_ABB0_41E1_FB0ADE5958D0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8D369FA_D497_ABB0_41DF_9BBE6D9A60FE",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 38.95,
  "class": "PanoramaCameraPosition",
  "pitch": 2.18
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_FF2848E3_D220_F648_41A4_F505E87D7D63",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_C4CBF063_EEAF_DC5E_41E7_983F4CE00EB4",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "42. Lab ICT 2 edit",
 "hfovMin": "150%",
 "id": "panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C82C3E35_D4BA_68B0_41DA_9CF424DFF14A",
  "this.overlay_FBFB3B95_EDB9_CCE5_41D5_FBBB083B1303",
  "this.overlay_FA90EB38_EDB8_4C2B_4184_500509149C9C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.27,
   "yaw": 0.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8C569F2_D497_ABB3_41DE_809CB5BE209E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C439F2_D497_ABB3_41E5_005591F4761A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -177.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6ED35AD_EEA9_C425_41D7_198030111918",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_C4C5F063_EEAF_DC5E_41E5_AF2EAA984805",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 800,
 "id": "effect_E79C8C84_D223_6EC8_41BE_4628C6B83FC8",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_E1D81707_D221_5BC9_41E8_D60100741841",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_C4CBD063_EEAF_DC5E_41C9_9E848843BE9D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -116.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C47377B5_EEA9_C43A_41E5_B831A416ED96",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_CE8F848B_D773_38CE_41E9_FB6225140513",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8CF89F7_D497_ABB0_41DE_34D75DB37677",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 153.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C730964A_EEA9_C46F_41E8_29B221A7546B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_CA7BE633_EEB8_C43E_41D7_46CF0643419A",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8CB39F7_D497_ABB0_41CA_6BED5F660110",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 124.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C93879FF_EEA9_CC25_41D9_135D92AB0477",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C451B795_EEA9_C4E5_41E0_4B3A81E51B83",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lab. ICT 2",
 "hfovMin": "150%",
 "id": "panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF5111EC_D4B7_9BD0_41E8_026CA509060C",
  "this.overlay_C8169F9E_D4B6_E870_41D0_1CC0CEC33EDE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -28.72,
   "yaw": -171.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1"
  },
  {
   "backwardYaw": 0.05,
   "yaw": 1.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_FBCEB4C8_EDB8_446B_41C4_DCAF24154340",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8CC29F7_D497_ABB0_41DD_B3F9397FF47D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 158.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6DA7533_EEA9_C43D_41DE_D383B0ADD9D2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 61.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8E43960_EEA9_CC5A_41D0_812707167CA0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_F0D816CF_EEA9_C465_41D0_ED2192FF64C0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_F1C159BC_EE98_4C2B_41E1_86272B3784C5",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_CF785EC8_DDAA_FD48_41B2_C6AA13E33E7E",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_F8C4F9F2_D497_ABB3_41CE_42B078C7FBD8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8CCF9F7_D497_ABB0_41C6_7460B8432610",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Lobby 3 edit",
 "hfovMin": "150%",
 "id": "panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C621ACD3_D220_AE48_41D7_D90AC43152FA",
  "this.overlay_C68ADAF4_D221_EA48_41E1_7197C9CB5AC6",
  "this.overlay_C67A4383_D227_5AC8_41D7_606CF1BDB0C0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.57,
   "yaw": -165.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82"
  },
  {
   "backwardYaw": -36.87,
   "yaw": 82.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70"
  },
  {
   "backwardYaw": 120.78,
   "yaw": 1.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_t.jpg",
 "hfovMax": 130
},
{
 "duration": 800,
 "id": "effect_CB7D615B_DDF6_0748_41E7_CDB6EC538AE2",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": -0.06,
  "class": "PanoramaCameraPosition",
  "pitch": 7.4
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D249FB_D497_ABB0_41D4_2BDCF3075F94",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 97.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C766C69C_EEA9_C4EB_41D1_71E0A25A0E72",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_FC3B8B27_D220_ABC8_41EA_1DB3C587E417",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -82.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6399492_EEA9_C4FF_41C8_E4B7489034A9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -2.4,
  "class": "PanoramaCameraPosition",
  "pitch": -5.42
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C49557E4_EEA9_C45B_41EC_6C7CD882AE8A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C0F9F2_D497_ABB3_41E4_1A7F2C2FB1DA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F9369689_ED98_44ED_41E6_1B39DC201365",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_CCD78AB3_D042_3568_41C5_123B92DB55D3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C4A7681C_EEA9_CBEA_41E6_29862646F8A1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C429F2_D497_ABB3_41DF_02268D147D80",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C7A9F2_D497_ABB3_41D8_9E55106094C3",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C299F2_D497_ABB3_41E1_3EA2F55E74FE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F5A432F2_ED9B_BC3F_41E4_B34FC5E058AD",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Perpustakaan",
 "hfovMin": "150%",
 "id": "panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F3A17794_D1C5_DB28_41D1_E5DAE33FF8C9",
  "this.overlay_F37F5116_D1C2_3728_41DF_FCBF97C0BD7E",
  "this.overlay_C382EC50_D220_AE48_41D4_5A7D26A5F36C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.38,
   "yaw": -57.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018"
  },
  {
   "backwardYaw": -69.61,
   "yaw": -150.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -72.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C700861C_EEA9_C7EA_41EC_C4F17475663E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 148.18,
  "class": "PanoramaCameraPosition",
  "pitch": -3.37
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F5A572F2_ED9B_BC3F_41EA_B7A8BF4DD021",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8CCD9F7_D497_ABB0_41D2_8B706EB7F763",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "7. Perpus 2",
 "hfovMin": "150%",
 "id": "panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C0218587_D221_DEC8_41E3_FE45E7815917",
  "this.overlay_C05CCEB4_D223_6AC8_41D4_8D9AB75B9CED",
  "this.overlay_C13D8E9B_D220_EAF8_41D5_5F39270F570B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.97,
   "yaw": -69.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC"
  },
  {
   "backwardYaw": -5.18,
   "yaw": 6.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C"
  },
  {
   "backwardYaw": -118.35,
   "yaw": 62.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8D099FA_D497_ABB0_41C6_D9514F24CD97",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "44. Lab Kimia edit",
 "hfovMin": "150%",
 "id": "panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F42AEAF7_D4AD_A9B1_41EA_64D5B0569954",
  "this.overlay_F4985073_D4AB_98B1_41C5_D1B425268E41",
  "this.overlay_CBD22173_D76C_D85E_41EA_EF668AC2242F",
  "this.overlay_C11DB4FE_D894_F846_41DB_7666A466EEB6",
  "this.overlay_C19402C6_D894_D846_41E7_57BFC527A78C",
  "this.overlay_C63BE600_D8BD_7BBA_41E2_ACAD4A9884CC",
  "this.overlay_C87FC4D0_DDEE_0D58_41D5_8C6A561A0454",
  "this.overlay_C9BA9233_DDFE_04D8_41E8_66A14637E3EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -147.39,
   "yaw": -1.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 5.73,
  "class": "PanoramaCameraPosition",
  "pitch": 3.69
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_FEF50B6B_ED68_4C2D_41C8_89D2B9B9E12B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_C0582895_D221_B6C8_41D2_CC91100EE97B",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 34,
  "class": "PanoramaCameraPosition",
  "pitch": -17.03
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_F172F1F3_EEA8_7C3D_41B0_3F0A81B43DA0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_CC8D3E64_D76F_487A_41B6_1966E95EEA4D",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 84.36,
  "class": "PanoramaCameraPosition",
  "pitch": 1.74
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8CFB9FA_D497_ABB3_41CB_CD903FAE8761",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F9586770_ED98_443B_41C3_64142696F91A",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 800,
 "id": "effect_C912345D_DDEE_0D48_41E0_9E85CCD06547",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lab. Biologi",
 "hfovMin": "150%",
 "id": "panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EAE5ADDA_D260_EE78_41E3_2AD645BD103A",
  "this.overlay_E51580A9_D261_B6D8_41D0_E0212426897F",
  "this.overlay_E5D595B3_D5AE_BBB1_41C0_BFE895E191EE",
  "this.overlay_F97B7F5A_D5AE_A8F0_41E6_62FA884D829E",
  "this.overlay_FEB6417D_D5AA_98B0_41B2_F03EC9941FE2",
  "this.overlay_C091940D_D7EC_DFCA_41CC_D81676A10ECB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.05,
   "yaw": -35.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1"
  },
  {
   "backwardYaw": 107.16,
   "yaw": -175.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -117.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6A9150F_EEA9_C5E5_41DE_DCF9F0BD3D6F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D389FA_D497_ABB0_41E3_E9F02E3C6566",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -178.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C79656AA_EEA9_C42E_41E5_570F8D92053A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lab. Kimia",
 "hfovMin": "150%",
 "id": "panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CAA819F5_D4BA_6BB0_41D8_C1ABB150E828",
  "this.overlay_CAC645FD_D4BE_BBB0_41C1_06BB6BEC9691",
  "this.overlay_F5864C9F_D4AA_A871_41E8_6EC71835AA41",
  "this.overlay_CB2DB613_D4AD_9870_41BE_6696E3306266",
  "this.overlay_C905A2FB_DD96_054F_41E7_F1908261BFA4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.86,
   "yaw": 5.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C"
  },
  {
   "backwardYaw": -1.88,
   "yaw": -147.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_t.jpg",
 "hfovMax": 130
},
{
 "duration": 800,
 "id": "effect_F818A2BE_D8BD_58C6_41DE_100C8CE2D0FC",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 2.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C926B364_EEA9_DC5B_41E8_FF6CCAD0B1F2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -97.15,
  "class": "PanoramaCameraPosition",
  "pitch": -1.55
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C91FD960_EEA9_CC5A_41E6_0B918DBE310A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_CEFE7444_D775_7FBA_41C5_3EE103E969A0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -84.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C71EF5CC_EEA9_C46B_416B_7BC483D19DAE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -15.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7B846CE_EEA9_C467_41C2_F190CBF415E6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "26. Lantai 2",
 "hfovMin": "150%",
 "id": "panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F6EBB047_D260_D648_41D8_C9F07664DEBF",
  "this.overlay_F6BE2CD4_D26F_AE48_41CF_9F630C84D38A",
  "this.overlay_F7623AA2_D261_6AC8_41DD_A0015E054E55",
  "this.overlay_F722593C_D263_B638_41E6_44DDE42F520E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 102.77,
   "yaw": -173.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A"
  },
  {
   "backwardYaw": 3.47,
   "yaw": 3.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1"
  },
  {
   "backwardYaw": -104.22,
   "yaw": 162.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172"
  },
  {
   "backwardYaw": -122.92,
   "yaw": -21.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lantai 1",
 "hfovMin": "150%",
 "id": "panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CB0D7E12_D042_CD28_41B4_4AAE9372821A",
  "this.overlay_CF812E30_D1BF_CD68_41B1_1F8A5E579E34",
  "this.overlay_F03E4CE7_D1C2_CEE8_41DF_37AA93320A9E",
  "this.overlay_F084F566_D1C2_DFE9_41BD_784300FE4792",
  "this.overlay_F0FDB430_D1C6_5D68_4199_E344339F592E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -156.81,
   "yaw": 2.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A"
  },
  {
   "backwardYaw": 82.78,
   "yaw": -36.87,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833"
  },
  {
   "backwardYaw": -6.22,
   "yaw": 46.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5"
  },
  {
   "backwardYaw": -5.28,
   "yaw": -156.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8C319F2_D497_ABB3_41D4_FF3486BE8C0D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C059F2_D497_ABB3_41E0_49FA7061463A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 23.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C8F24926_EEA9_CC27_41EA_D8E27CDB8D06",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C4C9F2_D497_ABB3_41E0_C61DE57195AA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -42.24,
  "class": "PanoramaCameraPosition",
  "pitch": -9.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 49.86,
  "class": "PanoramaCameraPosition",
  "pitch": -14.5
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8C689F2_D497_ABB3_41E6_7AC2F4462B5F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -87.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C90489E0_EEA9_CC5A_41CB_6EB3F2CB5CD6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F586D2B3_ED9B_BC3D_41D9_6AA6A9163C02",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_FCA7DA9A_D2E0_AAF8_41B4_28F6DAD545B7",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 172.72,
  "class": "PanoramaCameraPosition",
  "pitch": -0.55
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -0.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0.44
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8CCB9F7_D497_ABB0_41DD_F2BBFC8C48B0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 6.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6044482_EEA9_C4DF_41E6_026309A1BBFD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "24. Ruang Rektor edit",
 "hfovMin": "150%",
 "id": "panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F7D27117_D261_F7C8_41E6_9B02B5898D70",
  "this.overlay_F08B8BAC_D260_AAD8_41D3_D258359D503C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.01,
   "yaw": -3.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C"
  },
  {
   "backwardYaw": 92.78,
   "yaw": -104.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -59.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C955D384_EEA9_DCDB_41E7_E6D4D09A1977",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C6CCA55F_EEA9_C465_41E9_711CB331BBED",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_F8D119FA_D497_ABB0_41B8_468F2A917108",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_F8C3B9F2_D497_ABB3_41CB_3FDBFB2DD411",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Biro edit",
 "hfovMin": "150%",
 "id": "panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CC6B7267_D260_DA48_41B6_180262ACFB31",
  "this.overlay_F061A1D2_EDB8_5C7E_41D0_FDBDCC739B46",
  "this.overlay_F3F42C43_EDB8_445D_41EC_58DD6F7A0671",
  "this.overlay_F0C75B49_EDBF_CC6D_41E8_C2CDB293EEC3",
  "this.overlay_F06A48F3_EDB8_4C3D_41E3_BA631A5D1669"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.65,
   "yaw": 6.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_t.jpg",
 "hfovMax": 130
},
{
 "duration": 1000,
 "id": "effect_F8C799F2_D497_ABB3_41C3_2E57D34B31FF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 2.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C7FC2718_EEA9_C5EA_419D_138B5E4BCFC1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -144.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C40FD748_EEA9_C46B_41CA_BE3C8153C7D9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C93FB9EF_EEA9_CC25_41C2_B91F87B8EBEB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "5. Staff Perpus edit",
 "hfovMin": "150%",
 "id": "panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2AFD757_D1C2_DB28_41E1_B37B217876C0",
  "this.overlay_F3889EDD_D1C2_CAD8_41C6_94A6F4E8DEC9",
  "this.overlay_F21F5573_D1C5_DFE8_41E9_0B37520BF9D0",
  "this.overlay_F961378E_ED98_44E7_41C2_CCA3B520209F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -57.8,
   "yaw": 0.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC"
  },
  {
   "backwardYaw": -121.25,
   "yaw": 63.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Rapat",
 "hfovMin": "150%",
 "id": "panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CC0A0A73_D260_AA48_41E4_CFCA016250F0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -137.35,
   "yaw": -55.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Rektor",
 "hfovMin": "150%",
 "id": "panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F63801F9_D261_7638_41E1_3D34FD9E5B75"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.6,
   "yaw": -0.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -32.62,
  "class": "PanoramaCameraPosition",
  "pitch": -15.1
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 158.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_C41D8748_EEA9_C46B_41EB_77428FFA877B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 800,
 "id": "effect_E7A606A1_D220_BAC8_41C7_006E90337DC4",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "33. Lantai 2 edit",
 "hfovMin": "150%",
 "id": "panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C0D89C0E_D47E_A853_41E8_075B0DA186BC",
  "this.overlay_C16E1E43_D47D_A8D0_41D7_201C9D17FD81",
  "this.overlay_C1FF1583_D47B_9850_41E7_1122A6AD65BF",
  "this.overlay_C2663B8C_D47B_E850_41AD_A1BEA81F26E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.27,
   "yaw": -170.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1"
  },
  {
   "backwardYaw": -17.54,
   "yaw": 93.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B"
  },
  {
   "backwardYaw": 5.76,
   "yaw": -86.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE"
  },
  {
   "backwardYaw": 86.62,
   "yaw": 2.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_t.jpg",
 "hfovMax": 130
},
{
 "duration": 800,
 "id": "effect_FB1C26C5_EDA8_445A_41AC_C40E1D664DA0",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Fakultas MIPA",
 "hfovMin": "150%",
 "id": "panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FAB00921_D25F_B7C8_41B0_1BD88106C619",
  "this.overlay_FB415D02_D223_6FC8_41E8_D707BAED735B",
  "this.overlay_F8E5AB04_D221_6BC8_41C7_21C551D1AA3F",
  "this.overlay_FAAAE122_D221_D7C8_41D6_3DB120333303",
  "this.overlay_FB17FDE8_D221_AE58_41C3_E198FEAC34F6",
  "this.overlay_F8438751_D227_DA48_41C4_32D35F0556C1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.98,
   "yaw": -152.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1"
  },
  {
   "backwardYaw": 167.44,
   "yaw": 82.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Ruang Server & Podcast",
 "hfovMin": "150%",
 "id": "panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C4B318A9_D220_D6D8_41DE_0C7025F8323A",
  "this.overlay_C4190CC3_D22F_EE48_41E0_93077A174D63",
  "this.overlay_C4688095_D22F_56C8_41D7_7B4A10844E05",
  "this.overlay_D3234B4F_DD96_1B48_41EB_57AEA5B9EF8A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.41,
   "yaw": -177.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833"
  },
  {
   "backwardYaw": -140.34,
   "yaw": 117.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511"
  },
  {
   "backwardYaw": -115.02,
   "yaw": 79.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733"
  },
  {
   "backwardYaw": -82.27,
   "yaw": 1.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#5FCF80"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_A7F30C91_B427_3E55_41E3_2FFDE14A29F5",
 "left": "0%",
 "children": [
  "this.Container_A6C38322_B596_54B2_41CC_35B9CD3AEC99",
  "this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44",
  "this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "shadowOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 10,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "height": "10.084%",
 "contentOpaque": false,
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "data": {
  "name": "TopBar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 3
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D",
 "left": "0.91%",
 "width": 252,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 116,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Halaman Gedung Rektorat</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Halaman depan gedung Rektorat IST Annuqayah berada di lokasi kampus putra</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Halaman"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A",
 "left": "0.91%",
 "width": 116,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 63,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Lantai 1</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Lt 1"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8E67DF91_96EC_64E0_41C4_C9539BADD1BD",
 "left": "0.91%",
 "width": 273,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 64,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Staff Perpustakaan</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Staff Perpus"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_81D85A90_96EC_6CE0_41BF_1FB7C920A23E",
 "left": "0.91%",
 "width": 273,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 105,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Perpustakaan Putra</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Perpustakaan yang di khususkan bagi mahasiswa putra.</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Perpustakaan"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463",
 "left": "0.91%",
 "width": 256,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 70,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Server &amp; Podcast</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang server & Media"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8F4E3D66_969D_E420_41A1_D6EE93F924E8",
 "left": "0.91%",
 "width": 256,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 125,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Server</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Diruangan ini tempat tersimpannya rangkaian perangkat jaringan seperti hub, router dll.</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Server"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8C87D240_969C_BC60_41C6_FDB65B5F5EFD",
 "left": "0.91%",
 "width": 164,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 68,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Podcast</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Podcast"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8DBD0381_96B4_FCE0_41C2_B3D574AF0C56",
 "left": "0.91%",
 "width": 204,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 119,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang PMB</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Ruang PMB atau Penerimaan Mahasiswa Baru khusus putra</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang PMB"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8DB45C93_96BF_A4E0_41D6_6606526346A3",
 "left": "1.09%",
 "width": 209,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 63,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Biro &amp; Staff</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Biro & Staff"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8DA99358_96BC_9C60_41D1_20C35C202F4B",
 "left": "0.91%",
 "width": 177,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 66,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Istirahat</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Istirahat"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_8C3B7520_96BC_A421_41A3_818BFC941EFC",
 "left": "0.91%",
 "width": 147,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 69,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Rapat</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Rapat"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_B51A802D_BBBA_1FB2_41E6_C453FC1724D8",
 "left": "0.91%",
 "width": 182,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 58,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Lantai 2</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Lantai 2"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_B5D649E6_BBB6_00BE_41D9_1880D2A4743F",
 "left": "1.09%",
 "width": 188,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "12.44%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 65,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Rektor</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Rektor"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_ABD3B214_BB9E_0392_41E0_A1F12A2B27C8",
 "left": "1.18%",
 "width": 250,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "12.77%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 65,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Wakil Rektor 1 dan 2</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Warek"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_AA7E8075_BB9A_1F92_41E2_F9C0C09B9E35",
 "left": "0.91%",
 "width": 262,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 110,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang LPPM</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Ruang LPPM atau Lembaga Penelitian dan Pengabdian Masyarakat</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "LPPM"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_FFCF9718_ED98_45EB_41EC_BF1A0BE2256D",
 "left": "1.45%",
 "width": 262,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "13.28%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 110,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang LPM</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Ruang Lembaga Penjaminan Mutu (LPM)</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "LPM"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_FEC4FACE_ED98_CC67_41C2_AD0497EDB05B",
 "left": "1.45%",
 "width": 149,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "13.28%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 62,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Aula Mini</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Aula Mini"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_ABE83936_BB9A_019E_41B4_87E4C7734520",
 "left": "0.91%",
 "width": 256,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 143,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Fakultas MIPA</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Fakultas MIPA (Matematika dan Ilmu Pengetahuan Alam) yang terdiri dari Program Studi Matematika, Biologi dan Kimia</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Fakultas MIPA"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_F1F7F064_D49E_B8D0_41E7_3AFEAE6C9C22",
 "left": "0.91%",
 "width": 256,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 143,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Fakultas Teknik</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Fakultas Teknik terdiri dari Program Studi Teknologi Hasil Pertanian (THP), Teknologi Informasi dan Teknik Sipil</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Fakultas Teknik"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_AB424C88_BB96_0773_41DA_28726CC48BAC",
 "left": "0.91%",
 "width": 222,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 67,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Laboratorium Biologi</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Lab. Biologi"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_F1439372_D4AE_B8B0_41E0_017DFA93EF63",
 "left": "0.91%",
 "width": 236,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "12.77%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 67,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Laminar Air Flow</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang LAF"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_AB1D6395_BB96_0092_41E6_05B6C1D12CC5",
 "left": "0.91%",
 "width": 210,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 63,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Laboratoirum Kimia</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Lab. Kimia"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_A841599D_BBEA_008D_41B6_C6D4CF13DE02",
 "left": "0.91%",
 "width": 256,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.76%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 104,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Laboratorium ICT 2</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:13px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Lab ICT (Information and Communication Technology)</B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Lab. ICT 2"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_FEE30BA8_ED68_4C2B_41AB_F140B456DDCA",
 "left": "0.91%",
 "width": 147,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "scrollBarMargin": 2,
 "borderRadius": 6,
 "minHeight": 1,
 "shadowVerticalLength": 2,
 "backgroundColorRatios": [
  0.73
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "top": "11.59%",
 "backgroundColor": [
  "#39AE7E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "height": 69,
 "paddingTop": 16,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Rapat</U></B></SPAN></SPAN></DIV></div>",
 "shadow": true,
 "scrollBarColor": "#000000",
 "paddingLeft": 14,
 "visible": false,
 "data": {
  "name": "Ruang Rapat LPPM"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Container_CB87AAF7_D042_4AE8_41E5_6815B68AEB43"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731, false, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "height": "89.916%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PopupPMB"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute",
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DD2DC412_D220_DDC8_4196_C82D4F0D1D2C",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Container_DD9AB630_D221_7DC8_41E8_CB9800C28D75"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "10.08%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PopupPerpus"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08",
 "left": "0%",
 "children": [
  "this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "10.08%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PopupFakultas"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC",
 "left": "30%",
 "children": [
  "this.Image_C21A6842_D79F_F7BE_41E3_08D6631A040F",
  "this.Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5",
  "this.Image_D24C4E97_DDB6_1DD8_41AA_69C300642D31",
  "this.Image_CCD04006_DDB6_04B8_41E3_08F3F78596E7",
  "this.Image_FBBABE34_EDA8_C43A_41DD_BCE501AECA82",
  "this.Image_FAD3BE32_EDB8_443F_41E9_BCA4DD03FECE",
  "this.Image_FAFCEE45_EDB8_4465_41C0_B9C08909E338",
  "this.Image_F3E32BD9_EDA8_CC6A_41A3_855ADF041539",
  "this.Image_CD59BC9D_EDA8_44E5_41D3_C9EE04C5C8AC",
  "this.Image_F29B6438_EDA8_C42A_41E2_42627EFBA2EC",
  "this.Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC",
  "this.Image_F2082185_EDA8_BCDA_41DC_2A5C16EE2B9D",
  "this.Image_F3673E1F_EDA8_C7E6_41D2_3678161E5F89",
  "this.Image_F255EDB9_EDAB_C42A_41E8_2F1B7E780247",
  "this.Image_F27653C7_EDA8_BC65_41D7_2975F338811C",
  "this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "30%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "30%",
 "bottom": "30%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "info"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "10.08%",
 "bottom": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "PopupLab"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 164.3,
   "hfov": 17.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.98
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354, this.camera_C9D9F423_EEA9_DBDE_418B_1846CF362308); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C51B1EDA_DDEE_1D48_41E6_96F00A9E87A3",
   "pitch": -27.98,
   "yaw": 164.3,
   "hfov": 17.74,
   "distance": 50
  }
 ],
 "id": "overlay_CA820A4D_D261_AA58_41E2_4CAD61ACB7FF",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 138.16,
   "hfov": 10.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.9
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CF785EC8_DDAA_FD48_41B2_C6AA13E33E7E, 'showEffect', false); this.setComponentVisibility(this.Image_D24C4E97_DDB6_1DD8_41AA_69C300642D31, true, 0, this.effect_CF785EC8_DDAA_FD48_41B2_C6AA13E33E7E, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CF785EC8_DDAA_FD48_41B2_C6AA13E33E7E, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C51B8EDA_DDEE_1D48_41B4_26866CB1861D",
   "pitch": 9.9,
   "yaw": 138.16,
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_D2732840_DDAA_04B8_41E5_2B06BB08A495",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 26.53,
   "hfov": 10.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.9
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F47B0441_EDA8_445D_41CC_609D95459ED5, 'showEffect', false); this.setComponentVisibility(this.Image_FBBABE34_EDA8_C43A_41DD_BCE501AECA82, true, 0, this.effect_F47B0441_EDA8_445D_41CC_609D95459ED5, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F47B0441_EDA8_445D_41CC_609D95459ED5, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C51BDEDA_DDEE_1D48_41D5_FE4A2D1DE5C9",
   "pitch": 9.9,
   "yaw": 26.53,
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_D222D6DE_DDB6_0D48_41C2_8DA03B756363",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 93.07,
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354, this.camera_C933FA1D_EEA9_CFEA_41DB_6EA17A5DDD2C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F128FCB3_D260_EEC8_41E0_762381B8E6B3",
   "pitch": -5.89,
   "yaw": 93.07,
   "hfov": 7.99,
   "distance": 100
  }
 ],
 "id": "overlay_CAEDD0A3_D260_D6C8_41B0_9024C25DC2CB",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -14.08,
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D, this.camera_C92BDA3C_EEA9_CC2B_41E6_F5A25122F10B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F128BCB5_D260_EEC9_41D0_BBC1805FA708",
   "pitch": -14.53,
   "yaw": -14.08,
   "hfov": 11.67,
   "distance": 100
  }
 ],
 "id": "overlay_CB2B647E_D260_DE38_41E7_10A52A46A06D",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -26.2,
   "hfov": 11.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586, this.camera_C9244A4F_EEA9_CC66_41C5_AA8FB256F788); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F1281CB5_D260_EEC8_41AD_292F9D7A8697",
   "pitch": -16.53,
   "yaw": -26.2,
   "hfov": 11.56,
   "distance": 50
  }
 ],
 "id": "overlay_C90CF99B_D260_D6F8_41E4_4456567BC6AF",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -137.35,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1, this.camera_C93879FF_EEA9_CC25_41D9_135D92AB0477); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F12BECB5_D260_EEC8_41E4_1437C9AD6708",
   "pitch": -2.88,
   "yaw": -137.35,
   "hfov": 8.03,
   "distance": 100
  }
 ],
 "id": "overlay_C9189743_D267_7A48_41D8_8B5F397F65B3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.92,
   "hfov": 15.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.63
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826, this.camera_C7CA1708_EEA9_C5EB_41D9_F31350665473); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F12ADCB7_D260_EEC8_41E4_864C1A983679",
   "pitch": -27.63,
   "yaw": 79.92,
   "hfov": 15.08,
   "distance": 100
  }
 ],
 "id": "overlay_CF2129E1_D263_D649_41D3_1C804C81B672",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.48,
   "hfov": 20.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E, this.camera_C7FC2718_EEA9_C5EA_419D_138B5E4BCFC1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F12A8CB7_D260_EEC8_41B7_6BD57E1687CF",
   "pitch": -37.82,
   "yaw": 0.48,
   "hfov": 20.5,
   "distance": 100
  }
 ],
 "id": "overlay_CEF9411A_D260_B7F8_41DD_487687440198",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.65,
   "hfov": 16.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -50.03
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785, this.camera_C7DA26F8_EEA9_C42B_41A5_4AFF4352A27D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E633EFAB_D221_AAD8_41E1_50BC8472E5E2",
   "pitch": -50.03,
   "yaw": -176.65,
   "hfov": 16.67,
   "distance": 100
  }
 ],
 "id": "overlay_CF16D03A_D260_F638_41D0_52B98BEA43F7",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.99,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.56
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CA7BE633_EEB8_C43E_41D7_46CF0643419A, 'showEffect', false); this.setComponentVisibility(this.Image_F2082185_EDA8_BCDA_41DC_2A5C16EE2B9D, true, 0, this.effect_CA7BE633_EEB8_C43E_41D7_46CF0643419A, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CA7BE633_EEB8_C43E_41D7_46CF0643419A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94AE9C3_EEAB_CC5D_41E7_DE2355666877",
   "pitch": 12.56,
   "yaw": -83.99,
   "hfov": 9.97,
   "distance": 100
  }
 ],
 "id": "overlay_F0DA9017_EDB8_FBE5_41D2_4CB56460740C",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.03,
   "hfov": 14.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4, this.camera_C942A394_EEA9_DCFB_41E1_5B9F19D5AE55); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DDAAD6_D4EF_A9F0_41E1_B74D73EDF29F",
   "pitch": -28.12,
   "yaw": -4.03,
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "id": "overlay_CC6C4034_D4AE_98B7_41E0_E643D7737E88",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.22,
   "hfov": 13.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70, this.camera_C443F7A7_EEA9_C426_41B2_7AB6E0E85B39); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C83D86_D1C2_4F28_41D4_855183060988",
   "pitch": -26.14,
   "yaw": -6.22,
   "hfov": 13.53,
   "distance": 100
  }
 ],
 "id": "overlay_F0604F7F_D1C6_4BD7_4189_5DE2DFF0C969",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.78,
   "hfov": 13.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833, this.camera_C451B795_EEA9_C4E5_41E0_4B3A81E51B83); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C88D86_D1C2_4F28_41E0_BA1300F0EB67",
   "pitch": -29.37,
   "yaw": 120.78,
   "hfov": 13.13,
   "distance": 50
  }
 ],
 "id": "overlay_F18896E9_D1C2_DAFB_41B9_E75F7141A3F0",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.25,
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018, this.camera_C47377B5_EEA9_C43A_41E5_B831A416ED96); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C8ED86_D1C2_4F28_41D7_EA80362A5C37",
   "pitch": -23.07,
   "yaw": -121.25,
   "hfov": 13.86,
   "distance": 50
  }
 ],
 "id": "overlay_F1AB1335_D1C2_3B68_41BF_B78FE246B72B",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.18,
   "hfov": 15.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B, this.camera_C7EDC737_EEA9_C425_41EB_1198C039F684); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C0F29BAD_D221_6AD8_41D0_4757AA1A0F32",
   "pitch": -19.86,
   "yaw": -5.18,
   "hfov": 15.12,
   "distance": 100
  }
 ],
 "id": "overlay_C0CFB0E0_D220_D648_41D8_589DA522F36A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.72,
   "hfov": 11.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D, this.camera_C465B7C5_EEA9_C465_41EC_D694946D5632); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6329FAB_D221_AAD8_41DD_C830F9260868",
   "pitch": -53.82,
   "yaw": -177.72,
   "hfov": 11.86,
   "distance": 100
  }
 ],
 "id": "overlay_CFDBDCB9_D260_AE38_41CD_03250B00AE57",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -98.51,
   "hfov": 9.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.65
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CE89CE2D_EEA8_C42A_41E0_EAFF4F393CCC, 'showEffect', false); this.setComponentVisibility(this.Image_CD59BC9D_EDA8_44E5_41D3_C9EE04C5C8AC, true, 0, this.effect_CE89CE2D_EEA8_C42A_41E0_EAFF4F393CCC, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CE89CE2D_EEA8_C42A_41E0_EAFF4F393CCC, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C948D9C7_EEAB_CC65_41EB_F6841BCD0030",
   "pitch": 8.65,
   "yaw": -98.51,
   "hfov": 9.53,
   "distance": 100
  }
 ],
 "id": "overlay_F13DF304_EDB9_DDDB_41E5_0DAD75D6BBAE",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -23.15,
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.37
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F13EB8FE_EEAF_CC27_41EB_836801B060E0, 'showEffect', false); this.setComponentVisibility(this.Image_F3673E1F_EDA8_C7E6_41D2_3678161E5F89, true, 0, this.effect_F13EB8FE_EEAF_CC27_41EB_836801B060E0, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F13EB8FE_EEAF_CC27_41EB_836801B060E0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94979C7_EEAB_CC65_41E9_FFB56788021F",
   "pitch": 5.37,
   "yaw": -23.15,
   "hfov": 9.6,
   "distance": 100
  }
 ],
 "id": "overlay_F09494AA_EDB9_C42F_41D9_ED63497B7792",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 49.34,
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.6
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F172F1F3_EEA8_7C3D_41B0_3F0A81B43DA0, 'showEffect', false); this.setComponentVisibility(this.Image_F255EDB9_EDAB_C42A_41E8_2F1B7E780247, true, 0, this.effect_F172F1F3_EEA8_7C3D_41B0_3F0A81B43DA0, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F172F1F3_EEA8_7C3D_41B0_3F0A81B43DA0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C949B9C7_EEAB_CC65_41D5_7B7904363A2F",
   "pitch": 6.6,
   "yaw": 49.34,
   "hfov": 9.58,
   "distance": 100
  }
 ],
 "id": "overlay_F0FE2EC7_EDB8_4465_41EA_5773441E3F5A",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 114.46,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.18
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CE55BB41_EEA8_4C5D_41D7_1311EA96D76F, 'showEffect', false); this.setComponentVisibility(this.Image_F3E32BD9_EDA8_CC6A_41A3_855ADF041539, true, 0, this.effect_CE55BB41_EEA8_4C5D_41D7_1311EA96D76F, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CE55BB41_EEA8_4C5D_41D7_1311EA96D76F, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C949E9C7_EEAB_CC65_41D4_A68B781B6DE9",
   "pitch": -1.18,
   "yaw": 114.46,
   "hfov": 9.64,
   "distance": 100
  }
 ],
 "id": "overlay_F075EBEA_EDB8_4C2F_41E1_F83D3C68FFC4",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 158.92,
   "hfov": 14.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1, this.camera_C722C66A_EEA9_C42F_41CE_CF2608D472BC); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EE15CEF4_D220_AA48_41DB_5F45F944E61B",
   "pitch": -26.3,
   "yaw": 158.92,
   "hfov": 14.41,
   "distance": 50
  }
 ],
 "id": "overlay_E3754281_D220_BAC8_41E5_7DBF4F4DD0D5",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_1_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.33,
   "hfov": 12.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.78
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E1024466_D223_BE4B_41CE_AB527678DBF2, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E1024466_D223_BE4B_41CE_AB527678DBF2, 'showEffect', false); this.setComponentVisibility(this.Image_E6B9CC49_D220_AE58_41E2_D74F6B60A9D0, true, 0, this.effect_E1024466_D223_BE4B_41CE_AB527678DBF2, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E1024466_D223_BE4B_41CE_AB527678DBF2, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -31.33,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_1_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.78,
   "hfov": 12.69
  }
 ],
 "id": "overlay_E6CE6ED8_D220_EA78_41E2_A090BD454D27",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_2_1_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 48
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -21.96,
   "hfov": 5.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.85
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E79C8C84_D223_6EC8_41BE_4628C6B83FC8, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E79C8C84_D223_6EC8_41BE_4628C6B83FC8, 'showEffect', false); this.setComponentVisibility(this.Image_E1C1E6C2_D221_DA48_41DB_8B46BA5F03B4, true, 0, this.effect_E79C8C84_D223_6EC8_41BE_4628C6B83FC8, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E79C8C84_D223_6EC8_41BE_4628C6B83FC8, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -21.96,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_2_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.85,
   "hfov": 5.43
  }
 ],
 "id": "overlay_E190A3EE_D223_5A5B_418A_1ACB96BE7F5C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_3_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.33,
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.28
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E1D81707_D221_5BC9_41E8_D60100741841, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E1D81707_D221_5BC9_41E8_D60100741841, 'showEffect', false); this.setComponentVisibility(this.Image_E1F44A5E_D220_AA7B_41E5_D399D005A382, true, 0, this.effect_E1D81707_D221_5BC9_41E8_D60100741841, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E1D81707_D221_5BC9_41E8_D60100741841, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -31.33,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_3_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.28,
   "hfov": 6.94
  }
 ],
 "id": "overlay_E0283627_D220_FDC9_41DC_1F3778ADECBF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_4_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.22,
   "hfov": 8.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.76
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E422EEA0_D223_AAC8_41E7_A1F7BB619AA0, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E422EEA0_D223_AAC8_41E7_A1F7BB619AA0, 'showEffect', false); this.setComponentVisibility(this.Image_E1B141DF_D223_5678_41E5_335A1E73C071, true, 0, this.effect_E422EEA0_D223_AAC8_41E7_A1F7BB619AA0, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E422EEA0_D223_AAC8_41E7_A1F7BB619AA0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -43.22,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_4_0.png",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.76,
   "hfov": 8.3
  }
 ],
 "id": "overlay_E10314AB_D221_5ED8_41C7_6D1350F923F2",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_5_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -147.85,
   "hfov": 46.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.97
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E7A606A1_D220_BAC8_41C7_006E90337DC4, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E7A606A1_D220_BAC8_41C7_006E90337DC4, 'showEffect', false); this.setComponentVisibility(this.Image_E02CF208_D227_75D8_41D7_CEECDA0F41ED, true, 0, this.effect_E7A606A1_D220_BAC8_41C7_006E90337DC4, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E7A606A1_D220_BAC8_41C7_006E90337DC4, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -147.85,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_5_0.png",
      "width": 619,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.97,
   "hfov": 46.95
  }
 ],
 "id": "overlay_E098AD80_D220_AEC8_41DE_932BEE2EDF39",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 102.77,
   "hfov": 15.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4, this.camera_C6044482_EEA9_C4DF_41E6_026309A1BBFD); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6377FAB_D221_AAD8_41E0_516D1B31608B",
   "pitch": -18.37,
   "yaw": 102.77,
   "hfov": 15.25,
   "distance": 50
  }
 ],
 "id": "overlay_F2E58984_D263_B6C8_41E9_45828CCF074B",
 "data": {
  "label": "Circle Arrow 03a Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.73,
   "hfov": 16.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A, this.camera_C61EA471_EEA9_C43D_41E6_05A9BFDA62CD); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6379FAB_D221_AAD8_41E5_7EA9C5B85AA0",
   "pitch": -23.26,
   "yaw": -2.73,
   "hfov": 16.24,
   "distance": 100
  }
 ],
 "id": "overlay_F374D0AD_D261_76D8_41E3_12BBF0BE2118",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.78,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16, this.camera_C6117471_EEA9_C43D_41D0_FCE9A04463B9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6362FAB_D221_AAD8_41DF_85671968EC15",
   "pitch": -0.11,
   "yaw": 92.78,
   "hfov": 8.04,
   "distance": 100
  }
 ],
 "id": "overlay_F3374147_D267_5648_41DA_82410BC088BA",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.54,
   "hfov": 9.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.77
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CE61F624_DD96_0CF9_41CC_AB5D99F43349, 'showEffect', false); this.setComponentVisibility(this.Image_C21A6842_D79F_F7BE_41E3_08D6631A040F, true, 0, this.effect_CE61F624_DD96_0CF9_41CC_AB5D99F43349, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CE61F624_DD96_0CF9_41CC_AB5D99F43349, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F91919AE_D897_48C6_41D2_5EF254188A8F",
   "pitch": 4.77,
   "yaw": -102.54,
   "hfov": 9.61,
   "distance": 100
  }
 ],
 "id": "overlay_C14D06E4_D795_D87A_41E9_F3EAAC708FF2",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -140.34,
   "hfov": 16.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82, this.camera_C9BDE403_EEA9_DBDD_41D4_75E2FA37E1AF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87C628D_D220_BAD8_41D1_F6685DA1F559",
   "pitch": -6.59,
   "yaw": -140.34,
   "hfov": 16.96,
   "distance": 100
  }
 ],
 "id": "overlay_C40EE3E2_D223_FA48_41D8_EE7735FE8CC4",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_1_1_0_map.gif",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.43,
   "hfov": 28.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.28
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_FCA7DA9A_D2E0_AAF8_41B4_28F6DAD545B7, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_FCA7DA9A_D2E0_AAF8_41B4_28F6DAD545B7, 'showEffect', false); this.setComponentVisibility(this.Image_FCB86CF4_D2E7_AE48_418D_7BF1797C7EC0, true, 0, this.effect_FCA7DA9A_D2E0_AAF8_41B4_28F6DAD545B7, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_FCA7DA9A_D2E0_AAF8_41B4_28F6DAD545B7, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 1.43,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_1_0.png",
      "width": 365,
      "class": "ImageResourceLevel",
      "height": 307
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.28,
   "hfov": 28.73
  }
 ],
 "id": "overlay_FF91A8EF_D2E1_D658_41AA_DFA31BCFEF79",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_2_1_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.21,
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.04
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_C8DF964D_DD9A_0D48_41D3_C52232D6E317, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_C8DF964D_DD9A_0D48_41D3_C52232D6E317, 'showEffect', false); this.setComponentVisibility(this.Image_FCA8571E_D2E3_FBF8_41E5_9907ADB42F13, true, 0, this.effect_C8DF964D_DD9A_0D48_41D3_C52232D6E317, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_C8DF964D_DD9A_0D48_41D3_C52232D6E317, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 103.21,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_2_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.04,
   "hfov": 6.33
  }
 ],
 "id": "overlay_FC37BAFE_D2E0_AA38_41C8_C7F11F3B5907",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 167.44,
   "hfov": 11.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.21
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71, this.camera_C94BF394_EEA9_DCFB_41C2_1E2127ED03FB); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EE144EF4_D220_AA48_41E2_9C215917F8A8",
   "pitch": -29.21,
   "yaw": 167.44,
   "hfov": 11.08,
   "distance": 100
  }
 ],
 "id": "overlay_E335E9D2_D223_5648_41C3_35B256D01602",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.17,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826, this.camera_C7A836DA_EEA9_C46E_41E0_97F3A8217909); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87B528D_D220_BAD8_41DD_49DCC8024F8F",
   "pitch": -2.09,
   "yaw": -7.17,
   "hfov": 8.03,
   "distance": 100
  }
 ],
 "id": "overlay_C5079BD3_D227_EA48_41E6_66810D7FC0E2",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_2_1_0_map.gif",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 115.49,
   "hfov": 15.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731, true, 0, this.effect_CA290C1E_D223_6DF8_41E2_3F2A01517DD7, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 115.49,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_2_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 518
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13,
   "hfov": 15.68
  }
 ],
 "id": "overlay_C4EC01F6_D221_D648_41C4_E3D362358644",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 80.6,
   "hfov": 14.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7, this.camera_C7B846CE_EEA9_C467_41C2_F190CBF415E6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87AB28D_D220_BAD8_41E5_41F3003A5343",
   "pitch": -24.25,
   "yaw": 80.6,
   "hfov": 14.65,
   "distance": 100
  }
 ],
 "id": "overlay_C5DED8DD_D223_B678_41E0_BB17DF92B42A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.27,
   "hfov": 14.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82, this.camera_C78626BD_EEA9_C425_41D3_06EECC910DFA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C514CEDA_DDEE_1D48_41E3_0DE46A3EC290",
   "pitch": -24.34,
   "yaw": -82.27,
   "hfov": 14.64,
   "distance": 100
  }
 ],
 "id": "overlay_D2EB79B2_DDAE_07D8_41D6_D469016F7A1F",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.18,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.37
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FE37732A_ED7F_BC2F_41DA_C48260D9CFA5",
   "pitch": -0.37,
   "yaw": 3.18,
   "hfov": 8.04,
   "distance": 100
  }
 ],
 "id": "overlay_E20A7E66_ED79_C427_41EC_A916B925FA57",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.35,
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.52
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B, this.camera_C6A9150F_EEA9_C5E5_41DE_DCF9F0BD3D6F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C638158E_D23F_5ED8_41B6_B09DE92C07F5",
   "pitch": -44.52,
   "yaw": -118.35,
   "hfov": 14.32,
   "distance": 100
  }
 ],
 "id": "overlay_C1723E1E_D220_ADF8_41E2_D4B2E596FF90",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 107.16,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B, this.camera_C6FCD57E_EEA9_C427_41E3_0FCA1E2DD011); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_954236E2_D261_5A48_41D6_B3670CD314D7",
   "pitch": 6.51,
   "yaw": 107.16,
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_E57B6639_D26F_BA38_41D1_FA8673FB949F",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0_HS_1_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.28,
   "hfov": 58.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.18
  }
 ],
 "areas": [
  {
   "click": "if(!this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B.get('visible')){ this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_FB1C16C5_EDA8_445A_41DB_BE89ECA323D2, 'showEffect', false) } else { this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, false, 0, this.effect_FB1C26C5_EDA8_445A_41AC_C40E1D664DA0, 'hideEffect', false) }; if(!this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F.get('visible')){ this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_FB1C16C5_EDA8_445A_41DB_BE89ECA323D2, 'showEffect', false) } else { this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, false, 0, this.effect_FB1C26C5_EDA8_445A_41AC_C40E1D664DA0, 'hideEffect', false) }; if(!this.Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78.get('visible')){ this.setComponentVisibility(this.Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78, true, 0, this.effect_FB1C16C5_EDA8_445A_41DB_BE89ECA323D2, 'showEffect', false) } else { this.setComponentVisibility(this.Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78, false, 0, this.effect_FB1C26C5_EDA8_445A_41AC_C40E1D664DA0, 'hideEffect', false) }; if(!this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7.get('visible')){ this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_FB1C16C5_EDA8_445A_41DB_BE89ECA323D2, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, false, 0, this.effect_FB1C26C5_EDA8_445A_41AC_C40E1D664DA0, 'hideEffect', false) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 29.28,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0_HS_1_0.png",
      "width": 790,
      "class": "ImageResourceLevel",
      "height": 1481
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.18,
   "hfov": 58.03
  }
 ],
 "id": "overlay_F9D35CB4_D5BA_A9B0_41C5_6D893228AD50",
 "data": {
  "label": "Laminar Air Flow"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.28,
   "hfov": 6.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70, this.camera_C8F24926_EEA9_CC27_41EA_D8E27CDB8D06); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CF1881F2_D05D_D6E9_41C9_FCE35552370C",
   "pitch": -1.12,
   "yaw": -5.28,
   "hfov": 6.43,
   "distance": 100
  }
 ],
 "id": "overlay_CAC1EA89_D07E_5538_41D1_668B2A6B2938",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -164.18,
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C5B001E3_D0CE_D6EF_41E6_3DBE7571E235, this.camera_E011F4F5_ED69_C43A_41E7_C13415137E50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CF1831F2_D05D_D6E9_41D1_26DE25456B4D",
   "pitch": -30.07,
   "yaw": -164.18,
   "hfov": 13.91,
   "distance": 50
  }
 ],
 "id": "overlay_CA5602F2_D042_5AE8_41B1_378298023F0E",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.31,
   "hfov": 16.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A, this.camera_C40FD748_EEA9_C46B_41CA_BE3C8153C7D9); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E630DFAB_D221_AAD8_41D5_2D0699AC4C38",
   "pitch": 0.44,
   "yaw": -118.31,
   "hfov": 16.07,
   "distance": 100
  }
 ],
 "id": "overlay_F364B85C_D261_7678_41E8_78DB59DDF305",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -156.81,
   "hfov": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70, this.camera_C91A0980_EEA9_CCDB_41D2_E3329E3BED6C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6315FAB_D221_AAD8_41A1_D3E833F1A6EF",
   "pitch": -51.3,
   "yaw": -156.81,
   "hfov": 10.05,
   "distance": 50
  }
 ],
 "id": "overlay_F060FD8B_D263_6ED8_41CD_1DBFAD882516",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.97,
   "hfov": 22.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A, this.camera_C91FD960_EEA9_CC5A_41E6_0B918DBE310A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E631FFAB_D221_AAD8_41DD_67D3E26C9B08",
   "pitch": -24.34,
   "yaw": -82.97,
   "hfov": 22.33,
   "distance": 100
  }
 ],
 "id": "overlay_CD51BD9D_D261_AEF8_41E2_60EE7028D244",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.78,
   "hfov": 8.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84, this.camera_C8E43960_EEA9_CC5A_41D0_812707167CA0); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6301FAB_D221_AAD8_41C2_F762A6061156",
   "pitch": 3.56,
   "yaw": 35.78,
   "hfov": 8.02,
   "distance": 100
  }
 ],
 "id": "overlay_CD023011_D261_55C8_41E1_1AE2B3D4F363",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.65,
   "hfov": 20.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1, this.camera_C8E85947_EEA9_CC65_41D0_C831AAC06661); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6304FAB_D221_AAD8_41E9_A4E24A572C96",
   "pitch": -31.3,
   "yaw": 97.65,
   "hfov": 20.94,
   "distance": 100
  }
 ],
 "id": "overlay_F19E7FB6_D260_AAC8_41EA_18989ECDB183",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -115.02,
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82, this.camera_C96A93C3_EEA9_DC5D_41D4_8D6E501B46A5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87C028D_D220_BAD8_41D2_B14FA8B36599",
   "pitch": -5.25,
   "yaw": -115.02,
   "hfov": 13.6,
   "distance": 100
  }
 ],
 "id": "overlay_C543B4DE_D221_5E78_41C5_95C647E5E0E4",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -17.54,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C, this.camera_C97663A3_EEA9_DCDD_41D3_9B939A34D8E6); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC6AD6_D4EF_A9F0_41E1_3EDA4F7918B8",
   "pitch": 6.25,
   "yaw": -17.54,
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_C80969C0_D4B6_6BD0_41E5_E1767DE4A474",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.47,
   "hfov": 14.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4, this.camera_C49557E4_EEA9_C45B_41EC_6C7CD882AE8A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63A7FC2_D221_AA48_41D2_9C75D76487C0",
   "pitch": -21.3,
   "yaw": 3.47,
   "hfov": 14.97,
   "distance": 100
  }
 ],
 "id": "overlay_F5259E90_D260_AAC8_41B5_6C5BBF707948",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -21.98,
   "hfov": 7.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71, this.camera_C487B7F4_EEA9_C43B_41E8_B88ACCFF57FC); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63AFFC2_D221_AA48_41DF_3AF6A582538F",
   "pitch": 8.83,
   "yaw": -21.98,
   "hfov": 7.94,
   "distance": 100
  }
 ],
 "id": "overlay_FA02CC20_D263_6DC8_41A7_E5AF06D684EE",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 160.52,
   "hfov": 7.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0, this.camera_C4B7780B_EEA9_CBEE_41C5_0A83844F75B4); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63B8FC2_D221_AA48_41E6_B7EB01FF2FF5",
   "pitch": 7.15,
   "yaw": 160.52,
   "hfov": 7.97,
   "distance": 100
  }
 ],
 "id": "overlay_FA3D7878_D261_B638_41D1_6B20B0B1904B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -122.92,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.4
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4, this.camera_C41D8748_EEA9_C46B_41EB_77428FFA877B); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63BDFC2_D221_AA48_41B0_FB551ADF155B",
   "pitch": 0.4,
   "yaw": -122.92,
   "hfov": 9.64,
   "distance": 100
  }
 ],
 "id": "overlay_F4898845_D260_D648_41DE_005C3833554A",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.22,
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4, this.camera_C98993F3_EEA9_DC3D_41E8_A021C17E8B59); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63B4FC1_D221_AA48_41E2_42322635280D",
   "pitch": 2.55,
   "yaw": -104.22,
   "hfov": 10.44,
   "distance": 100
  }
 ],
 "id": "overlay_F41C7895_D261_56C8_41E7_4C54A2605E9D",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.38,
   "hfov": 15.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826, this.camera_C730964A_EEA9_C46F_41E8_29B221A7546B); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F12B7CB6_D260_EEC8_41A1_4C31678E094F",
   "pitch": -30.55,
   "yaw": -94.38,
   "hfov": 15.57,
   "distance": 100
  }
 ],
 "id": "overlay_C9E12F2D_D261_6BD8_41E2_6A306559529A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.34,
   "hfov": 15.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6, this.camera_C431E778_EEA9_C42B_41E7_7CC2F1D94A83); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DDCAD6_D4EF_A9F0_4190_CAFD3CBC46D7",
   "pitch": -19.01,
   "yaw": -102.34,
   "hfov": 15.19,
   "distance": 100
  }
 ],
 "id": "overlay_CD1E9D29_D4AD_A850_41C3_AAF3A4BF1DD1",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.48,
   "hfov": 14.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251, this.camera_C421B785_EEA9_C4E5_41E4_F33F76C3FCE6); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC1AD6_D4EF_A9F0_41E1_500681CC33ED",
   "pitch": -21.88,
   "yaw": 95.48,
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "id": "overlay_CE5E7A2E_D4AA_A850_41D7_72FEDD523DC3",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -130.05,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B, this.camera_C621D4B0_EEA9_C43B_41E1_24D0F75481FE); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_954156DD_D261_5A78_41B8_18F3BC77F3D8",
   "pitch": 1.09,
   "yaw": -130.05,
   "hfov": 9.64,
   "distance": 100
  }
 ],
 "id": "overlay_E1F4EA90_D267_6AC8_41C7_66D1AD7EE6A7",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -28.72,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB, this.camera_C65304B0_EEA9_C43B_41DA_52363B066F33); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9540D6DD_D261_5A78_41CC_CF9A743FC2BA",
   "pitch": 3.3,
   "yaw": -28.72,
   "hfov": 9.63,
   "distance": 100
  }
 ],
 "id": "overlay_E694F28D_D267_5AD8_41E2_A664D9756123",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 8.27,
   "hfov": 13.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.27
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C, this.camera_C62C64A1_EEA9_C4DA_41AC_19CB7463C11E); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_954076DD_D261_5A78_41C6_29F6948F75E4",
   "pitch": -16.27,
   "yaw": 8.27,
   "hfov": 13.89,
   "distance": 100
  }
 ],
 "id": "overlay_E13E6F51_D260_AA48_41D2_6E44A060C84A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 108.53,
   "hfov": 13.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A, this.camera_C6399492_EEA9_C4FF_41C8_E4B7489034A9); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_954396DD_D261_5A78_41E4_D5A222321367",
   "pitch": -16.33,
   "yaw": 108.53,
   "hfov": 13.88,
   "distance": 50
  }
 ],
 "id": "overlay_E60982CB_D263_FA58_41B3_A521BC219407",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.62,
   "hfov": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.05
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C, this.camera_C6ED35AD_EEA9_C425_41D7_198030111918); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC3AD6_D4EF_A9F0_41DB_FC07471A3D17",
   "pitch": 1.05,
   "yaw": 86.62,
   "hfov": 12.05,
   "distance": 100
  }
 ],
 "id": "overlay_CECEE95C_D4AB_E8F0_41DA_D34D142EBA15",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.81,
   "hfov": 15.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4, this.camera_C71EF5CC_EEA9_C46B_416B_7BC483D19DAE); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC5AD6_D4EF_A9F0_41E8_EEB87E6BC250",
   "pitch": -17.69,
   "yaw": 6.81,
   "hfov": 15.31,
   "distance": 100
  }
 ],
 "id": "overlay_CFD71D48_D4AA_E8D0_41D2_BBCD770EDEDA",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.05,
   "hfov": 14.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB, this.camera_C79656AA_EEA9_C42E_41E5_570F8D92053A); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DCCAE6_D4EF_A9D0_41E7_C50FB8329674",
   "pitch": -25.15,
   "yaw": 0.05,
   "hfov": 14.55,
   "distance": 100
  }
 ],
 "id": "overlay_C82C3E35_D4BA_68B0_41DA_9CF424DFF14A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 163.11,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.27
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_FAD439C2_EDB8_4C5F_41D3_0DE70E4FCB7C, 'showEffect', false); this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_FAD439C2_EDB8_4C5F_41D3_0DE70E4FCB7C, 'showEffect', false); this.setComponentVisibility(this.Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5, true, 0, this.effect_FAD439C2_EDB8_4C5F_41D3_0DE70E4FCB7C, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_FAD439C2_EDB8_4C5F_41D3_0DE70E4FCB7C, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F0BF6638_EDB7_C42A_41B1_D1D4C9D2DFB8",
   "pitch": 7.27,
   "yaw": 163.11,
   "hfov": 9.57,
   "distance": 100
  }
 ],
 "id": "overlay_FBFB3B95_EDB9_CCE5_41D5_FBBB083B1303",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -165.76,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.27
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_FAA55D3A_EDB8_C42F_41EC_ACBDAC444170, 'showEffect', false); this.setComponentVisibility(this.Image_FAFCEE45_EDB8_4465_41C0_B9C08909E338, true, 0, this.effect_FAA55D3A_EDB8_C42F_41EC_ACBDAC444170, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_FAA55D3A_EDB8_C42F_41EC_ACBDAC444170, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F0BFB638_EDB7_C42A_41D1_0F1344797343",
   "pitch": 7.27,
   "yaw": -165.76,
   "hfov": 9.57,
   "distance": 100
  }
 ],
 "id": "overlay_FA90EB38_EDB8_4C2B_4184_500509149C9C",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.27,
   "hfov": 15.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20, this.camera_C910699F_EEA9_CCE5_41EB_16E081D6BC03); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC8AE6_D4EF_A9D0_41E2_4B48547EE0D3",
   "pitch": -20.24,
   "yaw": 1.27,
   "hfov": 15.83,
   "distance": 100
  }
 ],
 "id": "overlay_CF5111EC_D4B7_9BD0_41E8_026CA509060C",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.11,
   "hfov": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.03
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1, this.camera_C915E98F_EEA9_CCE5_41E2_D06082ED21A6); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DCAAE6_D4EF_A9D0_41DE_45C4613DEEBE",
   "pitch": 0.03,
   "yaw": -171.11,
   "hfov": 12.05,
   "distance": 100
  }
 ],
 "id": "overlay_C8169F9E_D4B6_E870_41D0_1CC0CEC33EDE",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.28,
   "hfov": 15.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.6
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5, this.camera_C955D384_EEA9_DCDB_41E7_E6D4D09A1977); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C68D3EB1_D220_AAC8_41DD_22720AFD9D40",
   "pitch": -18.6,
   "yaw": 1.28,
   "hfov": 15.23,
   "distance": 100
  }
 ],
 "id": "overlay_C621ACD3_D220_AE48_41D7_D90AC43152FA",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -165.41,
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.54
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82, this.camera_C926B364_EEA9_DC5B_41E8_FF6CCAD0B1F2); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C68D5EB1_D220_AAC8_41DA_698D8E12B770",
   "pitch": -41.54,
   "yaw": -165.41,
   "hfov": 12.03,
   "distance": 50
  }
 ],
 "id": "overlay_C68ADAF4_D221_EA48_41E1_7197C9CB5AC6",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 82.78,
   "hfov": 14.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70, this.camera_C95D6374_EEA9_DC3B_41E1_928FF560704D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C68EBEB1_D220_AAC8_41E4_364319A5CE2D",
   "pitch": -28.02,
   "yaw": 82.78,
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "id": "overlay_C67A4383_D227_5AC8_41D7_606CF1BDB0C0",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -57.8,
   "hfov": 12.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018, this.camera_C64574C0_EEA9_C45B_41D6_508C074B7C3D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C6A9CCED_D22F_EE58_41E6_BAF8C1C2EC29",
   "pitch": -5.1,
   "yaw": -57.8,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "id": "overlay_F3A17794_D1C5_DB28_41D1_E5DAE33FF8C9",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.64,
   "hfov": 42.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.93
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_DD2DC412_D220_DDC8_4196_C82D4F0D1D2C, true, 0, this.effect_C0582895_D221_B6C8_41D2_CC91100EE97B, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_1_0.png",
      "width": 548,
      "class": "ImageResourceLevel",
      "height": 385
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.93,
   "hfov": 42.1
  }
 ],
 "id": "overlay_F37F5116_D1C2_3728_41DF_FCBF97C0BD7E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150.97,
   "hfov": 17.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.99
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B, this.camera_C67504D0_EEA9_C47B_41E5_77B785DFC9CB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C6AA4CED_D22F_EE58_41E7_8CA37E0AC1F9",
   "pitch": -43.99,
   "yaw": -150.97,
   "hfov": 17.63,
   "distance": 50
  }
 ],
 "id": "overlay_C382EC50_D220_AE48_41D4_5A7D26A5F36C",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.68,
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.05
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C, this.camera_C9C19442_EEA9_C45F_41E2_45B2008EA8C3); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C0F31BAD_D221_6AD8_41E4_9B0E2A3222BD",
   "pitch": -33.05,
   "yaw": 6.68,
   "hfov": 16.84,
   "distance": 100
  }
 ],
 "id": "overlay_C0218587_D221_DEC8_41E3_FE45E7815917",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 62.52,
   "hfov": 15.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.84
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627, this.camera_C9F69452_EEA9_C47E_41ED_83864F21C846); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C0F33BAD_D221_6AD8_41D4_2F9596B6A28D",
   "pitch": -28.84,
   "yaw": 62.52,
   "hfov": 15.84,
   "distance": 100
  }
 ],
 "id": "overlay_C05CCEB4_D223_6AC8_41D4_8D9AB75B9CED",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -69.61,
   "hfov": 18.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC, this.camera_C9CEF433_EEA9_C43D_41E4_A24AD42CFC82); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C0F37BAD_D221_6AD8_41D6_7C82BC015229",
   "pitch": -24.45,
   "yaw": -69.61,
   "hfov": 18.29,
   "distance": 50
  }
 ],
 "id": "overlay_C13D8E9B_D220_EAF8_41D5_5F39270F570B",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_0_1_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 40
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -71.47,
   "hfov": 9.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.89
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CC8D3E64_D76F_487A_41B6_1966E95EEA4D, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CC8D3E64_D76F_487A_41B6_1966E95EEA4D, 'showEffect', false); this.setComponentVisibility(this.Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42, true, 0, this.effect_CC8D3E64_D76F_487A_41B6_1966E95EEA4D, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CC8D3E64_D76F_487A_41B6_1966E95EEA4D, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -71.47,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_0_0.png",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "hfov": 9.45
  }
 ],
 "id": "overlay_F42AEAF7_D4AD_A9B1_41EA_64D5B0569954",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.88,
   "hfov": 21.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE, this.camera_C43FB757_EEA9_C465_4180_740F686B03D9); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DC1AE6_D4EF_A9D0_41D8_C8E4FCDA42C3",
   "pitch": -28.02,
   "yaw": -1.88,
   "hfov": 21.64,
   "distance": 100
  }
 ],
 "id": "overlay_F4985073_D4AB_98B1_41C5_D1B425268E41",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_2_1_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 35
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 36.73,
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.69
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_C0B23666_D893_3846_41D1_C314C7C435F1, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_C0B23666_D893_3846_41D1_C314C7C435F1, 'showEffect', false); this.setComponentVisibility(this.Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7, true, 0, this.effect_C0B23666_D893_3846_41D1_C314C7C435F1, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_C0B23666_D893_3846_41D1_C314C7C435F1, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 36.73,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_2_0.png",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69,
   "hfov": 4.55
  }
 ],
 "id": "overlay_CBD22173_D76C_D85E_41EA_EF668AC2242F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.52,
   "hfov": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.87
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_C8F0CF84_DDEA_3BB8_41B0_55FD2BABD521, 'showEffect', false); this.setComponentVisibility(this.Image_CCD04006_DDB6_04B8_41E3_08F3F78596E7, true, 0, this.effect_C8F0CF84_DDEA_3BB8_41B0_55FD2BABD521, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_C8F0CF84_DDEA_3BB8_41B0_55FD2BABD521, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F92FE9BE_D897_48C6_41B7_DE5DF4A344C0",
   "pitch": 1.87,
   "yaw": -171.52,
   "hfov": 12.05,
   "distance": 100
  }
 ],
 "id": "overlay_C11DB4FE_D894_F846_41DB_7666A466EEB6",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 149.17,
   "hfov": 11.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.06
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_C8B77C71_DDEE_1D58_41D6_2DF9A36F7156, 'showEffect', false); this.setComponentVisibility(this.Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5, true, 0, this.effect_C8B77C71_DDEE_1D58_41D6_2DF9A36F7156, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_C8B77C71_DDEE_1D58_41D6_2DF9A36F7156, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F92C39BE_D897_48C6_41DE_F2B4DBD43D55",
   "pitch": 10.06,
   "yaw": 149.17,
   "hfov": 11.87,
   "distance": 100
  }
 ],
 "id": "overlay_C19402C6_D894_D846_41E7_57BFC527A78C",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_5_1_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 45.87,
   "hfov": 4.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.91
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_F818A2BE_D8BD_58C6_41DE_100C8CE2D0FC, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_F818A2BE_D8BD_58C6_41DE_100C8CE2D0FC, 'showEffect', false); this.setComponentVisibility(this.Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42, true, 0, this.effect_F818A2BE_D8BD_58C6_41DE_100C8CE2D0FC, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_F818A2BE_D8BD_58C6_41DE_100C8CE2D0FC, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 45.87,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_5_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 39
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.91,
   "hfov": 4.76
  }
 ],
 "id": "overlay_C63BE600_D8BD_7BBA_41E2_ACAD4A9884CC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_6_1_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.38,
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.99
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_C912345D_DDEE_0D48_41E0_9E85CCD06547, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_C912345D_DDEE_0D48_41E0_9E85CCD06547, 'showEffect', false); this.setComponentVisibility(this.Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B, true, 0, this.effect_C912345D_DDEE_0D48_41E0_9E85CCD06547, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_C912345D_DDEE_0D48_41E0_9E85CCD06547, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 33.38,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_6_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.99,
   "hfov": 7.87
  }
 ],
 "id": "overlay_C87FC4D0_DDEE_0D58_41D5_8C6A561A0454",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_7_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -30.1,
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.32
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CB7D615B_DDF6_0748_41E7_CDB6EC538AE2, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CB7D615B_DDF6_0748_41E7_CDB6EC538AE2, 'showEffect', false); this.setComponentVisibility(this.Image_CE1BF3A9_DDFA_0BC8_41D3_EF4BFBB90B3B, true, 0, this.effect_CB7D615B_DDF6_0748_41E7_CDB6EC538AE2, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CB7D615B_DDF6_0748_41E7_CDB6EC538AE2, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -30.1,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_7_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.32,
   "hfov": 7.65
  }
 ],
 "id": "overlay_C9BA9233_DDFE_04D8_41E8_66A14637E3EF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.1,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33, this.camera_C700861C_EEA9_C7EA_41EC_C4F17475663E); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_954326E2_D261_5A48_41E1_A78356AC8A15",
   "pitch": -1,
   "yaw": -175.1,
   "hfov": 8.03,
   "distance": 100
  }
 ],
 "id": "overlay_EAE5ADDA_D260_EE78_41E3_2AD645BD103A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.12,
   "hfov": 12.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1, this.camera_C710C5FC_EEA9_C42B_41EA_87E4F88C4E17); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9542B6E2_D261_5A48_41E6_AA89A318376A",
   "pitch": -2.17,
   "yaw": -35.12,
   "hfov": 12.04,
   "distance": 100
  }
 ],
 "id": "overlay_E51580A9_D261_B6D8_41D0_E0212426897F",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_2_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 112.83,
   "hfov": 10.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.84
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CE8F848B_D773_38CE_41E9_FB6225140513, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CE8F848B_D773_38CE_41E9_FB6225140513, 'showEffect', false); this.setComponentVisibility(this.Image_CF8E9F92_D7B7_48DE_41DB_FC6A38F572DF, true, 0, this.effect_CE8F848B_D773_38CE_41E9_FB6225140513, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CE8F848B_D773_38CE_41E9_FB6225140513, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 112.83,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_2_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.84,
   "hfov": 10.01
  }
 ],
 "id": "overlay_E5D595B3_D5AE_BBB1_41C0_BFE895E191EE",
 "data": {
  "label": "Autoklaf"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_3_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 62.66,
   "hfov": 12.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.52
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CEFE7444_D775_7FBA_41C5_3EE103E969A0, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CEFE7444_D775_7FBA_41C5_3EE103E969A0, 'showEffect', false); this.setComponentVisibility(this.Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B, true, 0, this.effect_CEFE7444_D775_7FBA_41C5_3EE103E969A0, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CEFE7444_D775_7FBA_41C5_3EE103E969A0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 62.66,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_3_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.52,
   "hfov": 12.33
  }
 ],
 "id": "overlay_F97B7F5A_D5AE_A8F0_41E6_62FA884D829E",
 "data": {
  "label": "Oven/Inkubator"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_4_1_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 34
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -110.78,
   "hfov": 9.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.21
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CF31A101_D774_D9BA_41CF_33DA5125ACA5, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CF31A101_D774_D9BA_41CF_33DA5125ACA5, 'showEffect', false); this.setComponentVisibility(this.Image_C07F80EF_D7AD_5846_41E1_9B1A0EF77842, true, 0, this.effect_CF31A101_D774_D9BA_41CF_33DA5125ACA5, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CF31A101_D774_D9BA_41CF_33DA5125ACA5, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -110.78,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_4_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.21,
   "hfov": 9.33
  }
 ],
 "id": "overlay_FEB6417D_D5AA_98B0_41B2_F03EC9941FE2",
 "data": {
  "label": "rotaol/orbital Shaker"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 173.2,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.24
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_C12565F3_D795_385E_417E_0D324D6290BA, 'showEffect', false); this.setComponentVisibility(this.Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5, true, 0, this.effect_C12565F3_D795_385E_417E_0D324D6290BA, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_C12565F3_D795_385E_417E_0D324D6290BA, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F92559AE_D897_48C6_41E0_CBA4F5F58D08",
   "pitch": 0.24,
   "yaw": 173.2,
   "hfov": 8.04,
   "distance": 100
  }
 ],
 "id": "overlay_C091940D_D7EC_DFCA_41CC_D81676A10ECB",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.76,
   "hfov": 15.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C, this.camera_C9B2D407_EEA9_DBE5_41E5_13AF50B6DEB7); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DF1AE6_D4EF_A9D0_41E3_570394D4FF1F",
   "pitch": 9.45,
   "yaw": 5.76,
   "hfov": 15.85,
   "distance": 100
  }
 ],
 "id": "overlay_CAA819F5_D4BA_6BB0_41D8_C1ABB150E828",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -147.39,
   "hfov": 13.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F, this.camera_C9A50414_EEA9_DBFB_41D1_86CF13E4CE27); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DDBAE6_D4EF_A9D0_41D9_0E14A13E8656",
   "pitch": -33.35,
   "yaw": -147.39,
   "hfov": 13.43,
   "distance": 50
  }
 ],
 "id": "overlay_CAC645FD_D4BE_BBB0_41C1_06BB6BEC9691",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_2_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.41,
   "hfov": 32.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.54
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CBA173F1_D76D_F85A_41E4_FBAEEE24A7DF, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CBA173F1_D76D_F85A_41E4_FBAEEE24A7DF, 'showEffect', false); this.setComponentVisibility(this.Image_CFC379EF_D7BD_C846_41E4_20D8A70609DD, true, 0, this.effect_CBA173F1_D76D_F85A_41E4_FBAEEE24A7DF, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CBA173F1_D76D_F85A_41E4_FBAEEE24A7DF, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -77.41,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_2_0.png",
      "width": 418,
      "class": "ImageResourceLevel",
      "height": 944
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.54,
   "hfov": 32.7
  }
 ],
 "id": "overlay_F5864C9F_D4AA_A871_41E8_6EC71835AA41",
 "data": {
  "label": "LemariAsam"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_3_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 115.29,
   "hfov": 17.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.22
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_CDCCF58D_D76D_58CA_41E2_5C04A786AB77, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_CDCCF58D_D76D_58CA_41E2_5C04A786AB77, 'showEffect', false); this.setComponentVisibility(this.Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B, true, 0, this.effect_CDCCF58D_D76D_58CA_41E2_5C04A786AB77, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_CDCCF58D_D76D_58CA_41E2_5C04A786AB77, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 115.29,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_3_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 246
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.22,
   "hfov": 17.06
  }
 ],
 "id": "overlay_CB2DB613_D4AD_9870_41BE_6696E3306266",
 "data": {
  "label": "Oven"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_4_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 126.14,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.88
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, true, 0, this.effect_C96D61C6_DDEA_07B8_41C4_1866AC8AFA45, 'showEffect', false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, true, 0, this.effect_C96D61C6_DDEA_07B8_41C4_1866AC8AFA45, 'showEffect', false); this.setComponentVisibility(this.Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7, true, 0, this.effect_C96D61C6_DDEA_07B8_41C4_1866AC8AFA45, 'showEffect', false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, true, 0, this.effect_C96D61C6_DDEA_07B8_41C4_1866AC8AFA45, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 126.14,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_0_HS_4_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.88,
   "hfov": 7.02
  }
 ],
 "id": "overlay_C905A2FB_DD96_054F_41E7_F1908261BFA4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 162.55,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172, this.camera_C688F4F0_EEA9_C43B_41DB_C39B5C98460F); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6358FBB_D221_AA38_41DE_1D66E21FEEDD",
   "pitch": 9.32,
   "yaw": 162.55,
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_F6EBB047_D260_D648_41D8_C9F07664DEBF",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -21.71,
   "hfov": 9.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460, this.camera_C6B9250C_EEA9_C5EB_417B_CFF4DBAAEE0E); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6340FBB_D221_AA38_41E0_AEA5CC3C58E7",
   "pitch": 8.86,
   "yaw": -21.71,
   "hfov": 9.92,
   "distance": 100
  }
 ],
 "id": "overlay_F6BE2CD4_D26F_AE48_41CF_9F630C84D38A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.08,
   "hfov": 18.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1, this.camera_C69734F0_EEA9_C43B_41DC_230EFB6ADDC7); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E634AFBE_D221_AA38_41AB_3C5D83A21971",
   "pitch": -23.25,
   "yaw": 3.08,
   "hfov": 18.46,
   "distance": 100
  }
 ],
 "id": "overlay_F7623AA2_D261_6AC8_41DD_A0015E054E55",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.69,
   "hfov": 21.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A, this.camera_C666B4E0_EEA9_C45B_41E3_8D0B07EAA015); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63B2FC1_D221_AA48_41EA_31F88B60C9C8",
   "pitch": -45.34,
   "yaw": -173.69,
   "hfov": 21.53,
   "distance": 100
  }
 ],
 "id": "overlay_F722593C_D263_B638_41E6_44DDE42F520E",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_0_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -57.75,
   "hfov": 10.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.52
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731, true, 0, this.effect_CCD78AB3_D042_3568_41C5_123B92DB55D3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -57.75,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 241
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.52,
   "hfov": 10.11
  }
 ],
 "id": "overlay_CB0D7E12_D042_CD28_41B4_4AAE9372821A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.66,
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A, this.camera_C4EBA864_EEA9_CC5B_41EC_8C2402027716); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8CEED86_D1C2_4F28_41D9_E307C538087E",
   "pitch": -10,
   "yaw": 2.66,
   "hfov": 9.89,
   "distance": 100
  }
 ],
 "id": "overlay_CF812E30_D1BF_CD68_41B1_1F8A5E579E34",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.87,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833, this.camera_C51DC873_EEA9_CC3D_41BD_4D17C9C11ABA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C94D86_D1C2_4F28_41C1_FE6851E4AA5F",
   "pitch": -21.76,
   "yaw": -36.87,
   "hfov": 13.99,
   "distance": 50
  }
 ],
 "id": "overlay_F03E4CE7_D1C2_CEE8_41DF_37AA93320A9E",
 "data": {
  "label": "Circle Arrow 03b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.23,
   "hfov": 14.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5, this.camera_C8FAD902_EEA9_CDDE_41D3_4123447C5EBF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C9AD86_D1C2_4F28_41D4_9A12633E615C",
   "pitch": -16.82,
   "yaw": 46.23,
   "hfov": 14.42,
   "distance": 50
  }
 ],
 "id": "overlay_F084F566_D1C2_DFE9_41BD_784300FE4792",
 "data": {
  "label": "Circle Arrow 03b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -156.66,
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7, this.camera_C8F51911_EEA9_CDFD_41E1_19C9496C215F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8C9FD86_D1C2_4F28_41E6_7B251C55DBD2",
   "pitch": -3.87,
   "yaw": -156.66,
   "hfov": 13.03,
   "distance": 100
  }
 ],
 "id": "overlay_F0FDB430_D1C6_5D68_4199_E344339F592E",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.79,
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.51
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A, this.camera_C90489E0_EEA9_CC5A_41CB_6EB3F2CB5CD6); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E636BFAB_D221_AAD8_41E3_524B0D92F974",
   "pitch": -3.51,
   "yaw": -104.79,
   "hfov": 12.03,
   "distance": 100
  }
 ],
 "id": "overlay_F7D27117_D261_F7C8_41E6_9B02B5898D70",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.6,
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C, this.camera_C90A49BF_EEA9_CC25_41DA_DEEF243310C2); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E636EFAB_D221_AAD8_41CE_4AB0E05D15B6",
   "pitch": -16.72,
   "yaw": -3.6,
   "hfov": 15.39,
   "distance": 100
  }
 ],
 "id": "overlay_F08B8BAC_D260_AAD8_41D3_D258359D503C",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.73,
   "hfov": 19.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D, this.camera_C93FB9EF_EEA9_CC25_41C2_B91F87B8EBEB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6327FAB_D221_AAD8_41E0_6299E8BB6001",
   "pitch": -38.67,
   "yaw": 6.73,
   "hfov": 19.14,
   "distance": 100
  }
 ],
 "id": "overlay_CC6B7267_D260_DA48_41B6_180262ACFB31",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 118.96,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.46
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_CE6EFC44_EE98_C45B_41A7_993CA3E0B230, 'showEffect', false); this.setComponentVisibility(this.Image_F29B6438_EDA8_C42A_41E2_42627EFBA2EC, true, 0, this.effect_CE6EFC44_EE98_C45B_41A7_993CA3E0B230, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_CE6EFC44_EE98_C45B_41A7_993CA3E0B230, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94B49C3_EEAB_CC5D_41EC_2CD1692DA521",
   "pitch": 0.46,
   "yaw": 118.96,
   "hfov": 9.64,
   "distance": 100
  }
 ],
 "id": "overlay_F061A1D2_EDB8_5C7E_41D0_FDBDCC739B46",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 52.62,
   "hfov": 9.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.73
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F1C159BC_EE98_4C2B_41E1_86272B3784C5, 'showEffect', false); this.setComponentVisibility(this.Image_F27653C7_EDA8_BC65_41D7_2975F338811C, true, 0, this.effect_F1C159BC_EE98_4C2B_41E1_86272B3784C5, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F1C159BC_EE98_4C2B_41E1_86272B3784C5, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94B89C3_EEAB_CC5D_41E0_0B8C748A57B6",
   "pitch": 3.73,
   "yaw": 52.62,
   "hfov": 9.62,
   "distance": 100
  }
 ],
 "id": "overlay_F3F42C43_EDB8_445D_41EC_58DD6F7A0671",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -30.93,
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.37
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F0DDB49E_EEA8_44E7_41E2_5F7A68207DF3, 'showEffect', false); this.setComponentVisibility(this.Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC, true, 0, this.effect_F0DDB49E_EEA8_44E7_41E2_5F7A68207DF3, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F0DDB49E_EEA8_44E7_41E2_5F7A68207DF3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94829C6_EEAB_CC67_41ED_2DB5325CBC2B",
   "pitch": 5.37,
   "yaw": -30.93,
   "hfov": 9.6,
   "distance": 100
  }
 ],
 "id": "overlay_F0C75B49_EDBF_CC6D_41E8_C2CDB293EEC3",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -107.52,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.01
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F0D816CF_EEA9_C465_41D0_ED2192FF64C0, 'showEffect', false); this.setComponentVisibility(this.Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC, true, 0, this.effect_F0D816CF_EEA9_C465_41D0_ED2192FF64C0, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F0D816CF_EEA9_C465_41D0_ED2192FF64C0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C94869C7_EEAB_CC65_41DC_32DCB4735665",
   "pitch": 7.01,
   "yaw": -107.52,
   "hfov": 9.57,
   "distance": 100
  }
 ],
 "id": "overlay_F06A48F3_EDB8_4C3D_41E3_BA631A5D1669",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.38,
   "hfov": 9.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.73
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC, this.camera_C960E3D5_EEA9_DC65_41E5_43EACF75F657); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8CB2D86_D1C2_4F28_41A0_702995D0DB44",
   "pitch": -4.73,
   "yaw": 0.38,
   "hfov": 9.61,
   "distance": 100
  }
 ],
 "id": "overlay_F2AFD757_D1C2_DB28_41E1_B37B217876C0",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 63.36,
   "hfov": 14.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.36
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5, this.camera_C99303E3_EEA9_DC5D_41E6_84149179891B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F8CB8D86_D1C2_4F28_41C0_251AAD610170",
   "pitch": -30.36,
   "yaw": 63.36,
   "hfov": 14.56,
   "distance": 50
  }
 ],
 "id": "overlay_F3889EDD_D1C2_CAD8_41C6_94A6F4E8DEC9",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -114.73,
   "hfov": 7.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.12
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_FBCEB4C8_EDB8_446B_41C4_DCAF24154340, 'showEffect', false); this.setComponentVisibility(this.Image_FAD3BE32_EDB8_443F_41E9_BCA4DD03FECE, true, 0, this.effect_FBCEB4C8_EDB8_446B_41C4_DCAF24154340, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_FBCEB4C8_EDB8_446B_41C4_DCAF24154340, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C3766B98_D777_C8CA_41E3_3A9011192799",
   "pitch": 4.12,
   "yaw": -114.73,
   "hfov": 7.21,
   "distance": 100
  }
 ],
 "id": "overlay_F21F5573_D1C5_DFE8_41E9_0B37520BF9D0",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.46,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.79
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, true, 0, this.effect_F9586770_ED98_443B_41C3_64142696F91A, 'showEffect', false); this.setComponentVisibility(this.Image_C21A6842_D79F_F7BE_41E3_08D6631A040F, true, 0, this.effect_F9586770_ED98_443B_41C3_64142696F91A, 'showEffect', false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, true, 0, this.effect_F9586770_ED98_443B_41C3_64142696F91A, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F4E56417_EDA8_5BE6_41CF_2440CAEDA931",
   "pitch": 2.79,
   "yaw": -102.46,
   "hfov": 5.42,
   "distance": 100
  }
 ],
 "id": "overlay_F961378E_ED98_44E7_41C2_CCA3B520209F",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -55.92,
   "hfov": 15.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826, this.camera_C9E94462_EEA9_C45F_41D0_320496DAAADD); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6312FAB_D221_AAD8_41E3_ED914575F280",
   "pitch": -3.72,
   "yaw": -55.92,
   "hfov": 15.04,
   "distance": 100
  }
 ],
 "id": "overlay_CC0A0A73_D260_AA48_41E4_CFCA016250F0",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.01,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.98
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16, this.camera_C8ED5937_EEA9_CC26_41E2_1244F4D9E925); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6356FAB_D221_AAD8_41E9_AE02C43688D4",
   "pitch": -22.98,
   "yaw": -0.01,
   "hfov": 14.8,
   "distance": 100
  }
 ],
 "id": "overlay_F63801F9_D261_7638_41E1_3D34FD9E5B75",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.74,
   "hfov": 14.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.02
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1, this.camera_C4A7681C_EEA9_CBEA_41E6_29862646F8A1); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6C2FAD6_D4EF_A9F0_41E6_7BC8C6457FB3",
   "pitch": -28.02,
   "yaw": -170.74,
   "hfov": 14.19,
   "distance": 50
  }
 ],
 "id": "overlay_C0D89C0E_D47E_A853_41E8_075B0DA186BC",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.86,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE, this.camera_C4C98848_EEA9_CC6B_41E7_5E9CD90DABC9); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DD1AD6_D4EF_A9F0_41E3_142C1EF614B7",
   "pitch": -2.53,
   "yaw": -86.86,
   "hfov": 8.03,
   "distance": 100
  }
 ],
 "id": "overlay_C16E1E43_D47D_A8D0_41D7_201C9D17FD81",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.01,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.36
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251, this.camera_C4FBD854_EEA9_CC7B_41C2_F60D3B5E9699); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DD2AD6_D4EF_A9F0_41D0_5BDC49E80205",
   "pitch": 0.36,
   "yaw": 2.01,
   "hfov": 8.04,
   "distance": 100
  }
 ],
 "id": "overlay_C1FF1583_D47B_9850_41E7_1122A6AD65BF",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 93.34,
   "hfov": 8.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B, this.camera_C4D9B825_EEA9_CBDA_41D0_587BDF425632); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F6DD4AD6_D4EF_A9F0_41D5_EFA1BF312ECB",
   "pitch": -1.69,
   "yaw": 93.34,
   "hfov": 8.03,
   "distance": 100
  }
 ],
 "id": "overlay_C2663B8C_D47B_E850_41AD_A1BEA81F26E0",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -152.95,
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1, this.camera_C6DA7533_EEA9_C43D_41DE_D383B0ADD9D2); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63A1FC5_D221_AA48_41CE_0EE22106525A",
   "pitch": 1.12,
   "yaw": -152.95,
   "hfov": 13.66,
   "distance": 100
  }
 ],
 "id": "overlay_FAB00921_D25F_B7C8_41B0_1BD88106C619",
 "data": {
  "label": "Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 82.96,
   "hfov": 15.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4, this.camera_C6CCA55F_EEA9_C465_41E9_711CB331BBED); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7D9271E_D2E0_DBFB_41E5_6F8272409D8F",
   "pitch": -20.06,
   "yaw": 82.96,
   "hfov": 15.1,
   "distance": 100
  }
 ],
 "id": "overlay_FB415D02_D223_6FC8_41E8_D707BAED735B",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_2_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.64,
   "hfov": 16.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.24
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_FCCE46E0_D221_5A48_41E3_1CE06E186EA4, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_FCCE46E0_D221_5A48_41E3_1CE06E186EA4, 'showEffect', false); this.setComponentVisibility(this.Image_F859BE24_D220_ADC8_41C4_0093AB2B9AF4, true, 0, this.effect_FCCE46E0_D221_5A48_41E3_1CE06E186EA4, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_FCCE46E0_D221_5A48_41E3_1CE06E186EA4, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_2_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.24,
   "hfov": 16.35
  }
 ],
 "id": "overlay_F8E5AB04_D221_6BC8_41C7_21C551D1AA3F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_3_1_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 16.79,
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.18
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_E2727F22_D220_ABC8_41D8_8DE9DFE5EED9, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_E2727F22_D220_ABC8_41D8_8DE9DFE5EED9, 'showEffect', false); this.setComponentVisibility(this.Image_F8CC716B_D23F_B658_41DC_7676B7EC6B3F, true, 0, this.effect_E2727F22_D220_ABC8_41D8_8DE9DFE5EED9, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_E2727F22_D220_ABC8_41D8_8DE9DFE5EED9, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 16.79,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_3_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.18,
   "hfov": 8.5
  }
 ],
 "id": "overlay_FAAAE122_D221_D7C8_41D6_3DB120333303",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_4_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.25,
   "hfov": 9.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.57
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_FF2848E3_D220_F648_41A4_F505E87D7D63, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_FF2848E3_D220_F648_41A4_F505E87D7D63, 'showEffect', false); this.setComponentVisibility(this.Image_F95EC50B_D220_DFD8_41E7_976404BBECAC, true, 0, this.effect_FF2848E3_D220_F648_41A4_F505E87D7D63, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_FF2848E3_D220_F648_41A4_F505E87D7D63, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 2.25,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_4_0.png",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.57,
   "hfov": 9.07
  }
 ],
 "id": "overlay_FB17FDE8_D221_AE58_41C3_E198FEAC34F6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_5_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.08,
   "hfov": 9.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.34
  }
 ],
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, true, 0, this.effect_FC3B8B27_D220_ABC8_41EA_1DB3C587E417, 'showEffect', false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, true, 0, this.effect_FC3B8B27_D220_ABC8_41EA_1DB3C587E417, 'showEffect', false); this.setComponentVisibility(this.Image_FB84CBE1_D221_AA48_41DD_2BD3701B01BF, true, 0, this.effect_FC3B8B27_D220_ABC8_41EA_1DB3C587E417, 'showEffect', false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, true, 0, this.effect_FC3B8B27_D220_ABC8_41EA_1DB3C587E417, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -12.08,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_5_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.34,
   "hfov": 9.17
  }
 ],
 "id": "overlay_F8438751_D227_DA48_41C4_32D35F0556C1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.27,
   "hfov": 14.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354, this.camera_C766C69C_EEA9_C4EB_41D1_71E0A25A0E72); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87DD28D_D220_BAD8_41BE_093DB4B4573A",
   "pitch": -28.68,
   "yaw": 1.27,
   "hfov": 14.1,
   "distance": 100
  }
 ],
 "id": "overlay_C4B318A9_D220_D6D8_41DE_0C7025F8323A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.35,
   "hfov": 8.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733, this.camera_C774A68B_EEA9_C4ED_41B3_5967B3797BC2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87D528D_D220_BAD8_41DF_44791CA0AD31",
   "pitch": -3.24,
   "yaw": 79.35,
   "hfov": 8.02,
   "distance": 100
  }
 ],
 "id": "overlay_C4190CC3_D22F_EE48_41E0_93077A174D63",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 117.31,
   "hfov": 8.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511, this.camera_C744F68A_EEA9_C4EF_41BE_3D85ABF897F8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C87D028D_D220_BAD8_417A_A0373B934AE4",
   "pitch": -3.23,
   "yaw": 117.31,
   "hfov": 8.02,
   "distance": 100
  }
 ],
 "id": "overlay_C4688095_D22F_56C8_41D7_7B4A10844E05",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.57,
   "hfov": 18.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833, this.camera_C752667B_EEA9_C42D_41CA_3685517619EA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C5153ECA_DDEE_1D48_41DF_F815F1398833",
   "pitch": -40.72,
   "yaw": -177.57,
   "hfov": 18.58,
   "distance": 100
  }
 ],
 "id": "overlay_D3234B4F_DD96_1B48_41EB_57AEA5B9EF8A",
 "data": {
  "label": "Circle Arrow 03a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A6C38322_B596_54B2_41CC_35B9CD3AEC99",
 "backgroundOpacity": 0,
 "children": [
  "this.Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container7861"
 },
 "paddingLeft": 10,
 "layout": "horizontal"
},
{
 "fontFamily": "Arial Narrow",
 "horizontalAlign": "center",
 "height": "70%",
 "id": "DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44",
 "backgroundOpacity": 0.72,
 "width": "10%",
 "popUpBackgroundOpacity": 0.72,
 "popUpShadow": false,
 "popUpFontColor": "#009B4C",
 "borderRadius": 4,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "arrowColor": "#FFFFFF",
 "paddingRight": 5,
 "popUpShadowBlurRadius": 6,
 "popUpShadowSpread": 1,
 "minWidth": 200,
 "playList": "this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundColor": [
  "#009B4C"
 ],
 "fontSize": "18px",
 "class": "DropDown",
 "popUpGap": 15,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "popUpShadowColor": "#000000",
 "gap": 0,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "shadow": false,
 "paddingLeft": 5,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "fontWeight": "bold",
 "textDecoration": "none",
 "prompt": "Lantai 1",
 "popUpBackgroundColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Lantai-1"
 }
},
{
 "fontFamily": "Arial Narrow",
 "horizontalAlign": "center",
 "height": "70%",
 "id": "DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B",
 "backgroundOpacity": 0.72,
 "width": "10%",
 "popUpBackgroundOpacity": 0.72,
 "popUpShadow": false,
 "popUpFontColor": "#009B4C",
 "borderRadius": 4,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "arrowColor": "#FFFFFF",
 "paddingRight": 5,
 "popUpShadowBlurRadius": 6,
 "popUpShadowSpread": 1,
 "minWidth": 200,
 "playList": "this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundColor": [
  "#009B4C"
 ],
 "fontSize": "18px",
 "class": "DropDown",
 "popUpGap": 15,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "popUpShadowColor": "#000000",
 "gap": 0,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "shadow": false,
 "paddingLeft": 5,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "fontWeight": "bold",
 "textDecoration": "none",
 "prompt": "Lantai 2",
 "popUpBackgroundColor": "#FFFFFF",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Lantai-2"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CB87AAF7_D042_4AE8_41E5_6815B68AEB43",
 "left": "30%",
 "children": [
  "this.Image_CB629CA0_D046_CD69_41E8_BEC6BA3E2D5E",
  "this.IconButton_CBFF1E88_D042_4D38_41D6_BDE04CDB5910"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "30%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "borderColor": "#39AE7E",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 4,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container21920"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DD9AB630_D221_7DC8_41E8_CB9800C28D75",
 "left": "15%",
 "children": [
  "this.Image_DDB932D4_D227_BA48_41E7_0D7F1838DF6E",
  "this.IconButton_C2643CBC_D223_6E38_4188_02F2256AA6C9"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "minWidth": 1,
 "borderColor": "#39AE7E",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 4,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container4172"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_FBC8D5EC_D220_DE58_41DD_27666F599754",
 "left": "15%",
 "children": [
  "this.Image_F859BE24_D220_ADC8_41C4_0093AB2B9AF4",
  "this.Image_FB84CBE1_D221_AA48_41DD_2BD3701B01BF",
  "this.Image_F8CC716B_D23F_B658_41DC_7676B7EC6B3F",
  "this.Image_F95EC50B_D220_DFD8_41E7_976404BBECAC",
  "this.Image_FCB86CF4_D2E7_AE48_418D_7BF1797C7EC0",
  "this.Image_FCA8571E_D2E3_FBF8_41E5_9907ADB42F13",
  "this.Image_E02CF208_D227_75D8_41D7_CEECDA0F41ED",
  "this.Image_E6B9CC49_D220_AE58_41E2_D74F6B60A9D0",
  "this.Image_E1C1E6C2_D221_DA48_41DB_8B46BA5F03B4",
  "this.Image_E1F44A5E_D220_AA7B_41E5_D399D005A382",
  "this.Image_E1B141DF_D223_5678_41E5_335A1E73C071",
  "this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "5%",
 "borderColor": "#39AE7E",
 "bottom": "5%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 4,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container85565"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "maxHeight": 741,
 "horizontalAlign": "center",
 "id": "Image_C21A6842_D79F_F7BE_41E3_08D6631A040F",
 "left": "2%",
 "backgroundOpacity": 0,
 "right": "2%",
 "borderRadius": 0,
 "url": "skin/Image_C21A6842_D79F_F7BE_41E3_08D6631A040F.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kamarmandi"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1618
},
{
 "maxHeight": 741,
 "horizontalAlign": "center",
 "id": "Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5",
 "left": "0%",
 "width": "99.94%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "laboran"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1618
},
{
 "maxHeight": 741,
 "horizontalAlign": "center",
 "id": "Image_D24C4E97_DDB6_1DD8_41AA_69C300642D31",
 "left": "0%",
 "width": "99.94%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_D24C4E97_DDB6_1DD8_41AA_69C300642D31.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ruangkeuangan"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1618
},
{
 "maxHeight": 741,
 "horizontalAlign": "center",
 "id": "Image_CCD04006_DDB6_04B8_41E3_08F3F78596E7",
 "left": "0%",
 "width": "99.94%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_CCD04006_DDB6_04B8_41E3_08F3F78596E7.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ruangpenyimpanan"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1618
},
{
 "maxHeight": 322,
 "horizontalAlign": "center",
 "id": "Image_FBBABE34_EDA8_C43A_41DD_BCE501AECA82",
 "left": "1.99%",
 "backgroundOpacity": 0,
 "right": "2.01%",
 "borderRadius": 0,
 "url": "skin/Image_FBBABE34_EDA8_C43A_41DD_BCE501AECA82.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kamarmandi"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1982
},
{
 "maxHeight": 322,
 "horizontalAlign": "center",
 "id": "Image_FAD3BE32_EDB8_443F_41E9_BCA4DD03FECE",
 "left": "1.99%",
 "backgroundOpacity": 0,
 "right": "2.01%",
 "borderRadius": 0,
 "url": "skin/Image_FAD3BE32_EDB8_443F_41E9_BCA4DD03FECE.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "musholla"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1982
},
{
 "maxHeight": 741,
 "horizontalAlign": "center",
 "id": "Image_FAFCEE45_EDB8_4465_41C0_B9C08909E338",
 "left": "0%",
 "width": "99.94%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_FAFCEE45_EDB8_4465_41C0_B9C08909E338.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "labict"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1618
},
{
 "maxHeight": 589,
 "horizontalAlign": "center",
 "id": "Image_F3E32BD9_EDA8_CC6A_41A3_855ADF041539",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F3E32BD9_EDA8_CC6A_41A3_855ADF041539.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kap.birokemahasiswaan"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 2037
},
{
 "maxHeight": 659,
 "horizontalAlign": "center",
 "id": "Image_CD59BC9D_EDA8_44E5_41D3_C9EE04C5C8AC",
 "left": "7.99%",
 "backgroundOpacity": 0,
 "right": "8.01%",
 "borderRadius": 0,
 "url": "skin/Image_CD59BC9D_EDA8_44E5_41D3_C9EE04C5C8AC.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kap.humaskerjasama"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1749
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F29B6438_EDA8_C42A_41E2_42627EFBA2EC",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F29B6438_EDA8_C42A_41E2_42627EFBA2EC.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kap.birosdm"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Staffakademikdansisfor"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F2082185_EDA8_BCDA_41DC_2A5C16EE2B9D",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F2082185_EDA8_BCDA_41DC_2A5C16EE2B9D.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "staffhumaskerjasama"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F3673E1F_EDA8_C7E6_41D2_3678161E5F89",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F3673E1F_EDA8_C7E6_41D2_3678161E5F89.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "staffkemahasiswaanalumni"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F255EDB9_EDAB_C42A_41E8_2F1B7E780247",
 "left": "7.99%",
 "backgroundOpacity": 0,
 "right": "8.01%",
 "borderRadius": 0,
 "url": "skin/Image_F255EDB9_EDAB_C42A_41E8_2F1B7E780247.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "staffkeuangansdm"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 527,
 "horizontalAlign": "center",
 "id": "Image_F27653C7_EDA8_BC65_41D7_2975F338811C",
 "left": "8%",
 "backgroundOpacity": 0,
 "right": "8%",
 "borderRadius": 0,
 "url": "skin/Image_F27653C7_EDA8_BC65_41D7_2975F338811C.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "sisfor"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1809
},
{
 "maxHeight": 321,
 "horizontalAlign": "center",
 "id": "IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35",
 "backgroundOpacity": 0,
 "width": 31.05,
 "right": "0.02%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "mode": "push",
 "height": 29,
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_C34FE2C7_D7B5_7846_41D2_D3050B4705BC, false, 0, null, null, false); this.setComponentVisibility(this.Image_C21A6842_D79F_F7BE_41E3_08D6631A040F, false, 0, null, null, false); this.setComponentVisibility(this.Image_C0856F51_D797_C85A_41E9_6BC5ADD2FEF5, false, 0, null, null, false); this.setComponentVisibility(this.Image_D24C4E97_DDB6_1DD8_41AA_69C300642D31, false, 0, null, null, false); this.setComponentVisibility(this.Image_CCD04006_DDB6_04B8_41E3_08F3F78596E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_FBBABE34_EDA8_C43A_41DD_BCE501AECA82, false, 0, null, null, false); this.setComponentVisibility(this.Image_FAD3BE32_EDB8_443F_41E9_BCA4DD03FECE, false, 0, null, null, false); this.setComponentVisibility(this.Image_FAFCEE45_EDB8_4465_41C0_B9C08909E338, false, 0, null, null, false); this.setComponentVisibility(this.Image_F3E32BD9_EDA8_CC6A_41A3_855ADF041539, false, 0, null, null, false); this.setComponentVisibility(this.Image_CD59BC9D_EDA8_44E5_41D3_C9EE04C5C8AC, false, 0, null, null, false); this.setComponentVisibility(this.Image_F29B6438_EDA8_C42A_41E2_42627EFBA2EC, false, 0, null, null, false); this.setComponentVisibility(this.Image_F3956CC1_EDAF_C45D_41E1_1C5E35441BFC, false, 0, null, null, false); this.setComponentVisibility(this.Image_F2082185_EDA8_BCDA_41DC_2A5C16EE2B9D, false, 0, null, null, false); this.setComponentVisibility(this.Image_F3673E1F_EDA8_C7E6_41D2_3678161E5F89, false, 0, null, null, false); this.setComponentVisibility(this.Image_F255EDB9_EDAB_C42A_41E8_2F1B7E780247, false, 0, null, null, false); this.setComponentVisibility(this.Image_F27653C7_EDA8_BC65_41D7_2975F338811C, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_C37F9AC4_D7AD_48BA_41E8_A0A091361C35.png",
 "data": {
  "name": "IconButton11956"
 },
 "paddingLeft": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 320
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F",
 "left": "15%",
 "children": [
  "this.Image_C07F80EF_D7AD_5846_41E1_9B1A0EF77842",
  "this.Image_CF8E9F92_D7B7_48DE_41DB_FC6A38F572DF",
  "this.Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7",
  "this.Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42",
  "this.Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78",
  "this.Image_CFC379EF_D7BD_C846_41E4_20D8A70609DD",
  "this.Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B",
  "this.Image_C061D41C_D7BF_3FCA_41E1_BB0133E6F810",
  "this.Image_CE1BF3A9_DDFA_0BC8_41D3_EF4BFBB90B3B",
  "this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "10%",
 "borderColor": "#5FCF80",
 "bottom": "10%",
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 4,
 "class": "Container",
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container22364"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C51B1EDA_DDEE_1D48_41E6_96F00A9E87A3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C51B8EDA_DDEE_1D48_41B4_26866CB1861D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E702D0_D0CE_7528_41E5_6FD527A28AE7_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C51BDEDA_DDEE_1D48_41D5_FE4A2D1DE5C9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F128FCB3_D260_EEC8_41E0_762381B8E6B3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F128BCB5_D260_EEC9_41D0_BBC1805FA708",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F1281CB5_D260_EEC8_41AD_292F9D7A8697",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EEC7E6_D0CE_7AE8_41C0_7930E04BF826_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F12BECB5_D260_EEC8_41E4_1437C9AD6708",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F12ADCB7_D260_EEC8_41E4_864C1A983679",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F12A8CB7_D260_EEC8_41B7_6BD57E1687CF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E633EFAB_D221_AAD8_41E1_50BC8472E5E2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECA361_D0CE_5BE8_41DF_C7822314428D_0_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94AE9C3_EEAB_CC5D_41E7_DE2355666877",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DBF36B63_D46E_E8D0_41E8_AABACC66A7F6_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DDAAD6_D4EF_A9F0_41E1_B74D73EDF29F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F8C83D86_D1C2_4F28_41D4_855183060988",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F8C88D86_D1C2_4F28_41E0_BA1300F0EB67",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3ECE51A_D0CE_FF58_41C8_1F35510D2BF5_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F8C8ED86_D1C2_4F28_41D7_EA80362A5C37",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EB6B6B_D0CE_CBF8_41DC_ECDB6EFCB54C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C0F29BAD_D221_6AD8_41D0_4757AA1A0F32",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6329FAB_D221_AAD8_41DD_C830F9260868",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C948D9C7_EEAB_CC65_41EB_F6841BCD0030",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94979C7_EEAB_CC65_41E9_FFB56788021F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C949B9C7_EEAB_CC65_41D5_7B7904363A2F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA9E85_D0CE_4D28_4183_BD8F77FB959E_0_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C949E9C7_EEAB_CC65_41D4_A68B781B6DE9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E1F48D_D0C2_3D38_41C0_AD047ED494D0_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_EE15CEF4_D220_AA48_41DB_5F45F944E61B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6377FAB_D221_AAD8_41E0_516D1B31608B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6379FAB_D221_AAD8_41E5_7EA9C5B85AA0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6362FAB_D221_AAD8_41DF_85671968EC15",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E99FB4_D0CD_CB68_41D3_CD820671051A_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F91919AE_D897_48C6_41D2_5EF254188A8F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EA8217_D0CE_5528_41E7_8186E6E14511_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_C87C628D_D220_BAD8_41D1_F6685DA1F559",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EC0963_D0CD_D7EF_41CC_BBE0747348F4_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_EE144EF4_D220_AA48_41E2_9C215917F8A8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C87B528D_D220_BAD8_41DD_49DCC8024F8F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C87AB28D_D220_BAD8_41E5_41F3003A5343",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E81CD5_D0CE_4D28_41CE_F62C15B0F354_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C514CEDA_DDEE_1D48_41E3_0DE46A3EC290",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3733E75_ED69_C425_41E3_D8850F000D42_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FE37732A_ED7F_BC2F_41DA_C48260D9CFA5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3D76139_D0CE_3758_41A7_F7FCE053D627_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C638158E_D23F_5ED8_41B6_B09DE92C07F5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E22B43_D0C2_4B28_4171_BE2C1E24FF33_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_954236E2_D261_5A48_41D6_B3670CD314D7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_CF1881F2_D05D_D6E9_41C9_FCE35552370C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3D94843_D0CE_D528_41C3_33C0B027E4E7_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_CF1831F2_D05D_D6E9_41D1_26DE25456B4D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E951B5_D0C2_7768_41DE_2DCD40B5CC84_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E630DFAB_D221_AAD8_41D5_2D0699AC4C38",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E6315FAB_D221_AAD8_41A1_D3E833F1A6EF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E631FFAB_D221_AAD8_41DD_67D3E26C9B08",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6301FAB_D221_AAD8_41C2_F762A6061156",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E709B7_D0CE_3768_41D5_89B5CC08F39A_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6304FAB_D221_AAD8_41E9_A4E24A572C96",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E716BA_D0CE_5D58_41CA_19C75FFC4733_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_C87C028D_D220_BAD8_41D2_B14FA8B36599",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFAE0669_D46E_B8D0_41DD_65B4E41F510B_1_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F6DC6AD6_D4EF_A9F0_41E1_3EDA4F7918B8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E63A7FC2_D221_AA48_41D2_9C75D76487C0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E63AFFC2_D221_AA48_41DF_3AF6A582538F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6DEF1_D0CD_CAE8_4171_6F82C34CA2E1_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E63B8FC2_D221_AA48_41E6_B7EB01FF2FF5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3EC1D5A_D0CD_CFD8_41E5_1108D9845460_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E63BDFC2_D221_AA48_41B0_FB551ADF155B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E736EC_D0CD_FAF9_41DC_BC6BB2064172_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E63B4FC1_D221_AA48_41E2_42322635280D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E77D82_D0CE_4F28_41D4_879AB8BD4586_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F12B7CB6_D260_EEC8_41A1_4C31678E094F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DDCAD6_D4EF_A9F0_4190_CAFD3CBC46D7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFAA036C_D46E_98D0_41C6_ED3EFC214AE4_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DC1AD6_D4EF_A9F0_41E1_500681CC33ED",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_954156DD_D261_5A78_41B8_18F3BC77F3D8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9540D6DD_D261_5A78_41CC_CF9A743FC2BA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_954076DD_D261_5A78_41C6_29F6948F75E4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E93A2B_D0C2_3578_41D5_F796D504D9D1_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_954396DD_D261_5A78_41E4_D5A222321367",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_1_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F6DC3AD6_D4EF_A9F0_41DB_FC07471A3D17",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFBBFCE1_D46E_A9D1_41D1_22133ECEB251_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DC5AD6_D4EF_A9F0_41E8_EEB87E6BC250",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DCCAE6_D4EF_A9D0_41E7_C50FB8329674",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F0BF6638_EDB7_C42A_41B1_D1D4C9D2DFB8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFBE9B55_D46E_68F0_41D5_4F6002990D20_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F0BFB638_EDB7_C42A_41D1_0F1344797343",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DC8AE6_D4EF_A9D0_41E2_4B48547EE0D3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFA102EB_D46E_99D0_4181_4B89517E8ADB_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F6DCAAE6_D4EF_A9D0_41DE_45C4613DEEBE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C68D3EB1_D220_AAC8_41DD_22720AFD9D40",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C68D5EB1_D220_AAC8_41DA_698D8E12B770",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6B52289_D221_5AD8_41A9_DC36DBD60833_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C68EBEB1_D220_AAC8_41E4_364319A5CE2D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_C6A9CCED_D22F_EE58_41E6_BAF8C1C2EC29",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8D0C9_D0CE_D538_41D2_2297327782BC_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C6AA4CED_D22F_EE58_41E7_8CA37E0AC1F9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C0F31BAD_D221_6AD8_41E4_9B0E2A3222BD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C0F33BAD_D221_6AD8_41D4_2F9596B6A28D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7E65C_D0CE_DDD8_41CD_2A366BE2670B_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C0F37BAD_D221_6AD8_41D6_7C82BC015229",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DC1AE6_D4EF_A9D0_41D8_C8E4FCDA42C3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F92FE9BE_D897_48C6_41B7_DE5DF4A344C0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFA00C95_D46E_6870_41E8_6343D4864D4F_0_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F92C39BE_D897_48C6_41DE_F2B4DBD43D55",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_954326E2_D261_5A48_41E1_A78356AC8A15",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_9542B6E2_D261_5A48_41E6_AA89A318376A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C78A0A3A_D05E_3558_41DC_4B29A92F7C3B_0_HS_5_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F92559AE_D897_48C6_41E0_CBA4F5F58D08",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_1_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F6DF1AE6_D4EF_A9D0_41E3_570394D4FF1F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DFAE542C_D46E_7850_41C9_60AE66EE3CCE_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6DDBAE6_D4EF_A9D0_41D9_0E14A13E8656",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6358FBB_D221_AA38_41DE_1D66E21FEEDD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6340FBB_D221_AA38_41E0_AEA5CC3C58E7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E634AFBE_D221_AA38_41AB_3C5D83A21971",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E8917D_D0CD_F7D8_41DA_DB87C30D11D4_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E63B2FC1_D221_AA48_41EA_31F88B60C9C8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F8CEED86_D1C2_4F28_41D9_E307C538087E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "id": "AnimatedImageResource_F8C94D86_D1C2_4F28_41C1_FE6851E4AA5F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "id": "AnimatedImageResource_F8C9AD86_D1C2_4F28_41D4_9A12633E615C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6906C_D0CE_F5F8_41E3_190D9D47FA70_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_F8C9FD86_D1C2_4F28_41E6_7B251C55DBD2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E636BFAB_D221_AAD8_41E3_524B0D92F974",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E705D0_D0CD_DF28_41E5_BDCDCD689E16_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E636EFAB_D221_AAD8_41CE_4AB0E05D15B6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6327FAB_D221_AAD8_41E0_6299E8BB6001",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94B49C3_EEAB_CC5D_41EC_2CD1692DA521",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94B89C3_EEAB_CC5D_41E0_0B8C748A57B6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94829C6_EEAB_CC67_41ED_2DB5325CBC2B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E728E2_D0CE_56E8_41D0_7C35A8CAF785_0_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C94869C7_EEAB_CC65_41DC_32DCB4735665",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F8CB2D86_D1C2_4F28_41A0_702995D0DB44",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F8CB8D86_D1C2_4F28_41C0_251AAD610170",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_C3766B98_D777_C8CA_41E3_3A9011192799",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E7FAA9_D0CE_F578_41E9_073EB2E5B018_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_F4E56417_EDA8_5BE6_41CF_2440CAEDA931",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E77433_D0CE_3D68_41E7_4640F746B1D1_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E6312FAB_D221_AAD8_41E3_ED914575F280",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E73B6F_D0CD_CBF8_41E3_2C942742820C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E6356FAB_D221_AAD8_41E9_AE02C43688D4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_F6C2FAD6_D4EF_A9F0_41E6_7BC8C6457FB3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F6DD1AD6_D4EF_A9F0_41E3_142C1EF614B7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F6DD2AD6_D4EF_A9F0_41D0_5BDC49E80205",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E29FAA_D0C2_4B79_41E8_E3D03CEAAD6C_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F6DD4AD6_D4EF_A9F0_41D5_EFA1BF312ECB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_E63A1FC5_D221_AA48_41CE_0EE22106525A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E6F346_D0CD_DB28_41E9_0FC37C45ED71_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E7D9271E_D2E0_DBFB_41E5_6F8272409D8F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C87DD28D_D220_BAD8_41BE_093DB4B4573A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C87D528D_D220_BAD8_41DF_44791CA0AD31",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C87D028D_D220_BAD8_417A_A0373B934AE4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C3E71C09_D0CE_4D38_41E8_37313CB74F82_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_C5153ECA_DDEE_1D48_41DF_F815F1398833",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 465,
 "horizontalAlign": "left",
 "id": "Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341",
 "backgroundOpacity": 0,
 "width": "271.941%",
 "borderRadius": 0,
 "url": "skin/Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "height": "80%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "LogoVT"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 1289
},
{
 "maxHeight": 1794,
 "horizontalAlign": "center",
 "id": "Image_CB629CA0_D046_CD69_41E8_BEC6BA3E2D5E",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_CB629CA0_D046_CD69_41E8_BEC6BA3E2D5E.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image22224"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "maxWidth": 668
},
{
 "maxHeight": 321,
 "horizontalAlign": "center",
 "id": "IconButton_CBFF1E88_D042_4D38_41D6_BDE04CDB5910",
 "backgroundOpacity": 0,
 "width": 43.05,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2.06%",
 "minWidth": 1,
 "mode": "push",
 "height": 24,
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_CA39BC1B_D04E_4D5F_41D4_0D62B7556731, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_CBFF1E88_D042_4D38_41D6_BDE04CDB5910.png",
 "data": {
  "name": "IconButton23791"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 320
},
{
 "maxHeight": 888,
 "horizontalAlign": "center",
 "id": "Image_DDB932D4_D227_BA48_41E7_0D7F1838DF6E",
 "left": "3%",
 "backgroundOpacity": 0,
 "right": "3%",
 "borderRadius": 0,
 "url": "skin/Image_DDB932D4_D227_BA48_41E7_0D7F1838DF6E.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4449"
 },
 "paddingLeft": 0,
 "maxWidth": 1350
},
{
 "maxHeight": 321,
 "horizontalAlign": "center",
 "id": "IconButton_C2643CBC_D223_6E38_4188_02F2256AA6C9",
 "backgroundOpacity": 0,
 "width": 55,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2.8%",
 "minWidth": 1,
 "mode": "push",
 "height": 31,
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_DD2DC412_D220_DDC8_4196_C82D4F0D1D2C, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_C2643CBC_D223_6E38_4188_02F2256AA6C9.png",
 "data": {
  "name": "IconButton5083"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 320
},
{
 "maxHeight": 734,
 "horizontalAlign": "center",
 "id": "Image_F859BE24_D220_ADC8_41C4_0093AB2B9AF4",
 "left": "2%",
 "backgroundOpacity": 0,
 "right": "2%",
 "borderRadius": 0,
 "url": "skin/Image_F859BE24_D220_ADC8_41C4_0093AB2B9AF4.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "mipa"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1634
},
{
 "maxHeight": 1094,
 "horizontalAlign": "center",
 "id": "Image_FB84CBE1_D221_AA48_41DD_2BD3701B01BF",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_FB84CBE1_D221_AA48_41DD_2BD3701B01BF.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "mtk"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1096
},
{
 "maxHeight": 1097,
 "horizontalAlign": "center",
 "id": "Image_F8CC716B_D23F_B658_41DC_7676B7EC6B3F",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_F8CC716B_D23F_B658_41DC_7676B7EC6B3F.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "kimia"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1093
},
{
 "maxHeight": 1100,
 "horizontalAlign": "center",
 "id": "Image_F95EC50B_D220_DFD8_41E7_976404BBECAC",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_F95EC50B_D220_DFD8_41E7_976404BBECAC.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "biologi"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1090
},
{
 "maxHeight": 1068,
 "horizontalAlign": "center",
 "id": "Image_FCB86CF4_D2E7_AE48_418D_7BF1797C7EC0",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_FCB86CF4_D2E7_AE48_418D_7BF1797C7EC0.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "fmipa"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1123
},
{
 "maxHeight": 1348,
 "horizontalAlign": "center",
 "id": "Image_FCA8571E_D2E3_FBF8_41E5_9907ADB42F13",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_FCA8571E_D2E3_FBF8_41E5_9907ADB42F13.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "3%",
 "bottom": "3%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "fmipaaa"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 889
},
{
 "maxHeight": 843,
 "horizontalAlign": "center",
 "id": "Image_E02CF208_D227_75D8_41D7_CEECDA0F41ED",
 "left": "3%",
 "backgroundOpacity": 0,
 "right": "3%",
 "borderRadius": 0,
 "url": "skin/Image_E02CF208_D227_75D8_41D7_CEECDA0F41ED.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "fteknik"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1422
},
{
 "maxHeight": 749,
 "horizontalAlign": "center",
 "id": "Image_E6B9CC49_D220_AE58_41E2_D74F6B60A9D0",
 "left": "3%",
 "backgroundOpacity": 0,
 "right": "3%",
 "borderRadius": 0,
 "url": "skin/Image_E6B9CC49_D220_AE58_41E2_D74F6B60A9D0.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "teknik"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1601
},
{
 "maxHeight": 1073,
 "horizontalAlign": "center",
 "id": "Image_E1C1E6C2_D221_DA48_41DB_8B46BA5F03B4",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_E1C1E6C2_D221_DA48_41DB_8B46BA5F03B4.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "thp"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1118
},
{
 "maxHeight": 1072,
 "horizontalAlign": "center",
 "id": "Image_E1F44A5E_D220_AA7B_41E5_D399D005A382",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_E1F44A5E_D220_AA7B_41E5_D399D005A382.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ti"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1118
},
{
 "maxHeight": 1091,
 "horizontalAlign": "center",
 "id": "Image_E1B141DF_D223_5678_41E5_335A1E73C071",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_E1B141DF_D223_5678_41E5_335A1E73C071.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "2%",
 "bottom": "2%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "sipil"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1099
},
{
 "maxHeight": 321,
 "horizontalAlign": "center",
 "id": "IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6",
 "backgroundOpacity": 0,
 "width": 33,
 "right": "1%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0.75%",
 "minWidth": 1,
 "mode": "push",
 "height": 46,
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_FB0E8DFF_D220_EE38_41E8_077D48CF2C08, false, 0, null, null, false); this.setComponentVisibility(this.Container_FBC8D5EC_D220_DE58_41DD_27666F599754, false, 0, null, null, false); this.setComponentVisibility(this.Image_F859BE24_D220_ADC8_41C4_0093AB2B9AF4, false, 0, null, null, false); this.setComponentVisibility(this.Image_FB84CBE1_D221_AA48_41DD_2BD3701B01BF, false, 0, null, null, false); this.setComponentVisibility(this.Image_F8CC716B_D23F_B658_41DC_7676B7EC6B3F, false, 0, null, null, false); this.setComponentVisibility(this.Image_F95EC50B_D220_DFD8_41E7_976404BBECAC, false, 0, null, null, false); this.setComponentVisibility(this.Image_FCB86CF4_D2E7_AE48_418D_7BF1797C7EC0, false, 0, null, null, false); this.setComponentVisibility(this.Image_FCA8571E_D2E3_FBF8_41E5_9907ADB42F13, false, 0, null, null, false); this.setComponentVisibility(this.Image_E02CF208_D227_75D8_41D7_CEECDA0F41ED, false, 0, null, null, false); this.setComponentVisibility(this.Image_E6B9CC49_D220_AE58_41E2_D74F6B60A9D0, false, 0, null, null, false); this.setComponentVisibility(this.Image_E1C1E6C2_D221_DA48_41DB_8B46BA5F03B4, false, 0, null, null, false); this.setComponentVisibility(this.Image_E1F44A5E_D220_AA7B_41E5_D399D005A382, false, 0, null, null, false); this.setComponentVisibility(this.Image_E1B141DF_D223_5678_41E5_335A1E73C071, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_F84FB8A8_D221_56D8_41D4_0AE855480FA6.png",
 "data": {
  "name": "IconButton86678"
 },
 "paddingLeft": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 320
},
{
 "maxHeight": 926,
 "horizontalAlign": "center",
 "id": "Image_C07F80EF_D7AD_5846_41E1_9B1A0EF77842",
 "left": "2%",
 "backgroundOpacity": 0,
 "right": "2%",
 "borderRadius": 0,
 "url": "skin/Image_C07F80EF_D7AD_5846_41E1_9B1A0EF77842.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "rotatorshaker"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1295
},
{
 "maxHeight": 927,
 "horizontalAlign": "center",
 "id": "Image_CF8E9F92_D7B7_48DE_41DB_FC6A38F572DF",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_CF8E9F92_D7B7_48DE_41DB_FC6A38F572DF.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "autoklaf"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1293
},
{
 "maxHeight": 927,
 "horizontalAlign": "center",
 "id": "Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "desikator"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1293
},
{
 "maxHeight": 927,
 "horizontalAlign": "center",
 "id": "Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "hotplacemagnetic"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1293
},
{
 "maxHeight": 927,
 "horizontalAlign": "center",
 "id": "Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "LAF"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1293
},
{
 "maxHeight": 893,
 "horizontalAlign": "center",
 "id": "Image_CFC379EF_D7BD_C846_41E4_20D8A70609DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_CFC379EF_D7BD_C846_41E4_20D8A70609DD.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "lemariasam"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1342
},
{
 "maxHeight": 796,
 "horizontalAlign": "center",
 "id": "Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B",
 "left": "1%",
 "backgroundOpacity": 0,
 "right": "1%",
 "borderRadius": 0,
 "url": "skin/Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "oven"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1507
},
{
 "maxHeight": 926,
 "horizontalAlign": "center",
 "id": "Image_C061D41C_D7BF_3FCA_41E1_BB0133E6F810",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_C061D41C_D7BF_3FCA_41E1_BB0133E6F810.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1%",
 "bottom": "1%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "shakerrotator"
 },
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1295
},
{
 "maxHeight": 815,
 "horizontalAlign": "center",
 "id": "Image_CE1BF3A9_DDFA_0BC8_41D3_EF4BFBB90B3B",
 "left": "2%",
 "backgroundOpacity": 0,
 "right": "2%",
 "borderRadius": 0,
 "url": "skin/Image_CE1BF3A9_DDFA_0BC8_41D3_EF4BFBB90B3B.jpg",
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "neracadigital"
 },
 "paddingLeft": 0,
 "visible": false,
 "maxWidth": 1471
},
{
 "maxHeight": 321,
 "horizontalAlign": "center",
 "id": "IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7",
 "backgroundOpacity": 0,
 "width": 47,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "top": "1.65%",
 "minWidth": 1,
 "mode": "push",
 "height": 35,
 "class": "IconButton",
 "paddingTop": 0,
 "transparencyActive": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_CD9E4026_D793_D7C6_41E4_7793D7E1129B, false, 0, null, null, false); this.setComponentVisibility(this.Container_C0C297D2_D7AD_585E_41D9_373A6A3E653F, false, 0, null, null, false); this.setComponentVisibility(this.Image_C07F80EF_D7AD_5846_41E1_9B1A0EF77842, false, 0, null, null, false); this.setComponentVisibility(this.Image_CF8E9F92_D7B7_48DE_41DB_FC6A38F572DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_C007C755_D7B4_D85A_41E0_B421EE43A7F7, false, 0, null, null, false); this.setComponentVisibility(this.Image_CFC91EAF_D7B3_C8C6_41E6_BD75692E1F42, false, 0, null, null, false); this.setComponentVisibility(this.Image_C13BDF65_D7BC_C87A_41E4_1EA237C34F78, false, 0, null, null, false); this.setComponentVisibility(this.Image_CFC379EF_D7BD_C846_41E4_20D8A70609DD, false, 0, null, null, false); this.setComponentVisibility(this.Image_CFE3B2C8_D7BC_D84A_41E5_825C42B12F8B, false, 0, null, null, false); this.setComponentVisibility(this.Image_C061D41C_D7BF_3FCA_41E1_BB0133E6F810, false, 0, null, null, false); this.setComponentVisibility(this.Image_CE1BF3A9_DDFA_0BC8_41D3_EF4BFBB90B3B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7, false, 0, null, null, false)",
 "shadow": false,
 "iconURL": "skin/IconButton_C062B646_D7B4_D846_41DC_D057996FA2D7.png",
 "data": {
  "name": "IconButton23202"
 },
 "paddingLeft": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 320
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player435"
 },
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; }
 },
 "paddingLeft": 0,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
