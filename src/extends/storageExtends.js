/* eslint-disable */
// 拓展本地储存能力 增加过期功能 
// 通用超时时间: 1小时
const DEFAULT_EXPIRE = 3600;

if (window && window.Storage) {
    Storage.prototype.setExpire = (key = null, value, expire) => {
        if (typeof expire !== 'number' || expire < 0) expire = DEFAULT_EXPIRE;
        let timeNow = Math.floor(Date.now() / 1000);
        let storageData = {
            updateTime: timeNow,
            expireTime: timeNow + expire,
            data: value,
        };
        localStorage.setItem(key, JSON.stringify(storageData));
    }
    Storage.prototype.getExpire = key => {
        let value = localStorage.getItem(key);
        if (value === null) return value;

        try {
            value = JSON.parse(value);
        } catch (error) {
            value = value;
        }
        if ((Date.now() / 1000) > value.expireTime) {
            localStorage.removeItem(key);
            return null;
        }
        return value.data;
    }
}