<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trader</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <router-link to="/Portfolio" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/Stocks" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Stocks</a>
            </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown">
                <a 
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Save Data</a>
                    <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
    export default {}
</script>
