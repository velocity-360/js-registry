var mongoose = require('mongoose')

var ModuleSchema = new mongoose.Schema({
	name: {type:String, trim:true, default:''},
	slug: {type:String, trim:true, default:''},
	cdn: {type:String, trim:true, default:''},
	subscribers: {type:Array, default:[]},
	image: {type:String, trim:true, default:''},
	timestamp: {type:Date, default:Date.now}
})

ModuleSchema.methods.summary = function() {
	var summary = {
		name:this.name,
		slug:this.slug,
		cdn:this.cdn,
		subscribers:this.subscribers,
		image:this.image,
		timestamp:this.timestamp,
		id:this._id.toString()
	};
	return summary
}

module.exports = mongoose.model('ModuleSchema', ModuleSchema)