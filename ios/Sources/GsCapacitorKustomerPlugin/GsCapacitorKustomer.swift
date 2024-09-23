import Foundation

@objc public class GsCapacitorKustomer: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
