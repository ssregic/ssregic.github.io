function Gif() {
	this.animationDuration = 0.3;
}

Gif.prototype.init = function init() {
	this.scene = new THREE.Scene();
	this.initCamera();
	this.initRenderer();
	this.initLights();

	this.initFloor();
	this.createCubes();

	this.render();
};

Gif.prototype.initCamera = function initCamera() {
	this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
	this.camera.position.y = 500;
	this.camera.position.z = 500;
	this.camera.position.x = 500;
	this.camera.updateProjectionMatrix();
	this.camera.lookAt(this.scene.position);
};

Gif.prototype.initRenderer = function initRenderer() {
	this.renderer = new THREE.WebGLRenderer({antialias: true});
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.renderer.setClearColor( 0xf1c140, 1 );
	this.renderer.shadowMapEnabled = true;
	this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
	document.body.appendChild(this.renderer.domElement);
};

Gif.prototype.initLights = function initLights() {
	var shadowlight = new THREE.DirectionalLight( 0xffffff, 1.8 );
	shadowlight.position.set( 0, 100, 0 );
	shadowlight.castShadow = true;
	shadowlight.shadowDarkness = 0.1;
	this.scene.add(shadowlight);

	var light = new THREE.DirectionalLight( 0xffffff, 1.8 );
	light.position.set( 80, 100, 90 );
	this.scene.add(light);
};

Gif.prototype.initFloor = function initFloor() {
 	var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0xf1c140 } );
	this.floor = new THREE.Mesh( geometry, material );
	this.floor.material.side = THREE.DoubleSide;
	this.floor.position.y = -150;
	this.floor.rotation.x = 90*Math.PI/180;
	this.floor.doubleSided = true;
    this.floor.receiveShadow = true;
	this.scene.add(this.floor);
};

Gif.prototype.createCubes = function createSquares() {
	this.cubeGroup = new THREE.Group();
	this.scene.add(this.cubeGroup);

	for (var j=0 ; j<2 ; ++j ) {
		for (var i=0 ; i<2 ; ++i ) {
			this.geometry = new THREE.BoxGeometry( 50, 50, 50 );
			this.material = new THREE.MeshLambertMaterial({color : 0xe0ded7, shading: THREE.FlatShading});
			this.cube = new THREE.Mesh(this.geometry, this.material);
			this.cube.castShadow = true;
			this.cube.receiveShadow = false;
			this.cubeGroup.add(this.cube);
			this.tl = new TimelineMax({repeat: -1});
			this.tl.to(this.cube.position, this.animationDuration, {x: 50, ease: Expo.ease});
			this.tl.to(this.cube.position, this.animationDuration, {x: 100, ease: Expo.ease}, this.animationDuration*2);
			this.tl.to(this.cube.position, this.animationDuration, {z: 50, ease: Expo.ease}, this.animationDuration*3);
			this.tl.to(this.cube.position, this.animationDuration, {x: 50, ease: Expo.ease}, this.animationDuration*4);
			this.tl.to(this.cube.position, this.animationDuration, {x: 0, ease: Expo.ease}, this.animationDuration*6);
			this.tl.to(this.cube.position, this.animationDuration, {z: 0, ease: Expo.ease}, this.animationDuration*7);
			this.tl.progress((i+j*2)/4);
		}
	}

};

Gif.prototype.render = function render() {
	requestAnimationFrame(this.render.bind(this));
	this.renderer.render(this.scene, this.camera);
};

var cubeLoader = new Gif();
cubeLoader.init();