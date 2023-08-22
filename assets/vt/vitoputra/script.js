(function(){
    var script = {
 "definitions": [{
 "easing": "cubic_in_out",
 "id": "effect_17D6A32A_05A3_1F40_4183_8C07CDDBCABC",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15946D67_05B3_75FB_4182_645121CF8BD4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D6E32A_05A3_1F40_4191_5F36590F5EF1",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B001E04_05B3_773E_417F_3B35432AC9AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AEC8EB1_05B3_7757_4196_649CF9CAD822",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B74EE23_05B3_777A_418E_5C07CB170E68",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.83,
   "yaw": 103.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 02",
 "id": "panorama_12AE9B46_02C5_193E_417F_0339374F81C8",
 "thumbnailUrl": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_19B81029_02C7_0772_415D_976EDCC2BB5E"
 ],
 "hfovMax": 130
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F",
   "end": "this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false, -1, this.effect_17D7732A_05A3_1F40_414C_7B95455FB5CA, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false); this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true, -1, this.effect_17D7432A_05A3_1F40_4166_425B71F8508C, 'showEffect', false)",
   "camera": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_17D7832A_05A3_1F40_4188_0E51D7D04E7F, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_17D0632A_05A3_1F40_417D_F5F075D5F1AB, 'showEffect', false)",
   "camera": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401",
   "end": "this.setComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, false, -1, this.effect_17D7D32A_05A3_1F40_4172_FB5474D64410, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, false); this.setComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, true, -1, this.effect_17D7C32A_05A3_1F40_4184_9A2D4FD832B4, 'showEffect', false)",
   "camera": "this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0",
   "end": "this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false, -1, this.effect_17D7532A_05A3_1F40_4195_CABF814A245B, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false); this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true, -1, this.effect_17D7232A_05A3_1F40_4195_EB0C859606B0, 'showEffect', false)",
   "camera": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E",
   "end": "this.setComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, false, -1, this.effect_17D6A32A_05A3_1F40_4183_8C07CDDBCABC, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, false); this.setComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, true, -1, this.effect_17D6932A_05A3_1F40_4192_8A7FF8292F0D, 'showEffect', false)",
   "camera": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2",
   "end": "this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false, -1, this.effect_17D6232A_05A3_1F40_4183_98F92CC96FEA, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false); this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true, -1, this.effect_17D6E32A_05A3_1F40_4191_5F36590F5EF1, 'showEffect', false)",
   "camera": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164",
   "end": "this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false, -1, this.effect_17D5932A_05A3_1F40_4195_642411E1B5DD, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false); this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true, -1, this.effect_17D6532A_05A3_1F40_418D_92676C635A60, 'showEffect', false)",
   "camera": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_129CCF70_02C5_19D2_417E_DB1322104E7C",
   "end": "this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false, -1, this.effect_17D54339_05A3_1F40_4170_7F439D28CD43, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false); this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true, -1, this.effect_17D5E32A_05A3_1F40_4193_24D01C74F196, 'showEffect', false)",
   "camera": "this.panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028",
   "end": "this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false, -1, this.effect_17D4A339_05A3_1F40_4196_5028BCE4BE54, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false); this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true, -1, this.effect_17D49339_05A3_1F40_4191_2E0DA6F83975, 'showEffect', false)",
   "camera": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9",
   "end": "this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false, -1, this.effect_17D43339_05A3_1F40_4164_4B7FBE94359D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false); this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true, -1, this.effect_17D40339_05A3_1F40_4169_EC7375A67C1B, 'showEffect', false)",
   "camera": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12AE9B46_02C5_193E_417F_0339374F81C8",
   "end": "this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false, -1, this.effect_172B9339_05A3_1F40_4149_EEA946FBB480, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false); this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true, -1, this.effect_17D47339_05A3_1F40_418E_561CABE8E45C, 'showEffect', false)",
   "camera": "this.panorama_12AE9B46_02C5_193E_417F_0339374F81C8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730",
   "end": "this.setComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, false, -1, this.effect_172BF339_05A3_1F40_4192_6624D72C6613, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, false); this.setComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, true, -1, this.effect_172BD339_05A3_1F40_4171_0BE321D6C127, 'showEffect', false)",
   "camera": "this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E",
   "end": "this.setComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, false, -1, this.effect_17D4D339_05A3_1F40_418B_DA4A6931B3E8, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, false); this.setComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, true, -1, this.effect_17D4C339_05A3_1F40_4130_E3F392229656, 'showEffect', false)",
   "camera": "this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A",
   "start": "this.keepComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0); this.keepComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, false); this.setComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, true, -1, this.effect_17D41339_05A3_1F40_4163_815913B98C27, 'showEffect', false)",
   "camera": "this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_camera",
   "end": "this.setComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, false, -1, this.effect_17D43339_05A3_1F40_4192_744ED1CD324F, 'hideEffect', false); this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 20.9,
   "yaw": -61.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854"
  },
  {
   "backwardYaw": 20.9,
   "yaw": 58.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854"
  },
  {
   "backwardYaw": 0.04,
   "yaw": 5.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9"
  }
 ],
 "vfov": 180,
 "label": "Tangga Lantai 2",
 "id": "panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028",
 "thumbnailUrl": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_16DD0BEB_0247_78F5_4182_91C08FB7C17D",
  "this.overlay_19004077_025D_07DD_4181_4F07000CD966",
  "this.overlay_1B060335_025D_0952_4181_E439D6234FE5"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.41,
   "yaw": 0.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028"
  },
  {
   "backwardYaw": -87.19,
   "yaw": 89.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E"
  },
  {
   "backwardYaw": -176.06,
   "yaw": -88.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A"
  }
 ],
 "vfov": 180,
 "label": "Lantai 2",
 "id": "panorama_12AE9489_02C5_0F35_4180_B9412100AFD9",
 "thumbnailUrl": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_145DB263_025F_0BF5_4186_EA33A468FBC0",
  "this.overlay_1897A187_02C3_093E_4168_D8E3CDA6C78D",
  "this.overlay_188449C1_02C5_1932_4180_ED77CB9F837C"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A80AE82_05B3_7735_418E_45E13138DAE7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D41339_05A3_1F40_4163_815913B98C27",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.39,
   "yaw": -7.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 05",
 "id": "panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730",
 "thumbnailUrl": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1916BA7D_02C5_1BD2_4185_1F5D42930CCF"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A461D38_05B3_7555_418E_62FF5B3DEA64",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7232A_05A3_1F40_4195_EB0C859606B0",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7832A_05A3_1F40_4188_0E51D7D04E7F",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_172B9339_05A3_1F40_4149_EEA946FBB480",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -75.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15A43D57_05B3_75DA_4175_2FA2524F3CEA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B17DDF4_05B3_74DD_4195_287C7BD52D3F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5ECE52_05B3_77DA_4183_B8BE1D6E618C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12AE9B46_02C5_193E_417F_0339374F81C8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7D32A_05A3_1F40_4172_FB5474D64410",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A8ECE91_05B3_7756_4187_68FC038CA93D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D49339_05A3_1F40_4191_2E0DA6F83975",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D43339_05A3_1F40_4164_4B7FBE94359D",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B2ADDE4_05B3_74FE_4184_A0D520C38635",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D4C339_05A3_1F40_4130_E3F392229656",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.89,
   "yaw": -3.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F"
  },
  {
   "backwardYaw": 97.03,
   "yaw": -90.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164"
  }
 ],
 "vfov": 180,
 "label": "Halaman Lab ICT Putra",
 "id": "panorama_137F3A71_02C5_1BD2_4181_E0CB25475401",
 "thumbnailUrl": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1147815E_03BF_09CF_4152_7392EC72A1EC",
  "this.overlay_113F9042_03BF_0736_417F_B08887586B99"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B7E4E33_05B3_775B_4190_505E519C836C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -131.79,
   "yaw": -176.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0"
  },
  {
   "backwardYaw": -93.75,
   "yaw": -55.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 01",
 "id": "panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E",
 "thumbnailUrl": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_14129A7A_0245_7BD7_4168_532D134AB4AB",
  "this.overlay_14DB74F5_0247_08DD_4186_E8A15DA696D4"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.24,
   "yaw": 104.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854"
  },
  {
   "backwardYaw": 103.91,
   "yaw": 177.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12AE9B46_02C5_193E_417F_0339374F81C8"
  },
  {
   "backwardYaw": -55.12,
   "yaw": -93.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 02",
 "id": "panorama_1330311D_02C5_0952_4176_1CB5317353F2",
 "thumbnailUrl": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_14CF300A_0247_0737_4155_84CAC47C1D0D",
  "this.overlay_1BAC668B_0245_0B35_4157_0663BE6C5182",
  "this.overlay_191E3232_02CF_0B57_414B_9FCF3E81B00E"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B231DE4_05B3_74FE_417A_26A50C222A05",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D47339_05A3_1F40_418E_561CABE8E45C",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.43,
   "yaw": -87.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 08",
 "id": "panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E",
 "thumbnailUrl": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_18877D43_02C3_3935_414E_6FB64105D9A5"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B6B7E33_05B3_775B_417A_6896C6584244",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15E02D86_05B3_753D_4194_33DFF848D2A3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 115.39,
   "yaw": 160.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F"
  },
  {
   "backwardYaw": -176.26,
   "yaw": -131.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E"
  }
 ],
 "vfov": 180,
 "label": "Halaman",
 "id": "panorama_0D8A452A_027F_0977_4179_897F9D60D4C0",
 "thumbnailUrl": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1757B591_0245_0952_417E_9FBC7F1BB034",
  "this.overlay_16B51918_0243_1953_416A_63C777D8C874"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_137AE863_02C5_07F5_4138_69C594B54164_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AA72E72_05B3_77D5_4177_7DC30CADD51C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.33,
   "yaw": -176.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9"
  }
 ],
 "vfov": 180,
 "label": "Ruang Kelas KD. 11",
 "id": "panorama_12A12915_02C5_1952_4153_778F0ADA5D6A",
 "thumbnailUrl": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1F4255E2_02C3_08F6_4179_573AC5D3B7CF"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 124.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B3AEDD5_05B3_74DF_4186_7850D367E097",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15D0DD96_05B3_755D_4191_2DE39F9AB43F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D4A339_05A3_1F40_4196_5028BCE4BE54",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B0BEE14_05B3_775D_4196_A54269F99334",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7732A_05A3_1F40_414C_7B95455FB5CA",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B52FE43_05B3_773B_416C_B76447A64F09",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D40339_05A3_1F40_4169_EC7375A67C1B",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7532A_05A3_1F40_4195_CABF814A245B",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D43339_05A3_1F40_4192_744ED1CD324F",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7432A_05A3_1F40_4166_425B71F8508C",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -64.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B4ABE62_05B3_77F5_4188_E8F465F27907",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1582CD77_05B3_75DB_4194_60F3708F0AFD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 154.49,
   "yaw": -3.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164"
  }
 ],
 "vfov": 180,
 "label": "Lab ICt Putra",
 "id": "panorama_129CCF70_02C5_19D2_417E_DB1322104E7C",
 "thumbnailUrl": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_152D662E_0247_0B4E_4183_68AD95F7152C"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 118.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A56ED28_05B3_7576_4195_4D4C7E67E473",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AFFEEA1_05B3_7777_4186_B2D4E80F2903",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1330311D_02C5_0952_4176_1CB5317353F2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028",
   "end": "this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false, -1, this.effect_17D4A339_05A3_1F40_4196_5028BCE4BE54, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false); this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true, -1, this.effect_17D49339_05A3_1F40_4191_2E0DA6F83975, 'showEffect', false)",
   "camera": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9",
   "end": "this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false, -1, this.effect_17D43339_05A3_1F40_4164_4B7FBE94359D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, false); this.setComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true, -1, this.effect_17D40339_05A3_1F40_4169_EC7375A67C1B, 'showEffect', false)",
   "camera": "this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E",
   "end": "this.setComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, false, -1, this.effect_17D4D339_05A3_1F40_418B_DA4A6931B3E8, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, false); this.setComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, true, -1, this.effect_17D4C339_05A3_1F40_4130_E3F392229656, 'showEffect', false)",
   "camera": "this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A",
   "end": "this.setComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, false, -1, this.effect_17D43339_05A3_1F40_4192_744ED1CD324F, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist, 3, 0); this.keepComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, false); this.setComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, true, -1, this.effect_17D41339_05A3_1F40_4163_815913B98C27, 'showEffect', false)",
   "camera": "this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853, true)",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B36BDC5_05B3_753E_4185_D73788B62654",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 118.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A68FD09_05B3_7537_418C_9BB8FF403499",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D6932A_05A3_1F40_4192_8A7FF8292F0D",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D4D339_05A3_1F40_418B_DA4A6931B3E8",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 172.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15B66D48_05B3_7535_418F_9CABFAE5E86D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D0632A_05A3_1F40_417D_F5F075D5F1AB",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_172BD339_05A3_1F40_4171_0BE321D6C127",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D6232A_05A3_1F40_4183_98F92CC96FEA",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F",
   "end": "this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false, -1, this.effect_17D7732A_05A3_1F40_414C_7B95455FB5CA, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false); this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true, -1, this.effect_17D7432A_05A3_1F40_4166_425B71F8508C, 'showEffect', false)",
   "camera": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854",
   "end": "this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false, -1, this.effect_17D7832A_05A3_1F40_4188_0E51D7D04E7F, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, false); this.setComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true, -1, this.effect_17D0632A_05A3_1F40_417D_F5F075D5F1AB, 'showEffect', false)",
   "camera": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0",
   "end": "this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false, -1, this.effect_17D7532A_05A3_1F40_4195_CABF814A245B, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, false); this.setComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true, -1, this.effect_17D7232A_05A3_1F40_4195_EB0C859606B0, 'showEffect', false)",
   "camera": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E",
   "end": "this.setComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, false, -1, this.effect_17D6A32A_05A3_1F40_4183_8C07CDDBCABC, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 3, 4); this.keepComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, false); this.setComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, true, -1, this.effect_17D6932A_05A3_1F40_4192_8A7FF8292F0D, 'showEffect', false)",
   "camera": "this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2",
   "end": "this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false, -1, this.effect_17D6232A_05A3_1F40_4183_98F92CC96FEA, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 4, 5); this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, false); this.setComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true, -1, this.effect_17D6E32A_05A3_1F40_4191_5F36590F5EF1, 'showEffect', false)",
   "camera": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164",
   "end": "this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false, -1, this.effect_17D5932A_05A3_1F40_4195_642411E1B5DD, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 5, 6); this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, false); this.setComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true, -1, this.effect_17D6532A_05A3_1F40_418D_92676C635A60, 'showEffect', false)",
   "camera": "this.panorama_137AE863_02C5_07F5_4138_69C594B54164_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730",
   "end": "this.setComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, false, -1, this.effect_172BF339_05A3_1F40_4192_6624D72C6613, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist, 6, 0); this.keepComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, false); this.setComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, true, -1, this.effect_172BD339_05A3_1F40_4171_0BE321D6C127, 'showEffect', false)",
   "camera": "this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012, true)",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "id": "effect_172BF339_05A3_1F40_4192_6624D72C6613",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D5E32A_05A3_1F40_4193_24D01C74F196",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -61.77,
   "yaw": 20.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028"
  },
  {
   "backwardYaw": -61.77,
   "yaw": -20.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028"
  },
  {
   "backwardYaw": 0.67,
   "yaw": 169.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F"
  },
  {
   "backwardYaw": -7.32,
   "yaw": -88.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730"
  },
  {
   "backwardYaw": 104.47,
   "yaw": 92.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1330311D_02C5_0952_4176_1CB5317353F2"
  }
 ],
 "vfov": 180,
 "label": "Lantai 1",
 "id": "panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854",
 "thumbnailUrl": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1044407C_03C3_07D2_4184_FD0548710F2F",
  "this.overlay_11A84A77_03BD_1BDE_4173_4AAE173263DC",
  "this.overlay_1B0BAE00_0243_7B33_4163_452CC12A0B00",
  "this.overlay_1A2BAECA_02BD_1B36_4176_A4111B09D606",
  "this.overlay_1A34F443_02BD_0F36_4187_F2CD5C23D076"
 ],
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D7C32A_05A3_1F40_4184_9A2D4FD832B4",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D5932A_05A3_1F40_4195_642411E1B5DD",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D6532A_05A3_1F40_418D_92676C635A60",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -82.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A93FE82_05B3_7735_4144_5765E455CEDC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.6,
   "yaw": 154.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129CCF70_02C5_19D2_417E_DB1322104E7C"
  },
  {
   "backwardYaw": -90.18,
   "yaw": 97.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401"
  }
 ],
 "vfov": 180,
 "label": "Lab ICT Putra",
 "id": "panorama_137AE863_02C5_07F5_4138_69C594B54164",
 "thumbnailUrl": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_17C8E482_0243_0F36_4158_8A79F817CB00",
  "this.overlay_1BFD3840_0245_0733_4186_5C274D0A7C9C"
 ],
 "hfovMax": 130
},
{
 "easing": "cubic_in_out",
 "id": "effect_17D54339_05A3_1F40_4170_7F439D28CD43",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AB96E65_05B3_77FF_418B_8AC4E1FC17C2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_15F2DD77_05B3_75DB_4167_95F1672903AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 169.15,
   "yaw": 0.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854"
  },
  {
   "backwardYaw": 160.25,
   "yaw": 115.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0"
  },
  {
   "backwardYaw": -3.62,
   "yaw": -47.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401"
  }
 ],
 "vfov": 180,
 "label": "Gedung Kiai Idris",
 "id": "panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F",
 "thumbnailUrl": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_t.jpg",
 "hfovMin": "150%",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1330FAC0_02C3_1B32_415B_8763368A4840",
  "this.overlay_170C4DB3_02CD_1956_4182_5B61A6A3DAC1",
  "this.overlay_1715F79D_03C5_0952_4185_8B4FD0D5DB10"
 ],
 "hfovMax": 130
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#5FCF80"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarProgressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_A6C38322_B596_54B2_41CC_35B9CD3AEC99",
  "this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44",
  "this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B"
 ],
 "layout": "horizontal",
 "height": "10.084%",
 "id": "Container_A7F30C91_B427_3E55_41E3_2FFDE14A29F5",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "TopBar"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 6,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "paddingBottom": 0,
 "backgroundOpacity": 0.7,
 "shadowOpacity": 0,
 "class": "Container",
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D",
 "left": "0.91%",
 "width": 252,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Halaman"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "11.76%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Halaman Gedung Kiai Idris</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Gedung Kiai Idris adalah gedung ruang kelas khusus mahasiswa </B></SPAN></SPAN></DIV></div>",
 "height": 116,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A",
 "left": "0.91%",
 "width": 116,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Lt 1"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "11.59%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Lantai. 01</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400",
 "left": "0.91%",
 "width": 116,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Lt 2"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "11.59%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Lantai. 02</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463",
 "left": "0.91%",
 "width": 235,
 "scrollBarColor": "#000000",
 "data": {
  "name": "halaman ict"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "11.76%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#343434;font-size:22px;font-family:'Barlow Condensed';\"><B><U>Halaman Depan Lab ICT</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "height": 70,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E",
 "left": "0.91%",
 "width": 252,
 "scrollBarColor": "#000000",
 "data": {
  "name": "lab ict"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "11.76%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Lab ICT Putra</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;font-family:'Calibri';\"><B>Laboratorium Komputer khusus mahasiswa putra</B></SPAN></SPAN></DIV></div>",
 "height": 116,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B",
 "left": "1.8%",
 "width": 194,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang kelas KD. 01"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "14.45%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Kelas KD. 01</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A",
 "left": "1.8%",
 "width": 194,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang kelas KD. 02"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "14.45%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Kelas KD. 02</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012",
 "left": "1.45%",
 "width": 194,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang kelas KD. 05"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "12.77%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Kelas KD. 05</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC",
 "left": "1.81%",
 "width": 194,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang kelas KD. 08"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "13.11%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Kelas KD. 08</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "id": "HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853",
 "left": "1.81%",
 "width": 194,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Ruang kelas KD. 11"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 2,
 "minWidth": 1,
 "shadowHorizontalLength": 2,
 "borderSize": 0,
 "backgroundColor": [
  "#39AE7E"
 ],
 "paddingLeft": 14,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "top": "13.78%",
 "paddingRight": 20,
 "shadowSpread": 1,
 "paddingBottom": 10,
 "backgroundOpacity": 0.8,
 "shadowOpacity": 0.19,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Barlow Condensed';\"><B><U>Ruang Kelas KD. 11</U></B></SPAN></SPAN></DIV></div>",
 "height": 63,
 "borderRadius": 6,
 "visible": false,
 "paddingTop": 16,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1330311D_02C5_0952_4176_1CB5317353F2, this.camera_0B5ECE52_05B3_77DA_4183_B8BE1D6E618C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A0A1A6_02DD_097F_414E_ED3AB6A83D20",
   "pitch": -2.29,
   "yaw": 103.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.04,
   "distance": 100
  }
 ],
 "id": "overlay_19B81029_02C7_0772_415D_976EDCC2BB5E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 103.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.04,
   "pitch": -2.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9, this.camera_0B17DDF4_05B3_74DD_4195_287C7BD52D3F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186AE182_025D_0936_4180_B571765F0EE5",
   "pitch": -11.57,
   "yaw": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.81,
   "distance": 100
  }
 ],
 "id": "overlay_16DD0BEB_0247_78F5_4182_91C08FB7C17D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.81,
   "pitch": -11.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854, this.camera_0B231DE4_05B3_74FE_417A_26A50C222A05); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186A8182_025D_0936_4173_08AE73ECF9B2",
   "pitch": -45.56,
   "yaw": -61.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.56,
   "distance": 50
  }
 ],
 "id": "overlay_19004077_025D_07DD_4181_4F07000CD966",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -61.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.56,
   "pitch": -45.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854, this.camera_0B2ADDE4_05B3_74FE_4184_A0D520C38635); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186A4182_025D_0936_4185_8847AE7CD188",
   "pitch": -44.74,
   "yaw": 58.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.7,
   "distance": 50
  }
 ],
 "id": "overlay_1B060335_025D_0952_4181_E439D6234FE5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 58.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.7,
   "pitch": -44.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028, this.camera_0B001E04_05B3_773E_417F_3B35432AC9AA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186A1182_025D_0936_417E_2DEB6A9D0992",
   "pitch": -21.34,
   "yaw": 0.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.98,
   "distance": 100
  }
 ],
 "id": "overlay_145DB263_025F_0BF5_4186_EA33A468FBC0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.04,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.98,
   "pitch": -21.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E, this.camera_0B0BEE14_05B3_775D_4196_A54269F99334); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A1E1A6_02DD_097F_4171_6DD2144FE775",
   "pitch": -21.93,
   "yaw": 89.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "id": "overlay_1897A187_02C3_093E_4168_D8E3CDA6C78D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.91,
   "pitch": -21.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12A12915_02C5_1952_4153_778F0ADA5D6A, this.camera_0B74EE23_05B3_777A_418E_5C07CB170E68); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A121A6_02DD_097F_4173_A54E1C8E386E",
   "pitch": -24.79,
   "yaw": -88.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.59,
   "distance": 100
  }
 ],
 "id": "overlay_188449C1_02C5_1932_4180_ED77CB9F837C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.59,
   "pitch": -24.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854, this.camera_0A8ECE91_05B3_7756_4187_68FC038CA93D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A0E1A6_02DD_097F_4186_577723D91DA1",
   "pitch": -23.11,
   "yaw": -7.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.78,
   "distance": 100
  }
 ],
 "id": "overlay_1916BA7D_02C5_1BD2_4185_1F5D42930CCF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -7.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.78,
   "pitch": -23.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_137AE863_02C5_07F5_4138_69C594B54164, this.camera_0A93FE82_05B3_7735_4144_5765E455CEDC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196D1AC9_024F_3B32_417E_59FB29AA1BFE",
   "pitch": 2.64,
   "yaw": -90.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.83,
   "distance": 100
  }
 ],
 "id": "overlay_1147815E_03BF_09CF_4152_7392EC72A1EC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.83,
   "pitch": 2.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F, this.camera_0AA72E72_05B3_77D5_4177_7DC30CADD51C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196ADAC9_024F_3B32_4184_C7E44013183C",
   "pitch": -0.88,
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.05,
   "distance": 100
  }
 ],
 "id": "overlay_113F9042_03BF_0736_417F_B08887586B99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.05,
   "pitch": -0.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0, this.camera_0AFFEEA1_05B3_7777_4186_B2D4E80F2903); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A4B1A6_02DD_097F_4173_025F2F0781F6",
   "pitch": -22.08,
   "yaw": -176.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.89,
   "distance": 100
  }
 ],
 "id": "overlay_14129A7A_0245_7BD7_4168_532D134AB4AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -176.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.89,
   "pitch": -22.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1330311D_02C5_0952_4176_1CB5317353F2, this.camera_0AEC8EB1_05B3_7757_4196_649CF9CAD822); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A4C1A6_02DD_097F_4175_BFD82BFB92D9",
   "pitch": -32.94,
   "yaw": -55.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.57,
   "distance": 50
  }
 ],
 "id": "overlay_14DB74F5_0247_08DD_4186_E8A15DA696D4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -55.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.57,
   "pitch": -32.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E, this.camera_0B3AEDD5_05B3_74DF_4186_7850D367E097); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A461A6_02DD_097F_417B_99BB4F55C750",
   "pitch": -22.51,
   "yaw": -93.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.85,
   "distance": 100
  }
 ],
 "id": "overlay_14CF300A_0247_0737_4155_84CAC47C1D0D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -93.75,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.85,
   "pitch": -22.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854, this.camera_15D0DD96_05B3_755D_4191_2DE39F9AB43F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A781A6_02DD_097F_418A_1A1B940CD58E",
   "pitch": -28.23,
   "yaw": 104.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "id": "overlay_1BAC668B_0245_0B35_4157_0663BE6C5182",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 104.47,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.16,
   "pitch": -28.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12AE9B46_02C5_193E_417F_0339374F81C8, this.camera_0B36BDC5_05B3_753E_4185_D73788B62654); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A7E1A6_02DD_097F_4183_5EE73E712606",
   "pitch": -2.38,
   "yaw": 177.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.85,
   "distance": 100
  }
 ],
 "id": "overlay_191E3232_02CF_0B57_414B_9FCF3E81B00E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 177.83,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.85,
   "pitch": -2.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9, this.camera_15E02D86_05B3_753D_4194_33DFF848D2A3); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A031A6_02DD_097F_4183_BF94B7B758E9",
   "pitch": -28.84,
   "yaw": -87.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.08,
   "distance": 100
  }
 ],
 "id": "overlay_18877D43_02C3_3935_414E_6FB64105D9A5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -87.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.08,
   "pitch": -28.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F, this.camera_0B4ABE62_05B3_77F5_4188_E8F465F27907); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A531A5_02DD_0972_4188_CE2FD2260D78",
   "pitch": -13.04,
   "yaw": 160.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.39,
   "distance": 100
  }
 ],
 "id": "overlay_1757B591_0245_0952_417E_9FBC7F1BB034",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 160.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.39,
   "pitch": -13.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E, this.camera_0AB96E65_05B3_77FF_418B_8AC4E1FC17C2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196A7ACC_024F_3B32_414F_8248B29DAEA0",
   "pitch": -15.67,
   "yaw": -131.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.61,
   "distance": 100
  }
 ],
 "id": "overlay_16B51918_0243_1953_416A_63C777D8C874",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -131.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.61,
   "pitch": -15.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12AE9489_02C5_0F35_4180_B9412100AFD9, this.camera_0B7E4E33_05B3_775B_4190_505E519C836C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22A051A6_02DD_097F_4170_CCA1D3BA6D28",
   "pitch": -32.94,
   "yaw": -176.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.49,
   "distance": 100
  }
 ],
 "id": "overlay_1F4255E2_02C3_08F6_4179_573AC5D3B7CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -176.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.49,
   "pitch": -32.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_137AE863_02C5_07F5_4138_69C594B54164, this.camera_0A80AE82_05B3_7735_418E_45E13138DAE7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186B4182_025D_0936_415F_B2451C232CD7",
   "pitch": -23.86,
   "yaw": -3.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_152D662E_0247_0B4E_4183_68AD95F7152C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.02,
   "pitch": -23.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028, this.camera_0A68FD09_05B3_7537_418C_9BB8FF403499); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196DCAC9_024F_3B32_4180_D905149CF640",
   "pitch": -16.35,
   "yaw": 20.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.48,
   "distance": 100
  }
 ],
 "id": "overlay_1044407C_03C3_07D2_4184_FD0548710F2F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 20.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.48,
   "pitch": -16.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028, this.camera_0A56ED28_05B3_7576_4195_4D4C7E67E473); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196D8AC9_024F_3B32_4187_107A9E8466D1",
   "pitch": -15.35,
   "yaw": -20.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.52,
   "distance": 100
  }
 ],
 "id": "overlay_11A84A77_03BD_1BDE_4173_4AAE173263DC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -20.8,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.52,
   "pitch": -15.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1330311D_02C5_0952_4176_1CB5317353F2, this.camera_15A43D57_05B3_75DA_4175_2FA2524F3CEA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22AAB197_02DD_095E_4175_2608770C8AB5",
   "pitch": -23.82,
   "yaw": 92.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.7,
   "distance": 100
  }
 ],
 "id": "overlay_1B0BAE00_0243_7B33_4163_452CC12A0B00",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.7,
   "pitch": -23.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730, this.camera_15B66D48_05B3_7535_418F_9CABFAE5E86D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22AAC197_02DD_095E_417F_951FD969770B",
   "pitch": -25.85,
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.46,
   "distance": 100
  }
 ],
 "id": "overlay_1A2BAECA_02BD_1B36_4176_A4111B09D606",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.46,
   "pitch": -25.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F, this.camera_0A461D38_05B3_7555_418E_62FF5B3DEA64); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22AA6197_02DD_095E_416F_E001BC7D1924",
   "pitch": -28.91,
   "yaw": 169.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.42,
   "distance": 50
  }
 ],
 "id": "overlay_1A34F443_02BD_0F36_4187_F2CD5C23D076",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 169.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.42,
   "pitch": -28.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401, this.camera_0B52FE43_05B3_773B_416C_B76447A64F09); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186BF172_025D_09D7_4177_A0288A8CDD05",
   "pitch": -1.07,
   "yaw": 97.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.66,
   "distance": 100
  }
 ],
 "id": "overlay_17C8E482_0243_0F36_4158_8A79F817CB00",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 97.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.66,
   "pitch": -1.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129CCF70_02C5_19D2_417E_DB1322104E7C, this.camera_0B6B7E33_05B3_775B_417A_6896C6584244); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_186BA182_025D_0936_4153_A2224AC6C938",
   "pitch": -23.45,
   "yaw": 154.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.06,
   "distance": 50
  }
 ],
 "id": "overlay_1BFD3840_0245_0733_4186_5C274D0A7C9C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 154.49,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.06,
   "pitch": -23.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854, this.camera_15946D67_05B3_75FB_4182_645121CF8BD4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196E3AC3_024F_3B36_4185_9DC047FB6E45",
   "pitch": -6.75,
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.97,
   "distance": 100
  }
 ],
 "id": "overlay_1330FAC0_02C3_1B32_415B_8763368A4840",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.97,
   "pitch": -6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_137F3A71_02C5_1BD2_4181_E0CB25475401, this.camera_15F2DD77_05B3_75DB_4167_95F1672903AA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196CAAC9_024F_3B32_417C_5601C2D739A0",
   "pitch": -10.8,
   "yaw": -47.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.47,
   "distance": 50
  }
 ],
 "id": "overlay_170C4DB3_02CD_1956_4182_5B61A6A3DAC1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -47.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.47,
   "pitch": -10.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D8A452A_027F_0977_4179_897F9D60D4C0, this.camera_1582CD77_05B3_75DB_4194_60F3708F0AFD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_196C6AC9_024F_3B32_416B_56C2E8404D73",
   "pitch": -15.18,
   "yaw": 115.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.81,
   "distance": 50
  }
 ],
 "id": "overlay_1715F79D_03C5_0952_4185_8B4FD0D5DB10",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 115.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.81,
   "pitch": -15.18
  }
 ]
},
{
 "data": {
  "name": "Container7861"
 },
 "children": [
  "this.Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341"
 ],
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_A6C38322_B596_54B2_41CC_35B9CD3AEC99",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "minWidth": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "class": "Container",
 "gap": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Arial Narrow",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44",
 "popUpBackgroundColor": "#FFFFFF",
 "width": "10%",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "minHeight": 20,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 0.72,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "fontColor": "#FFFFFF",
 "minWidth": 200,
 "popUpGap": 15,
 "playList": "this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist",
 "data": {
  "name": "Lantai-1"
 },
 "borderSize": 0,
 "paddingRight": 5,
 "paddingLeft": 5,
 "backgroundColor": [
  "#009B4C"
 ],
 "height": "70%",
 "horizontalAlign": "center",
 "prompt": "Lantai 1",
 "popUpShadow": false,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "class": "DropDown",
 "gap": 0,
 "backgroundOpacity": 0.72,
 "borderRadius": 4,
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "popUpShadowColor": "#000000",
 "textDecoration": "none",
 "paddingTop": 0,
 "fontStyle": "normal",
 "fontSize": "18px",
 "popUpFontColor": "#009B4C",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Arial Narrow",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B",
 "popUpBackgroundColor": "#FFFFFF",
 "width": "10%",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "minHeight": 20,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 0.72,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "fontColor": "#FFFFFF",
 "minWidth": 200,
 "popUpGap": 15,
 "playList": "this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist",
 "data": {
  "name": "Lantai-2"
 },
 "borderSize": 0,
 "paddingRight": 5,
 "paddingLeft": 5,
 "backgroundColor": [
  "#009B4C"
 ],
 "height": "70%",
 "horizontalAlign": "center",
 "prompt": "Lantai 2",
 "popUpShadow": false,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "class": "DropDown",
 "gap": 0,
 "backgroundOpacity": 0.72,
 "borderRadius": 4,
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "popUpShadowColor": "#000000",
 "textDecoration": "none",
 "paddingTop": 0,
 "fontStyle": "normal",
 "fontSize": "18px",
 "popUpFontColor": "#009B4C",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12AE9B46_02C5_193E_417F_0339374F81C8_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A0A1A6_02DD_097F_414E_ED3AB6A83D20",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186AE182_025D_0936_4180_B571765F0EE5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186A8182_025D_0936_4173_08AE73ECF9B2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1291EE0D_02C5_3B32_4175_DF8BCD6C2028_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186A4182_025D_0936_4185_8847AE7CD188",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186A1182_025D_0936_417E_2DEB6A9D0992",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A1E1A6_02DD_097F_4171_6DD2144FE775",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12AE9489_02C5_0F35_4180_B9412100AFD9_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A121A6_02DD_097F_4173_A54E1C8E386E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12AEDA9D_02C5_7B52_4174_1D5C98C42730_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A0E1A6_02DD_097F_4186_577723D91DA1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196D1AC9_024F_3B32_417E_59FB29AA1BFE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_137F3A71_02C5_1BD2_4181_E0CB25475401_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196ADAC9_024F_3B32_4184_C7E44013183C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A4B1A6_02DD_097F_4173_025F2F0781F6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0DAFDC98_027F_1F53_4171_E7E9946FBA5E_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A4C1A6_02DD_097F_4175_BFD82BFB92D9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A461A6_02DD_097F_417B_99BB4F55C750",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A781A6_02DD_097F_418A_1A1B940CD58E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_1330311D_02C5_0952_4176_1CB5317353F2_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A7E1A6_02DD_097F_4183_5EE73E712606",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12A141DA_02C5_08D6_4179_B5EC7ECCF77E_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A031A6_02DD_097F_4183_BF94B7B758E9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A531A5_02DD_0972_4188_CE2FD2260D78",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0D8A452A_027F_0977_4179_897F9D60D4C0_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196A7ACC_024F_3B32_414F_8248B29DAEA0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12A12915_02C5_1952_4153_778F0ADA5D6A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22A051A6_02DD_097F_4170_CCA1D3BA6D28",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129CCF70_02C5_19D2_417E_DB1322104E7C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186B4182_025D_0936_415F_B2451C232CD7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196DCAC9_024F_3B32_4180_D905149CF640",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196D8AC9_024F_3B32_4187_107A9E8466D1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22AAB197_02DD_095E_4175_2608770C8AB5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22AAC197_02DD_095E_417F_951FD969770B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_129EB6DD_02C5_08CD_4164_7FC66B1C8854_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_22AA6197_02DD_095E_416F_E001BC7D1924",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186BF172_025D_09D7_4177_A0288A8CDD05",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_137AE863_02C5_07F5_4138_69C594B54164_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_186BA182_025D_0936_4153_A2224AC6C938",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196E3AC3_024F_3B36_4185_9DC047FB6E45",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196CAAC9_024F_3B32_417C_5601C2D739A0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_12C45C16_027F_3F5F_4171_2D5A9B52800F_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_196C6AC9_024F_3B32_416B_56C2E8404D73",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "cursor": "hand",
 "width": "271.941%",
 "id": "Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_A6AD3E78_B592_4C9E_41E2_802DE9CB5341.png",
 "minWidth": 1,
 "maxWidth": 1289,
 "maxHeight": 465,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "80%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "LogoVT"
 }
}],
 "start": "this.init(); this.syncPlaylists([this.DropDown_B99D21BB_B56F_F793_41DD_31E7D6A9AC44_playlist,this.DropDown_BB366224_B57D_D4B6_41C7_A4C27A9D031B_playlist,this.mainPlayList])",
 "data": {
  "name": "Player435"
 },
 "children": [
  "this.MainViewer",
  "this.Container_A7F30C91_B427_3E55_41E3_2FFDE14A29F5",
  "this.HTMLText_858189EB_9694_AC20_41C8_C342F0B2396D",
  "this.HTMLText_812CD486_96F7_A4E0_41D4_378AFDC6FD5A",
  "this.HTMLText_23E580EF_01C5_08CE_4189_FBBCCA74A400",
  "this.HTMLText_8D23AB1F_9695_EDE0_41CC_95C801D88463",
  "this.HTMLText_0AD18AD4_05AD_2EC0_4193_0290AD15E92E",
  "this.HTMLText_1D3FCB2D_01CD_194D_4172_D18C0A58463B",
  "this.HTMLText_1DA40F15_01C5_195D_417D_B9A42401115A",
  "this.HTMLText_1C456C55_01C5_1FD2_4184_2641B6F44012",
  "this.HTMLText_1CC0158B_01C5_0936_417B_9667BB3060AC",
  "this.HTMLText_1C9388A4_01C7_0773_417F_0657B2E9E853"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "width": "100%",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "class": "Player",
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
