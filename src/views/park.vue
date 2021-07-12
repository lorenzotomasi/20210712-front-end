<template>
  <main v-if="parkDetails">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 ps-0">
          <nav
            id="content"
            class="
              navbar navbar-light
              fixed-left
              flex-column
              align-items-stretch
              p-3
            "
          >
            <a class="navbar-brand" href="#">
              <h4>{{ parkDetails.name }}</h4>
            </a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#info">Informazioni generali</a>
              <a class="nav-link" href="#orari">Orari</a>
              <a class="nav-link" href="#attrazioni">Attrazioni</a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#scivoli-acquatici"
                  >Scivoli acquatici</a
                >
                <a class="nav-link ms-3 my-1" href="#surf">Surf</a>
                <a class="nav-link ms-3 my-1" href="#piscine">Piscine</a>
                <a class="nav-link ms-3 my-1" href="#torrente-rapido"
                  >Torrente rapido</a
                >
              </nav>
              <a class="nav-link" href="#meteo">Meteo</a>
              <a class="nav-link" href="#localita">Località</a>
              <a class="nav-link" href="#parcheggi">Parcheggi</a>
              <button
                class="btn btn-outline-info btn-primary-color-outline mt-5"
              >
                Acquista biglietto
              </button>
            </nav>
          </nav>
        </div>
        <div class="col-md-9" data-bs-spy="scroll" data-bs-target="#content">
          <h2 class="primary-color pb-3">{{ parkDetails.name }}</h2>
          <div id="content" data-bs-offset="0" tabindex="0">
            <div class="container-fluid mb-3 p-0">
              <h4 id="info">Informazioni generali</h4>
              <p>
                {{ parkDetails.description }}
              </p>
            </div>
            <div class="container-fluid mb-3 p-0">
              <h4 id="orari">Orari</h4>
              <p><strong>Apertura:</strong> {{ parkDetails.openTime }}</p>
              <p><strong>Chiusura:</strong> {{ parkDetails.closeTime }}</p>
            </div>
            <div class="container-fluid mb-5 p-0">
              <h5 id="attrazioni">Attrazioni</h5>
              <div
                v-for="item in parkDetails.attraction"
                :key="item.id"
                class="card mb-3"
                style="max-width: 540px"
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src=""
                      class="img-fluid rounded-start"
                      alt="Immagine scivolo"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.name }}</h5>
                      <p class="card-text">{{ item.description }}</p>
                      <p class="card-text success-color"></p>
                      <p class="card-text success-color">
                        <i class="bi bi-person-check-fill"></i> Bambini &gt;
                        {{ item.minimumAccessAge }}
                        anni
                      </p>
                      <p class="card-text text-muted">5 minuti di coda medi</p>
                      <button class="btn bg-primary-color">
                        <a v-on="changePage(item.id)">Dettaglio</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid mb-5 p-0">
              <h4 id="meteo">Meteo</h4>
              <div
                v-for="item in parkDetails.weather"
                :key="item.id"
                class="d-flex align-items-center justify-content-center"
              >
                <div class="col align-items-center">
                  <p class="card-text">{{ item.date }}</p>
                  <div v-if="item.weather == 'sunny'">
                    <i class="bi bi-brightness-high text-warning"></i>
                  </div>
                  <p class="card-text">{{ item.temperature }}</p>
                </div>
              </div>
              <div class="container-fluid mb-5 p-0">
                <h4 id="localita">Località</h4>
                <button class="btn bg-primary-color">Vai alla mappa</button>
              </div>
              <div class="container-fluid mb-5 p-0">
                <h4 id="parcheggi">Parcheggi</h4>
                <p>
                  {{ parkDetails.parkingInformation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { IPark } from "@/interface/IPark";
import store from "@/store";
import { Component, Vue } from "vue-property-decorator";
export default class Park extends Vue {
  parkDetails = {} as IPark;

  mounted() {
    console.log("mount");
    store.dispatch("GetParkDetails").then(() => {
      this.parkDetails = store.state.parkDetails;
    });
  }
}
</script>

<style lang="scss" scoped>
.nav-pills .nav-link.active {
  background-color: #145e8c;
}

.fixed-left {
  position: fixed;
  top: 4.5rem;
  left: 0;
  z-index: 1030;
  width: fit-content;
}
</style>
