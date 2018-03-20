<template>
    <div class="col-sm-6 col-md-4 tile">
      <div class="card">
        <div class="card-header">
          {{name}} <small>(Price: {{price}})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity">
          </div>
          <div class="float-right">
            <button class="btn btn-success">
              Buy
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['price', 'name']
}
</script>

<style scoped>
  .tile {
    padding: 10px;
  }
</style>
