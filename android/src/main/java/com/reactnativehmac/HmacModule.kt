package com.reactnativehmac

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec
import kotlin.experimental.and
import java.lang.Exception


class HmacModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Hmac"
    }

    @ReactMethod
    fun hmacMD5 (message: String, key: String, promise: Promise) {
      hmac(message, key, "HmacMD5", promise)
    }

    @ReactMethod
    fun hmacSHA1 (message: String, key: String, promise: Promise) {
      hmac(message, key, "HmacSHA1", promise)
    }

    @ReactMethod
    fun hmacSHA256 (message: String, key: String, promise: Promise) {
      hmac(message, key, "HmacSHA256", promise)
    }
}

fun hmac (message: String, key: String, algorithm: String, promise: Promise) {
    try {
      val keySpec = SecretKeySpec(key.toByteArray(), algorithm)  
      val mac = Mac.getInstance(algorithm)
      mac.init(keySpec)
      val sign = mac.doFinal(message.toByteArray()).joinToString("") { String.format("%02x", it and 255.toByte()) }
      promise.resolve(sign)
    } catch (e: Exception) {
      promise.reject("HMAC Generation Error", e.toString(), e)
    }
}
