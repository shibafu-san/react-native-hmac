#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Hmac, NSObject)

RCT_EXTERN_METHOD(hmacMD5:(NSString)message withKey:(NSString)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(hmacSHA1:(NSString)message withKey:(NSString)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(hmacSHA256:(NSString)message withKey:(NSString)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
