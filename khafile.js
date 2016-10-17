let project = new Project('ExtensionTest');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addLibrary('device_info');
resolve(project);
