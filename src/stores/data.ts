import { defineStore } from "pinia";
import { ref } from "vue";

export const useStationData = defineStore("stationData", () => {
    let stationData = ref({
        index: 0,
        name: "",
        address: "",
        temperatureIn: "",
        temperatureStation: "",
        temperatureAir: "",
    });
    let stationList = ref([]);
    let stationIconList = ref([]);

    return { stationData, stationList, stationIconList };
});
