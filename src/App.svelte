<script lang="ts">
    import SignIn from './component/SignIn.svelte';
</script>

<main class="main">

  <div class="card">
    <SignIn />
  </div>
</main>

<p class="read-the-docs">
  <b>Developer: Nishant Bhardwaj, NAGP Assignment Svelte</b>
</p>

<style>
  .read-the-docs {
    color:  rgb(243, 241, 247);
    font-size: 12px;
    font-family: fangsong;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
  }

  .main{
    padding-left: 50%;
  }
</style>
