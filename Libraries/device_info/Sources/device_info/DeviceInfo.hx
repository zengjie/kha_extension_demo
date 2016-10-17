package device_info;

@:headerCode('
#include <DeviceInfoKore.h>
')

class DeviceInfo {
	
	public static function getOSVersion():String {
		#if cpp
		var result:cpp.ConstCharStar = untyped __cpp__('DeviceInfoKore::getOSVersion()');
		return result;
		#elseif java
		return untyped __java__('DeviceInfoKore.getOSVersion()');
		#end
	}
}