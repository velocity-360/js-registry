var mongoose = require('mongoose')

var SiteSchema = new mongoose.Schema({
	name: {type:String, trim:true, default: ''},
	slug: {type:String, trim:true, default: ''},
	url: {type:String, trim:true, default: ''},
	domains: {type:Array, default: []}, // other authorized domains like staging urls
	description: {type:String, trim:true, default: ''},
	image: {type:String, trim:true, default: 'tHyPScSk'}, // blue logo
	timestamp: {type:Date, default:Date.now}
})

SiteSchema.methods.summary = function() {
	var summary = {
		name:this.name,
		slug:this.slug,
		url:this.url,
		domains:this.domains,
		description:this.description,
		image:this.image,
		timestamp:this.timestamp,
		id:this._id.toString()
	};
	return summary
}

module.exports = mongoose.model('SiteSchema', SiteSchema)