!function n(a,o,h){function c(t,e){if(!o[t]){if(!a[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(l)return l(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var r=o[t]={exports:{}};a[t][0].call(r.exports,function(e){return c(a[t][1][e]||e)},r,r.exports,n,a,o,h)}return o[t].exports}for(var l="function"==typeof require&&require,e=0;e<h.length;e++)c(h[e]);return c}({1:[function(e,t,i){"use strict";var r=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var s=function(){function s(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.array=e.array,this.group=e.group,this.x=e.x,this.y=e.y,this.z=e.z,this.size=e.size,this.color=e.color,this.opacity=e.opacity,this.strength=e.strength,this.yBase=e.y,this.progress=0,this.rate=.015,this.createMesh()}return r(s,[{key:"createMesh",value:function(){this.geometry=this.system.boxGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"update",value:function(e){this.progress+=this.rate*this.loader.deltaTimeNormal,this.mesh.position.y=this.yBase-this.ease.inExpo(this.progress,0,1,1)*this.yBase,this.mesh.scale.set(this.size,this.size+16*this.size*this.ease.inExpo(this.progress,0,1,1),this.size),this.mesh.material.opacity=this.ease.inExpo(this.progress,0,1,1),1<=this.progress&&(this.geometry.dispose(),this.material.dispose(),this.group.remove(this.mesh),this.array.splice(e,1),this.system.createRipple(this.mesh.position.x,this.mesh.position.z,this.strength))}}]),s}();t.exports=s},{}],2:[function(e,t,i){"use strict";var s=e("../loader"),r=e("./system");window.demoNum=5;new s(r)},{"../loader":6,"./system":5}],3:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var n=e("../particle-base"),r=function(e){function r(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t,i));return s.base=new THREE.Vector3(e.x,e.y,e.z),s.velocity=new THREE.Vector3(0,0,0),s.lerpFactor=.3,s.dampFactor=.3,s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n),s(r,[{key:"update",value:function(){var e=.095+Math.abs(this.velocity.y)/25;this.mesh.scale.set(e,e,e);var t=.3+Math.abs(this.velocity.y)/1;this.mesh.material.opacity=this.calc.clamp(t,.25,1),this.velocity.y+=(this.base.y-this.mesh.position.y)*this.lerpFactor,this.velocity.multiplyScalar(this.dampFactor),this.mesh.position.add(this.velocity)}}]),r}();t.exports=r},{"../particle-base":7}],4:[function(e,t,i){"use strict";var r=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var s=function(){function s(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.array=e.array,this.group=e.group,this.sphere=new THREE.Sphere(new THREE.Vector3(e.x,e.y,e.z),0),this.strength=e.strength?e.strength:this.calc.rand(7,12),this.threshold=this.calc.rand(4,8),this.growth=this.calc.rand(.1,.3),this.life=1,this.decay=this.calc.rand(.01,.02),this.influence=new THREE.Vector3,this.geometry=new THREE.CircleGeometry(1,36),this.geometry.vertices.shift(),this.geometry.applyMatrix((new THREE.Matrix4).makeRotationX(Math.PI/2)),this.material=new THREE.LineBasicMaterial({color:16777215,transparent:!0,opacity:1,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.LineLoop(this.geometry,this.material),this.mesh.position.x=this.sphere.center.x,this.mesh.position.y=0,this.mesh.position.z=this.sphere.center.z,this.group.add(this.mesh)}return r(s,[{key:"getInfluenceVector",value:function(e){this.influence.set(0,0,0);var t=this.sphere.distanceToPoint(e);if(t<=this.threshold){var i=this.ease.inOutSine(this.threshold-t,0,1,this.threshold),s=this.strength*i*this.life;this.influence.addVectors(e,this.sphere.center).multiplyScalar(s)}return this.influence}},{key:"update",value:function(e){this.sphere.radius+=this.growth*this.life*this.loader.deltaTimeNormal,this.life-=this.decay*this.loader.deltaTimeNormal,this.mesh.position.y=-2*(1-this.life);var t=.001+this.sphere.radius;this.mesh.scale.set(t,t,t),this.mesh.material.opacity=this.life/3,this.life<=0&&this.destroy(e)}},{key:"destroy",value:function(e){this.geometry.dispose(),this.material.dispose(),this.group.remove(this.mesh),this.array.splice(e,1)}}]),s}();t.exports=s},{}],5:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}(),r=function e(t,i,s){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,i);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,s)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(s):void 0};var n=e("../system-base"),o=e("./particle"),h=e("./ripple"),c=e("./drop"),a=function(e){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.size=45,t.cols=25,t.rows=25,t.drops=[],t.ripples=[],t.dropTick=15,t.dropTickMin=15,t.dropTickMax=35;for(var i=0;i<t.cols;i++)for(var s=0;s<t.rows;s++){var r=t.calc.map(i,0,t.cols-1,-t.size/2,t.size/2),n=t.calc.map(s,0,t.rows-1,-t.size/2,t.size/2);t.particles.push(new o({group:t.particleGroup,x:r,y:0,z:n,size:.01,color:16777215,opacity:.01},t,t.loader))}return t.reset(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n),s(a,[{key:"reset",value:function(){this.tick=0,this.finalDrop=!1,this.setCamera();for(var e=this.drops.length;e--;)this.drops[e].progress=1,this.drops[e].update(e);for(var t=this.ripples.length;t--;)this.ripples[t].destroy(e);this.drops.length=0,this.ripples.length=0}},{key:"setCamera",value:function(){this.loader.isGrid||(this.loader.cameraBaseY=25,this.loader.camera.position.y=this.loader.cameraBaseY,this.loader.camera.lookAt(this.center))}},{key:"createDrop",value:function(e,t,i,s){this.drops.push(new c({array:this.drops,group:this.particleGroup,x:void 0===e?this.calc.rand(-this.size/2,this.size/2):e,y:void 0===t?this.calc.rand(15,20):t,z:void 0===i?this.calc.rand(-this.size/2,this.size/2):i,size:.1,color:16777215,opacity:0,strength:s},this,this.loader))}},{key:"updateDrops",value:function(){for(var e=this.drops.length;e--;)this.drops[e].update(e)}},{key:"createRipple",value:function(e,t,i){this.ripples.push(new h({array:this.ripples,group:this.particleGroup,x:e,y:-.1,z:t,strength:i},this,this.loader))}},{key:"updateRipples",value:function(){for(var e=this.ripples.length;e--;)this.ripples[e].update(e)}},{key:"replay",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"replay",this).call(this),this.reset()}},{key:"update",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"update",this).call(this),this.tick>=this.dropTick&&(this.createDrop(),this.dropTick=this.calc.randInt(this.dropTickMin,this.dropTickMax),this.tick=0),this.updateDrops(),this.updateRipples();for(var e=this.particles.length;e--;)for(var t=this.ripples.length;t--;){var i=this.particles[e],s=this.ripples[t].getInfluenceVector(i.base);s.setX(0),s.setZ(0),i.velocity.add(s)}this.particleGroup.rotation.x=.1*Math.cos(5e-4*this.loader.elapsedMilliseconds),this.particleGroup.rotation.y=.25*Math.PI+-.2*Math.sin(5e-4*this.loader.elapsedMilliseconds),this.tick+=this.loader.deltaTimeNormal,!this.exiting||this.loader.isOrbit||this.loader.isGrid||(this.finalDrop||(this.createDrop(0,20,0,20),this.finalDrop=!0),this.loader.camera.position.y=this.loader.cameraBaseY-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseY,this.loader.camera.position.z=this.loader.cameraBaseZ-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseZ,this.loader.camera.lookAt(this.center))}}]),a}();t.exports=a},{"../system-base":8,"./drop":1,"./particle":3,"./ripple":4}],6:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var r=e("./utils/calc"),n=e("./utils/ease"),a=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.calc=new r,this.ease=new n,this.dom={html:document.documentElement,container:document.querySelectorAll("[data-drop-animation]")},console.log(this.dom.container),this.dom.html.classList.add("loading"),this.completed=!1,this.raf=null,this.setupDebug(),this.setupTime(),this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupControls(),this.listen(),this.onResize(),this.system=new e(this),this.loop()}return s(t,[{key:"setupDebug",value:function(){var s=this;this.isDebug=0<location.hash.indexOf("debug"),this.isGrid=0<location.hash.indexOf("grid"),this.isOrbit=0<location.hash.indexOf("orbit"),this.debugHash="",this.isDebug?(this.isGrid=!0,this.isOrbit=!0,this.debugHash+="debug",this.dom.html.classList.add("is-debug")):(this.debugHash+=this.isGrid?"grid":"",this.debugHash+=this.isOrbit?"orbit":""),this.debugHash&&[].slice.call(document.querySelectorAll(".demo")).forEach(function(e,t,i){e.setAttribute("href",e.getAttribute("href")+"#"+s.debugHash)})}},{key:"setupTime",value:function(){this.timescale=1,this.clock=new THREE.Clock,this.deltaTimeSeconds=this.clock.getDelta()*this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0}},{key:"setupScene",value:function(){this.scene=new THREE.Scene}},{key:"setupCamera",value:function(){this.camera=new THREE.PerspectiveCamera(100,0,1e-4,1e4),this.cameraBaseX=this.isGrid?-20:0,this.cameraBaseY=this.isGrid?15:0,this.cameraBaseZ=this.isGrid?20:30,this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ}},{key:"setupRenderer",value:function(){var i=this;this.renderer=[],this.dom.container.forEach(function(e){var t=new THREE.WebGLRenderer({alpha:!0,antialias:!0});e.appendChild(t.domElement),i.renderer.push(t)})}},{key:"setupControls",value:function(){}},{key:"setupHelpers",value:function(){this.isGrid&&(this.gridOpacityMap=[.4,.2,.2,.2,.1,.2,.1,.1],this.gridHelper=new THREE.GridHelper(300,60,16777215,16777215),this.gridHelper.material.transparent=!0,this.gridHelper.material.opacity=this.gridOpacityMap[demoNum-1],this.scene.add(this.gridHelper),this.axisOpacityMap=[1,.6,.6,.6,.3,.6,.3,.3],this.axisHelper=new AxisHelper(150,this.axisOpacityMap[demoNum-1]),this.scene.add(this.axisHelper),this.camera.lookAt(new THREE.Vector3))}},{key:"update",value:function(){this.deltaTimeSeconds=this.clock.getDelta(),this.diffTime&&(this.deltaTimeSeconds-=this.diffTime,this.diffTime=0),this.deltaTimeSeconds*=this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds+=this.deltaTimeMilliseconds,this.system.update(),this.isOrbit&&this.controls.update()}},{key:"render",value:function(){var t=this;this.renderer.forEach(function(e){e.render(t.scene,t.camera)})}},{key:"listen",value:function(){var t=this;window.addEventListener("resize",function(e){return t.onResize(e)}),this.hidden=null,this.visibilityChange=null,void 0!==document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document.hidden||window.addEventListener(this.visibilityChange,function(e){return t.onVisibilityChange(e)})}},{key:"replay",value:function(){document.documentElement.classList.remove("completed"),document.documentElement.classList.add("loading"),this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ,this.timescale=1,this.deltaTimeSeconds=1/60,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0,this.blurTime=0,this.diffTime=0,this.focusTime=0,this.system.replay(),this.completed=!1,this.clock.start(),this.loop()}},{key:"complete",value:function(){var e=this;this.isOrbit||this.isGrid||(setTimeout(function(){e.clock.stop(),cancelAnimationFrame(e.raf)},600),this.completed=!0,this.dom.html.classList.remove("loading"),this.dom.html.classList.add("completed"))}},{key:"onResize",value:function(){var t=this;this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=1<window.devicePixelRatio?2:1,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.forEach(function(e){e.setPixelRatio(t.dpr),e.setSize(t.width,t.height)})}},{key:"onVisibilityChange",value:function(e){document.hidden?this.blurTime=Date.now():(this.focusTime=Date.now(),this.blurTime&&(this.diffTime=(this.focusTime-this.blurTime)/1e3))}},{key:"loop",value:function(){var e=this;this.update(),this.render(),this.raf=window.requestAnimationFrame(function(){return e.loop()})}}]),t}();t.exports=a},{"./utils/calc":9,"./utils/ease":10}],7:[function(e,t,i){"use strict";var r=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var s=function(){function s(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.group=e.group,this.x=e.x,this.y=e.y,this.z=e.z,this.size=e.size,this.color=e.color,this.opacity=e.opacity,this.createMesh()}return r(s,[{key:"createMesh",value:function(){this.geometry=this.system.sphereGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"reset",value:function(){}}]),s}();t.exports=s},{}],8:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var r=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.loader=e,this.calc=this.loader.calc,this.ease=this.loader.ease,this.sphereGeometry=new THREE.SphereBufferGeometry(1,16,16),this.boxGeometry=new THREE.BoxBufferGeometry(1,1,1),this.center=new THREE.Vector3,this.particles=[],this.particleGroup=new THREE.Object3D,this.particleGroup.scale.set(1e-4,1e-4,1e-4),this.loader.scene.add(this.particleGroup),this.entering=!0,this.enterProgress=0,this.enterRate=.015,this.exiting=!1,this.exitProgress=0,this.exitRate=.01,this.duration=1/0}return s(t,[{key:"update",value:function(){for(var e=this.particles.length;e--;)this.particles[e].update();if(this.entering&&this.enterProgress<1){this.enterProgress+=this.enterRate*this.loader.deltaTimeNormal,1<this.enterProgress&&(this.enterProgress=1,this.entering=!1);var t=this.ease.inOutExpo(this.enterProgress,0,1,1);this.particleGroup.scale.set(t,t,t)}!this.exiting&&this.loader.elapsedMilliseconds>this.duration&&(this.exiting=!0)}},{key:"replay",value:function(){this.particleGroup.scale.set(1e-4,1e-4,1e-4);for(var e=this.particles.length;e--;)this.particles[e].reset();this.entering=!0,this.enterProgress=0,this.exiting=!1,this.exitProgress=0}}]),t}();t.exports=r},{}],9:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"rand",value:function(e,t,i){void 0===t&&(t=e,e=0);var s=Math.random();return i&&(s=i(Math.random(),0,1,1)),s*(t-e)+e}},{key:"randInt",value:function(e,t,i){void 0===t&&(t=e,e=0);Math.random();return i&&i(Math.random(),0,1,1),Math.floor(Math.random()*(t-e+1))+e}},{key:"randArr",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"map",value:function(e,t,i,s,r){return(e-t)/(i-t)*(r-s)+s}},{key:"clamp",value:function(e,t,i){return Math.max(Math.min(e,i),t)}},{key:"lerp",value:function(e,t,i){return e+(t-e)*i}},{key:"roundToUpperInterval",value:function(e,t){return e%t==0&&(e+=1e-4),Math.ceil(e/t)*t}},{key:"roundToLowerInterval",value:function(e,t){return e%t==0&&(e-=1e-4),Math.floor(e/t)*t}},{key:"roundToNearestInterval",value:function(e,t){return Math.round(e/t)*t}},{key:"intersectSphere",value:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))<e.radius+t.radius}},{key:"getIndexFromCoords",value:function(e,t,i){return e+t*i}},{key:"getCoordsFromIndex",value:function(e,t){return{x:e%t,y:Math.floor(e/t)}}},{key:"visibleHeightAtZDepth",value:function(e,t){var i=t.position.z;e<i?e-=i:e+=i;var s=t.fov*Math.PI/180;return 2*Math.tan(s/2)*Math.abs(e)}},{key:"visibleWidthAtZDepth",value:function(e,t){return this.visibleHeightAtZDepth(e,t)*t.aspect}}]),e}();t.exports=r},{}],10:[function(e,t,i){"use strict";var s=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"inQuad",value:function(e,t,i,s){return i*(e/=s)*e+t}},{key:"outQuad",value:function(e,t,i,s){return-i*(e/=s)*(e-2)+t}},{key:"inOutQuad",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t}},{key:"inCubic",value:function(e,t,i,s){return i*(e/=s)*e*e+t}},{key:"outCubic",value:function(e,t,i,s){return i*((e=e/s-1)*e*e+1)+t}},{key:"inOutCubic",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}},{key:"inQuart",value:function(e,t,i,s){return i*(e/=s)*e*e*e+t}},{key:"outQuart",value:function(e,t,i,s){return-i*((e=e/s-1)*e*e*e-1)+t}},{key:"inOutQuart",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t}},{key:"inQuint",value:function(e,t,i,s){return i*(e/=s)*e*e*e*e+t}},{key:"outQuint",value:function(e,t,i,s){return i*((e=e/s-1)*e*e*e*e+1)+t}},{key:"inOutQuint",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t}},{key:"inSine",value:function(e,t,i,s){return-i*Math.cos(e/s*(Math.PI/2))+i+t}},{key:"outSine",value:function(e,t,i,s){return i*Math.sin(e/s*(Math.PI/2))+t}},{key:"inOutSine",value:function(e,t,i,s){return-i/2*(Math.cos(Math.PI*e/s)-1)+t}},{key:"inExpo",value:function(e,t,i,s){return 0==e?t:i*Math.pow(2,10*(e/s-1))+t}},{key:"outExpo",value:function(e,t,i,s){return e==s?t+i:i*(1-Math.pow(2,-10*e/s))+t}},{key:"inOutExpo",value:function(e,t,i,s){return 0==e?t:e==s?t+i:(e/=s/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(2-Math.pow(2,-10*--e))+t}},{key:"inCirc",value:function(e,t,i,s){return-i*(Math.sqrt(1-(e/=s)*e)-1)+t}},{key:"outCirc",value:function(e,t,i,s){return i*Math.sqrt(1-(e=e/s-1)*e)+t}},{key:"inOutCirc",value:function(e,t,i,s){return(e/=s/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t}},{key:"inElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;if(0==e)return t;if(1==(e/=s))return t+i;if(n||(n=.3*s),a<Math.abs(i)){a=i}else r=n/(2*Math.PI)*Math.asin(i/a);return-a*Math.pow(2,10*(e-=1))*Math.sin((e*s-r)*(2*Math.PI)/n)+t}},{key:"outElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;if(0==e)return t;if(1==(e/=s))return t+i;if(n||(n=.3*s),a<Math.abs(i)){a=i}else r=n/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*e)*Math.sin((e*s-r)*(2*Math.PI)/n)+i+t}},{key:"inOutElastic",value:function(e,t,i,s){var r=1.70158,n=0,a=i;if(0==e)return t;if(2==(e/=s/2))return t+i;if(n||(n=s*(.3*1.5)),a<Math.abs(i)){a=i}else r=n/(2*Math.PI)*Math.asin(i/a);return e<1?a*Math.pow(2,10*(e-=1))*Math.sin((e*s-r)*(2*Math.PI)/n)*-.5+t:a*Math.pow(2,-10*(e-=1))*Math.sin((e*s-r)*(2*Math.PI)/n)*.5+i+t}},{key:"inBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),i*(e/=s)*e*((r+1)*e-r)+t}},{key:"outBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),i*((e=e/s-1)*e*((r+1)*e+r)+1)+t}},{key:"inOutBack",value:function(e,t,i,s,r){return null==r&&(r=1.70158),(e/=s/2)<1?i/2*(e*e*((1+(r*=1.525))*e-r))+t:i/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t}}]),e}();t.exports=r},{}]},{},[2]);