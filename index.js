const fruits = [
    {id: 1, title: 'Apple', price: 20, img: 'https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg'},
    {id: 2, title: 'Orange', price: 30, img: 'https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'https://previews.123rf.com/images/kovalevaka/kovalevaka1612/kovalevaka161200029/69579717-red-mango-with-leaf-and-3-pieces-isolated-on-white-background-as-package-design-element.jpg'}
    ]



const modal = $.modal({
    title: 'Daria Modal',
    closable: true,
    content: `
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons:[
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler(){
                console.log('Danger btn clicked')
                modal.close()
            }}
    ]
})
