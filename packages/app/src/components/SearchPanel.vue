<template>
  <div class="bg-white">
    <form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    >
      <q-list>
        <q-item>
          <q-input
            class="full-width"
            v-model="searchTerm"
            :disable="!isTextSearchAvailable"
            dense
            outlined
            clearable
            autofocus
            size="500"
            placeholder="Rechercher..."
            @keypress.enter="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" @click="search" />
            </template>
          </q-input>
        </q-item>
        <q-item>
          <q-select
            class="full-width"
            clearable
            filled
            v-model="selectedLibrary"
            :options="availableLibraries"
            label="Bibliothèque"
          />
        </q-item>
        <q-item>
          <q-select
            class="full-width"
            :disable="!isShelfSearchAvailable"
            clearable
            filled
            v-model="selectedShelf"
            :options="availableShelves"
            label="Rayon"
          />
        </q-item>
        <q-item>
          <q-select
            class="full-width"
            :disable="!isShelfSearchAvailable"
            clearable
            filled
            v-model="selectedSortBy"
            :options="availableSortBy"
            label="Trier par"
          />
        </q-item>
      </q-list>
    </form>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" />
    <q-btn fab icon="search" color="accent" @click="search" />
  </div>
</template>

<script>
import { mapState } from 'pinia'

import { useApiStore } from '../stores/api-store'

const libraries = {
  ALL: 'Toutes les bibliothèques',
  MGM: 'Médiathèque Grand M',
  CYP: 'Médiathèque Saint-Cyprien',
  'CAB-MCT': 'Médiathèque José Cabanis (+Magasin Central)',
  'PER-FCJ': "Biblio. d'étude et du patrimoine de Périgord (+FCJ)",
  EMP: 'Médiathèque Empalot',
  DAU: 'Médiathèque Danièle Damin (Croix-Daurade)',
  ANC: 'Ancely',
  BON: 'Bonnefoy',
  PAV: 'Côte Pavée',
  DUR: 'Duranti',
  FAB: 'Fabre',
  IZA: 'Izards',
  MIN: 'Minimes',
  PVP: 'Pavillon de Périgord',
  PIN: 'Pinel',
  DEM: 'Pont des demoiselles',
  PRA: 'Pradettes',
  RAN: 'Rangueil',
  ROS: 'Roseraie',
  EXU: 'Saint-Exupéry (Bagatelle)',
  SER: 'Serveyrolles',
  COL: 'Bibliothèque Nomade',
  FCJ: 'Fonds de Conservation Jeunesse'
}

const sortBy = {
  AU: "Par nom d'auteur",
  '-PBYR': 'Par nouveauté',
  PBYR: 'Du plus ancien',
  SU: 'Par sujet',
  relevance: 'Plus pertinent',
  TI: 'Par titre'
}

const shelves = {
  LPABD: 'Adultes : Bandes-dessinées',
  LPADOC: 'Adultes : Documentaires',
  LPAETR: 'Adultes : Livres en langues étrangères',
  LPAFR: 'Adultes : Fonds régional',
  LPALV: 'Adultes : Large vision',
  LPAMUS: 'Adultes : Musique',
  LPAROM: 'Adultes : Fictions ',
  LPARP: 'Adultes : Romans Policiers',
  LPASF: 'Adultes : Science-fiction',
  LPATE: 'Adultes : Textes enregistrés',
  LPACIN: 'Adultes : Cinéma : DVD',
  LPEA: 'Enfants : Albums',
  LPEBD: 'Enfants : Bandes-dessinées',
  LPEC: 'Enfants : Contes',
  LPECDR: 'Enfants : CD-Rom',
  LPEETR: 'Enfants : livres en langue étrangère',
  LPEDOC: 'Enfants : documentaires',
  LPELJ: 'Enfants : Livres-Jeux',
  LPEMUS: 'Enfants : Musique',
  LPEPS: 'Enfants : Périodiques',
  LPEROM: 'Enfants : Fictions',
  LPETE: 'Enfants : textes enregistrés',
  LPECIN: 'Enfants : Cinéma : DVD',
  LPTPA: 'Tous publics : Albums',
  LPTPBD: 'Tous publics : Bandes-déssinées',
  LPTPDOC: 'Tous publics : Documentaires',
  LPTPFIC: 'Tous publics : Fictions',
  LPTPROM: 'Tous publics : Romans'
}

export default {
  name: 'SearchPanel',
  data () {
    return {
      searchTerm: '',
      foundDocuments: [],
      runningSearch: false,
      error: '',
      selectedLibrary: null,
      selectedShelf: null,
      availableLibraries: [
        // location_group_filter
        ...Object.keys(libraries).map((code) => ({
          label: libraries[code],
          value: code
        }))
      ],
      availableShelves: [
        // location_filter
        ...Object.keys(shelves).map((code) => ({
          label: shelves[code],
          value: code
        }))
      ],
      selectedSortBy: null,
      availableSortBy: [
        // sort_by_filter
        ...Object.keys(sortBy).map((code) => ({
          label: sortBy[code],
          value: code
        }))
      ]
    }
  },
  computed: {
    ...mapState(useApiStore, ['activeSearch']),
    isTextSearchAvailable () {
      return !this.selectedLibrary
    },
    isShelfSearchAvailable () {
      return !!this.selectedLibrary
    }
  },
  mounted () {
    this.selectedSortBy = {
      label: sortBy['-PBYR'],
      value: '-PBYR'
    }
    this.selectedShelf = {
      label: shelves.LPABD,
      value: 'LPABD'
    }
  },
  methods: {
    async search () {
      const query = {
        text: this.searchTerm,
        groupLocation: this.selectedLibrary?.value,
        location: this.selectedLibrary?.value && this.selectedShelf?.value
      }
      this.$emit('search', query)
    }
  }
}
</script>
