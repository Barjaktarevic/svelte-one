<script lang="ts">
  import { type IUser } from "../assets/models/IUser";
  import UserCard from "../lib/UI/UserCard.svelte";

  import userService from "../services/userService";

  let userPromise: Promise<IUser[]> = userService.getUsers();
</script>

<main>
  {#await userPromise then users}
    <div class="card-container">
      {#each users as user (user.id)}
        <UserCard {user} />
      {/each}
    </div>
  {/await}
</main>

<style>
  .card-container {
    margin: 12px;
    display: flex;
    gap: 12px;

    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
