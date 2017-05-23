var Emitter = function() {
				this.list = { 'any': [] };
			}
			Emitter.prototype = {
				once: function(type, obj, callback, onceori) {
					var flag;
					if(onceori!=undefined){
						flag = onceori;
					}else{
						flag = true;
					}
					var list = this.list;
					if(list[type] == undefined) {
						list[type] = [];
					}
					list[type].push({ 'subscriber': obj, 'callback': callback, 'once': flag });
				},
				sub: function(type, obj, callback) {
					this.once(type, obj, callback, false);
				},
				emit: function(type, args) {
					var list = this.list;
					if(list[type] == undefined) { return; }
					for(var i = 0; i < list[type].length; i++) {
						list[type][i].callback.call(list[type][i].subscriber, args);
						if(list[type][i].once==true) {
							list[type].splice(i, 1);
						}
					}
				}
			}
			var a = "";
			var emitter = new Emitter();
			emitter.sub('test', a, function(arg1) {
				console.log(arg1);
			});
			emitter.emit('test', 'emitter test ok');



