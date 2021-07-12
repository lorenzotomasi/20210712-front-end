<template>
  <div>
    <main v-if="attractionDetails">
      <div class="container">
        <div class="row">
          <h2 class="primary-color pb-3">{{ attractionDetails.name }}</h2>
          <div class="row">
            <div class="col-md-6">
              <img
                src="../assets/parco acquatico bambini.jpg"
                class="img-fluid"
                height="500"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <h4>Descrizione</h4>
              <p>
                {{ attractionDetails.description }}
              </p>
              <p class="text-muted">
                {{ attractionDetails.averageTailTime }} minuti di coda medi
              </p>
              <h4>Orari</h4>
              <div class="row">
                <div class="col">
                  <p>
                    <strong>Apertura:</strong> {{ attractionDetails.openTime }}
                  </p>
                </div>
                <div class="col">
                  <p>
                    <strong>Chiusura:</strong> {{ attractionDetails.closeTime }}
                  </p>
                </div>
              </div>
              <h4>Accessi</h4>
              <p class="card-text success-color">
                <i class="bi bi-person-check-fill"></i>
                Bambini {{ attractionDetails.minimumAccessAge }} +
              </p>
              <h4>Accessori</h4>
              <p>Si raccomanda di fornirsi di asciugamini</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <div class="col">
            <button class="btn bg-primary-color">Acquista biglietto</button>
            <p class="text-muted mt-2">
              Acquista il biglietto per questa attrazione
            </p>
          </div>
          <div class="col">
            <button class="btn btn-primary-color-outline">
              Acquista salta fila
            </button>
            <p class="text-muted mt-2">
              Acquista il biglietto speciale salta fila per non preoccuparti
              dell'attesa
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { IAttraction } from "@/interface/IAttraction";
import store from "@/store";
import { Vue } from "vue-property-decorator";

export default class Attraction extends Vue {
  attractionDetails = {} as IAttraction;

  mounted() {
    console.log("mount");
  }

  GetAttraction() {
    store.dispatch("GetAttractionDetails").then(() => {
      this.attractionDetails = store.state.attractionDetails;
    });
  }
}
</script>

<style lang="scss" scoped>
</style>
