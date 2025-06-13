
<template>
        <div class="footer-content">
            <a href="https://www.linkedin.com/in/sreesh-poudyal-15977117b/" target="_blank">
                <img src="@/images/indeed_logo.webp" alt="Linkedin" />
            </a>
            <a href="https://github.com/sreesh101" target="_blank">
                <img src="../images/github_logo.webp" alt="Github" />
            </a>
            <p class="whitewhite">© 2025. Sreesh Poudyal</p>
        </div>
</template>

<style scoped>
@font-face {
    font-family: 'Jost';
    src: url('../font/JOST-VARIABLEFONT_WGHT.TTF') format('truetype');
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 4rem;
}

.footer-content a {
    margin: 0 15px;
    color: white;
    font-family: Jost;
}

.footer-content p {
    margin: 0 15px;
    color: white;
    font-family: Jost;
}

.footer-content img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
}

.footer-content img:hover {
    transform: scale(1.1);
}
</style>
