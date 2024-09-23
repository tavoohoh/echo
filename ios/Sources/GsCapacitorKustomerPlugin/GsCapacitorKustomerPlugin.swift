import Foundation
import Capacitor
import KustomerChat

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
        let value = call.getString("event") ?? ""

        switch value {
            case "kustomerSignIn":
                handleKustomerSingIn(token: call.getString("jwtToken") ?? "")
            case "kustomerSignOut":
                handleKustomerSingOut()
            case "kustomerOpenChat":
                handleKustomerOpenChat()
            default:
                print("Invalid event: '\(value)'")
        }

        call.resolve([
            "value": value
        ])
    }

    func handleKustomerSingIn(token: String) {
        print("Kustomer sign in...")

        Kustomer.logIn(jwt: token) { result in
            switch result {
                case .success:
                    print("Kustomer sign in was successful")
                case .failure(let error):
                    print("Kustomer sign in error: \(error.localizedDescription)")
            }
        }
    }

    func handleKustomerSingOut() {
        print("Kustomer sign out...")

        Kustomer.logOut({ error in
            if error != nil {
                print("Kustomer sign out error: \(error?.localizedDescription ?? "")")
            }
        })
    }

    func handleKustomerOpenChat() {
        print("Kustomer show...")

        Kustomer.show()
    }
}
