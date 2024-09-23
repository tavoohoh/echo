import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GsCapacitorKustomerPlugin)
public class GsCapacitorKustomerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "GsCapacitorKustomerPlugin"
    public let jsName = "GsCapacitorKustomer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = GsCapacitorKustomer()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
