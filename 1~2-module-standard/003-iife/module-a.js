(function () {
  let data = 'moduleA'

  function method () {
    console.log(data+ 'excute')
  }

  window.moduleA = {
    data:data,
    method: method
  }
})()
