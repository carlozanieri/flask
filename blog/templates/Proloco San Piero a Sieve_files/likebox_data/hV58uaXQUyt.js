if (self.CavalryLogger) { CavalryLogger.start_js(["XZns8AO"]); }

__d("sdk.FeatureFunctor",[],(function(a,b,c,d,e,f){f.create=a;function g(a,b,c){if(a.features&&b in a.features){a=a.features[b];if(typeof a==="object"&&typeof a.rate==="number")if(a.rate&&Math.random()*100<=a.rate)return a.value||!0;else return a.value?null:!1;else return a}return c}function a(a){return function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];if(c.length<2)throw new Error("Default value is required");var e=c[0],f=c[1];return g(a,e,f)}}}),null);
__d("sdk.feature",["JSSDKConfig","sdk.FeatureFunctor"],(function(a,b,c,d,e,f){a=b("sdk.FeatureFunctor").create(b("JSSDKConfig"));e.exports=a}),null);
__d("TransportSelectingClientUtils",["BladeRunnerInstrumentedStreamHandler","MQTTRequestStreamUtils"],(function(a,b,c,d,e,f){"use strict";f.getMethod=a;f.BRHandlerConverter=c;f.isMethodSupportedByTransportSelectingClient=g;function a(a){var b;b=(b=a.method)!=null?b:"unknown";return b==="FBLQ"&&a.config_id?"FBLQ:"+a.config_id:b}function c(a,c){if(!g(c))throw new Error("TransportSelectingClient does not support method: "+c);a=b("MQTTRequestStreamUtils").convertToBRHandler(a);if(c.startsWith("FBGQLS"))return new(b("BladeRunnerInstrumentedStreamHandler"))(a,c);else return a}function g(a){return a.startsWith("FBGQLS")||a.startsWith("FBLQ")||a.startsWith("Falco")}}),null);
__d("TransportSelectingClient",["BladeRunnerDeferredClient","RequestStreamHandler","TransportSelectingClientUtils","TransportSelectionClientRolloutResolver","cr:1987488","regeneratorRuntime"],(function(a,b,c,d,e,f){a=function(){function a(){}var c=a.prototype;c.requestStream=function(a,c,d,e){var f,g,h,i,j;return b("regeneratorRuntime").async(function(k){while(1)switch(k.prev=k.next){case 0:g=new(b("RequestStreamHandler"))(d);if(!(b("cr:1987488")!=null&&b("TransportSelectionClientRolloutResolver").enableDGWRequestStreamClient(b("TransportSelectingClientUtils").getMethod(a)))){k.next=9;break}h={dgwStreamOptions:{loggingId:e==null?void 0:e.requestId}};k.next=5;return b("regeneratorRuntime").awrap(b("cr:1987488").createStream(a,c,e,g,h));case 5:i=k.sent;k.next=8;return b("regeneratorRuntime").awrap(i.start());case 8:return k.abrupt("return",i);case 9:k.next=11;return b("regeneratorRuntime").awrap(b("BladeRunnerDeferredClient").requestStream(a,c,b("TransportSelectingClientUtils").BRHandlerConverter(g,(f=a.method)!=null?f:"unknown"),e));case 11:j=k.sent;return k.abrupt("return",j);case 13:case"end":return k.stop()}},null,this)};return a}();e.exports=a}),null);
__d("TransportSelectingClientSingleton",["TransportSelectingClient"],(function(a,b,c,d,e,f){"use strict";a=new(b("TransportSelectingClient"))();e.exports=a}),null);
__d("ActorURIConfig",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PARAMETER_ACTOR:"av",ENCRYPTED_PARAMETER_ACTOR:"eav"})}),null);
__d("FetchStreamConfig",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({delim:"/*<!-- fetch-stream -->*/"})}),null);
__d("IntlRedundantStops",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({equivalencies:{".":["\u0964","\u104b","\u3002"],"\u2026":["\u0e2f","\u0eaf","\u1801"],"!":["\uff01"],"?":["\uff1f"]},redundancies:{"?":["?",".","!","\u2026"],"!":["!","?","."],".":[".","!"],"\u2026":["\u2026",".","!"]}})}),null);
__d("createTrustedFunction",["TrustedTypes","TrustedTypesConfig","err"],(function(a,b,c,d,e,f){"use strict";e.exports=c;var g="unsafe-function",h,i={createScript:function(a){var c=trustedTypes;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];e.forEach(function(a){if(!c.isScript(a))throw b("err")("Trusted Function requires TrustedScripts args only.")});var g=e.slice(0,-1).join(","),h=e.pop().toString(),i="(function anonymous(\n    "+g+"\n    ) {\n    "+h+"\n    })";return i}};function j(){if(h)return;h=b("TrustedTypes").createPolicy(g,i)}function k(){h||j();return h}function c(){for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];if(typeof trustedTypes!=="undefined"&&b("TrustedTypesConfig").useTrustedTypes){var f;return a.eval((f=k()).createScript.apply(f,[""].concat(d)))}else return babelHelpers.construct(Function,d)}}),null);
__d("createTrustedScriptWithoutValidation_DO_NOT_USE",["TrustedTypes"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="ls-script",h,i={createScript:function(a){return a}};function j(){if(h)return;h=b("TrustedTypes").createPolicy(g,i)}function k(){h||j();return h}function a(a){return k().createScript(a)}}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);