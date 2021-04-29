$(()=>{
    const close_button = $('#close-button')
    const menu_button = $('#menu-button')
    const nav_bar = $('.nav-bars')
    close_button.on('click', (e)=>{
        nav_bar.removeClass('active')
    })
    menu_button.on('click', (e)=>{
        console.log(e, nav_bar)
        nav_bar.addClass('active')
    })
})