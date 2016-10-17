let fs = require('fs');
let path = require('path');
let project = new Project('ExtensionTest', __dirname);
project.targetOptions = {"html5":{},"flash":{},"android":{},"ios":{}};
project.setDebugDir('build/android-native');
Promise.all([Project.createProject('build/android-native-build', __dirname), Project.createProject('/usr/local/lib/haxelib/kha/git', __dirname), Project.createProject('/usr/local/lib/haxelib/kha/git/Kore', __dirname)]).then((projects) => {
	for (let p of projects) project.addSubProject(p);
	let libs = [];
	if (fs.existsSync(path.join('Libraries/device_info', 'korefile.js'))) {
		libs.push(Project.createProject('Libraries/device_info', __dirname));
	}
	Promise.all(libs).then((libprojects) => {
		for (let p of libprojects) project.addSubProject(p);
		resolve(project);
	});
});
