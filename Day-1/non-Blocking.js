(function() {
    console.log('A')

    const a = () => {
        console.log('B')
    }
    setTimeout(a, 1000)

    console.log('C')
})()