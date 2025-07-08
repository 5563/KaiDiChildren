import * as Cesium from 'cesium'

export class myCesium {
  constructor(
    id,
    {
      changeRightMiddle = true, // 是否更改右键和中间键功能默认true
      useTian = false, // 是否使用天地图
    } = {},
  ) {
    this.viewer = null

    try {
      // 创建Cesium查看器
      this.viewer = new Cesium.Viewer(id, {
        timeline: false, // 时间线
        animation: false, // 动画
        geocoder: false, // 地理编码
        homeButton: false, // 主页按钮
        sceneModePicker: false, // 场景模式选择器
        baseLayerPicker: false, // 基础图层选择器
        navigationHelpButton: false, // 导航帮助按钮
        fullscreenButton: false, // 全屏按钮
        shouldAnimate: true, // 允许动画
        requestRenderMode: true, // 仅在需要时渲染场景
        scene3DOnly: true, // 仅3D场景
      })

      // 移除默认的Cesium Credit attribution
      this.viewer.cesiumWidget.creditContainer.style.display = 'none'

      console.log('Cesium Viewer initialized successfully')

      // 功能初始化
      if (changeRightMiddle) {
        this.changeRightMiddle()
      }

      if (useTian) {
        this.useTianditu()
      }

      // 初始化相机视图
      // this.viewer.camera.flyTo({
      //   destination: Cesium.Cartesian3.fromDegrees(118.221808, 33.957245, 10000), // 徐州，海拔 10000 米
      //   orientation: {
      //     heading: Cesium.Math.toRadians(0), // 朝向角度（北）
      //     pitch: Cesium.Math.toRadians(-45), // 俯仰角（45度俯视）
      //     roll: 0, // 翻滚角度
      //   },
      //   complete: () => {
      //     console.log('Camera fly complete');
      //   }
      // });
    } catch (error) {
      console.error('Error initializing Cesium viewer:', error)
    }
  }

  /**
   * 更改右键和中间键功能
   */
  changeRightMiddle() {
    // 检查viewer是否已初始化
    if (!this.viewer || !this.viewer.scene) {
      console.error('Viewer not initialized')
      return
    }

    try {
      this.viewer.scene.screenSpaceCameraController.zoomEventTypes = [
        Cesium.CameraEventType.MIDDLE_DRAG,
        Cesium.CameraEventType.WHEEL,
        Cesium.CameraEventType.PINCH,
      ]
      this.viewer.scene.screenSpaceCameraController.tiltEventTypes = [
        Cesium.CameraEventType.RIGHT_DRAG,
        {
          eventType: Cesium.CameraEventType.LEFT_DRAG,
          modifier: Cesium.KeyboardEventModifier.CTRL,
        },
        {
          eventType: Cesium.CameraEventType.RIGHT_DRAG,
          modifier: Cesium.KeyboardEventModifier.CTRL,
        },
      ]
      console.log('Camera controls changed successfully')
    } catch (error) {
      console.error('Error changing camera controls:', error)
    }
  }

  /**
   * 使用天地图
   */
  useTianditu() {
    // 检查viewer是否已初始化
    if (!this.viewer || !this.viewer.scene) {
      console.error('Viewer not initialized')
      return
    }

    try {
      // 添加瓦片图层
      const tdt_key = '84b093e070c6c8ee2deaa489043f1ec8'

      // 移除默认的地球图层
      this.viewer.imageryLayers.removeAll()

      // 添加天地图影像层
      const img_tdt = new Cesium.WebMapTileServiceImageryProvider({
        url: `https://{s}.tianditu.gov.cn/img_w/wmts?tk=${tdt_key}`,
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        format: 'tiles',
        maximumLevel: 18,
        subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
      })

      // 添加天地图标注层
      const img_cia = new Cesium.WebMapTileServiceImageryProvider({
        url: `https://{s}.tianditu.gov.cn/cia_w/wmts?tk=${tdt_key}`,
        layer: 'cia',
        style: 'default',
        tileMatrixSetID: 'w',
        format: 'tiles',
        maximumLevel: 18,
        subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
      })

      const layers = this.viewer.imageryLayers
      layers.addImageryProvider(img_tdt)
      layers.addImageryProvider(img_cia)

      console.log('Tianditu layers added successfully')
    } catch (error) {
      console.error('Error initializing Tianditu:', error)
    }
  }
}
