var APP_DATA = {
  "scenes": [
    {
      "id": "0-kv-phng-thay-",
      "name": "KV PHÒNG THAY ĐỒ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2309279839216671,
          "pitch": 0.1367168430180925,
          "rotation": 0,
          "target": "2-view-2-kv-phng-ng"
        },
        {
          "yaw": 0.26786754167734905,
          "pitch": 0.08602504121757981,
          "rotation": 0,
          "target": "1-view-1-kv-phng-ng"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-1-kv-phng-ng",
      "name": "VIEW 1 KV PHÒNG NGỦ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4556875757413437,
          "pitch": 0.14732218219523574,
          "rotation": 0,
          "target": "2-view-2-kv-phng-ng"
        },
        {
          "yaw": 2.115575063697726,
          "pitch": 0.10040263927385773,
          "rotation": 0,
          "target": "0-kv-phng-thay-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-2-kv-phng-ng",
      "name": "VIEW 2 KV PHÒNG NGỦ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1919310847231586,
          "pitch": 0.032993675332477324,
          "rotation": 0,
          "target": "0-kv-phng-thay-"
        },
        {
          "yaw": -0.7214318888827123,
          "pitch": 0.12080746812006105,
          "rotation": 0,
          "target": "1-view-1-kv-phng-ng"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
