/* eslint-disable no-unused-vars */
import { Message } from 'iview'
import router from '../router/router'
/**
 * GET请求数据
 * @param {string} url - 请求的接口路径
 * @param {object} objectParams - 请求的参数对象
 * @param {string} [customMsg] - 自定义提示消息
 * @returns {Promise}
 */
export function doGetGeneral (url, objectParams, customMsg = '') {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-unused-vars */
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onreadystatechange = function () {
      if (request.status === 200 && request.readyState === 4) {
        if (JSON.parse(request.responseText).status === 1) {
          resolve(request.responseText)
        } else {
          reject(request.responseText)
        }
      }
    }
    request.send(objectParams)
  })
}

/**
 * POST请求数据（对象参数方式）
 * @param {string} url - 请求的接口路径
 * @param {object} objectParams - POST的参数，该参数是一个object对象
 * @param {string} [customMsg] - 自定义提示消息
 * @returns {Promise}
 */
export function doPostWithObjectParams (url, objectParams, customMsg = '') {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-unused-vars */
    var request = new XMLHttpRequest()
    request.open('POST', url, true)
    request.onreadystatechange = function () {
      if (request.status === 200 && request.readyState === 4) {
        if (JSON.parse(request.responseText).status === 1) {
          resolve(request.responseText)
        } else {
          reject(request.responseText)
        }
      }
    }
    request.send(objectParams)
  })
}
