
/**
 * Created by CloudScope on 2017/4/19.
/**
 * 随机产生长度为length的数组并返回
 * @param length
 * @returns {Array}
 */
function createData(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(parseInt(Math.random() * 50));
    }
    arr.sort( (x,y) => x-y);
    return arr;
}