// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "GsCapacitorKustomer",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "GsCapacitorKustomer",
            targets: ["GsCapacitorKustomerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "GsCapacitorKustomerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/GsCapacitorKustomerPlugin"),
        .testTarget(
            name: "GsCapacitorKustomerPluginTests",
            dependencies: ["GsCapacitorKustomerPlugin"],
            path: "ios/Tests/GsCapacitorKustomerPluginTests")
    ]
)