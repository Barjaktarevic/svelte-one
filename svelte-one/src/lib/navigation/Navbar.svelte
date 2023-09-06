<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<nav class="navbar">
  <Link class="link" to="/">Home</Link>

  <Link class="link" to="/about">About</Link>

  <Link class="link" to="/merch">Merch</Link>
</nav>

<style>
  .navbar {
    height: 44px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }

  .navbar > :global(.link) {
    font-size: 24px;
    color: whitesmoke;
    text-decoration: none;
    background: -webkit-linear-gradient(#eee, skyblue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  .navbar > :global(.link):hover {
    transition: 850ms all;
    transform: rotateY(360deg);
  }
</style>
