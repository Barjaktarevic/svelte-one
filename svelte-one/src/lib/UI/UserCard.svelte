<script lang="ts">
  import type { IUser } from "../../assets/models/IUser";

  export let user: IUser;
</script>

<div class="card">
  <h3 class="card-name">{user.name}</h3>
  <hr class="separator" />
  <div>
    <p class="card-text">Website: {user.website}</p>
    <p class="card-text">Phone: {user.phone}</p>
  </div>
  <div class="card-company">
    <p>Company: {user.company.name}</p>
    <p class="card-text">BS: {user.company.bs}</p>
    <p class="card-text">{user.company.catchPhrase}</p>
  </div>
  <hr class="separator" />
  <div class="card-address">
    <p class="card-text">City: {user.address.city}</p>
    <p class="card-text">Street: {user.address.street}</p>
    <p class="card-text">Zipcode: {user.address.zipcode}</p>
    <p class="card-text">Suite: {user.address.suite}</p>
  </div>

  <div class="card-username">
    <p class="card-text">Goes by: {user.username}</p>
  </div>

  <div class="card-actions">
    <i class="fa-regular fa-pen-to-square" />
    <i class="fa-solid fa-trash" />
  </div>
</div>

<style>
  .card {
    height: fit-content;
    padding: 12px;
    border: 1px solid black;
    border-radius: 8px;
    background: color-mix(in lch, black 5%, rebeccapurple 95%);
    box-shadow: 4px 8px 8px 4px black;
    color: aliceblue;
    flex: 1;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .card-name {
    text-align: center;
  }

  .card-text {
    font-size: 12px;
    font-weight: lighter;
  }

  .card-company {
    width: 85%;
    background: color-mix(in lch, black 80%, rebeccapurple 20%);
    color: white;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid rebeccapurple;
  }

  .card-actions {
    position: absolute;
    top: 8px;
    right: 12px;
    display: flex;
    gap: 8px;
  }

  .card-actions > i {
    cursor: pointer;
    transition: 200ms ease-out;
  }

  .card-actions > i:hover {
    opacity: 0.75;
  }

  .card-username {
    position: absolute;
    bottom: -8px;
    right: 4px;
  }
</style>
