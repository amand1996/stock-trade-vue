<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="'/'" class="navbar-brand">Vue Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav">
          <router-link tag="li" :to="'/'" class="nav-item" activeClass="active" exact><a class="nav-link">Home</a></router-link>
          <router-link tag="li" :to="'/portfolio'" class="nav-item" activeClass="active" exact><a class="nav-link">Portfolio</a></router-link>
          <router-link tag="li" :to="'/stocks'" class="nav-item" activeClass="active" exact><a class="nav-link">Stocks</a></router-link>
        </ul>

        <ul class="navbar-nav nav navbar-right">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>
