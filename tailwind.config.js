module.exports = {
    content: ['./**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
        require('tw-elements/dist/plugin')
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'imageWoman': "url('../img/img_1.webp')",
                'familyImage': "url('../img/img_2.webp')",
                'bgBar': "url('../img/background.webp')",
            }),
            screens: {
                'xs': { 'max': '768px' },
                'xss': { 'max': '655px' },
                'xlg': { 'min': '1900px' },
            },
            spacing: {
                'w-custom': '94.7%',
                'w-list': '73%'
            },
            height: {
                '160': '40rem',
                '140': '35rem',
                'bg-img': '25.6rem',
            },
            margin: {
                '175': '55rem',
                '165': '45rem',
                '160': '40rem',
            },
            colors: {
                "bone-color": "#FCFBF7",
                "gray-primary": "#F4F4F4"
            },
        }
    }
}