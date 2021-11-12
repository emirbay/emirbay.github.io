	//gsap.registerPlugin(MotionPathPlugin);
	//gsap.registerPlugin(MorphSVGPlugin); 
    TweenMax.fromTo("#star_path2", 0.5, {strokeDashoffset:"300px", strokeDashoffset:"200px"}, {strokeDashoffset:20, strokeDasharray:"2000px", stroke:"#fff"}, {strokeDasharray:"2000", stroke:"#000"});
	TweenMax.to("#star_path2", 2, {strokeDashoffset:"300px", strokeDasharray:"300px",  opacity: 0, delay: 0.5});
   
	//comet
	gsap.to("#comet", {
		duration: 0.4, 
		repeat: 0,
		repeatDelay: 2,
		yoyo: true,
		ease: "none",
		scale: 1.5,
		motionPath:{
			path: "#star_path",
			align: "#star_path",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
			// path: [{x: 100, y: 100}, {}],
			// curviness: 1
 	 }, delay: 1.8
	});

	// star_path3_l
	 gsap.to("#mystar", {
		duration: 0.4, 
		repeat: 2,
		repeatDelay: 5,
		ease: "none",
		motionPath:{
			path: "#star_path3_l",
			align: "#star_path3_l",
			autoRotate: true,
			alignOrigin: [0.5, 0.5],
 	 }, delay: 4
	});
	
 
	function moveSection(idStr, xOffset, yOffset) {
		var domElemnt = document.getElementById(idStr);
    	if (domElemnt) {
			var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
			domElemnt.setAttribute('transform', transformAttr);
     	}
		}

	function resizeSection(idStr, value) {
	var domElemnt = document.getElementById(idStr);
		if (domElemnt) {
			var transformAttr = ' scale(' + value + ')';
			domElemnt.setAttribute('transform', transformAttr);
		}
	}


	window.addEventListener('scroll',function() {
		let val;
		val = window.scrollY;
		moveSection("moon",2 * val,0);
		moveSection("moonlight",2 * val,0);

		moveSection("tree_l1_back",0,1.9 * val);
		moveSection("tree_l2_back",0,2 * val);
		moveSection("tree_r_back",0,2.1 * val);
		moveSection("tree_m_back",0,2.1 * val);
		//LIGHTS
		moveSection("lights_l_d_tree",0,-0.4 * val);
		moveSection("lights_ltree",0,-0.6 * val);
		moveSection("lights_l_d_tree2",0,-0.7 * val);
		moveSection("ligths_r_d_tree",0,-0.3 * val);

		moveSection("lights_swamp",0,-0.3 * val);

		//moveSection("dev",0,-1 * val);

		moveSection("stars",-0.5*val,0.6 * val);
 
		moveSection("center_message",0,-2 * val);

		//moveSection("vuk",0,-0.50 * val);
	
		kap1.rx.baseVal.value = val * 0.06;
		kap1.ry.baseVal.value = val * 0.01;

		kap2.rx.baseVal.value = val * 0.02;
		kap2.ry.baseVal.value = val * 0.001;

		kap3.rx.baseVal.value = val * 0.03;
		kap3.rx.baseVal.value = val * 0.005;

		kap4.rx.baseVal.value = val * 0.04;
		kap4.ry.baseVal.value = val * 0.005;

		kap5.rx.baseVal.value = val * 0.06;
		kap5.ry.baseVal.value = val * 0.01;

})
