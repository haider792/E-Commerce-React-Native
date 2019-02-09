import { Config } from '../../../config'
var config = 'http://http://192.168.14.2:3100'
import NetworkHelper from './NetworkHelper'

class WService{

static makeUrl = (resource, params = null) => {
	var url = 'http://192.168.0.111:3100' + resource 
	return url
}

static signUp = ( email,name, password ) => {
	alert("we " + email + " " + password + " " + name)
	return NetworkHelper.requestPost(WService.makeUrl("/signup"), { email, name, password })
}

static LogIn = (email, password) => {
	return NetworkHelper.requestPost(WService.makeUrl("/login") , {email, password})
}

static getProducts = () => {
	
	return NetworkHelper.requestGet(WService.makeUrl("/products"))	
}

static addProducts = ( name,image ) => {
	return NetworkHelper.requestPost(WService.makeUrl("/products/add"), { name , image })
}

static getCategories = () => {
	return NetworkHelper.requestGet(WService.makeUrl("products/categories",))
}

static getSubCategories = (parentId) => {
	return NetworkHelper.requestGet(WService.makeUrl('products/categories', parentId))
}

static getCategoryById = (categoryId) => {
	return NetworkHelper.requestGet(WService.makeUrl("products/categories/" + categoryId))
}

static getAllProducts = (page, per_page) => {
	return NetworkHelper.requestGet(WService.makeUrl("products", "page=" + page + "&per_page=" + per_page))
}

static getProductsByCategory = (categoryId, page, per_page) => {
	return NetworkHelper.requestGet(WService.makeUrl("products", "page=" + page + "&per_page=" + per_page + "&category=" + categoryId))
}

static getRelatedProducts = (categoryId, productId, page, per_page) => {
	return NetworkHelper.requestGet(WService.makeUrl("products", "page=" + page + "&per_page=" + per_page + "&category=" + categoryId + "&exclude=[" + productId + "]"))
}

static searchProducts = (searchText, page, per_page, filter) => {
	let filterParams = ''
	if (filter) {
		if (filter.minValue) {
			filterParams += '&min_price=' + filter.minValue
		}
		if (filter.maxValue) {
			filterParams += '&max_price=' + filter.maxValue
		}
		if (filter.categoryId) {
			filterParams += '&category=' + filter.categoryId
		}
		if (filter.tagId) {
			filterParams += '&tag=' + filter.tagId
		}
	}
	const url = WService.makeUrl("products", "page=" + page + "&per_page=" + per_page + "&search=" + searchText + filterParams)
	return NetworkHelper.requestGet(url)
}

static getRecentProducts = (per_page) => {
	return NetworkHelper.requestGet(WService.makeUrl("products", "page=1&per_page=" + per_page))
}


}
module.exports = WService
