package;

import kha.Framebuffer;
import kha.Scheduler;
import kha.System;

import device_info.DeviceInfo;

class Project {
	public function new() {
		var version = DeviceInfo.getOSVersion();
		trace('version: ${version}');

		System.notifyOnRender(render);
		Scheduler.addTimeTask(update, 0, 1 / 60);
	}

	function update(): Void {
		
	}

	function render(framebuffer: Framebuffer): Void {		
	}
}
