
'use strict';

/**
 * JS 帧动画库
 */

function Animation() {
    
}

/**
 * 添加一个同步任务预加载图片
 * @param {*} imageList 图片数组
 */
Animation.prototype.loadImage = function(imageList){

}
/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现动画帧
 * @param {*} ele dom对象
 * @param {Array} positions 背景位置数组
 * @param {String} imageUrl 图片地址
 */
Animation.prototype.changePosition = function(ele, positions, imageUrl) {

}
/**
 * 添加一个异步定时任务，通过定时改变 image 标签的 src 属性，实现动画帧
 * @param {*} ele 
 * @param {*} imgList 
 */
Animation.prototype.changeSrc = function(ele, imgList) {

}

/**
 * 开始执行任务，异步定义任务执行的间隔
 * @param {Number} interval 自定义间隔
 */
Animation.prototype.start = function(interval) {

}

/**
 * 添加一个同步任务，该任务是回退到上一个任务中
 * 实现重复上一个任务的效果，可以定义重复的次数
 * @param {*} times 重复次数
 */
Animation.prototype.repeat = function(times) {

}

/**
 * 
 * @param {*} time 等待时间
 */
Animation.prototype.time = function(time) {

}