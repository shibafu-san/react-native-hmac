import CryptoSwift

@objc(Hmac)
class Hmac: NSObject {
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc(hmacMD5:withKey:withResolver:withRejecter:)
    func hmacMD5(message: String, key: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        handleAuthenticator(message: message, key: key, variant: .md5, resolve: resolve, reject: reject)
    }

    @objc(hmacSHA1:withKey:withResolver:withRejecter:)
    func hmacSHA1(message: String, key: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        handleAuthenticator(message: message, key: key, variant: .sha1, resolve: resolve, reject: reject)
    }

    @objc(hmacSHA256:withKey:withResolver:withRejecter:)
    func hmacSHA256(message: String, key: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        handleAuthenticator(message: message, key: key, variant: .sha2(SHA2.Variant.sha256), resolve: resolve, reject: reject)
    }

}

func handleAuthenticator(message: String, key: String, variant: HMAC.Variant, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        do {
            let hmac = try HMAC(key: key, variant: variant).authenticate(message.bytes)
            var hexString: String = ""
            for byte in hmac {
                hexString.append(String(format:"%02X", byte))
            }
            resolve(hexString)
        } catch {
            let err = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_HMAC", "HMAC Generation Error", err)
        }
    }
