<template>
  <q-page class="justify-center q-pa-md" padding>
    <div class="q-pa-md text-h3" vertical align="center">MENU BOBA HOUSE</div>
    <div class="q-pa-md" id="layoutbeverage">
      <!-- <cardMenu /> -->
      <div class="justify-center q-pa-md row q-gutter-md">
        <q-intersection
          transition="scale"
          class="col-sm-3"
          v-for="n in 12"
          :key="n"
        >
          <q-card class="my-card">
            <div class="intems-center">
              <q-card-section vertical align="center">
                <img
                  src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
                  alt=""
                  style="max-width: 300px"
                />
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col text-h6" vertical align="center">
                    Milk Tea {{ n }}
                  </div>
                  <div class="col" align="right">
                    <q-btn
                      flat
                      round
                      color="red"
                      icon="add"
                      @click="addButton()"
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style>
.my-card {
  max-width: 350px;
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>
