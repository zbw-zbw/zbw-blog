---
title: 'JS中那些常用的数组方法'
date: '2021-03-11'
tags: ['JavaScript']
summary: 'JS中那些常用的数组方法'
---

## JS中那些常用的数组方法

### 数组的增删改查

**push(插入的元素<可传多个>)

作用：往数组的尾部插入元素**

```
let arr = [1, 2, 3]
arr.push(4, 5)
let res = arr.push(4, 5) //返回值为插入元素后数组的长度（res：5）
console.log(arr) // [1, 2, 3, 4, 5]
```

**unshift(插入的元素<可传多个>)

作用：往数组的头部插入元素**

```
let arr = [1, 2, 3]
arr.unshift(-2, -1, 0)
let res = arr.unshift(-2, -1, 0) //返回值为插入元素后数组的长度（res：6）
console.log(arr) // [-2, -1, 0, 1, 2, 3]
```

**pop()

作用：删除数组的最后一个元素**

```
let arr = [1, 2, 3]
arr.pop()
let res = arr.pop() // 返回值为删除的元素(res: [3])
console.log(arr) // [1, 2]
```

**shift()

作用：删除数组的第一个元素**

```
let arr = [1, 2, 3]
arr.shift()
let res = arr.shift() // 返回值为删除的元素(res: [1])
console.log(arr) // [2, 3]
```

**slice(开始元素的下标，结束元素的下标)

作用：截取数组特定元素（不改变原数组，可用作浅拷贝）**

```
// 浅拷贝
let arr = [1, 2, 3]
let newArr = arr.slice() // 返回值为截取后的新数组
console.log(newArr) // [1, 2, 3]

//截取元素
let arr = [1, 2, 3]
let newArr = arr.slice(0, 2) // 从第下标为0的元素开始截取，到元素下标为2的元素（注：但不包括元素下标为2的元素）
console.log(newArr) // [1, 2]
console.log(arr) // [1, 2, 3] // 不改变原数组
```

**splice(开始元素的下标，删除的元素个数，添加的元素...)

作用：可新增元素或者删除元素**

```
// 新增元素
let arr = [1, 3, 5]
arr.splice(1, 0, 2) // 在元素下标为1的元素后面新增一个元素2
let res = arr.splice(1, 0, 2) // 由于此处为新增元素，返回值为空数组[]（res： []）
console.log(arr) // [1, 2, 3, 5]

//删除元素
let arr = [1, 2, 3]
arr.splice(1, 1) // 在元素下标为1的元素后面删除一个元素
let res = arr.splice(1, 1) // 返回值为删除的元素(res: [2])
console.log(arr) // [1, 3]
```

**join(传入分割每个元素的标志)

作用：数组转换为字符串**

```
let arr = ['zbw', 'cyl']
let res = arr.join(',')
console.log(res) // 'zbw, cyl'

let res = arr.join('-')
console.log(res) // 'zbw-cyl'
```

**concat()

作用：连接多个数组或值**

```
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let res = arr1.concat(arr2)
console.log(res) // [1, 2, 3, 4, 5, 6]

let res = arr1.concat(4, arr2, 7, 8)
console.log(res) // [1, 2, 3, 4, 4, 5, 6, 7, 8]
```

### 操作数组的高阶函数

**高阶函数：把函数作为参数传入或把函数作为返回值的函数为高阶函数**

**map()

作用：操作数组，返回经过处理后的数组**

```
let arr = [1, 2, 3, 4]
let res = arr.map(item => item * 2)
console.log(res) // [2, 4, 6, 8]
```

**filter()

作用：过滤数组，返回操作表达式为true的数组元素**

```
let arr = [1, 2, 3, 4]
let res = arr.filter(item => item >= 2)
console.log(res) // [2, 3, 4]
```

**reduce(pre<初始值>, cur<当前项>, arr<数组本身>, <初始值>)
作用：求和，数组转对象**

```
// 求和
let arr = [1, 2, 3, 4]
let res = arr.reduce((pre, cur) => {
  return pre += cur
}, 0) // 这里是求和 所以初始值为0
console.log(res) // 10

// 数组转对象
let arr = [
  { id: 1, name: 'zbw', age: 18 },
  { id: 2, name: 'cyl', age: 18 },
]

let obj = arr.reduce((pre, cur) => {
   pre[cur.id] = cur.name
   return pre
}, {}) // 这里是数组转对象 所以初始值为空对象{}

console.log(obj) // {1: 'zbw', 2: 'cyl'}
```

**forEach()

作用：跟map()作用类似，区别在于forEach()会改变原数组，且没有返回值**

```
let arr = [
  { name: 'zbw', age: 22 },
  { name: 'cyl', age: 18 },
]

arr.forEach(item => item.age = 20)
console.log(arr) // [{ name: 'zbw', age: 20 },{ name: 'cyl', age:20 }]
```

**some()

作用：判断数组中是否存在符合条件表达式的条件，如果有一项符合返回true，否则返回false**

```
let arr = [1, 2, 3, 4]
let bool = arr.some(item => item > 2)
console.log(bool) // true 因为存在大于2的元素

let bool = arr.some(item => item > 5)
console.log(bool) // false 因为不存在大于5的元素
```

**every()

作用：判断数组中是否全部元素都符合表达式的条件，全部都符合返回true，否则返回false**

```
let arr = [1, 2, 3, 4]
let bool = arr.every(item => item > 0)
console.log(bool) // true 因为所有元素都大于0

let bool = arr.every(item => item > 1)
console.log(bool) // false 因为存在不大于1的元素
```

**find()

作用：找到数组中符合条件的第一个元素**

```
let arr = [{ id: 1, name: 'zbw', age: 18 }, { id: 2, name: 'cyl', age: 18 }]

let res = arr.find(item => item.age === 18)
console.log(res) // { id: 1, name: 'zbw', age: 18 }

let res = arr.find(item => item.id === 2)
console.log(res) // { id: 2, name: 'cyl', age: 18 }
```
