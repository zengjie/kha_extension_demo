let project = new Project('device_info', __dirname)

if (platform === Platform.iOS) {
	project.addFile('ios/deviceinfokore/**');
	project.addIncludeDir('ios/deviceinfokore');
}
else if (platform === Platform.Android) {
	// project.addFile('android/deviceinfokore/**');
	// project.addIncludeDir('android/deviceinfokore');
	project.addJavaDir('android/java');
}

return project