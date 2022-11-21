<template>
  <q-card class="my-card">
    <!-- item -->
    <q-card-section>
      <div class="row flex-center" align="center">
        <div class="col-3 text-h4">{{ 13 }}{{ 12 }}</div>
        <div class="col-2 text-h5">L</div>
        <div class="col-2">
          <div class="row justify-center">
            <div class="col">
              <q-btn
                round
                color="black"
                icon="remove"
                @click="decreaseCount()"
              />
            </div>
            <div class="col text-h4">
              {{ 2 }}
            </div>
            <div class="col">
              <q-btn round color="black" icon="add" @click="increaseCount()" />
            </div>
          </div>
        </div>
        <div class="col-1 text-h6">{{ 190 }}</div>
        <div class="col-2">
          <q-btn round color="red" icon="delete" @click="cancelCount()" />
        </div>
      </div>
    </q-card-section>
  </q-card>
  <!-- Total price -->
  <section class="justify-center q-pa-md text-right">
    <div class="text-h6 text-weight-bold">Total 190</div>
    <div class="">
      <q-btn
        rounded
        color="accent"
        icon="check"
        label="Check out"
        @click="checkMethod()"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductLink",
};
</script>

<style></style>
