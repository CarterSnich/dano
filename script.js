

document.querySelector('.menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.remove('hide')
})

document.querySelectorAll('.nav-links>li>a').forEach(link =>
    link.addEventListener('click', () =>
        document.querySelector('.nav-links').classList.add('hide')
    )
)
